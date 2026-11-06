---
sidebar_position: 5
title: Software Setup
---

# Software Setup

This page covers operating system compatibility, boot modes, storage options, and GPIO-controlled features for the IRIV SmartHub CM5.

## Operating System Compatibility

The IRIV SmartHub CM5 is based on the Raspberry Pi Compute Module 5 and runs Raspberry Pi OS. Raspberry Pi OS may be pre-installed (Cytron's tutorial says units "can have" it pre-installed; the user manual does not say). If the unit does not boot to a desktop, flash the OS as described below.

| OS | Status |
|----|--------|
| Raspberry Pi OS | Supported |
| Ubuntu | Listed as an option in Cytron's getting-started tutorial |

For other operating systems compatible with Raspberry Pi CM5, refer to the official Raspberry Pi documentation.

## Boot Modes

The IRIV SmartHub CM5 supports multiple boot configurations controlled by the internal Boot/Run switch and boot order settings.

### Boot/Run Mode Switch

| Position | Function |
|----------|----------|
| Boot | CM5 enters USB boot mode for OS programming via USB-C |
| Run | Normal operation mode |

### Boot Sources

| Source | Support |
|--------|---------|
| eMMC | Yes (default) |
| NVMe SSD | Yes (via M.2 Key-M socket, bootable) |
| USB | Not specified in official manual |
| Network | Not specified in official manual |

### Changing Boot Order

To boot from NVMe SSD instead of eMMC, configure the boot order using the Raspberry Pi configuration tools. Refer to official Raspberry Pi CM5 documentation for boot order configuration.

## Storage Options

### Built-in eMMC

| Parameter | Options |
|-----------|---------|
| Capacity | 16GB / 32GB / 64GB (varies by SKU) |
| Function | Primary OS storage |

### M.2 NVMe SSD Expansion

| Parameter | Specification |
|-----------|---------------|
| Interface | PCIe Gen 2, 1-lane |
| Supported Form Factors | 2230, 2242 |
| Bootable | Yes |
| SATA Support | **No** (M.2 SATA SSDs are not supported) |

To install an NVMe SSD:

1. Power off the device and disconnect all cables
2. Remove the enclosure cover
3. Insert the NVMe SSD into the M.2 Key-M socket
4. Secure with the standoff screw (use 2230 or 2242 position as appropriate)
5. Reassemble the enclosure

## GPIO-Controlled Features

### Programmable LEDs

Control the user LEDs by setting GPIO pins as outputs:

| LED | GPIO | Active State |
|-----|------|--------------|
| LED0 | GPIO20 | HIGH = ON (expected; not stated in the user manual) |
| LED1 | GPIO21 | HIGH = ON (expected; not stated in the user manual) |

Example using `pinctrl` (Raspberry Pi OS):
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

Example:
```bash
# Activate buzzer
pinctrl set 19 op dh

# Deactivate buzzer
pinctrl set 19 op dl
```

### User Button

| Parameter | Value |
|-----------|-------|
| GPIO | GPIO4 |
| Read State | Not stated in the user manual (commonly LOW when pressed — check before relying on it) |

The user button can be configured for various functions including safe shutdown. Implementation requires software configuration.

### Mini PCIe Power and Reset Control

| Function | GPIO | Usage |
|----------|------|-------|
| Power | GPIO6 | Turns mini PCIe power on/off (polarity not stated in the user manual) |
| Reset | GPIO5 | LOW = Reset (active low) |

Use these GPIOs to control power cycling and reset of modules installed in the mini PCIe socket (e.g., 4G/LTE modules).

## RTC Configuration

The IRIV SmartHub CM5 includes a CR2032 coin cell holder for the built-in RTC on the CM5.

| Parameter | Value |
|-----------|-------|
| Battery Type | CR2032 |
| Function | Keeps RTC running when system is powered off |

The RTC is built into the CM5 module. Install a CR2032 battery to maintain time when the system is powered off.

## Wireless Configuration

### WiFi

WiFi is enabled by default. Configure using standard Raspberry Pi OS network tools:

```bash
# Scan for networks
nmcli device wifi list

# Connect to a network
nmcli device wifi connect "SSID" password "password"
```

### Disabling Wireless

To permanently disable WiFi or Bluetooth, solder the corresponding jumper pads on the internal board (silkscreen **WLAN** for WiFi and **BT** for Bluetooth, under "DISABLE" on the back of the board).

---

**Source(s):**
- IRIV SmartHub CM5 User Manual (IRIV-SH5), Rev 1.3, Dec 2025
- IRIV SmartHub CM5 product page (my.cytron.io), read Oct 2026
