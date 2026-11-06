---
title: IRIV PiControl
sidebar_position: 1
description: Industrial controller powered by Raspberry Pi Compute Module 4, featuring isolated I/O, serial communication, and expansion options in a DIN rail-mountable enclosure.
---

# IRIV PiControl Documentation

Industrial-grade controller powered by Raspberry Pi Compute Module 4 (CM4), designed for Industry 4.0 applications.

:::info CM4 and CM5 versions
IRIV PiControl is also sold with a Raspberry Pi **CM5** (`IRIV-PICL5`). The I/O, terminals and setup are the same. These pages are written for the CM4 version — see [IRIV PiControl CM5](./cm5-version.md) for the differences.
:::

## Overview

IRIV PiControl combines industrial interfaces with Raspberry Pi's computing capability. The controller integrates isolated I/O, serial communication, and expansion options in a DIN rail-mountable metal enclosure.

**Compute Module:** Raspberry Pi CM4
**CPU:** Broadcom BCM2711 quad-core 64-bit Cortex-A72 (ARM v8) @ 1.5GHz
**Operating Temperature:** -20°C to 60°C
**Power Input:** DC 10-30V (surge-protected up to 60V for 20ms)
**Enclosure:** Metal, fanless design, DIN rail mountable

## Getting Started

Follow these steps to set up your IRIV PiControl:

1. [Review hardware requirements and power specifications](./getting-started.md#power-requirements)
2. [Connect power supply and perform first boot](./getting-started.md#first-boot-and-access)
3. [Run configuration script](./getting-started.md#configuration)
4. [Verify OLED display status](./getting-started.md#oled-system-status)
5. [Begin development with Node-RED](./node-red/index.md)

## Product Hub

### Hardware Reference

- [IRIV PiControl CM5](./cm5-version.md) - Differences on the CM5 version
- [Hardware Layout](./hardware-layout.md) - External ports, buttons, LEDs, terminals
- [Internal Board Layout](./internal-board-layout.md) - M.2 socket, Mini PCIe, RTC, switches
- [Terminal 1](./terminal-1.md) - Power, RS485, RS232, digital outputs
- [Terminal 2](./terminal-2.md) - Digital inputs, analog inputs
- [Interfaces and Mapping](./interfaces-and-mapping.md) - Device mappings, I2C addresses

### Software & Programming

- [Software Configuration](./software-configuration.md) - Configuration script details
- [Programming Reference](./programming-reference.md) - GPIO mappings, ADC usage
- [Node-RED Documentation](./node-red/index.md) - Industrial automation workflows

### Support

- [Troubleshooting](./troubleshooting.md) - Common issues and solutions
- [Tutorials](./tutorials.md) - Node-RED series and projects
- [Downloads](./downloads.md) - Resources and support contacts

## Quick Facts

| Parameter | Specification |
|-----------|--------------|
| RAM Options | 1GB / 2GB / 4GB / 8GB LPDDR4-3200 (sold: Wireless 2GB/16GB, 4GB/32GB, 8GB/32GB) |
| Storage | 8GB / 16GB / 32GB eMMC, expandable via M.2 NVMe SSD |
| Wireless (optional) | 2.4GHz / 5.0GHz WiFi, Bluetooth 5.0, BLE |
| Display Output | 1x Full-size HDMI 2.0 (up to 4K@60Hz) |
| USB | 2x USB 2.0, 1x USB-C (boot/debug) |
| Ethernet | 1x Gigabit (eth0), 1x 10/100M (eth1) |
| Digital I/O | 4x isolated input (up to 50V), 4x isolated output (up to 50V, 500mA) |
| Analog Input | 4x isolated (0-5V / 0-10V / 0-20mA) |
| Serial | 1x isolated RS485 (500kbps), 1x isolated RS232 (120kbps) |
| Expansion | 1x M.2 Key-M (NVMe SSD), 1x Mini PCIe (USB2.0 + SPI only) |
| Additional Features | PCF85063A RTC, ATECC608B crypto authentication, SSD1306 OLED display |
| Dimensions | 141.2mm x 83.5mm x 39.5mm (enclosure only) |

## Applications

Suitable for edge computing, IoT gateways, industrial automation, robotics, data logging, and energy management systems.

---

**Source(s):**
- IRIV PiControl CM4 User Manual, Rev 1.3, Nov 2025
- IRIV PiControl product page (my.cytron.io)
