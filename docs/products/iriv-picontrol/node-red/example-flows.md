---
title: IRIV PiControl Node-RED Example Flows
sidebar_label: Example Flows
sidebar_position: 4
description: Importable Node-RED flows for IRIV PiControl — mirror a digital input to a digital output, and read an IRIV IO Controller over RS485 Modbus RTU.
---

# Example Flows

Two small flows you can import and adapt. In Node-RED: **Menu → Import → paste the JSON → Import**, then **Deploy**.

:::caution Test before use
These flows are starting points written from the IRIV PiControl user manual and the IRIV IO Controller example code. Test them on your unit before connecting real loads.
:::

## GPIO Pin Numbers in Node-RED

The `rpi-gpio` nodes (from `node-red-node-pi-gpio`) are set by **physical header pin number**, not by GPIO number:

| Function | GPIO | Pin in `rpi-gpio` node |
|---|---|---|
| DI0 / DI1 / DI2 / DI3 | 13 / 17 / 22 / 27 | 33 / 11 / 15 / 13 |
| DO0 / DO1 / DO2 / DO3 | 23 / 24 / 25 / 26 | 16 / 18 / 22 / 37 |
| User button | 4 | 7 |
| Buzzer | 19 | 35 |
| LED0 / LED1 | 20 / 21 | 38 / 40 |

:::note IRIV PiControl CM5
On the CM5 version, check that the `rpi-gpio` nodes work with your Node-RED version (Raspberry Pi 5-family GPIO is handled differently from CM4). If they don't, use an exec node with `pinctrl`, or a GPIO node that supports the Raspberry Pi 5.
:::

## Flow 1: DI0 Switches DO0

When DI0 sees 3–50V, DO0 closes. Uses only the built-in GPIO nodes.

```json
[
  {"id":"a1b2c3d4e5f60001","type":"rpi-gpio in","name":"DI0 (GPIO13)","pin":"33","intype":"tri","debounce":"25","read":true,"bcm":true,"x":150,"y":100,"wires":[["a1b2c3d4e5f60002","a1b2c3d4e5f60003"]]},
  {"id":"a1b2c3d4e5f60002","type":"rpi-gpio out","name":"DO0 (GPIO23)","pin":"16","set":true,"level":"0","freq":"","out":"out","bcm":true,"x":400,"y":100,"wires":[]},
  {"id":"a1b2c3d4e5f60003","type":"debug","name":"DI0 state","active":true,"tosidebar":true,"console":false,"complete":"payload","x":390,"y":160,"wires":[]}
]
```

## Flow 2: Read an IRIV IO Controller over RS485

Reads the 11 digital inputs and AN0 (voltage, in mV) of an [IRIV IO Controller](../../iriv-io-controller/index.md) running Cytron's [Modbus IO Expander example](../../iriv-io-controller/software-support.md#modbus-io-expander-example) (slave ID 1, 9600 baud) once per second. Needs the `node-red-contrib-modbus` palette.

Wiring: PiControl RS485 **A–A, B–B, 485G–G**; termination ON at both ends of the bus.

```json
[
  {"id":"b1b2c3d4e5f60010","type":"modbus-client","name":"PiControl RS485","clienttype":"simpleser","bufferCommands":true,"stateLogEnabled":false,"queueLogEnabled":false,"failureLogEnabled":true,"tcpHost":"127.0.0.1","tcpPort":"502","tcpType":"DEFAULT","serialPort":"/dev/ttyACM0","serialType":"RTU-BUFFERD","serialBaudrate":"9600","serialDatabits":"8","serialStopbits":"1","serialParity":"none","serialConnectionDelay":"100","serialAsciiResponseStartDelimiter":"0x3A","unit_id":"1","commandDelay":"10","clientTimeout":"1000","reconnectOnTimeout":true,"reconnectTimeout":"2000","parallelUnitIdsAllowed":true},
  {"id":"b1b2c3d4e5f60011","type":"modbus-read","name":"IOC DI0-DI10 (FC2)","topic":"di","showStatusActivities":true,"logIOActivities":false,"showErrors":true,"showWarnings":true,"unitid":"1","dataType":"Input","adr":"0","quantity":"11","rate":"1","rateUnit":"s","delayOnStart":false,"startDelayTime":"","server":"b1b2c3d4e5f60010","useIOFile":false,"ioFile":"","useIOForPayload":false,"emptyMsgOnFail":false,"x":180,"y":240,"wires":[["b1b2c3d4e5f60013"],[]]},
  {"id":"b1b2c3d4e5f60012","type":"modbus-read","name":"IOC AN0 mV (FC4)","topic":"an0_mV","showStatusActivities":true,"logIOActivities":false,"showErrors":true,"showWarnings":true,"unitid":"1","dataType":"InputRegister","adr":"512","quantity":"1","rate":"1","rateUnit":"s","delayOnStart":false,"startDelayTime":"","server":"b1b2c3d4e5f60010","useIOFile":false,"ioFile":"","useIOForPayload":false,"emptyMsgOnFail":false,"x":180,"y":300,"wires":[["b1b2c3d4e5f60013"],[]]},
  {"id":"b1b2c3d4e5f60013","type":"debug","name":"IOC data","active":true,"tosidebar":true,"console":false,"complete":"true","x":420,"y":270,"wires":[]}
]
```

The IRIV IO Controller register map is on the [IO Controller Software Support](../../iriv-io-controller/software-support.md#modbus-io-expander-example) page.

## More Flows

- Cytron's 13-part [Node-RED series](../tutorials.md) — digital I/O, OLED, Modbus sensors and power meter, CSV/MySQL logging, ThingSpeak, Blynk
- [Agribox Node-RED flows](https://github.com/RadenFatih/IRIV-PiControl-Node-RED-Code) by a Cytron tutorial author (soil sensor, SHT40, pumps, 8DI/8DO Modbus extender)

---

**Source(s):**
- IRIV PiControl CM4 User Manual, Rev 1.3, Nov 2025 (GPIO mapping)
- CytronTechnologies/Cytron-IRIV-IO-Controller, Modbus IO Expander example (register map)
