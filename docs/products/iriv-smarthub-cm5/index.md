---
title: IRIV SmartHub CM5
sidebar_position: 1
description: Industrial gateway and controller powered by Raspberry Pi Compute Module 5, designed for edge computing, system integration, and industrial automation applications.
---

# IRIV SmartHub CM5

The IRIV SmartHub CM5 (IRIV-SH5) is an IR4.0 industrial controller based on the Raspberry Pi Compute Module 5. It features a Broadcom BCM2712 Quad-Core Cortex-A76 64-bit SoC running at 2.4GHz, housed in a fanless metal enclosure designed for industrial environments. The controller provides multiple connectivity options including dual HDMI outputs, USB 3.0/2.0 ports, Gigabit Ethernet, and expansion capabilities via M.2 NVMe and mini PCIe sockets.

The device supports wide-range DC power input (10-30V) with surge protection, making it suitable for industrial power environments. It includes programmable buttons, LEDs, and an active buzzer for user interaction and status indication, along with an RTC battery holder for timekeeping when powered off.

## Supported Use Cases

Based on the official manual, the IRIV SmartHub CM5 is designed for:

- Industrial automation and control applications (IR4.0)
- Edge computing deployments requiring robust connectivity
- Applications requiring dual display output (up to 4K@60Hz)
- Systems needing expansion via 4G/LTE modules (via mini PCIe)
- NVMe storage expansion for data-intensive applications

## Quick Facts

| Parameter | Specification |
|---|---|
| Compute module | Raspberry Pi CM5, BCM2712 quad-core Cortex-A76 @ 2.4GHz |
| Variants on sale (product page, Oct 2026) | Wireless 2GB RAM / 16GB eMMC, 4GB / 32GB, 16GB / 64GB |
| Display | 2x HDMI 2.0 (up to 4K@60Hz) |
| USB | 2x USB 3.0 (2A total), 2x USB 2.0 (1A total), 1x USB-C (boot and power) |
| Ethernet | 1x Gigabit (eth0) |
| Expansion | M.2 Key-M NVMe 2230/2242 (Gen 2 x1, bootable); mini PCIe (USB 2.0 only) |
| Power | DC jack 10-30V (surge-protected to 60V for 20ms), or USB-C 4.9-5.2V |
| Power consumption | max 6W (`stress-ng` CPU test, USB load excluded); product page: "< 12W" |
| Operating temperature | -20°C to 60°C |
| Dimensions | 147 x 94 x 35.7mm (enclosure only, excluding antenna) |
| Mounting | VESA 75 x 75mm (4x M4) |
| Field I/O | None — no RS485, digital or analog I/O (see IRIV PiControl / EdgeAI for I/O) |

## Documentation

| Document | Description |
|----------|-------------|
| [Getting Started](./getting-started) | Power requirements, first boot, and OS installation |
| [Hardware Layout](./hardware-layout) | External and internal board layout diagrams |
| [Interfaces and Mapping](./interfaces-and-mapping) | Port specifications and GPIO mapping |
| [Software Setup](./software-setup) | OS compatibility, boot modes, and configuration |
| [Troubleshooting](./troubleshooting) | Common issues and solutions |
| [Tutorials](./tutorials) | Cytron tutorials and projects |
| [Downloads](./downloads) | Datasheets, manuals, and resources |

## Product Link

- [IRIV SmartHub CM5 Product Page](https://my.cytron.io/c-industrial-with-raspberry-pi/p-iriv-smarthub-cm5)

---

**Source(s):**
- IRIV SmartHub CM5 User Manual (IRIV-SH5), Rev 1.3, Dec 2025
- IRIV SmartHub CM5 product page (my.cytron.io), read Oct 2026
