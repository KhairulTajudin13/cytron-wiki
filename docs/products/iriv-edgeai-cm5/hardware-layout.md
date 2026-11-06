---
sidebar_position: 3
title: Hardware Layout
---

# Hardware Layout

This page documents the physical layout of the IRIV EdgeAI CM5, including external ports, internal board components, and mechanical dimensions.

## External Layout

The IRIV EdgeAI CM5 has ports and controls accessible from multiple sides of the enclosure.

![IRIV EdgeAI CM5 external layout](/img/products/iriv-edgeai-cm5/external-layout.png)

*External layout, front, left and right panels (Datasheet, Section 3.1).*

### Front Panel

| No. | Component | Description |
|-----|-----------|-------------|
| 1 | Power Button | Single press: Power on. Double-press: Soft shutdown. Long-press: Force shutdown. |
| 2 | User Button | User programmable button. Connected to GPIO4. |
| 3 | Terminal | Pluggable terminal for RS485, Digital I/O, and LED Driver outputs. |
| 4 | Gigabit Ethernet | 2x Gigabit Ethernet ports (eth0 and eth1). |
| 5 | Status LEDs | PWR, ACT, M.2, 4G PWR, WWAN, LED0, LED1 indicators. |
| 6 | USB-C | Dual-function port (Boot/Debug). Also supports 5V 5A PD power input. |

### Left Panel

| No. | Component | Description |
|-----|-----------|-------------|
| 7 | DIN Bracket | For DIN rail mounting. Can be repositioned to bottom. |
| 8 | WiFi Antenna | Antenna for CM5 WiFi and Bluetooth. |
| 9 | 4G Antenna (Reserved) | Reserved mounting hole for 4G antenna. |
| 10 | OLED Display | SSD1315 0.96" OLED display (I2C Address: 0x3C). |

### Right Panel

| No. | Component | Description |
|-----|-----------|-------------|
| 11 | MIPI Ports | 2x 22-way MIPI ports for CSI cameras (MIPI0, MIPI1). |
| 12 | USB 3.0 Ports | 2x USB 3.0 host ports (shared via USB 3.0 Hub). |
| 13 | HDMI | Full-size Type-A HDMI for display up to 4K resolution. |
| 14 | Micro SIM Socket | Insert SIM card for 4G module. |

### Gigabit Ethernet Ports

| Port | Interface | Description |
|------|-----------|-------------|
| eth0 | Native CM5 | Default 10/100/1000M Gigabit Ethernet of CM5 |
| eth1 | USB 3.0 Controller | From USB 3.0 to Gigabit Ethernet Controller |

### LED Indicators

| LED | Function |
|-----|----------|
| PWR | CM5 power indicator (same as red LED on Pi 5) |
| ACT | CM5 activity indicator (same as green LED on Pi 5) |
| M.2 | NVMe SSD activity |
| 4G PWR | Power indicator for 4G module |
| WWAN | Indicator for 4G WWAN activity |
| LED0 | User programmable LED 0 (GPIO20) |
| LED1 | User programmable LED 1 (GPIO21) |

## Internal Board Layout

Access to internal components requires removing the enclosure cover.

![IRIV EdgeAI CM5 internal board](/img/products/iriv-edgeai-cm5/internal-layout.png)

### Internal Components

| No. | Component | Description |
|-----|-----------|-------------|
| 1 | GPIO Header for AI HAT+ | 40-pin header for Raspberry Pi AI HAT+ connection. Only key pins connected (5V, 3V3, GND, ID_SC, ID_SD). |
| 2 | Boot/Run Switch | **Boot**: USB-C for OS programming. **Run**: Normal operation with USB-C debug console. |
| 3 | PCIe Port for AI HAT+ | PCIe connection for Raspberry Pi AI HAT+. Similar to PCIe port on Raspberry Pi 5. |
| 4 | Wireless Disable | Solder jumper to disable WiFi (WL) or Bluetooth (BT). |
| 5 | RTC Battery | CR2032 coin cell holder for RTC backup. |
| 6 | System Fuse (4A) | 4A replaceable fuse for system power (LED drivers excluded). |
| 7 | Secure Authentication | ATECC608B chip (I2C Address: 0x60). Located on bottom layer. |
| 8 | OLED Connector | Connection point for SSD1315 OLED display. |
| 9 | LED Driver Fuse (2A) | Independent fuse for LED driver outputs. |
| 10 | Active Buzzer | User programmable active piezo buzzer (GPIO19, active high). |
| 11 | mPCIe Module Standoff | M2 standoff for mini PCIe module mounting. |
| 12 | mPCIe Socket | Mini PCIe for 4G/LoRa modules. USB 2.0 only (no PCIe). Reset: GPIO5. Power: GPIO6. |
| 13 | M.2 Socket (Key-M) | PCIe Gen 2 1-lane. Supports NVMe SSD 2230 & 2242. **M.2 SATA not supported.** |
| 14 | M.2 Module Standoff | M2 standoff for 2230/2242 NVMe SSD. |
| 15 | Raspberry Pi AI HAT+ | AI Accelerator mounting location. |

## Block Diagram

![IRIV EdgeAI CM5 block diagram](/img/products/iriv-edgeai-cm5/block-diagram.png)

The block diagram illustrates the following signal paths:

- **Power**: VIN terminal and USB-C power inputs
- **Display**: HDMI output, I2C OLED display
- **USB**: 2x USB 3.0 via hub, USB-C debug/boot
- **Network**: Dual Gigabit Ethernet (eth0 native, eth1 via USB 3.0 controller)
- **Storage**: M.2 PCIe for NVMe SSD
- **AI**: PCIe connection to AI HAT+
- **Camera**: 2x MIPI CSI ports
- **Industrial I/O**: Isolated RS485, Digital inputs (GPIO22, GPIO27), Digital outputs (GPIO23, GPIO24), LED drivers (GPIO12, GPIO13)
- **User I/O**: Buttons, LEDs, Buzzer
- **Security**: ATECC608B secure authentication (I2C)

## Dimensions

![IRIV EdgeAI CM5 dimensions](/img/products/iriv-edgeai-cm5/dimensions.png)

### Enclosure Dimensions

| Dimension | Value |
|-----------|-------|
| Length | 139mm |
| Width | 88mm |
| Height | 38mm |

*Note: Dimensions are for metal enclosure only, excluding antenna, DIN socket, and connectors.*

### Overall Height with Antenna

| Measurement | Value |
|-------------|-------|
| Total Height (with antenna) | 250.70mm |
| Width (with DIN bracket) | 111.46mm |

### Detailed Dimensions

- Enclosure body: 139mm x 88mm x 38mm
- Side clearance for DIN bracket: 8mm

---

**Source(s):**
- IRIV EdgeAI CM5 Datasheet, Rev 1.0, July 2025
- IRIV EdgeAI CM5 product page (my.cytron.io), read Oct 2026
