---
title: IRIV PiControl Industry 4.0 Agribox
sidebar_position: 3
description: IRIV PiControl Industry 4.0 Agribox (KIT-IRIV-AGRBX2) — smart-agriculture control box with IRIV PiControl CM4, IRIV IO Controller, relays, RS485 sensors and MyAgritech software.
---

# IRIV PiControl Industry 4.0 Agribox

<img src="https://static.cytron.io/image/cache/catalog/products/KIT-IRIV-AGRBX2/4-800x800.png" alt="IRIV PiControl Industry 4.0 Agribox" width="360" loading="lazy" />

**Product code:** KIT-IRIV-AGRBX2 · [Product page](https://my.cytron.io/cytron-industry/p-iriv-picontrol-industry-4.0-agribox-v2-myagritech-software-included)

A packaged smart-agriculture control box. It monitors soil and climate, switches pumps, valves and lights by schedule or sensor readings, and comes with the **MyAgritech** web dashboard for remote monitoring, data logging and email alerts.

## What's in the Box

| Qty | Item |
|---|---|
| 1 | Agribox enclosure |
| 1 | [IRIV PiControl](../products/iriv-picontrol/index.md) **CM4**, 4GB RAM / 32GB eMMC |
| 1 | [IRIV IO Controller](../products/iriv-io-controller/index.md) (RP2350) |
| 5 | Industrial relays, 24 VDC |
| 3 | Hangton HE21 2-pin connectors (DC outputs) |
| 2 | 3-pin 16A AC sockets |
| 1 | Industrial illuminated push button, 24V (NC or NO) |
| 1 | RS485 temperature and humidity sensor |
| 1 | RS485 3-in-1 soil sensor (moisture, temperature, EC) |
| 1 | Meanwell 24V 100W DC power supply |

Pumps, valves and sprinklers are **not** included.

## Outputs

| Output | Use |
|---|---|
| 3 × DC (relays to HE21 2-pin connectors) | DC pumps, valves and lights — e.g. A/B/C or N/P/K fertiliser mixing, low-power watering valves. Pumps can also be wired straight to the relays |
| 2 × AC (relays to 3-pin sockets) | Plug-in AC pumps |

:::caution
The relay contact ratings are not stated. The sockets are 16A-rated, but do not assume the relays switch 16A — check your pump's current with Cytron support first.
:::

## Sensors

| Sensor | Range |
|---|---|
| 3-in-1 soil sensor (RS485, 24V) | Moisture 0–100% (1%), temperature −40 to +60 °C (0.1 °C), EC 0–20000 µS/cm (1 µS/cm) |
| Temperature/humidity sensor (RS485, 24V) | −40 to 120 °C, 0–99.9 %RH; ±0.3 °C / ±2 %RH at 25 °C; 3 s sampling |

Both sensors share one RS485 bus, so they need **different Modbus IDs and the same baud rate**. On the IRIV PiControl the RS485 port is `/dev/ttyACM0`.

## Power

Mains input 240 VAC into the Meanwell 24V supply. The relays, sensors and push button are 24V parts, and both controllers accept 10–30 VDC on VIN.

## MyAgritech Software

Included with the kit: real-time dashboard, cloud storage and database, automation scheduling, data analysis and reports, and email alerts, from a PC or phone browser. Each purchase includes **1 user account, a Getting Started Guide and a dedicated support channel**.

## Build It Yourself with Node-RED

Cytron's tutorial [IRIV PiControl - Setting-Up Dashboard of IRIV Agribox Agriculture Kit](https://my.cytron.io/tutorial/IRIV-node-red-Agriculture-Box-tutorial) builds an **earlier, PiControl-only version** (3 relays, Node-RED dashboard, no IO Controller or MyAgritech). It is a good guide to the RS485 sensor setup:

- Soil sensor: Modbus ID 1, FC3, address 0, 3 registers (moisture, temperature, EC); factory 4800 baud, changed to 9600.
- Temperature/humidity sensor: set to ID 2 with the DIP switch inside, FC3, address 0, 2 registers, 9600 baud.
- Needs the `node-red-contrib-modbus` palette. Use `/dev/ttyACM0` (the tutorial has a typo, `/dev/tty/ACM0`).

Do not treat the tutorial's GPIO wiring as the wiring of the current kit.

## Still to Be Confirmed

Which controller drives the relays, how the IO Controller connects to the PiControl, the exact PSU rating (the spec line says 24 VDC 1A, the packing list says 100W), and the enclosure's IP rating and size. Ask [Cytron support](mailto:support@cytron.io) if you need these.

---

**Source(s):**
- IRIV PiControl Industry 4.0 Agribox product page (my.cytron.io), read Oct 2026
- Cytron tutorial: IRIV PiControl - Setting-Up Dashboard of IRIV Agribox Agriculture Kit (Jul 2025)
- Cytron team answers (Oct 2026)
