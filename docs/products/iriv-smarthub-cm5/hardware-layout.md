---
sidebar_position: 3
title: Hardware Layout
---

# Hardware Layout

This page documents the physical layout of the IRIV SmartHub CM5, including external ports, internal board components, and mechanical dimensions.

## External Layout

The IRIV SmartHub CM5 has ports and controls accessible from the left and right sides of the enclosure.

![IRIV SmartHub CM5 left panel](/img/products/iriv-smarthub-cm5/external-layout-left.png)

![IRIV SmartHub CM5 right panel](/img/products/iriv-smarthub-cm5/external-layout-right.png)

*External layout, left and right panels (User Manual, Section 3.1).*

### Left Panel

| No. | Component | Description |
|-----|-----------|-------------|
| 1 | Gigabit Ethernet | Default 10/100/1000M Gigabit Ethernet of CM5. Mapped to `eth0` in Raspberry Pi OS. |
| 2 | USB 2.0 Ports | 2x USB 2.0 host capable of running at 480Mbps. Maximum current for both ports is 1000mA. |
| 3 | HDMI (HDMI0, HDMI1) | Full-size Type-A HDMI for external display. Up to 4K resolutions. |
| 4 | DC Barrel Jack | Power input DC 10-30V, current rating recommended more than 2A. |
| 5 | USB-C | Dual-function port selectable via onboard Boot/Run switch. **Boot**: Load OS image into eMMC. **Power**: Power the device (recommended 5V 5A). |

### Right Panel

| No. | Component | Description |
|-----|-----------|-------------|
| 6 | USB 3.0 Ports | 2x USB 3.0 host capable of running at 5 Gbps. Maximum current for both ports is 2000mA. |
| 7 | User Button | User programmable button. Connected to GPIO4. Can be programmed as a safe shutdown button. |
| 8 | Power Button | Single press to turn on. Double-press or long-press to turn off. |
| 9 | LEDs | LED0 (GPIO20), LED1 (GPIO21), PWR, ACT, M.2 indicators |
| 10 | WiFi Antenna | Antenna for CM5 WiFi and Bluetooth. |
| 11 | Extra Antenna Mounting Hole | Extra mounting holes for additional antennas. |

### LED Indicators

| LED | Function |
|-----|----------|
| LED0 | User programmable LED 0. Controlled by GPIO20. |
| LED1 | User programmable LED 1. Controlled by GPIO21. |
| PWR | CM5 power indicator. Same as the red LED on Pi 5. |
| ACT | CM5 activity indicator. Same as the green LED on Pi 5. |
| M.2 | NVMe SSD activity indicator. |

## Internal Board Layout

Access to internal components requires removing the enclosure cover.

![IRIV SmartHub CM5 internal board, front](/img/products/iriv-smarthub-cm5/internal-layout-front.png)

![IRIV SmartHub CM5 internal board, back](/img/products/iriv-smarthub-cm5/internal-layout-back.png)

*Internal board, front and back (User Manual, Section 3.2).*

### Front Side Components

| No. | Component | Description |
|-----|-----------|-------------|
| 1 | M.2 Key-M Socket | For PCIe module (Gen 2 1-lane PCIe). Supports NVMe SSD size 2230 & 2242 (Bootable). **M.2 SATA SSD is not supported.** |
| 2 | M.2 Module Standoff | Standoff for mounting 2230 or 2242 M.2 PCIe module. |
| 3 | Mini PCIe Socket | Only USB 2.0 interface available (no PCIe interface). Power controlled via GPIO6. Reset via GPIO5 (active low). |
| 4 | Mini PCIe Module Standoff | Standoff for mounting mini-PCIe module. |
| 5 | Active Buzzer | User programmable active piezo buzzer. Controlled by GPIO19. Beeps when output is high. |
| 6 | 4A Fuse | 4-Amp replaceable fuse for power input. |
| 7 | Boot/Run Mode Switch | Select USB-C function: **Boot** (OS installation) or **Run** (normal operation). |
| 8 | RTC Battery | CR2032 coin cell holder to keep RTC running when system is powered off. |

### Back Side Components

| No. | Component | Description |
|-----|-----------|-------------|
| 9 | Wireless Disable Jumper | Solder and short the jumper to disable WiFi or Bluetooth (BT). |
| 10 | CM5 Socket | Mount the CM5 following the graphical silkscreen orientation. |

## Block Diagram

![IRIV SmartHub CM5 block diagram](/img/products/iriv-smarthub-cm5/block-diagram.png)

The block diagram illustrates the following signal paths:

- **Power**: DC Jack and USB-C power inputs to CM5
- **Display**: Dual HDMI outputs from CM5
- **USB**: 2x USB 3.0 direct from CM5, 2x USB 2.0 via USB Hub
- **Storage**: M.2 PCIe for NVMe SSD
- **Expansion**: Mini PCIe socket (USB 2.0 only) with GPIO-controlled power and reset
- **Network**: Gigabit Ethernet (eth0)
- **User I/O**: User Button (GPIO4), Power Button, LEDs (GPIO20, GPIO21), Buzzer (GPIO19)

## Dimensions

![IRIV SmartHub CM5 dimensions](/img/products/iriv-smarthub-cm5/dimensions.png)

### Enclosure Dimensions

| Dimension | Value |
|-----------|-------|
| Length | 147mm |
| Width | 94mm |
| Height | 35.7mm |

*Note: Dimensions are for metal enclosure only, excluding antenna (user manual Features table and product page). The dimension drawing shows 147 × 98 × 35mm; the difference may be the mounting flanges and has been raised with the design team.*

### Additional Measurements

| Feature | Value |
|---------|-------|
| VESA Mount Pattern | 75x75mm (4x M4 screws) |
| Mounting flange slots | Dimensioned 66mm / 30mm (M4) and 48mm (M8) on the drawing |
| DIN rail | Not stated in the user manual |

### Detailed Dimensions from Drawings

- Overall (drawing): 147mm x 98mm x 35mm — see note above
- VESA mount: **75 x 75mm, 4x M4** on the base
- Flange slots: 66.00 / 30.00 (labelled M4) and 48.00 (labelled M8) — these are slot dimensions, not the VESA pattern

---

**Source(s):**
- IRIV SmartHub CM5 User Manual (IRIV-SH5), Rev 1.3, Dec 2025
- IRIV SmartHub CM5 product page (my.cytron.io), read Oct 2026
