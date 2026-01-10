---
sidebar_position: 2
title: Getting Started
---

# Getting Started with IRIV EdgeAI CM5

This guide covers the initial setup and first boot process for the IRIV EdgeAI CM5.

## What You Need

To power up and use the IRIV EdgeAI CM5, prepare the following:

- IRIV EdgeAI CM5 unit
- Compatible power supply (see Power Requirements below)
- HDMI-compatible monitor
- USB keyboard and mouse

### Optional Components

- M.2 NVMe SSD for storage expansion
- Raspberry Pi AI HAT+ for AI acceleration
- CSI camera modules (22-pin MIPI)
- CR2032 coin cell battery for RTC

## Power Requirements

The IRIV EdgeAI CM5 supports two power input methods:

### VIN Terminal (Recommended for Industrial/Permanent Setups)

| Parameter | Min | Max | Unit |
|-----------|-----|-----|------|
| Input Voltage | 10 | 30 | VDC |
| Surge Protection | - | 60V for 20ms | - |

Use a regulated power supply with adequate current capacity for your application requirements.

### USB-C Port (For Development/Basic Applications)

| Parameter | Value |
|-----------|-------|
| Voltage | 5V |
| Current | 5A |
| Connector | USB-C PD capable |

:::caution
When using USB-C power, the LED Driver Terminal outputs (L0 & L1) are **not powered**. Use VIN terminal power if LED drivers are required.
:::

## Power Consumption

| Condition | Max Power |
|-----------|-----------|
| Running stress test (`stress-ng --cpu 4 --cpu-method fft`) | 11W |

*Note: USB load not included in the above measurement.*

## Terminal Power Connection

Connect power to the VIN terminal as follows:

1. Use a DC power supply rated 10-30V
2. Connect positive (+) to VIN terminal
3. Connect negative (-) to GND terminal
4. No earth connection is required

The power input is protected by a 4A fuse. If the device fails to power on, check and replace the fuse if necessary.

## Powering On

### From VIN Terminal

1. Connect power supply to VIN and GND terminals
2. Enable the power supply
3. Observe the PWR LED indicator for confirmation
4. The system will boot automatically

### From USB-C

1. Connect a 5V 5A USB-C PD power supply
2. Press the **Power Button** once to turn on
3. Observe LED indicators for power confirmation

## Powering Off

Two methods are available:

| Method | Action |
|--------|--------|
| Soft Shutdown | Double-press the Power Button |
| Force Shutdown | Long-press the Power Button (5+ seconds) |

Alternative method:
- Press and hold the **User Button** for 5 seconds

## First Boot

1. Connect power using either VIN terminal or USB-C
2. Connect an HDMI monitor to the HDMI port
3. Connect USB keyboard and mouse to USB 3.0 ports
4. Power on the device
5. Wait for the operating system to boot
6. The OLED display (if connected internally) will show system status

## Boot/Run Mode Switch

The internal Boot/Run switch controls USB-C functionality:

| Position | Function |
|----------|----------|
| Boot | CM5 enters boot mode for OS programming via USB-C |
| Run | Normal operation. USB-C connects to CM5 UART0 via USB-UART converter for console/debug access. |

## Network Connectivity

### Wired Ethernet

The IRIV EdgeAI CM5 has two Gigabit Ethernet ports:

| Port | Interface | Description |
|------|-----------|-------------|
| eth0 | Native CM5 | Default 10/100/1000M Gigabit Ethernet |
| eth1 | USB 3.0 Controller | Secondary Gigabit Ethernet via USB 3.0 |

### Wireless

WiFi is available via the CM5's built-in wireless (2.4GHz / 5.0GHz 802.11 b/g/n/ac).

## OS Installation / Reflashing

To reflash the operating system:

1. Power off the device
2. Open the enclosure to access the internal board
3. Set the **Boot/Run Switch** to **Boot** position
4. Connect USB-C cable between the device and your computer
5. Use Raspberry Pi Imager or rpiboot to flash the OS to eMMC
6. After flashing, set the switch back to **Run** position
7. Reassemble and power on normally

## Next Steps

- Review the [Hardware Layout](./hardware-layout) to understand all ports and connectors
- Check [Interfaces and Mapping](./interfaces-and-mapping) for GPIO and terminal assignments
- See [AI Quickstart](./ai-quickstart) for AI HAT+ setup
- Review [Software Setup](./software-setup) for OS configuration
