---
title: IRIV IOC MQTT Gateway
sidebar_position: 2
description: IRIV IOC MQTT Gateway — the IRIV IO Controller preloaded with Cytron's MQTT Gateway firmware. Publishes DI, AI and Modbus RTU data to an MQTT broker with no coding.
---

# IRIV IOC MQTT Gateway

<img src="https://static.cytron.io/image/cache/catalog/products/IRIV-IOC-MQTT/ppp3.1-800x800.png" alt="IRIV IOC MQTT Gateway" width="360" loading="lazy" />

[Product page](https://my.cytron.io/p-iriv-io-controller-mqtt-ir4.0-industrial-i-o-controller-with-mqtt-ready) · [Getting Started series (6 parts)](https://my.cytron.io/tutorial/getting-started-with-iriv-ioc-mqtt-gateway)

The IRIV IOC MQTT Gateway is the same hardware as the IRIV IO Controller, **preloaded at the factory with Cytron's MQTT Gateway firmware**. It publishes the digital inputs, analog inputs and Modbus RTU (RS485) readings to your MQTT broker over Ethernet, and lets you switch the digital outputs from MQTT — all set up from a web page, with no coding.

Hardware, terminals, wiring and electrical limits are identical to the IRIV IO Controller: see [Hardware Layout](./hardware-layout.md) and [I/O Reference](./io-reference.md).

:::danger Do not overwrite the firmware
Do not flash CircuitPython or other firmware on this unit. The MQTT Gateway firmware is licensed to the unit's CPU ID. To update it, use only Cytron's `.uf2` files (see below).
:::

## How It Differs from the IRIV IO Controller

| Item | IOC MQTT Gateway | IRIV IO Controller |
|---|---|---|
| Firmware | Preloaded MQTT Gateway firmware | You program it (e.g. CircuitPython) |
| USB-C | Configuration (and power) | Programming and configuration |
| User button (GP28) | Factory reset | Programmable |
| USR LED (GP29) | Network / MQTT status | Programmable |
| Buzzer | Beeps on factory reset | Programmable |
| RTC | Fitted but **not used** by the firmware | Usable |
| Datasheet | Rev 1.0, June 2026 | Rev 1.0, July 2024 |

## MQTT

- Standard MQTT on **port 1883**. There is **no TLS/SSL on the device** — for encrypted cloud links, send the data through a local secure broker or edge gateway.
- Topics are built on a Base Topic (for example `iriv/CB62/`): `di/…`, `ai/…`, `do/…/cmd`, `do/…/state`, `mbpoll/…`, `mbwrite/…`, `mbwrite/…/confirm`.
- QoS 0/1/2 and Retain can be set per channel.

## What You Can Configure

| Channels | Options |
|---|---|
| **Digital inputs DI0–DI10** | Enable, rename, publish On Change / Periodic / Both (period ≥ 1 s), topic, QoS, Retain |
| **Digital outputs DO0–DO3** | Enable, rename, startup state ON/OFF, command topic (`1`/`ON` or `0`/`OFF`), state topic published on change |
| **Analog inputs AI0–AI1** | 0–10V or 4–20mA sensors, periodic publish (≥ 1 s) |
| **RS485 Modbus RTU master** | 1200–115200 baud, parity, stop bits, timeout; up to **32 poll jobs** (slave 1–247, FC1/2/3/4, Int16/UInt16/Int32/Float32, byte order, scale and offset); write jobs FC5/FC6/FC16 from an MQTT topic with confirmation |
| **Diagnostics** | Dashboard (uptime, free memory, live I/O), Test Publish, manual Modbus register read |

## USR LED Status

| Pattern | Meaning |
|---|---|
| Slow blink | Ethernet down |
| Solid on | Ethernet up, MQTT disabled |
| One pulse every 1.5 s | MQTT enabled but broker not reachable |
| Two pulses every 3 s | MQTT connected |

## Factory Reset

Hold the **USER** button while powering on (or press RESET while holding USER) for about 10 seconds, until the buzzer beeps. This clears the broker, I/O, poll and write settings — back them up first. The firmware licence is kept.

## Firmware Update

1. **Normal:** web interface → System → Firmware Update → upload the Cytron `.uf2` from the product page's firmware folder.
2. **Recovery:** hold BOOT, connect USB-C (PROG), and copy the Cytron `.uf2` to the "RP2350" drive.

If Windows 11 no longer recognises the unit over USB after Windows Update KB5124008, update to the latest firmware.

## Tutorials

[Getting Started with IRIV-IOC MQTT Gateway](https://my.cytron.io/tutorial/getting-started-with-iriv-ioc-mqtt-gateway) — 6 parts: broker connection, I/O channels, RS485 / Modbus RTU, diagnostics and system settings, factory reset and firmware update.

---

**Source(s):**
- IRIV IOC MQTT Gateway Datasheet, Rev 1.0, June 2026
- IRIV IOC MQTT Gateway product page (my.cytron.io), read Oct 2026
- Cytron tutorial series: Getting Started with IRIV-IOC MQTT Gateway (Jun 2026)
