[![en-EN](https://img.shields.io/badge/EN-%C4%B0ngilizce-blue)](README.md)
[![tr-TR](https://img.shields.io/badge/*TR-T%C3%BCrk%C3%A7e-red?style=plastic)](README.tr-TR.md)

![nodejs](https://img.shields.io/badge/nodejs-43853d?logo=nodedotjs&labelColor=fff)
![npm](https://img.shields.io/badge/npm-bc2c32?logo=npm&labelColor=fff)
![javascript](https://img.shields.io/badge/javascript-e9d961?logo=javascript&labelColor=000)
![node-red](https://img.shields.io/badge/node--red-8F0000?logo=Node-RED&labelColor=8F0000)
[![License](https://img.shields.io/badge/License-Apache--2.0-red)](LICENSE)

[![NPM](https://nodei.co/npm/@buglss/node-red-crontinject.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/@buglss/node-red-crontinject/)


# Giriş

Core inject node'unun [cronjo](https://www.npmjs.com/package/cronjo) paketi ile genişletilmiş klonudur. [cronjo](https://www.npmjs.com/package/cronjo) paketi [cronti](https://www.npmjs.com/package/cronti) paketini kullanır.

Türkçe dil desteği bulunmaktadır.

Detaylı bilgi için <a href="https://www.npmjs.com/package/cronti" target="_blank">cronti</a> veya <a href="https://www.npmjs.com/package You can refer to the package doc /cronjo" target="_blank">cronjo</a>.

![crontinject](https://user-images.githubusercontent.com/16067517/197639115-fdc1781e-68c0-4ea9-b21d-eb0dea1ec49b.gif)

# Örnekler

Flow JSON:
```json
[
    {
        "id": "7cabc8e221eacc0f",
        "type": "tab",
        "label": "Crontinject Examples",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "624858d5a1e353ea",
        "type": "crontinject",
        "z": "7cabc8e221eacc0f",
        "name": "",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": true,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "crontiMethod": "",
        "crontiArgs": "[]",
        "inputs": 0,
        "hasButton": true,
        "x": 570,
        "y": 200,
        "wires": [
            [
                "c1366f7b3568372a"
            ]
        ]
    },
    {
        "id": "c1366f7b3568372a",
        "type": "debug",
        "z": "7cabc8e221eacc0f",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 730,
        "y": 200,
        "wires": []
    },
    {
        "id": "9ff3f9c2eb5b91a4",
        "type": "comment",
        "z": "7cabc8e221eacc0f",
        "name": "02 [none]: Inject once after flow started",
        "info": "### [EN]\nFlow can also be set to run once every time it starts, for example when \"Deploy\" is clicked or when the server starts.\n\n### [TR]\nFlow her başladığında, örneğin \"Deploy\"a basıldığında veya sunucu start olduğunda bir kez çalışacak şekilde de ayarlanabilir.",
        "x": 630,
        "y": 160,
        "wires": []
    },
    {
        "id": "8e6db215fc2396e9",
        "type": "crontinject",
        "z": "7cabc8e221eacc0f",
        "name": "",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "15",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "crontiMethod": "",
        "crontiArgs": "[]",
        "inputs": 0,
        "hasButton": true,
        "x": 570,
        "y": 320,
        "wires": [
            [
                "49daf001342071c5"
            ]
        ]
    },
    {
        "id": "49daf001342071c5",
        "type": "debug",
        "z": "7cabc8e221eacc0f",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 730,
        "y": 320,
        "wires": []
    },
    {
        "id": "b819bad39c7ef2a5",
        "type": "comment",
        "z": "7cabc8e221eacc0f",
        "name": "03 [interval]: Every at 15 seconds",
        "info": "### [EN]\nIt is an example of administering an injection every 15 seconds.\n\n### [TR]\nHer 15 saniyede bir enjeksiyon uygulanma örneğidir.",
        "x": 610,
        "y": 280,
        "wires": []
    },
    {
        "id": "f1ea6d8162a35f0a",
        "type": "crontinject",
        "z": "7cabc8e221eacc0f",
        "name": "",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "*/1 0 * * *",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "crontiMethod": "",
        "crontiArgs": "[]",
        "inputs": 0,
        "hasButton": true,
        "x": 570,
        "y": 440,
        "wires": [
            [
                "0bb088aa87bfb34d"
            ]
        ]
    },
    {
        "id": "0bb088aa87bfb34d",
        "type": "debug",
        "z": "7cabc8e221eacc0f",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 730,
        "y": 440,
        "wires": []
    },
    {
        "id": "333b12fd745cdd8b",
        "type": "comment",
        "z": "7cabc8e221eacc0f",
        "name": "04 [interval between times]: Every 1 minutes in between 00:00 and 01:00 hours of everyday",
        "info": "### [EN]\nIt injects every 1 minute between 00:00 and 01:00 every day.\n\n### [TR]\nHergün saat 00:00 ile 01:00 arasında 1 dakikada bir enjecte eder.",
        "x": 790,
        "y": 400,
        "wires": []
    },
    {
        "id": "ed094745168c8f61",
        "type": "crontinject",
        "z": "7cabc8e221eacc0f",
        "name": "",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "00 12 * * *",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "crontiMethod": "",
        "crontiArgs": "[]",
        "inputs": 0,
        "hasButton": true,
        "x": 570,
        "y": 560,
        "wires": [
            [
                "8823437488a4d21a"
            ]
        ]
    },
    {
        "id": "8823437488a4d21a",
        "type": "debug",
        "z": "7cabc8e221eacc0f",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 730,
        "y": 560,
        "wires": []
    },
    {
        "id": "a9019c2cd03f02cc",
        "type": "comment",
        "z": "7cabc8e221eacc0f",
        "name": "05 [at a specific time]: Everyday at 12:00 clock",
        "info": "### [EN]\nIt injects at 12:00 every day.\n\n### [TR]\nHer gün saat 12:00'da enjekte eder.",
        "x": 650,
        "y": 520,
        "wires": []
    },
    {
        "id": "b6ff20e1e8403f38",
        "type": "crontinject",
        "z": "7cabc8e221eacc0f",
        "name": "",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "crontiMethod": "onWeek",
        "crontiArgs": "[\"1FD\",\"2022-10-21T00:00\"]",
        "inputs": 0,
        "hasButton": true,
        "x": 570,
        "y": 680,
        "wires": [
            [
                "b08d49d9acc60d37"
            ]
        ]
    },
    {
        "id": "b08d49d9acc60d37",
        "type": "debug",
        "z": "7cabc8e221eacc0f",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 730,
        "y": 680,
        "wires": []
    },
    {
        "id": "c56052b8d550976a",
        "type": "comment",
        "z": "7cabc8e221eacc0f",
        "name": "06 [week of date]: Every at 7 days in date",
        "info": "### [EN]\nInjects for the 7 days that the selected date is in. Attention, if the week falls on a day earlier than the day you selected it, it rolls over to the next year.\n\nNote: You should choose the first day of the week according to the region you live in. By default it is Sunday.\n\n### [TR]\nSeçilen tarihin içinde bulunduğu 7 gün için enjekte eder. Dikkat, eğer hafta seçiminde bulunduğun günden daha eski bir güne gelirse bir sonraki yıla devreder.\n\nNot: Yaşadığın bölgeye göre haftanın ilk gününü seçmelisin. Varsayılan olarak pazar günüdür.",
        "x": 640,
        "y": 640,
        "wires": []
    },
    {
        "id": "fb7f0ef55e1830c7",
        "type": "crontinject",
        "z": "7cabc8e221eacc0f",
        "name": "",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "crontiMethod": "onIntervalTime",
        "crontiArgs": "[\"2022-10-20T00:00\",\"2022-10-23T00:00\",\"1\",\"\"]",
        "inputs": 0,
        "hasButton": true,
        "x": 570,
        "y": 800,
        "wires": [
            [
                "c1e62b6c8770c44b"
            ]
        ]
    },
    {
        "id": "c1e62b6c8770c44b",
        "type": "debug",
        "z": "7cabc8e221eacc0f",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 730,
        "y": 800,
        "wires": []
    },
    {
        "id": "79bb9ba3352ead8b",
        "type": "comment",
        "z": "7cabc8e221eacc0f",
        "name": "07 [intervals between dates]: Every at day between two dates",
        "info": "### [EN]\nInject to be triggered daily between 2 selected dates.\n\n### [TR]\nSeçilen 2 tarih arasında her gün tetiklenecek şekilde enjeksiyon yap.",
        "x": 700,
        "y": 760,
        "wires": []
    },
    {
        "id": "ab4ae23b658f9d58",
        "type": "crontinject",
        "z": "7cabc8e221eacc0f",
        "name": "",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "crontiMethod": "onTime",
        "crontiArgs": "[\"1FD\",\"4M\",\"nullW\",\"nullWD\",\"04:00\"]",
        "inputs": 0,
        "hasButton": true,
        "x": 570,
        "y": 920,
        "wires": [
            [
                "a33b76a23982d5c9"
            ]
        ]
    },
    {
        "id": "a33b76a23982d5c9",
        "type": "debug",
        "z": "7cabc8e221eacc0f",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 730,
        "y": 920,
        "wires": []
    },
    {
        "id": "4b09f8a5463d035e",
        "type": "comment",
        "z": "7cabc8e221eacc0f",
        "name": "08 [advanced]: Every day at 04:00 clock of may",
        "info": "### [EN]\nInject at 4:00 am every day of May.\n\n### [TR]\nMayıs ayının her günü saat 04:00'da enjeksiyon yap.",
        "x": 660,
        "y": 880,
        "wires": []
    },
    {
        "id": "9436b9970ed3284e",
        "type": "crontinject",
        "z": "7cabc8e221eacc0f",
        "name": "",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "crontiMethod": "onCrontime",
        "crontiArgs": "[\"5 4 * * *\"]",
        "inputs": 0,
        "hasButton": true,
        "x": 570,
        "y": 1040,
        "wires": [
            [
                "5ce40ac0c41b9479"
            ]
        ]
    },
    {
        "id": "5ce40ac0c41b9479",
        "type": "debug",
        "z": "7cabc8e221eacc0f",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 730,
        "y": 1040,
        "wires": []
    },
    {
        "id": "c10fb476843644c2",
        "type": "comment",
        "z": "7cabc8e221eacc0f",
        "name": "09 [crontime]: Every day at 04:05 clock",
        "info": "### [EN]\nInject daily at 4:05 am.\n\n### [TR]\nHer gün saat 04:05'te enjeksiyon yap.",
        "x": 630,
        "y": 1000,
        "wires": []
    },
    {
        "id": "73b1a86b84a7f8ac",
        "type": "crontinject",
        "z": "7cabc8e221eacc0f",
        "name": "",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "crontiMethod": "onDate",
        "crontiArgs": "[\"2022-10-22T01:10\",false]",
        "inputs": 0,
        "hasButton": true,
        "x": 570,
        "y": 1160,
        "wires": [
            [
                "b1338699fe848530"
            ]
        ]
    },
    {
        "id": "b1338699fe848530",
        "type": "debug",
        "z": "7cabc8e221eacc0f",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 730,
        "y": 1160,
        "wires": []
    },
    {
        "id": "f7686251d894ba37",
        "type": "comment",
        "z": "7cabc8e221eacc0f",
        "name": "10 [date]: Every at 01:10 clock 22nd of each month every year",
        "info": "### [EN]\nInject at 1:10 am on the 22nd of each month every year.\n\n### [TR]\nHer yıl her ayın 22'sinde saat 01:10'da enjeksiyon yap.",
        "x": 700,
        "y": 1120,
        "wires": []
    },
    {
        "id": "67d0a396320aad35",
        "type": "crontinject",
        "z": "7cabc8e221eacc0f",
        "name": "",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "crontiMethod": "onDate",
        "crontiArgs": "[\"2022-10-22T01:10\",true]",
        "inputs": 0,
        "hasButton": true,
        "x": 570,
        "y": 1280,
        "wires": [
            [
                "5b0e2a90411ca074"
            ]
        ]
    },
    {
        "id": "5b0e2a90411ca074",
        "type": "debug",
        "z": "7cabc8e221eacc0f",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 730,
        "y": 1280,
        "wires": []
    },
    {
        "id": "cf2756146694e907",
        "type": "comment",
        "z": "7cabc8e221eacc0f",
        "name": "11 [date]: Every year at 01:10 clock on october 22",
        "info": "### [EN]\nInject at 1:10 a.m. on October 22 each year.\n\n### [TR]\nHer yıl 22 Ekim'de saat 01:10'da enjeksiyon yap.",
        "x": 660,
        "y": 1240,
        "wires": []
    },
    {
        "id": "4744edf87ea6b605",
        "type": "comment",
        "z": "7cabc8e221eacc0f",
        "name": "12 [msg]: Every at 10 seconds",
        "info": "### [EN]\nInject every 10 seconds.\n\n### [TR]\nHer 10 saniyede bir enjekte et.",
        "x": 600,
        "y": 1360,
        "wires": []
    },
    {
        "id": "1106aa0f9c0d6301",
        "type": "crontinject",
        "z": "7cabc8e221eacc0f",
        "name": "",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "crontiMethod": "",
        "crontiArgs": "[]",
        "inputs": 1,
        "hasButton": false,
        "x": 760,
        "y": 1440,
        "wires": [
            [
                "0b7e3fb5af8a40a8"
            ]
        ]
    },
    {
        "id": "041d010fe0412e49",
        "type": "crontinject",
        "z": "7cabc8e221eacc0f",
        "name": "Create Schedule",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "{\"repeat\":10}",
        "payloadType": "json",
        "crontiMethod": "",
        "crontiArgs": "[]",
        "inputs": 0,
        "hasButton": true,
        "x": 580,
        "y": 1400,
        "wires": [
            [
                "1106aa0f9c0d6301"
            ]
        ]
    },
    {
        "id": "8a076f1a4d692cdd",
        "type": "debug",
        "z": "7cabc8e221eacc0f",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "statusVal": "",
        "statusType": "auto",
        "x": 1090,
        "y": 1440,
        "wires": []
    },
    {
        "id": "a5f27d3ad5d2be90",
        "type": "comment",
        "z": "7cabc8e221eacc0f",
        "name": "13 [msg]: Every at 01:21 clock",
        "info": "### [EN]\nInject at 01:21 every day.\n\n### [TR]\nHergün saat 01:21'da enjeksiyon yap.",
        "x": 600,
        "y": 1560,
        "wires": []
    },
    {
        "id": "baad86fb4787450e",
        "type": "crontinject",
        "z": "7cabc8e221eacc0f",
        "name": "",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "crontiMethod": "",
        "crontiArgs": "[]",
        "inputs": 1,
        "hasButton": false,
        "x": 760,
        "y": 1640,
        "wires": [
            [
                "e2ce6ddc3186fcd9"
            ]
        ]
    },
    {
        "id": "316c83abc534579c",
        "type": "crontinject",
        "z": "7cabc8e221eacc0f",
        "name": "Create Schedule",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "{\"crontab\":\"21 1 * * *\"}",
        "payloadType": "json",
        "crontiMethod": "",
        "crontiArgs": "[]",
        "inputs": 0,
        "hasButton": true,
        "x": 580,
        "y": 1600,
        "wires": [
            [
                "baad86fb4787450e"
            ]
        ]
    },
    {
        "id": "b9f77a63f68bb33c",
        "type": "debug",
        "z": "7cabc8e221eacc0f",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "statusVal": "",
        "statusType": "auto",
        "x": 1090,
        "y": 1640,
        "wires": []
    },
    {
        "id": "cff9817055f418a0",
        "type": "comment",
        "z": "7cabc8e221eacc0f",
        "name": "14 [msg]: Every at 12:30 clock between april 15th to 25th and may 15th to 25th",
        "info": "### [EN]\nInject at 12:30 between the 15th and 25th of April and the 15th to the 25th of May, to be repeated annually.\n\n### [TR]\nHer yıl tekrarlanacak şekilde, Nisan ayının 15'i ile 25'i arasında ve Mayıs ayının 15'i ile 25'i arasında saat 12:30'da enjeksiyon yap.",
        "x": 750,
        "y": 1760,
        "wires": []
    },
    {
        "id": "3a3aa22d22020668",
        "type": "crontinject",
        "z": "7cabc8e221eacc0f",
        "name": "",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "crontiMethod": "",
        "crontiArgs": "[]",
        "inputs": 1,
        "hasButton": false,
        "x": 760,
        "y": 1840,
        "wires": [
            [
                "dbc46cb506c0ca6f"
            ]
        ]
    },
    {
        "id": "815bcd4aa95d2d09",
        "type": "crontinject",
        "z": "7cabc8e221eacc0f",
        "name": "Create Schedule",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "{\"crontiMethod\":\"onIntervalTime\",\"crontiArgs\":[\"2022-04-15T09:30:00.000Z\",\"2022-05-25T09:30:00.000Z\"]}",
        "payloadType": "json",
        "crontiMethod": "",
        "crontiArgs": "[]",
        "inputs": 0,
        "hasButton": true,
        "x": 580,
        "y": 1800,
        "wires": [
            [
                "3a3aa22d22020668"
            ]
        ]
    },
    {
        "id": "40f10f044d22d902",
        "type": "debug",
        "z": "7cabc8e221eacc0f",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "statusVal": "",
        "statusType": "auto",
        "x": 1090,
        "y": 1840,
        "wires": []
    },
    {
        "id": "8343da4ac3673519",
        "type": "crontinject",
        "z": "7cabc8e221eacc0f",
        "name": "",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "crontiMethod": "",
        "crontiArgs": "[]",
        "inputs": 0,
        "hasButton": true,
        "x": 560,
        "y": 80,
        "wires": [
            [
                "16f16e861f482c11"
            ]
        ]
    },
    {
        "id": "16f16e861f482c11",
        "type": "debug",
        "z": "7cabc8e221eacc0f",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 710,
        "y": 80,
        "wires": []
    },
    {
        "id": "9b479ac86f3b99e5",
        "type": "comment",
        "z": "7cabc8e221eacc0f",
        "name": "01 [none]: Only manuel trigger",
        "info": "### [EN]\nIt injects with manual triggering.\n\n### [TR]\nManuel tetikleme ile enjeksiyon yapar.",
        "x": 600,
        "y": 40,
        "wires": []
    },
    {
        "id": "0b7e3fb5af8a40a8",
        "type": "function",
        "z": "7cabc8e221eacc0f",
        "name": "save schedule id",
        "func": "if(msg.schedule && !msg.schedule.cancel) {\n    if(msg.schedule.cancel) {\n        // Canceled Schedule\n        /* Silent is gold */\n    } else {\n        // Created Schedule\n        flow.set(\"repeatSchedulePayload\", {\"_id\": msg.schedule.self._id})\n    } \n}\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 930,
        "y": 1440,
        "wires": [
            [
                "8a076f1a4d692cdd"
            ]
        ]
    },
    {
        "id": "199220f1a3bbb940",
        "type": "crontinject",
        "z": "7cabc8e221eacc0f",
        "name": "Cancel Schedule",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "repeatSchedulePayload",
        "payloadType": "flow",
        "crontiMethod": "",
        "crontiArgs": "[]",
        "inputs": 0,
        "hasButton": true,
        "x": 580,
        "y": 1480,
        "wires": [
            [
                "1106aa0f9c0d6301"
            ]
        ]
    },
    {
        "id": "7a8d2a57487eada9",
        "type": "crontinject",
        "z": "7cabc8e221eacc0f",
        "name": "Cancel Schedule",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "crontabSchedulePayload",
        "payloadType": "flow",
        "crontiMethod": "",
        "crontiArgs": "[]",
        "inputs": 0,
        "hasButton": true,
        "x": 580,
        "y": 1680,
        "wires": [
            [
                "baad86fb4787450e"
            ]
        ]
    },
    {
        "id": "e2ce6ddc3186fcd9",
        "type": "function",
        "z": "7cabc8e221eacc0f",
        "name": "save schedule id",
        "func": "if(msg.schedule && !msg.schedule.cancel) {\n    if(msg.schedule.cancel) {\n        // Canceled Schedule\n        /* Silent is gold */\n    } else {\n        // Created Schedule\n        flow.set(\"crontabSchedulePayload\", {\"_id\": msg.schedule.self._id})\n    } \n}\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 930,
        "y": 1640,
        "wires": [
            [
                "b9f77a63f68bb33c"
            ]
        ]
    },
    {
        "id": "a1c80e8f79393560",
        "type": "crontinject",
        "z": "7cabc8e221eacc0f",
        "name": "Cancel Schedule",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "crontiSchedulePayload",
        "payloadType": "flow",
        "crontiMethod": "",
        "crontiArgs": "[]",
        "inputs": 0,
        "hasButton": true,
        "x": 580,
        "y": 1880,
        "wires": [
            [
                "3a3aa22d22020668"
            ]
        ]
    },
    {
        "id": "dbc46cb506c0ca6f",
        "type": "function",
        "z": "7cabc8e221eacc0f",
        "name": "save schedule id",
        "func": "if(msg.schedule && !msg.schedule.cancel) {\n    if(msg.schedule.cancel) {\n        // Canceled Schedule\n        /* Silent is gold */\n    } else {\n        // Created Schedule\n        flow.set(\"crontiSchedulePayload\", {\"_id\": msg.schedule.self._id})\n    } \n}\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 930,
        "y": 1840,
        "wires": [
            [
                "40f10f044d22d902"
            ]
        ]
    },
    {
        "id": "090a8ed6537fc771",
        "type": "comment",
        "z": "7cabc8e221eacc0f",
        "name": "15 [msg]: Every at 15 seconds",
        "info": "",
        "x": 600,
        "y": 1980,
        "wires": []
    },
    {
        "id": "c9134d07f9d664bd",
        "type": "crontinject",
        "z": "7cabc8e221eacc0f",
        "name": "",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "crontiMethod": "",
        "crontiArgs": "[]",
        "inputs": 1,
        "hasButton": false,
        "x": 770,
        "y": 2060,
        "wires": [
            [
                "820a49842ef3d64f"
            ]
        ]
    },
    {
        "id": "3f969eddb2d921f1",
        "type": "crontinject",
        "z": "7cabc8e221eacc0f",
        "name": "Create Schedule",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "{\"crontiMethod\":\"interval\",\"count\":\"15\",\"units\":\"s\"}",
        "payloadType": "json",
        "crontiMethod": "",
        "crontiArgs": "[]",
        "inputs": 0,
        "hasButton": true,
        "x": 590,
        "y": 2020,
        "wires": [
            [
                "c9134d07f9d664bd"
            ]
        ]
    },
    {
        "id": "e47e87616dbdb148",
        "type": "crontinject",
        "z": "7cabc8e221eacc0f",
        "name": "Cancel Schedule",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "crontiSchedulePayload",
        "payloadType": "flow",
        "crontiMethod": "",
        "crontiArgs": "[]",
        "inputs": 0,
        "hasButton": true,
        "x": 590,
        "y": 2100,
        "wires": [
            [
                "c9134d07f9d664bd"
            ]
        ]
    },
    {
        "id": "820a49842ef3d64f",
        "type": "function",
        "z": "7cabc8e221eacc0f",
        "name": "save schedule id",
        "func": "if(msg.schedule && !msg.schedule.cancel) {\n    if(msg.schedule.cancel) {\n        // Canceled Schedule\n        /* Silent is gold */\n    } else {\n        // Created Schedule\n        flow.set(\"crontiSchedulePayload\", {\"_id\": msg.schedule.self._id})\n    } \n}\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 940,
        "y": 2060,
        "wires": [
            [
                "14cb1881501d310e"
            ]
        ]
    },
    {
        "id": "fcc952480045ea50",
        "type": "comment",
        "z": "7cabc8e221eacc0f",
        "name": "16 [msg]: Every 1 minutes in between 00:00 and 01:00 hours of everyday",
        "info": "",
        "x": 740,
        "y": 2220,
        "wires": []
    },
    {
        "id": "953059a53f75c78d",
        "type": "crontinject",
        "z": "7cabc8e221eacc0f",
        "name": "",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "crontiMethod": "",
        "crontiArgs": "[]",
        "inputs": 1,
        "hasButton": false,
        "x": 770,
        "y": 2300,
        "wires": [
            [
                "f9f1f88a70a693e2"
            ]
        ]
    },
    {
        "id": "0c7f532560d9d80b",
        "type": "crontinject",
        "z": "7cabc8e221eacc0f",
        "name": "Create Schedule",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "{\"crontiMethod\":\"interval-time\",\"count\":\"1\",\"startTime\":0,\"endTime\":1,\"days\":[0,1,2,3,4,5,6]}",
        "payloadType": "json",
        "crontiMethod": "",
        "crontiArgs": "[]",
        "inputs": 0,
        "hasButton": true,
        "x": 590,
        "y": 2260,
        "wires": [
            [
                "953059a53f75c78d"
            ]
        ]
    },
    {
        "id": "3069088a95d9ecab",
        "type": "debug",
        "z": "7cabc8e221eacc0f",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "statusVal": "",
        "statusType": "auto",
        "x": 1100,
        "y": 2300,
        "wires": []
    },
    {
        "id": "355d505925575861",
        "type": "crontinject",
        "z": "7cabc8e221eacc0f",
        "name": "Cancel Schedule",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "crontiSchedulePayload",
        "payloadType": "flow",
        "crontiMethod": "",
        "crontiArgs": "[]",
        "inputs": 0,
        "hasButton": true,
        "x": 590,
        "y": 2340,
        "wires": [
            [
                "953059a53f75c78d"
            ]
        ]
    },
    {
        "id": "f9f1f88a70a693e2",
        "type": "function",
        "z": "7cabc8e221eacc0f",
        "name": "save schedule id",
        "func": "if(msg.schedule && !msg.schedule.cancel) {\n    if(msg.schedule.cancel) {\n        // Canceled Schedule\n        /* Silent is gold */\n    } else {\n        // Created Schedule\n        flow.set(\"crontiSchedulePayload\", {\"_id\": msg.schedule.self._id})\n    } \n}\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 940,
        "y": 2300,
        "wires": [
            [
                "3069088a95d9ecab"
            ]
        ]
    },
    {
        "id": "14cb1881501d310e",
        "type": "debug",
        "z": "7cabc8e221eacc0f",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "statusVal": "",
        "statusType": "auto",
        "x": 1100,
        "y": 2060,
        "wires": []
    },
    {
        "id": "633d55222fef3b54",
        "type": "comment",
        "z": "7cabc8e221eacc0f",
        "name": "17 [msg]: Everyday at 12:00 clock",
        "info": "",
        "x": 620,
        "y": 2440,
        "wires": []
    },
    {
        "id": "5b358aa1d98580a6",
        "type": "crontinject",
        "z": "7cabc8e221eacc0f",
        "name": "",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "crontiMethod": "",
        "crontiArgs": "[]",
        "inputs": 1,
        "hasButton": false,
        "x": 770,
        "y": 2520,
        "wires": [
            [
                "47c26bd9c40e406e"
            ]
        ]
    },
    {
        "id": "3eaca72b64e5fec4",
        "type": "crontinject",
        "z": "7cabc8e221eacc0f",
        "name": "Create Schedule",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "{\"crontiMethod\":\"time\",\"time\":\"12:00\",\"days\":[0,1,2,3,4,5,6]}",
        "payloadType": "json",
        "crontiMethod": "",
        "crontiArgs": "[]",
        "inputs": 0,
        "hasButton": true,
        "x": 590,
        "y": 2480,
        "wires": [
            [
                "5b358aa1d98580a6"
            ]
        ]
    },
    {
        "id": "7dee3ac30a28d513",
        "type": "debug",
        "z": "7cabc8e221eacc0f",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "statusVal": "",
        "statusType": "auto",
        "x": 1100,
        "y": 2520,
        "wires": []
    },
    {
        "id": "1983ba77f6dba9c9",
        "type": "crontinject",
        "z": "7cabc8e221eacc0f",
        "name": "Cancel Schedule",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "crontiSchedulePayload",
        "payloadType": "flow",
        "crontiMethod": "",
        "crontiArgs": "[]",
        "inputs": 0,
        "hasButton": true,
        "x": 590,
        "y": 2560,
        "wires": [
            [
                "5b358aa1d98580a6"
            ]
        ]
    },
    {
        "id": "47c26bd9c40e406e",
        "type": "function",
        "z": "7cabc8e221eacc0f",
        "name": "save schedule id",
        "func": "if(msg.schedule && !msg.schedule.cancel) {\n    if(msg.schedule.cancel) {\n        // Canceled Schedule\n        /* Silent is gold */\n    } else {\n        // Created Schedule\n        flow.set(\"crontiSchedulePayload\", {\"_id\": msg.schedule.self._id})\n    } \n}\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 940,
        "y": 2520,
        "wires": [
            [
                "7dee3ac30a28d513"
            ]
        ]
    }
]
```

# Kurulum

```bash
npm i @buglss/node-red-crontinject
```
