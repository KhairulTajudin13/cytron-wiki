---
title: Software Support
sidebar_position: 7
---

# Software Support

Software platforms and communication protocols supported by the IRIV IO Controller.

## Supported Development Platforms

The IRIV IO Controller is based on the Raspberry Pi RP2350A microcontroller, which supports multiple programming environments.

### CircuitPython

CircuitPython is a beginner-friendly Python variant designed for microcontrollers.

**Status:** Official board build — [IRIV IO Controller (RP2350) on circuitpython.org](https://circuitpython.org/board/cytron_iriv_io_controller/), installed as a UF2 file

CircuitPython provides:
- Python-based programming (easy to learn)
- Extensive library support for sensors and peripherals
- Interactive REPL for testing
- No compilation required

For a comprehensive CircuitPython tutorial, see:
[Getting Started with IRIV IO Controller with CircuitPython](https://my.cytron.io/tutorial/getting-started-with-iriv-io-controller-with-circuit-python)

### MicroPython

MicroPython is a lean Python implementation for microcontrollers.

**Status:** The RP2350A chip is supported by MicroPython; no IRIV-specific MicroPython build is published

MicroPython provides:
- Full Python 3 implementation
- Lightweight and efficient
- Extensive standard library

### C/C++ SDK

The official Raspberry Pi C/C++ SDK supports the RP2350A.

**Status:** Supports the RP2350A chip; no IRIV-specific examples are published

C/C++ SDK provides:
- Low-level hardware access
- Maximum performance
- Full control over peripherals
- CMake-based build system

Refer to Raspberry Pi official documentation for C/C++ SDK usage with RP2350A.

## Communication Protocols

The IRIV IO Controller supports both OT (Operational Technology) and IT (Information Technology) communication protocols.

### MODBUS RTU (Default Firmware)

Cytron's getting-started material describes the unit as shipping **preprogrammed as a MODBUS RTU IO Expander** with counter function.

:::note
The default firmware is not described in the datasheet. Confirm the firmware version and MODBUS register map with Cytron support before relying on it.
:::

**Interface:** RS485 (isolated)
**Maximum Baud Rate:** 500 kbps
**Function:** IO expansion and pulse counting

Cytron also publishes a [Modbus Configuration Tool tutorial](https://my.cytron.io/tutorial/modbus-configuration-tool-slave-id-and-baudrate-setup) for setting the slave ID and baud rate.

### MODBUS TCP

**Interface:** Ethernet (W5500)
**Protocol Support:** Built into W5500 TCP/IP stack

The W5500 Ethernet controller supports MODBUS TCP through its hardwired TCP/IP implementation.

### MQTT

**Interface:** Ethernet (W5500)
**Protocol Support:** Via application layer

MQTT protocol can be implemented for IoT gateway applications, sensor data publishing, and cloud integration.

### HTTP

**Interface:** Ethernet (W5500)
**Protocol Support:** Via application layer

The datasheet lists HTTP (with MQTT) as supported IT protocols, for web-based monitoring and REST-style integration. HTTPS is not stated in the datasheet.

### TCP/UDP

**Interface:** Ethernet (W5500)
**Protocol Support:** Hardwired in W5500

The W5500 provides hardwired support for:
- TCP (Transmission Control Protocol)
- UDP (User Datagram Protocol)
- ICMP (Internet Control Message Protocol)
- IPv4
- ARP (Address Resolution Protocol)
- IGMP (Internet Group Management Protocol)
- PPPoE (Point-to-Point Protocol over Ethernet)

## Firmware Upload

Firmware is uploaded to the IRIV IO Controller via the RP2350A bootloader.

### Upload Process

1. Enter bootloader mode (hold Boot button, press Reset)
2. Device appears as USB mass storage
3. Drag and drop UF2 firmware file
4. Device automatically reboots with new firmware

### UF2 File Format

The RP2350A uses the UF2 (USB Flashing Format) for firmware updates. UF2 files can be generated from:
- CircuitPython firmware releases
- MicroPython builds
- C/C++ compiled binaries (converted to UF2)

## Programming Resources

### Cytron Example Code

- [CytronTechnologies/Cytron-IRIV-IO-Controller on GitHub](https://github.com/CytronTechnologies/Cytron-IRIV-IO-Controller) — official example code linked from the product page (CircuitPython samples for analog input, Ethernet, Modbus, pulse counter and RTC)

### Official Raspberry Pi Resources

- [Raspberry Pi RP2350A Datasheet](https://www.raspberrypi.com/documentation/microcontrollers/)
- [Raspberry Pi Pico SDK Documentation](https://www.raspberrypi.com/documentation/pico-sdk/)

### CircuitPython Resources

- [CircuitPython Official Website](https://circuitpython.org/)
- [CircuitPython Libraries](https://circuitpython.org/libraries)

### W5500 Ethernet Resources

- [Wiznet W5500 Official Website](https://www.wiznet.io/product-item/w5500/)
- W5500 Datasheet and Application Notes

## Limitations

Based on the datasheet, the following limitations apply:

**Analog Inputs:**
- Not isolated: AGND is shared with system GND
- Mode (voltage or current) is set per channel by its own DIP switch

**Power Consumption:**
- Maximum power consumption: 0.7W
- Terminal 1 power input protected by 500mA PTC fuse

**Operating Environment:**
- Operating temperature: -20°C to 70°C
- Relative humidity: 10-80% (non-condensing)

**Digital Output:**
- Maximum load per channel: 50V, 500mA
- Inductive loads require flyback diode for optimal EMI performance

---

**Source(s):**
- IRIV IO Controller Datasheet, Rev 1.0, July 2024
- IRIV IO Controller product page (my.cytron.io)
- Getting Started with IRIV IO Controller with CircuitPython tutorial (my.cytron.io)
