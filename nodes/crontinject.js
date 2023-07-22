/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/

module.exports = function(RED) {
    "use strict";
    const cronjo = require("cronjo")
    let repeaters = {}

    function InjectNode(n) {
        RED.nodes.createNode(this, n);

        /* Handle legacy */
        if(!Array.isArray(n.props)) {
            n.props = [];
            n.props.push({
                p: 'payload',
                v: n.payload,
                vt: n.payloadType
            });
            n.props.push({
                p: 'topic',
                v: n.topic,
                vt: 'str'
            });
        } else {
            for(let i = 0, l = n.props.length; i < l; i++) {
                if(n.props[i].p === 'payload' && !n.props[i].hasOwnProperty('v')) {
                    n.props[i].v = n.payload;
                    n.props[i].vt = n.payloadType;
                } else if(n.props[i].p === 'topic' && n.props[i].vt === 'str' && !n.props[i].hasOwnProperty('v')) {
                    n.props[i].v = n.topic;
                }
            }
        }

        this.props = n.props;
        this.repeat = n.repeat;
        this.crontab = n.crontab;
        this.once = n.once;
        this.inputs = n.inputs
        this.hasButton = n.hasButton
        this.crontiMethod = n.crontiMethod;
        this.crontiArgs = n.crontiArgs;
        this.onceDelay = (n.onceDelay || 0.1) * 1000;
        this.interval_id = null;
        this.cronjob = null;
        let node = this;

        node.props.forEach(function(prop) {
            if(prop.vt === "jsonata") {
                try {
                    let val = prop.v ? prop.v : "";
                    prop.exp = RED.util.prepareJSONataExpression(val, node);
                }
                catch(err) {
                    node.error("Invalid JSONata expression: " + err.message, {});
                    prop.exp = null;
                }
            }
        });

        if(node.repeat > 2147483) {
            node.error("Interval too large", {});
            delete node.repeat;
        }

        repeaters[node.id] = repeaters[node.id] || []

        node.repeaterSetup = function(context = this, msg = {}) {
            const repeaterId = new Date().getTime()

            Object.defineProperties(msg, {
                __send__: {
                    value: true
                }
            });

            if(context.repeat > 2147483) {
                node.error("Interval too large", {});
                return
            }

            node.status({ fill: "green", shape: "dot", text: (context.inputs ? "msg" : "none") + " (SCNT:" + repeaters[node.id].length + ")" });
            if(context.repeat && !isNaN(context.repeat) && context.repeat > 0) {
                context.repeat = context.repeat * 1000;
                node.debug("repeat = " + context.repeat);
                context.interval_id = setInterval(function() {
                    node.emit("input", msg);
                }, context.repeat);
                repeaters[node.id].push({ _id: repeaterId, interval_id: context.interval_id })
                node.status({ fill: "green", shape: "dot", text: context.repeat + " (SCNT:" + repeaters[node.id].length + ")" });
            } else if(context.crontab) {
                node.debug("crontab = " + context.crontab);
                context.cronjob = cronjo(() => { node.emit("input", msg) }, context.crontab)
                repeaters[node.id].push({ _id: repeaterId, cronjob: context.cronjob })
                node.status({ fill: "green", shape: "dot", text: context.crontab + " (" + context.cronjob.fireDate().toLocaleString() + ")" + " (SCNT:" + repeaters[node.id].length + ")" });
            } else if(context.crontiMethod) {
                try {
                    let crontiArgs = context.crontiArgs
                    try { crontiArgs = JSON.parse(crontiArgs) } catch(error) { /* Silent is gold */ }
                    context.cronjob = cronjo({
                        method: context.crontiMethod,
                        job() {
                            if(node.crontiMethod === "onIntervalTime") {
                                let startDate = new Date(crontiArgs[0])
                                let endDate = new Date(crontiArgs[1])
                                if(new Date() >= endDate) {
                                    node.cronjob.cancel();
                                    delete node.cronjob;
                                    return
                                } else if(new Date <= startDate) {
                                    return
                                }
                            }
                            node.emit("input", msg)
                        }
                    }, ...crontiArgs)
                    repeaters[node.id].push({ _id: repeaterId, cronjob: context.cronjob })
                    let crontime = context.cronjob.expression
                    node.debug("crontab = " + crontime);
                    let dateText = ""
                    if(context.crontiMethod === "onIntervalTime") {
                        dateText = "ST:" + new Date(crontiArgs[0]).toLocaleString() + " | ET:" + new Date(crontiArgs[1]).toLocaleString()
                    }
                    node.status({ fill: "green", shape: "dot", text: crontime + " (" + context.cronjob.fireDate().toLocaleString() + ")" + (dateText ? (" | " + dateText) : "") + " (SCNT:" + repeaters[node.id].length + ")" });
                } catch(error) {
                    node.error(error, {})
                }
            }
            return repeaters[node.id]
        };

        if(this.once) {
            this.onceTimeout = setTimeout(function() {
                node.emit("input", {});
            }, this.onceDelay);
        }
        node.repeaterSetup();

        this.on("input", function(msg, send, done) {
            let errors = [];
            let props = this.props;
            let payload = msg.payload
            if(msg.__user_inject_props__ && Array.isArray(msg.__user_inject_props__)) {
                props = msg.__user_inject_props__;
            }
            delete msg.__user_inject_props__;
            props.forEach(p => {
                let property = p.p;
                let value = p.v ? p.v : '';
                let valueType = p.vt ? p.vt : 'str';

                if(!property) return;

                if(valueType === "jsonata") {
                    if(p.exp) {
                        try {
                            let val = RED.util.evaluateJSONataExpression(p.exp, msg);
                            RED.util.setMessageProperty(msg, property, val, true);
                        }
                        catch(err) {
                            errors.push(err.message);
                        }
                    }
                    return;
                }
                try {
                    RED.util.setMessageProperty(msg, property, RED.util.evaluateNodeProperty(value, valueType, this, msg), true);
                } catch(err) {
                    errors.push(err.toString());
                }
            });

            if(errors.length) {
                done(errors.join('; '));
            } else {
                if(payload && !msg.__send__) {
                    if(payload._id) {
                        // Cancel Schedule
                        let index = repeaters[this.id].findIndex(r => r._id === payload._id)
                        let repeater = repeaters[this.id][index]

                        if(!repeater) node.status({ fill: "red", shape: "dot", text: repeater + " (SCNT:" + repeaters[this.id].length + ")" });
                        else {
                            if(repeater.interval_id != null) {
                                clearInterval(repeater.interval_id);
                                delete this.interval_id;
                            } else if(repeater.cronjob != null) {
                                repeater.cronjob.cancel();
                                delete this.cronjob;
                            }
                            repeaters[this.id].splice(index, 1)
                            node.status({ fill: "yellow", shape: "dot", text: repeater._id + " (SCNT:" + repeaters[this.id].length + ")" });
                            msg.schedule = { cancel: true, list: repeaters[this.id], self: repeater }
                        }
                    } else {
                        // Create Schedule
                        if(msg.schedule) msg._schedule = RED.util.cloneMessage(msg.schedule)
                        let schedules = this.repeaterSetup(payload, msg)
                        msg.schedule = { cancel: false, list: schedules, self: schedules.slice(-1)[0] }
                    }
                    send(msg);
                } else {
                    delete msg.schedule
                    send(msg);
                }
                done();
            }
        });
    }

    RED.nodes.registerType("crontinject", InjectNode);

    InjectNode.prototype.close = function() {
        repeaters[this.id].forEach(repeater => {
            if(repeater.onceTimeout) {
                clearTimeout(repeater.onceTimeout);
                delete this.onceTimeout;
            }
            if(repeater.interval_id != null) {
                clearInterval(repeater.interval_id);
                delete this.interval_id;
            } else if(repeater.cronjob != null) {
                repeater.cronjob.cancel();
                delete this.cronjob;
            }
        })
        delete repeaters[this.id]
    };

    RED.httpAdmin.post("/inject/:id", RED.auth.needsPermission("inject.write"), function(req, res) {
        let node = RED.nodes.getNode(req.params.id);
        if(node != null) {
            try {
                if(req.body && req.body.__user_inject_props__) {
                    node.receive(req.body);
                } else {
                    node.receive();
                }
                res.sendStatus(200);
            } catch(err) {
                res.sendStatus(500);
                node.error("Inject failed: " + err.toString(), {});
            }
        } else {
            res.sendStatus(404);
        }
    });

    RED.httpAdmin.post("/cronjo/next-dates", RED.auth.needsPermission("inject.write"), function(req, res) {
        const { method, args } = req.body
        if(!method) {
            res.status(400).json({ error: "Method is required." })
            return
        }
        try {
            try {
                let cron = cronjo({ method, job() { return } }, ...args)
                let nextDates = cron.nextDates()
                cron.cancel()
                res.status(200).json({ nextDates })
            } catch(error) {
                res.status(500).json({ error: "[" + error.stack + "]: " + error.message })
            }
        } catch(error) {
            res.status(500).json({ error: "[" + error.stack + "]: " + error.message })
        }
    });
}
