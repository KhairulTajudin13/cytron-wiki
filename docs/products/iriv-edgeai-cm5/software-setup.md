---
sidebar_position: 6
title: Software Setup
---

# Software Setup

This page covers operating system compatibility, boot configuration, and software setup for the IRIV EdgeAI CM5.

## Operating System

The IRIV EdgeAI CM5 is based on the Raspberry Pi Compute Module 5.

| OS | Status |
|----|--------|
| Raspberry Pi OS | Supported |

For other operating systems compatible with Raspberry Pi CM5, refer to the official Raspberry Pi documentation.

## Boot Modes

### Boot/Run Mode Switch

| Position | Function |
|----------|----------|
| Boot | CM5 enters USB boot mode for OS programming via USB-C |
| Run | Normal operation. USB-C provides UART0 console access via USB-UART converter. |

### Boot Sources

| Source | Support |
|--------|---------|
| eMMC | Yes (primary) |
| NVMe SSD | Yes (via M.2 Key-M socket, bootable) |

## Storage Options

### Built-in eMMC

| Parameter | Options |
|-----------|---------|
| Capacity | 16GB / 32GB / 64GB (varies by SKU) |
| RAM | 2GB / 4GB / 8GB / 16GB LPDDR4-4267 |

### M.2 NVMe SSD

| Parameter | Specification |
|-----------|---------------|
| Interface | PCIe Gen 2, 1-lane |
| Supported Form Factors | 2230, 2242 |
| Bootable | Yes |
| SATA Support | **No** (M.2 SATA SSDs are not supported) |

## Serial Console Access

When the Boot/Run switch is in **Run** position, the USB-C port provides serial console access:

| Parameter | Value |
|-----------|-------|
| Device | UART0 via USB-UART converter |
| Connection | USB-C to host computer |
| Terminal Settings | Standard Raspberry Pi serial console settings |

Use a terminal application (PuTTY, minicom, screen) to connect to the USB serial port.

## I2C Devices

The IRIV EdgeAI CM5 has two I2C devices on I2C1:

### OLED Display (SSD1315)

| Parameter | Value |
|-----------|-------|
| Type | 0.96" OLED |
| Controller | SSD1315 |
| I2C Bus | I2C1 |
| Address | 0x3C |

### Secure Authentication (ATECC608B)

| Parameter | Value |
|-----------|-------|
| Type | Cryptographic authentication IC |
| I2C Bus | I2C1 |
| Address | 0x60 |

Scan for I2C devices:
```bash
i2cdetect -y 1
```

## GPIO Configuration

### User LEDs

| LED | GPIO | Active State |
|-----|------|--------------|
| LED0 | GPIO20 | HIGH = ON |
| LED1 | GPIO21 | HIGH = ON |

Example:
```bash
# Turn on LED0
pinctrl set 20 op dh

# Turn off LED0
pinctrl set 20 op dl
```

### Active Buzzer

| Parameter | Value |
|-----------|-------|
| GPIO | GPIO19 |
| Active State | HIGH = Beep |

```bash
# Activate buzzer
pinctrl set 19 op dh

# Deactivate buzzer
pinctrl set 19 op dl
```

### Digital Inputs

| Input | GPIO | Read State |
|-------|------|------------|
| DI0 | GPIO22 | Read input level |
| DI1 | GPIO27 | Read input level |

```bash
# Read DI0
pinctrl get 22
```

### Digital Outputs

| Output | GPIO | Control |
|--------|------|---------|
| DO0 | GPIO23 | Set HIGH/LOW |
| DO1 | GPIO24 | Set HIGH/LOW |

```bash
# Set DO0 HIGH
pinctrl set 23 op dh

# Set DO0 LOW
pinctrl set 23 op dl
```

### LED Lighting Drivers

| Driver | GPIO | Features |
|--------|------|----------|
| L0 | GPIO12 | PWM capable |
| L1 | GPIO13 | PWM capable |

The LED drivers support PWM for brightness control. Output voltage follows VIN.

### Mini PCIe Module Control

| Function | GPIO | Usage |
|----------|------|-------|
| Power | GPIO6 | HIGH = Power on |
| Reset | GPIO5 | LOW = Reset (active low) |

```bash
# Power cycle mPCIe module
pinctrl set 6 op dl  # Power off
sleep 1
pinctrl set 6 op dh  # Power on

# Reset mPCIe module
pinctrl set 5 op dl  # Assert reset
sleep 1
pinctrl set 5 op dh  # Release reset
```

## RS485 Communication

| Parameter | Value |
|-----------|-------|
| Device | `/dev/ttyACM0` |
| Max Baud Rate | 500 kbps |
| Direction Control | Automatic |
| Termination | 120 ohm (onboard) |

Example using Python:
```python
import serial

ser = serial.Serial('/dev/ttyACM0', 9600, timeout=1)
ser.write(b'Hello RS485\n')
response = ser.readline()
ser.close()
```

## AI Accelerator Setup

*Note: Specific AI software stack references are not provided in the official datasheet.*

For Raspberry Pi AI HAT+ setup:
1. Install the AI HAT+ hardware (see [AI Quickstart](./ai-quickstart))
2. Follow official Raspberry Pi AI HAT+ software installation guides
3. Configure according to your AI application requirements

## RTC Configuration

| Parameter | Value |
|-----------|-------|
| Battery Type | CR2032 |
| Function | Maintains time when system is powered off |

The RTC is built into the CM5 module. Install a CR2032 battery to maintain time when powered off.

## Wireless Configuration

### WiFi

Configure using standard Raspberry Pi OS network tools:
```bash
# List available networks
nmcli device wifi list

# Connect to network
nmcli device wifi connect "SSID" password "password"
```

### Disabling Wireless

To permanently disable WiFi or Bluetooth, solder the corresponding jumper pads on the internal board:
- WL: WiFi disable
- BT: Bluetooth disable
