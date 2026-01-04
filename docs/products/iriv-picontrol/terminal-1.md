---
title: Terminal 1
sidebar_position: 5
---

# Terminal 1

Terminal 1 provides power input, serial communication (RS485 and RS232), and isolated digital outputs.

## Power Supply Input

### Specifications

| Parameter | Minimum | Maximum | Unit |
|-----------|---------|---------|------|
| Input Voltage | 10 | 30 | VDC |
| Surge Protection | - | 60V for 20ms | - |
| Fuse Protection | - | 4A replaceable | - |

### Wiring

Connect DC power supply to Terminal 1:
- **+** terminal: Positive voltage
- **-** terminal: Ground/negative

**No earth connection is required.**

### Fuse Protection

The power input is protected by a 4A fuse on the internal board. If the device fails to power up:
1. Check power supply voltage (must be 10-30V DC)
2. Inspect the 4A fuse on the internal board
3. Replace fuse if blown

Surge protection handles transient overvoltages up to 60V for duration of 20ms.

## Isolated RS485

### Specifications

| Parameter | Value |
|-----------|-------|
| Maximum Baud Rate | 500 kbps |
| Isolation Voltage | 5000 Vrms |
| Direction Control | Automatic |
| Device Mapping | /dev/ttyACM0 |

### Wiring

**Minimum connection (2-wire):**
- **A** - RS485 A signal (positive differential)
- **B** - RS485 B signal (negative differential)

**Recommended connection (3-wire):**
- **A** - RS485 A signal
- **B** - RS485 B signal
- **485-GND** - Ground reference (improves noise immunity)

### Termination Resistor

A 120Ω termination resistor is available via internal DIP switch.

**When to enable termination:**
- Device is at the **end** of the RS485 bus
- Both ends of the bus should have termination enabled

**When to disable termination:**
- Device is at an **intermediate** position on the bus

### Isolation

The RS485 interface is isolated from:
- System ground
- Other terminals and interfaces

Isolation rating: 5000 Vrms

## Isolated RS232

### Specifications

| Parameter | Value |
|-----------|-------|
| Maximum Baud Rate | 120 kbps |
| Isolation Voltage | 3000 Vrms |
| Device Mapping | /dev/ttyACM1 |

### Wiring

**3-wire connection:**
- **Tx** - Transmit data
- **Rx** - Receive data
- **232-GND** - Ground reference

### Isolation

The RS232 interface is isolated from:
- System ground
- Other terminals and interfaces

Isolation rating: 3000 Vrms

## Isolated Digital Output

### Specifications

| Parameter | Minimum | Maximum | Unit |
|-----------|---------|---------|------|
| Output Voltage | - | 50 | V |
| Output Current | - | 500 | mA |
| Isolation Voltage | - | 1500 | Vrms |

### Characteristics

**Output type:** Dry contact (solid state relay)
**Load compatibility:** DC or AC loads
**Control logic:** Active HIGH
**Number of channels:** 4 (DO0, DO1, DO2, DO3)
**Isolation:** Each channel isolated from system and from other channels

### GPIO Mapping

| Output | GPIO Pin |
|--------|----------|
| DO0 | GPIO23 |
| DO1 | GPIO24 |
| DO2 | GPIO25 |
| DO3 | GPIO26 |

### Wiring

Each digital output provides two terminals for dry contact switching:
- Connect load between the two terminals for each output
- Polarity does not matter (AC or DC loads supported)
- Maximum ratings: 50V, 500mA per channel

**Example - Controlling a 24V DC relay:**
```
DO0 Terminal 1 ----[+24V DC Power]
DO0 Terminal 2 ----[Relay Coil]----[GND]
```

When GPIO23 is HIGH, the solid state relay closes and activates the load.

## Common Mistakes

### Power Input Issues
- **Using voltage outside 10-30V range** - May damage device or fail to power up
- **Exceeding surge limit** - Fuse will blow to protect circuitry
- **Ignoring blown fuse** - Device will not power up via Terminal 1 if fuse is blown

### RS485 Communication Issues
- **Not connecting GND reference** - Can work but reduces noise immunity
- **Incorrect termination** - Enable only at bus endpoints, not intermediate nodes
- **Swapped A/B signals** - Reverse polarity causes communication failure

### Digital Output Issues
- **Exceeding 50V or 500mA** - May damage solid state relay
- **Expecting common ground** - Outputs are isolated; each channel is independent

---

**Source(s):**
- IRIV PiControl CM4 User Manual, Rev 1.3, Nov 2025, Sections 2, 4, 5.1
