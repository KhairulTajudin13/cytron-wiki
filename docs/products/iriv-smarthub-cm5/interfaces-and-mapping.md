---
sidebar_position: 4
title: Interfaces and Mapping
---

# Interfaces and Mapping

This page provides detailed specifications for all interfaces on the IRIV SmartHub CM5 and their GPIO mappings.

## Ethernet

| Interface | Specification | OS Mapping |
|-----------|--------------|------------|
| Gigabit Ethernet | 10/100/1000M RJ45 | `eth0` |

The Gigabit Ethernet port is the default CM5 Ethernet interface.

## USB Ports

### USB 3.0

| Parameter | Specification |
|-----------|---------------|
| Quantity | 2 ports |
| Speed | 5 Gbps (SuperSpeed) |
| Maximum Total Current | 2000mA (shared between both ports) |
| Connection | Direct from CM5 |

### USB 2.0

| Parameter | Specification |
|-----------|---------------|
| Quantity | 2 ports |
| Speed | 480 Mbps (High Speed) |
| Maximum Total Current | 1000mA (shared between both ports) |
| Connection | Via USB Hub |

### USB-C

| Parameter | Specification |
|-----------|---------------|
| Quantity | 1 port |
| Function | Dual-function (Boot/Power) |
| Boot Mode | OS image loading to eMMC |
| Power Mode | 5V 5A (PD capable) |
| Mode Selection | Via internal Boot/Run switch |

## HDMI

| Parameter | Specification |
|-----------|---------------|
| Quantity | 2 ports (HDMI0, HDMI1) |
| Connector | Full-size Type-A |
| Standard | HDMI 2.0 |
| Maximum Resolution | 4K @ 60Hz |

Both HDMI ports support independent displays up to 4K resolution.

## Buttons

| Button | GPIO | Function |
|--------|------|----------|
| User Button | GPIO4 | User programmable. Can be configured as safe shutdown button. |
| Power Button | - | Single press: Power on. Double-press/Long-press: Power off. |

## LEDs

| LED | GPIO | Function |
|-----|------|----------|
| LED0 | GPIO20 | User programmable LED 0 |
| LED1 | GPIO21 | User programmable LED 1 |
| PWR | - | CM5 power indicator (same as red LED on Pi 5) |
| ACT | - | CM5 activity indicator (same as green LED on Pi 5) |
| M.2 | - | NVMe SSD activity indicator |

## Active Buzzer

| Parameter | Specification |
|-----------|---------------|
| Type | Active piezo buzzer |
| GPIO | GPIO19 |
| Activation | Output HIGH to beep |

## Expansion Sockets

### M.2 Key-M Socket

| Parameter | Specification |
|-----------|---------------|
| Interface | PCIe Gen 2, 1-lane |
| Supported Sizes | 2230, 2242 |
| Function | NVMe SSD (Bootable) |
| Note | **M.2 SATA SSD is not supported** |

### Mini PCIe Socket

| Parameter | Specification |
|-----------|---------------|
| Interface | USB 2.0 only (**No PCIe signal available**) |
| Use Case | 4G/LTE modules, LoRa modules |
| Power Control | GPIO6 (on/off) |
| Reset Control | GPIO5 (active low) |

:::warning
The mini PCIe socket only provides USB 2.0 connectivity. PCIe signals are not connected. Modules requiring PCIe will not function.
:::

## GPIO Summary

| Function | GPIO Pin |
|----------|----------|
| User Button | GPIO4 |
| Mini PCIe Reset | GPIO5 (active low) |
| Mini PCIe Power | GPIO6 |
| Active Buzzer | GPIO19 |
| LED0 | GPIO20 |
| LED1 | GPIO21 |

## Wireless

| Parameter | Specification |
|-----------|---------------|
| WiFi | 2.4GHz / 5.0GHz IEEE 802.11 b/g/n/ac |
| Bluetooth | Bluetooth 5.0, BLE |
| Antenna | External antenna (included) |
| Disable Option | Solder jumper on internal board |
