---
sidebar_position: 5
title: Interfaces and Mapping
---

# Interfaces and Mapping

This page provides detailed specifications for all interfaces on the IRIV EdgeAI CM5 and their GPIO/system mappings.

## Pin and Interface Mapping Summary

| Function | Raspberry Pi CM5 Mapping |
|----------|-------------------------|
| RS485 | `/dev/ttyACM0` |
| Digital Input DI0 | GPIO22 |
| Digital Input DI1 | GPIO27 |
| Digital Output DO0 | GPIO23 |
| Digital Output DO1 | GPIO24 |
| LED Lighting Driver L0 | GPIO12 |
| LED Lighting Driver L1 | GPIO13 |
| User Button | GPIO4 |
| User LED0 | GPIO20 |
| User LED1 | GPIO21 |
| Active Buzzer | GPIO19 |
| mPCIe Reset (Active Low) | GPIO5 |
| mPCIe Power | GPIO6 |
| USB-C Debug | UART0 |
| OLED Display | I2C1 (Address: 0x3C) |
| Secure Authentication | I2C1 (Address: 0x60) |

## Ethernet

| Port | Interface | Speed | OS Mapping |
|------|-----------|-------|------------|
| eth0 | Native CM5 Gigabit Ethernet | 10/100/1000M | `eth0` |
| eth1 | USB 3.0 to Gigabit Ethernet Controller | 10/100/1000M | `eth1` |

## USB Ports

### USB 3.0

| Parameter | Specification |
|-----------|---------------|
| Quantity | 2 ports |
| Speed | 5 Gbps (SuperSpeed) |
| Connection | Both ports share a USB 3.0 Hub |

### USB-C

| Parameter | Specification |
|-----------|---------------|
| Quantity | 1 port |
| Boot Mode | OS image loading to eMMC |
| Run Mode | Connected to CM5 UART0 via USB-UART chip (console/debug) |
| Power Input | 5V 5A (PD capable) |
| Mode Selection | Via internal Boot/Run switch |

## HDMI

| Parameter | Specification |
|-----------|---------------|
| Quantity | 1 port |
| Connector | Full-size Type-A |
| Standard | HDMI 2.0 |
| Maximum Resolution | 4K @ 60Hz |

## MIPI Camera Ports

| Parameter | Specification |
|-----------|---------------|
| Quantity | 2 ports (MIPI0, MIPI1) |
| Connector | 22-way MIPI |
| Function | CSI Camera input |

## Terminal Block Interfaces

### Power Supply Input (VIN)

| Parameter | Min | Max | Unit |
|-----------|-----|-----|------|
| Voltage | 10 | 30 | VDC |
| Surge Protection | - | 60V for 20ms | - |
| Fuse | - | 4A | - |

### Isolated RS485

| Parameter | Specification |
|-----------|---------------|
| Device | `/dev/ttyACM0` |
| Maximum Baud Rate | 500 kbps |
| Isolation Voltage | 5000 Vrms |
| Termination Resistor | 120 ohm (onboard) |
| Direction Control | Automatic |
| Connections | A, B, GND (GND recommended for noise immunity) |

### Isolated Bidirectional Digital Input

| Parameter | Specification |
|-----------|---------------|
| Quantity | 2 channels (DI0, DI1) |
| Common Pin | S/S (Sink/Source) |
| Low Level (VIL) | 0 - 0.8V |
| High Level (VIH) | 3 - 50V |
| Isolation Voltage | 3750 Vrms |
| Sensor Compatibility | PNP and NPN sensors |
| GPIO Mapping | DI0: GPIO22, DI1: GPIO27 |

### Isolated Bidirectional Digital Output

| Parameter | Specification |
|-----------|---------------|
| Quantity | 2 channels (DO0, DO1) |
| Type | Dry contact (solid state relay) |
| Maximum Voltage | 50V (DC or AC) |
| Maximum Current | 500mA per channel |
| Isolation Voltage | 1500 Vrms |
| GPIO Mapping | DO0: GPIO23, DO1: GPIO24 |

*Note: For inductive loads (relays, solenoids), connect a flyback diode in parallel with the load to reduce EMI.*

### LED Lighting Driver

| Parameter | Specification |
|-----------|---------------|
| Quantity | 2 channels (L0, L1) |
| Type | Wet contact (MOSFET) |
| Output Voltage | Same as VIN |
| Maximum Current | 2A per channel |
| PWM Capable | Yes |
| Fuse | 2A (independent, replaceable) |
| GPIO Mapping | L0: GPIO12, L1: GPIO13 |

:::caution
LED Driver outputs are not powered when using USB-C power input. Use VIN terminal power for LED driver functionality.
:::

## Buttons

| Button | GPIO | Function |
|--------|------|----------|
| User Button | GPIO4 | User programmable |
| Power Button | - | Single press: On. Double-press: Soft shutdown. Long-press: Force shutdown. |

## LEDs

| LED | GPIO | Function |
|-----|------|----------|
| LED0 | GPIO20 | User programmable |
| LED1 | GPIO21 | User programmable |
| PWR | - | CM5 power indicator |
| ACT | - | CM5 activity indicator |
| M.2 | - | NVMe SSD activity |
| 4G PWR | - | 4G module power indicator |
| WWAN | - | 4G WWAN activity |

## Active Buzzer

| Parameter | Specification |
|-----------|---------------|
| Type | Active piezo buzzer |
| GPIO | GPIO19 |
| Activation | Output HIGH to activate |

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
| Interface | USB 2.0 only (**No PCIe signal**) |
| Use Case | 4G/LTE modules, LoRa modules |
| Power Control | GPIO6 |
| Reset Control | GPIO5 (active low) |
| SIM Support | Micro SIM socket on right panel |

### PCIe Port for AI HAT+

| Parameter | Specification |
|-----------|---------------|
| Interface | PCIe (similar to Raspberry Pi 5) |
| Function | Raspberry Pi AI HAT+ connection |
| GPIO Header | 5V, 3V3, GND, ID_SC, ID_SD |

## I2C Devices

| Device | I2C Bus | Address |
|--------|---------|---------|
| SSD1315 OLED Display | I2C1 | 0x3C |
| ATECC608B Secure Auth | I2C1 | 0x60 |

## Wireless

| Parameter | Specification |
|-----------|---------------|
| WiFi | 2.4GHz / 5.0GHz IEEE 802.11 b/g/n/ac |
| Bluetooth | Bluetooth 5.0, BLE |
| Antenna | External antenna (included) |
| Disable Option | Solder jumper on internal board (WL/BT) |
