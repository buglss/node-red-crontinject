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
            for(var i = 0, l = n.props.length; i < l; i++) {
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
        this.crontiMethod = n.crontiMethod;
        this.crontiArgs = n.crontiArgs;
        this.onceDelay = (n.onceDelay || 0.1) * 1000;
        this.interval_id = null;
        this.cronjob = null;
        var node = this;

        node.props.forEach(function(prop) {
            if(prop.vt === "jsonata") {
                try {
                    var val = prop.v ? prop.v : "";
                    prop.exp = RED.util.prepareJSONataExpression(val, node);
                }
                catch(err) {
                    node.error("Invalid JSONata expression: " + err.message);
                    prop.exp = null;
                }
            }
        });

        if(node.repeat > 2147483) {
            node.error("Interval too large");
            delete node.repeat;
        }

        node.repeaterSetup = function() {
            this.status({ fill: "green", shape: "dot", text: "None" });
            if(this.repeat && !isNaN(this.repeat) && this.repeat > 0) {
                this.repeat = this.repeat * 1000;
                this.debug("repeat = " + this.repeat);
                this.interval_id = setInterval(function() {
                    node.emit("input", {});
                }, this.repeat);
                this.status({ fill: "green", shape: "dot", text: this.repeat });
            } else if(this.crontab) {
                this.debug("crontab = " + this.crontab);
                this.cronjob = cronjo(() => { node.emit("input", {}) }, this.crontab)
                this.status({ fill: "green", shape: "dot", text: this.crontab + " (" + this.cronjob.fireDate().toLocaleString() + ")" });
            } else if(this.crontiMethod) {
                try {
                    this.cronjob = cronjo({
                        method: this.crontiMethod,
                        job() {
                            if(node.crontiMethod === "onIntervalTime") {
                                let startDate = new Date(JSON.parse(this.crontiArgs)[0])
                                let endDate = new Date(JSON.parse(this.crontiArgs)[1])
                                if(new Date() >= endDate) {
                                    node.cronjob.cancel();
                                    delete node.cronjob;
                                    return
                                } else if(new Date <= startDate) {
                                    return
                                }
                            }
                            node.emit("input", {})
                        }
                    }, ...JSON.parse(this.crontiArgs))
                    let crontime = this.cronjob.expression
                    this.debug("crontab = " + crontime);
                    let dateText = ""
                    if(this.crontiMethod === "onIntervalTime") {
                        dateText = "ST:" + new Date(JSON.parse(this.crontiArgs)[0]).toLocaleString() + " | ET:" + new Date(JSON.parse(this.crontiArgs)[1]).toLocaleString()
                    }
                    this.status({ fill: "green", shape: "dot", text: crontime + " (" + this.cronjob.fireDate().toLocaleString() + ")" + (dateText ? (" | " + dateText) : "") });
                } catch(error) {
                    node.error(error, {})
                }
            }
        };

        if(this.once) {
            this.onceTimeout = setTimeout(function() {
                node.emit("input", {});
                node.repeaterSetup();
            }, this.onceDelay);
        } else {
            node.repeaterSetup();
        }

        this.on("input", function(msg, send, done) {
            var errors = [];
            var props = this.props;
            if(msg.__user_inject_props__ && Array.isArray(msg.__user_inject_props__)) {
                props = msg.__user_inject_props__;
            }
            delete msg.__user_inject_props__;
            props.forEach(p => {
                var property = p.p;
                var value = p.v ? p.v : '';
                var valueType = p.vt ? p.vt : 'str';

                if(!property) return;

                if(valueType === "jsonata") {
                    if(p.exp) {
                        try {
                            var val = RED.util.evaluateJSONataExpression(p.exp, msg);
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
                send(msg);
                done();
            }
        });
    }

    RED.nodes.registerType("crontinject", InjectNode);

    InjectNode.prototype.close = function() {
        if(this.onceTimeout) {
            clearTimeout(this.onceTimeout);
        }
        if(this.interval_id != null) {
            clearInterval(this.interval_id);
        } else if(this.cronjob != null) {
            this.cronjob.cancel();
            delete this.cronjob;
        }
    };

    RED.httpAdmin.post("/inject/:id", RED.auth.needsPermission("inject.write"), function(req, res) {
        var node = RED.nodes.getNode(req.params.id);
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
                node.error("Inject failed: " + err.toString());
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
