---
sidebar_position: 2
title: Getting Started
---

# Getting Started with IRIV SmartHub CM5

This guide covers the initial setup and first boot process for the IRIV SmartHub CM5.

## What You Need

To power up and use the IRIV SmartHub CM5, prepare the following:

- IRIV SmartHub CM5 unit (ships with Raspberry Pi OS pre-installed)
- Compatible power supply (see Power Requirements below)
- HDMI-compatible monitor
- USB keyboard and mouse
- USB-C cable (required only for bootloader or OS reflashing mode)

### Optional Components

- M.2 NVMe SSD for storage expansion
- Gigabit Ethernet cable for wired connectivity
- 4G/LTE module (regional variants available)
- CR2032 coin cell battery for RTC (sold separately)

## Power Requirements

The IRIV SmartHub CM5 supports multiple power input methods:

### DC Barrel Jack (Recommended for Industrial Use)

| Parameter | Value |
|-----------|-------|
| Input Voltage | 10-30V DC |
| Surge Protection | Up to 60V for 20ms |
| Recommended Current | More than 2A |

Compatible adapters:
- 12V 2A DC Jack adapter
- 24V 1.5A DC Jack adapter

### USB-C Power

| Parameter | Value |
|-----------|-------|
| Input Voltage | 4.9-5.2V DC |
| Recommended | 5V 5A USB-C PD power adapter |

Compatible adapters:
- 45W USB-C PD Power Supply (official Raspberry Pi option)
- 27W USB-C PD Universal Adapter

:::caution
The USB-C port is dual-function. Ensure the Boot/Run switch is set to **Run** position when using USB-C for power. The **Boot** position is only for OS flashing.
:::

## Power Consumption

| Condition | Max Power |
|-----------|-----------|
| Running stress test (`stress-ng --cpu 4 --cpu-method fft`) | 6W |

*Note: USB load not included in the above measurement.*

## First Boot

### Using DC Barrel Jack Power

1. Connect a DC power adapter (10-30V) to the DC barrel jack
2. Connect an HDMI monitor to either HDMI port
3. Connect USB keyboard and mouse to the USB ports
4. The device will automatically power on when DC power is connected
5. Wait for Raspberry Pi OS to boot (pre-installed)

### Using USB-C Power

1. Ensure the internal Boot/Run switch is set to **Run** position
2. Connect a USB-C PD power adapter (5V 5A recommended)
3. Connect an HDMI monitor and USB peripherals
4. Press the **Power Button** once to turn on the device
5. Wait for Raspberry Pi OS to boot

## Power Control

### Turning On

- **DC Power**: Device powers on automatically when DC is connected
- **USB-C Power**: Single press the Power Button

### Turning Off

- **Double-press** the Power Button for soft shutdown
- **Long-press** the Power Button for force shutdown

## OS Installation / Reflashing

The IRIV SmartHub CM5 ships with Raspberry Pi OS pre-installed on the eMMC. If you need to reflash the OS:

1. Open the enclosure to access the internal board
2. Set the **Boot/Run Mode Switch** to **Boot** position
3. Connect a USB-C cable between the IRIV SmartHub CM5 and your computer
4. Use Raspberry Pi Imager or rpiboot tool on your computer to flash the OS to eMMC
5. After flashing, set the switch back to **Run** position
6. Reassemble the enclosure and power on normally

## Network Connectivity

- **Wired**: Connect an Ethernet cable to the Gigabit Ethernet port (eth0)
- **Wireless**: WiFi is enabled by default (2.4GHz / 5.0GHz 802.11 b/g/n/ac)

## Next Steps

- Review the [Hardware Layout](./hardware-layout) to understand all ports and connectors
- Check [Interfaces and Mapping](./interfaces-and-mapping) for GPIO assignments
- See [Software Setup](./software-setup) for boot configuration options
