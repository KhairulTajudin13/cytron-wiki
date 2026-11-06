---
sidebar_position: 5
title: I/O Reference
description: Terminal pinout, wiring and example code for the IRIV EdgeAI CM5 isolated digital I/O, LED lighting drivers and RS485.
---

# I/O Reference

Everything you need to wire and program the industrial I/O on the IRIV EdgeAI CM5 in one place: the front terminal, digital inputs, digital outputs, LED lighting drivers and RS485.

## Front Terminal Pinout

The front panel has one 16-position pluggable terminal (two rows of 8), as printed on the panel.

| Row | 1 | 2 | 3 | 4 | 5–6 | 7–8 |
|---|---|---|---|---|---|---|
| **Top** | VIN | RS485 A | RS485 B | RS485 G | DO0 (2 contacts) | L0 + / − |
| **Bottom** | GND | S/S | DI0 | DI1 | DO1 (2 contacts) | L1 + / − |

S/S, DI0 and DI1 form the "DIN" group: **both digital inputs share one S/S common**.

## GPIO Mapping

| Function | Channel | CM5 GPIO / device |
|---|---|---|
| Digital input | DI0 / DI1 | GPIO22 / GPIO27 |
| Digital output | DO0 / DO1 | GPIO23 / GPIO24 |
| LED lighting driver | L0 / L1 | GPIO12 / GPIO13 (PWM capable) |
| RS485 | — | `/dev/ttyACM0` |

:::caution Reserved GPIOs
GPIO 4, 5, 6, 12, 13, 19, 20, 21, 22, 23, 24 and 27 are used on the board. There is no user 40-pin GPIO header; the internal header is only for the AI HAT+.
:::

## Digital Inputs (DI0, DI1)

| Parameter | Value |
|---|---|
| Type | Isolated, bidirectional (PNP or NPN) |
| Low level (VIL) | 0 – 0.8 V |
| High level (VIH) | 3 – 50 V |
| Isolation | 3750 Vrms (from the system; DI0 and DI1 share S/S) |

**Wiring**

- **PNP sensors:** S/S to supply **−**, sensor outputs to DI0 / DI1.
- **NPN sensors:** S/S to supply **+**, sensor outputs to DI0 / DI1.

Because both inputs share S/S, DI0 and DI1 must use the same sensor type (both PNP or both NPN).

## Digital Outputs (DO0, DO1)

| Parameter | Value |
|---|---|
| Type | Dry contact (solid state relay), DC or AC load |
| Maximum | 50 V, 500 mA per channel |
| Isolation | 1500 Vrms, from the system and from each other |

Each output is a switch with two contacts. Put the load **and its own power supply** in series across the pair — the output does not supply voltage. For inductive loads (relay coils, solenoids) fit a flyback diode across the load to cut EMI; the outputs also have built-in surge protection.

## LED Lighting Drivers (L0, L1)

| Parameter | Value |
|---|---|
| Type | Wet contact (MOSFET switches VIN) |
| Output voltage | Same as VIN |
| Maximum current | 2 A per channel, independent 2 A fuse each |
| Dimming | PWM on GPIO12 / GPIO13 |

:::warning
The output voltage equals your supply: a 24 V supply puts 24 V on L0/L1, so the light must be rated for it. The LED drivers are **not powered when the unit runs from USB-C** — use the VIN terminal.
:::

## RS485

| Parameter | Value |
|---|---|
| Device | `/dev/ttyACM0` (USB serial behind the USB 3.0 hub) |
| Maximum baud rate | 500 kbps |
| Isolation | 5000 Vrms |
| Direction control | Automatic — no DE/RE pin to toggle |
| Termination | 120 Ω onboard — do not add an external terminator |

Wire A to A and B to B. A-B alone works, but also connect **G** for better noise immunity.

## Example Code

Quick tests from the shell (Raspberry Pi OS):

```bash
pinctrl get 22          # read DI0
pinctrl set 23 op dh    # close DO0
pinctrl set 23 op dl    # open DO0
```

Python with `gpiozero` and `pyserial` (both available on Raspberry Pi OS):

```python
from gpiozero import DigitalInputDevice, DigitalOutputDevice, PWMLED
import serial

di0 = DigitalInputDevice(22, pull_up=None, active_state=True)  # DI0
do0 = DigitalOutputDevice(23)                                   # DO0
light = PWMLED(12)                                              # L0 (VIN power only)

do0.on() if di0.value else do0.off()
light.value = 0.5          # 50% brightness

with serial.Serial('/dev/ttyACM0', 9600, timeout=1) as rs485:
    rs485.write(b'hello\r\n')
    print(rs485.readline())
```

The logic sense of DI/DO (whether an active input reads 1, whether HIGH closes the output) is not stated in the datasheet — confirm on your unit with `pinctrl` before relying on it.

## Common Mistakes

- Using `/dev/serial0` or `/dev/ttyAMA*` for RS485 — use `/dev/ttyACM0`.
- Treating a digital output as a voltage source — it is a dry contact.
- Expecting L0/L1 to work on USB-C power — use VIN.
- Mixing a PNP and an NPN sensor on DI0/DI1 — they share one S/S.

---

**Source(s):**
- IRIV EdgeAI CM5 Datasheet, Rev 1.0, July 2025, Sections 3, 4, 5
