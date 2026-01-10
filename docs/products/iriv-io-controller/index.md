---
title: IRIV IO Controller
sidebar_position: 1
description: Industrial I/O controller powered by Raspberry Pi RP2350 microcontroller, designed for lightweight automation with digital and analog I/O, RS485, and Ethernet in a compact DIN rail-mountable enclosure.
---

# IRIV IO Controller Documentation

Industrial-grade I/O controller powered by Raspberry Pi RP2350 microcontroller, designed for lightweight automation solutions in Industry 4.0 applications.

## Overview

The IRIV IO Controller combines industrial I/O interfaces with the Raspberry Pi RP2350's processing capability. The controller integrates isolated digital I/O, analog inputs, serial communication, and Ethernet connectivity in a DIN rail-mountable metal enclosure.

**Microcontroller:** Raspberry Pi RP2350A
**CPU:** Dual ARM Cortex-M33 @ 150MHz
**Operating Temperature:** -20°C to 70°C
**Power Input:** DC 10-30V (surge-protected up to 60V for 20ms)
**Enclosure:** Metal, fanless design, DIN rail mountable

The device ships preprogrammed as a MODBUS RTU IO Expander with counter function.

## Getting Started

Follow these steps to set up your IRIV IO Controller:

1. [Review hardware requirements and power specifications](./getting-started.md)
2. [Connect power supply and perform first boot](./getting-started.md)
3. [Program the device via USB-C](./getting-started.md)
4. [Begin development with CircuitPython](./getting-started.md)

## Product Hub

### Hardware Reference

- [Hardware Layout](./hardware-layout.md) - External buttons, terminals, LEDs, connectors
- [Internal Board Layout](./internal-board-layout.md) - RTC, MCU, Ethernet controller, buzzer
- [I/O Reference](./io-reference.md) - Digital inputs, digital outputs, analog inputs
- [Interfaces and Functions](./interfaces-and-functions.md) - RS485, Ethernet, USB-C

### Software & Programming

- [Software Support](./software-support.md) - Supported platforms and protocols
- [Tutorials](./tutorials.md) - Hands-on guides and examples

### Support

- [Downloads](./downloads.md) - Datasheet, 3D models, support contacts

## Quick Facts

| Parameter | Specification |
|-----------|--------------|
| RAM | 520KB on-chip SRAM |
| Storage | 2MB flash memory |
| Ethernet | 10/100M via W5500 controller |
| USB | 1x USB-C (programming and power) |
| Serial | 1x isolated RS485 (500 kbps max) |
| Digital Input | 11x isolated input (up to 50V, 5kHz pulse frequency) |
| Digital Output | 4x isolated output (up to 50V, 500mA) |
| Analog Input | 2x 12-bit (0-10.56V / 0-42.58mA) |
| Additional Features | PCF85063A RTC, programmable button, programmable LED, passive buzzer |
| Dimensions | 140mm x 60mm x 36mm (metal enclosure only) |

## Applications

Suitable for lightweight automation, industrial I/O expansion, MODBUS RTU/TCP gateways, data acquisition, sensor monitoring, and edge control systems.

---

**Source(s):**
- IRIV IO Controller Datasheet, Rev 1.0, July 2024
- IRIV IO Controller product page (my.cytron.io)
