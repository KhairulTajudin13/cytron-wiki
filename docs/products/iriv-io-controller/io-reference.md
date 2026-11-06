---
title: I/O Reference
sidebar_position: 5
---

# I/O Reference

Complete reference for digital inputs, digital outputs, and analog inputs on the IRIV IO Controller.

## Digital Inputs (11 Channels)

The IRIV IO Controller provides 11 isolated digital inputs divided into two groups with independent common sink/source terminals.

### Digital Input Specifications

| Parameter | Minimum | Maximum | Unit |
|-----------|---------|---------|------|
| Low Level (VIL) | - | ±0.8 | V |
| High Level (VIH) | ±3 | ±50 | V |
| Maximum Pulse Frequency (50% Duty Cycle) | - | 5000 | Hz |
| Isolation Voltage | - | 3750 (rated) | Vrms |

### Digital Input Mapping

| Input | GPIO Pin | Terminal | Input Group |
|-------|----------|----------|-------------|
| DI0 | GPIO0 | Terminal 1 | Group 1 (DI0-DI4) |
| DI1 | GPIO1 | Terminal 1 | Group 1 (DI0-DI4) |
| DI2 | GPIO2 | Terminal 1 | Group 1 (DI0-DI4) |
| DI3 | GPIO3 | Terminal 1 | Group 1 (DI0-DI4) |
| DI4 | GPIO4 | Terminal 1 | Group 1 (DI0-DI4) |
| DI5 | GPIO5 | Terminal 2 | Group 2 (DI5-DI10) |
| DI6 | GPIO6 | Terminal 2 | Group 2 (DI5-DI10) |
| DI7 | GPIO7 | Terminal 2 | Group 2 (DI5-DI10) |
| DI8 | GPIO8 | Terminal 2 | Group 2 (DI5-DI10) |
| DI9 | GPIO9 | Terminal 2 | Group 2 (DI5-DI10) |
| DI10 | GPIO10 | Terminal 2 | Group 2 (DI5-DI10) |

### Input Configuration

- **Type:** Isolated, active high
- **S/S0..4:** Common sink/source for DIN Group 1 (DI0-DI4)
- **S/S5..10:** Common sink/source for DIN Group 2 (DI5-DI10)
- **DGND:** Common digital ground for dry contact inputs (shared between both groups)

The two-group design allows simultaneous connection to both PNP and NPN sensors. Each group has independent common terminals. A built-in isolated power source supports dry contact inputs without external power supply.

### Connection Examples

**Dry Contact:** Connect the switch between DIx and DGND. The built-in isolated supply powers it; no external supply needed.

**PNP Sensor:** Connect the external supply **negative (−)** to the group's S/S terminal, and the sensor output to DIx.

**NPN Sensor:** Connect the external supply **positive (+)** to the group's S/S terminal, and the sensor output to DIx.

Group 1 (DI0-DI4) uses **S/S0..4 on Terminal 1**; Group 2 (DI5-DI10) uses **S/S5..10 on Terminal 2**. Each group can be wired sink or source on its own, so PNP and NPN sensors can be used at the same time.

## Digital Outputs (4 Channels)

The IRIV IO Controller provides 4 isolated digital outputs driven by solid state relays.

### Digital Output Specifications

| Parameter | Minimum | Maximum | Unit |
|-----------|---------|---------|------|
| Voltage | - | 50 | V |
| Current | - | 500 | mA |
| Isolation Voltage | - | 1500 (rated) | Vrms |

### Digital Output Mapping

| Output | GPIO Pin | Terminal |
|--------|----------|----------|
| DO0 | GPIO12 | Terminal 2 |
| DO1 | GPIO13 | Terminal 2 |
| DO2 | GPIO14 | Terminal 2 |
| DO3 | GPIO15 | Terminal 2 |

### Output Configuration

- **Type:** Isolated dry contact (solid state relay)
- **Active:** HIGH (output active when GPIO is HIGH)
- **Load Type:** DC or AC loads supported
- **Isolation:** Each output channel is isolated from system and from other outputs

### Inductive Load Protection

For inductive loads such as relays, it is recommended to connect a flyback diode in parallel with the load. This reduces EMI from switching inductive loads. The outputs have built-in surge protection, so operation without the diode is safe but not optimal.

## Analog Inputs (2 Channels)

The IRIV IO Controller provides 2 analog inputs with 12-bit resolution.

### Analog Input Specifications

| Parameter | Value |
|-----------|-------|
| Resolution | 12 bit |
| Voltage Mode Range | 0 - 10.56 V |
| Current Mode Range | 0 - 42.58 mA |
| Input Impedance (Voltage Mode) | 32 kΩ |
| Input Impedance (Current Mode) | 248 Ω |

### Analog Input Mapping

| Input | GPIO Pin | Terminal |
|-------|----------|----------|
| AN0 | GPIO26 (ADC) | Terminal 1 |
| AN1 | GPIO27 (ADC) | Terminal 1 |

### Input Configuration

- **Type:** Non-isolated (AGND is shared with system GND)
- **Resolution:** 12-bit ADC
- **Mode Selection:** AN-IN MODE DIP switches on the bottom panel, **one per channel** (AN0, AN1)

**Voltage Mode:**
- Range: 0 - 10.56V
- Input impedance: 32kΩ
- Full scale ADC reading: 4095 = 10.56V

**Current Mode:**
- Range: 0 - 42.58mA
- Input impedance: 248Ω
- Full scale ADC reading: 4095 = 42.58mA
- Set that channel's DIP switch ON to connect the 250Ω shunt resistor

**Note:** Each channel has its own mode switch, so AN0 and AN1 can be set independently (for example AN0 in voltage mode and AN1 in current mode).

**CircuitPython note:** `analogio.AnalogIn.value` is scaled to 16-bit (0-65535) even though the ADC is 12-bit, so convert from that range.

### Voltage Scale Calculation

According to the datasheet schematic, voltage scale for the MCU ADC:
- MCU reading = Analog Input × 5/16

This scaling allows the 3.3V ADC of the RP2350A to measure up to 10.56V.

## GPIO Summary Table

| Function | Channel | GPIO Pin | Type | Terminal |
|----------|---------|----------|------|----------|
| Digital Input | DI0 | GPIO0 | Isolated | Terminal 1 |
| Digital Input | DI1 | GPIO1 | Isolated | Terminal 1 |
| Digital Input | DI2 | GPIO2 | Isolated | Terminal 1 |
| Digital Input | DI3 | GPIO3 | Isolated | Terminal 1 |
| Digital Input | DI4 | GPIO4 | Isolated | Terminal 1 |
| Digital Input | DI5 | GPIO5 | Isolated | Terminal 2 |
| Digital Input | DI6 | GPIO6 | Isolated | Terminal 2 |
| Digital Input | DI7 | GPIO7 | Isolated | Terminal 2 |
| Digital Input | DI8 | GPIO8 | Isolated | Terminal 2 |
| Digital Input | DI9 | GPIO9 | Isolated | Terminal 2 |
| Digital Input | DI10 | GPIO10 | Isolated | Terminal 2 |
| Digital Output | DO0 | GPIO12 | Isolated | Terminal 2 |
| Digital Output | DO1 | GPIO13 | Isolated | Terminal 2 |
| Digital Output | DO2 | GPIO14 | Isolated | Terminal 2 |
| Digital Output | DO3 | GPIO15 | Isolated | Terminal 2 |
| Analog Input | AN0 | GPIO26 (ADC) | Non-isolated | Terminal 1 |
| Analog Input | AN1 | GPIO27 (ADC) | Non-isolated | Terminal 1 |
| User Button | - | GPIO28 | Active Low | Front Panel |
| User LED | - | GPIO29 | GPIO | Front Panel |
| Passive Buzzer | - | GPIO11 | PWM | Internal |

---

**Source(s):**
- IRIV IO Controller Datasheet, Rev 1.0, July 2024, Sections 2, 5.1, 5.2
