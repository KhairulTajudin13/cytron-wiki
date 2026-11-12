---
title: "IRIV IO Controller Software Support"
sidebar_label: "Software Support"
sidebar_position: 7
description: "Software platforms and communication protocols supported by the IRIV IO Controller."
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

This matches Cytron's open-source [Modbus IO Expander example](#modbus-io-expander-example) (register map below). Cytron also publishes a [Modbus Configuration Tool tutorial](https://my.cytron.io/tutorial/modbus-configuration-tool-slave-id-and-baudrate-setup) for setting the slave ID and baud rate.

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

## CircuitPython Pin Names

The official CircuitPython build defines friendly names in the `board` module, so you don't need GPIO numbers:

| `board` name | Function | GPIO |
|---|---|---|
| `DI0` … `DI10` | Digital inputs | GP0–GP10 |
| `DO0` … `DO3` | Digital outputs | GP12–GP15 |
| `AN0`, `AN1` (also `A0`, `A1`) | Analog inputs | GP26, GP27 |
| `BUTTON` (`BTN`) | User button (reads 0 when pressed) | GP28 |
| `LED` | USR LED | GP29 |
| `BUZZER` | Passive buzzer (use PWM) | GP11 |
| `TX`, `RX`, `RS485` (UART object) | RS485 | GP24, GP25 |
| `SDA`, `SCL`, `I2C` | RTC (PCF85063A at 0x51) | GP16, GP17 |
| `MOSI`, `MISO`, `SCK`, `W5500_CS`, `W5500_INT`, `W5500_RST` | W5500 Ethernet | GP19, GP20, GP22, GP21, GP18, GP23 |

### Example: Digital I/O and Analog Input

```python
import time
import board
import digitalio
import analogio

di0 = digitalio.DigitalInOut(board.DI0)
di0.direction = digitalio.Direction.INPUT

do0 = digitalio.DigitalInOut(board.DO0)
do0.direction = digitalio.Direction.OUTPUT

an0 = analogio.AnalogIn(board.AN0)   # AN-IN switch for AN0 set to Voltage
an1 = analogio.AnalogIn(board.AN1)   # AN-IN switch for AN1 set to Current

SUPPLY_MV = 3320  # measured ADC reference, about 3.3 V

while True:
    do0.value = di0.value  # DI0 active -> close DO0

    an0_mv = an0.value * SUPPLY_MV / 65536 * 16 / 5           # voltage mode, mV
    an1_ua = an1.value * SUPPLY_MV / 65536 * 16 / 5 / 248 * 1000  # current mode, uA
    print("DI0:", di0.value, "AN0:", round(an0_mv), "mV", "AN1:", round(an1_ua), "uA")
    time.sleep(1)
```

The analog scaling follows Cytron's [analog_input.py example](https://github.com/CytronTechnologies/Cytron-IRIV-IO-Controller/tree/main/examples/circuitpython/analog_input): pin voltage × 16/5 gives the input voltage, and ÷ 248 Ω gives the current. Note that this example reads AN0 in voltage mode and AN1 in current mode at the same time.

## Modbus IO Expander Example

Cytron's [Modbus IO Expander example](https://github.com/CytronTechnologies/Cytron-IRIV-IO-Controller/tree/main/examples/circuitpython/modbus_io_expander) (CircuitPython, tested on CircuitPython 9.2.8) turns the IRIV IO Controller into a Modbus RTU (RS485) or Modbus TCP (Ethernet) I/O module with 5 pulse counters.

**Setup:** load CircuitPython, copy **either** the `source` **or** the `bin` folder contents to the `CIRCUITPY` drive, then reboot. The USR LED blinks when the code is running. Settings are in `settings.toml`:

| Setting | Default | Notes |
|---|---|---|
| `MODBUS_MODE` | `"RTU"` | `"RTU"` (RS485) or `"TCP"` (Ethernet) |
| `MODBUS_RTU_BAUDRATE` | 9600 | Up to 115200 |
| `MODBUS_RTU_SLAVE_ADDRESS` | 1 | 1–247 |
| `DHCP` | 1 | TCP mode: set 0 and fill `IP_ADDRESS`, `SUBNET_MASK`, `GATEWAY_ADDRESS`, `DNS_SERVER` for a static IP |

In TCP mode the slave ID is fixed at 255 — address devices by IP. Typical Modbus TCP response time is about 20 ms.

**Register map**

| Address (dec) | Data | Access | Function code |
|---|---|---|---|
| 0–10 | DI0–DI10 | Read | FC2 Read Discrete Inputs |
| 256–259 | DO0–DO3 | Read/Write | FC1 / FC5 / FC15 (coils) |
| 512, 513 | AN0, AN1 voltage, 0–10560 mV | Read | FC4 Read Input Registers |
| 528, 529 | AN0, AN1 current, 0–42580 µA | Read | FC4 |
| 768–772 | Counter enable for DI1, DI3, DI5, DI7, DI9 | Read/Write | FC1 / FC5 / FC15 |
| 784–788 | Counter reset for DI1, DI3, DI5, DI7, DI9 | Read/Write | FC1 / FC5 / FC15 |
| 1024–1033 | 32-bit counters for DI1, DI3, DI5, DI7, DI9 (high word, then low word) | Read | FC4 |
| 3840, 3841 | Model name ("IO", "C") | Read | FC4 |
| 3856–3858 | Firmware version major / minor / patch | Read | FC4 |

- The voltage/current mode must also be set on the AN-IN switches.
- Enabling a counter disables that DI as a normal input. Read the high and low counter words in one request.
- Supported function codes: 1, 2, 3, 4, 5, 6, 15, 16.

An importable Node-RED flow that reads this map from IRIV PiControl is on [PiControl Example Flows](../iriv-picontrol/node-red/example-flows.md).

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
