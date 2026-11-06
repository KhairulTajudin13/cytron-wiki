---
title: IRIV EdgeAI CM5
sidebar_position: 1
description: Industrial edge AI controller powered by Raspberry Pi Compute Module 5, designed for AI inference, vision-based applications, and high-performance edge processing.
---

# IRIV EdgeAI CM5

The IRIV EdgeAI CM5 is an IR4.0 Edge AI Controller based on the Raspberry Pi Compute Module 5. It features a Broadcom BCM2712 quad-core 64-bit Cortex-A76 SoC running at 2.4GHz, designed for edge AI and industrial automation applications. The controller is housed in a fanless metal enclosure with DIN rail mounting capability.

The device provides industrial-grade I/O interfaces including isolated digital inputs/outputs, isolated RS485, and LED lighting drivers. It includes dual Gigabit Ethernet ports, dual MIPI CSI camera ports, and a dedicated PCIe port for the Raspberry Pi AI HAT+ accelerator. Additional features include an ATECC608B secure authentication chip and a 0.96" OLED display for status information.

## Intended Applications

Based on the official datasheet, the IRIV EdgeAI CM5 is designed for:

- Edge AI and computer vision applications
- Industrial automation requiring isolated I/O
- Systems using CSI cameras for vision processing
- Applications requiring AI acceleration (via Raspberry Pi AI HAT+)
- RS485-based industrial communication
- DIN rail mounted industrial deployments

## Quick Facts

| Parameter | Specification |
|---|---|
| Compute module | Raspberry Pi CM5, BCM2712 quad-core Cortex-A76 @ 2.4GHz |
| Configurations on sale (Oct 2026) | 8GB/32GB + 13 TOPS, 8GB/32GB + 26 TOPS, 16GB/64GB + 26 TOPS (Raspberry Pi AI HAT+ pre-installed) |
| Cameras | 2x 22-way MIPI CSI (product page: "two 4-lane MIPI CSI interfaces") |
| USB | 2x USB 3.0 (shared hub), 1x USB-C (boot/debug) |
| Ethernet | 2x Gigabit (eth0 native, eth1 via USB 3.0) |
| Industrial I/O | 2x isolated DI (PNP/NPN, shared S/S), 2x isolated DO (dry contact, 50V 500mA), 2x LED lighting driver (Vin, 2A, PWM), 1x isolated RS485 (`/dev/ttyACM0`, 120Ω onboard) |
| Power | VIN 10-30V (surge-protected to 60V for 20ms), or USB-C 4.9-5.2V (5V 5A PD supply) |
| Power consumption | max 11W (`stress-ng` CPU test, USB load excluded) |
| Operating temperature | -20°C to 60°C |
| Dimensions | 139 x 88 x 38mm (enclosure only) |

## Documentation

| Document | Description |
|----------|-------------|
| [Getting Started](./getting-started) | Power requirements, first boot, and initial setup |
| [Hardware Layout](./hardware-layout) | External and internal board layout diagrams |
| [AI Quickstart](./ai-quickstart) | AI accelerator setup and usage overview |
| [Interfaces and Mapping](./interfaces-and-mapping) | Port specifications and GPIO mapping |
| [Software Setup](./software-setup) | OS compatibility and configuration |
| [Troubleshooting](./troubleshooting) | Common issues and solutions |
| [Downloads](./downloads) | Datasheets, manuals, and resources |

## Product Link

- [IRIV EdgeAI CM5 Product Page](https://my.cytron.io/c-industrial-with-raspberry-pi/p-iriv-edge-ai-cm5)

---

**Source(s):**
- IRIV EdgeAI CM5 Datasheet, Rev 1.0, July 2025
- IRIV EdgeAI CM5 product page (my.cytron.io), read Oct 2026
