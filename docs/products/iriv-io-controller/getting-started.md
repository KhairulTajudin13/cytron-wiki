---
title: Getting Started
sidebar_position: 2
---

# Getting Started

High-level guide to set up and configure your IRIV IO Controller for first use.

## Hardware Requirements

**Minimum Requirements:**
- IRIV IO Controller unit
- Power supply: DC 10-30V OR USB-C 5V (4.9V to 5.2V)
- USB-C cable for programming

**Optional:**
- Ethernet cable for network connectivity
- Industrial sensors and actuators for I/O connections

## Power Requirements

The IRIV IO Controller supports two power input methods:

### Terminal 1 Power Input
- **Voltage Range:** DC 10V to 30V
- **Surge Protection:** Up to 60V for 20ms
- **Protection:** 500mA PTC (resettable fuse)
- **No earth connection required**

### USB-C Power Input
- **Voltage:** DC 5V
- **Voltage Range:** 4.9V to 5.2V

**Note:** The power supply input is protected with a 500mA PTC. The PTC might open in the event of surge or overcurrent. If the device is unable to power up, wait for the PTC to cool down. If the issue persists, contact support.

## First Boot

1. **Connect power** - Use either Terminal 1 (DC 10-30V) or USB-C (5V)
2. **Observe Power LED** - PWR LED (on front panel) should illuminate when powered
3. **Check device status** - Status LEDs indicate system readiness

## Programming the Device

The IRIV IO Controller uses the RP2350A bootloader for programming.

### Entering Bootloader Mode

1. **Press and hold the Boot button** (pinhole button, use paperclip)
2. **While holding Boot, press the Reset button** (pinhole button)
3. **Release both buttons**
4. **Device appears as mass storage drive** on your computer

### Upload Program

- Drag and drop UF2 firmware files to the mass storage drive
- Device automatically reboots after upload completes

## CircuitPython Quick Start

For a complete hands-on tutorial covering CircuitPython setup, firmware installation, and basic I/O operations, see the official guide:

**[Getting Started with IRIV IO Controller with CircuitPython](https://my.cytron.io/tutorial/getting-started-with-iriv-io-controller-with-circuit-python)**

This tutorial covers:
- CircuitPython firmware installation
- Interface control (buttons, LEDs, buzzer)
- Digital and analog I/O operations
- Real-time clock (RTC) usage
- RS485/MODBUS RTU communication
- Ethernet connectivity and IoT integration

## Default Functionality

The IRIV IO Controller ships **preprogrammed as a MODBUS RTU IO Expander** with counter function. This default firmware allows immediate use in MODBUS RTU networks without additional programming.

To use custom applications, upload new firmware via the bootloader as described above.

## Next Steps

**Hardware Configuration:**
- Review [hardware layout](./hardware-layout.md) and [internal components](./internal-board-layout.md)
- Understand [I/O specifications](./io-reference.md) for connecting sensors and actuators

**Software Development:**
- Explore [software support](./software-support.md) for available platforms
- Review [interfaces and functions](./interfaces-and-functions.md) for RS485 and Ethernet
- Follow [tutorials](./tutorials.md) for specific use cases

---

**Source(s):**
- IRIV IO Controller Datasheet, Rev 1.0, July 2024
- Getting Started with IRIV IO Controller with CircuitPython tutorial (my.cytron.io)
