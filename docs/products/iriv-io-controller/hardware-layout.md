---
title: Hardware Layout
sidebar_position: 3
---

# Hardware Layout

![IRIV IO Controller External Layout](/img/products/iriv-io-controller/external-layout.png)

*External layout showing all buttons, terminals, LEDs, and connectors on the IRIV IO Controller enclosure.*

## Front Panel

| Component | Description |
|-----------|-------------|
| **User Button** | User programmable button connected to GPIO28 (active low). |
| **Boot Button** | Press and hold while resetting to enter bootloader mode for programming. Pinhole button, requires paperclip. |
| **Reset Button** | Press to reset the RP2350A microcontroller. Pinhole button, requires paperclip. |
| **Status LEDs** | **PWR** - Power indicator, turns on when device is powered<br/>**USR** - User programmable LED, controlled by GPIO29<br/>**485** - RS485 activity indicator<br/>**DOUT 0-3** - Turn on when corresponding digital output is activated<br/>**DIN 0-10** - Turn on when corresponding digital input is triggered |
| **USB-C** | Used for programming and can also power the device (5V input). |
| **Terminal 1** | Pluggable terminal for power input, digital inputs DI0-DI4, RS485, and analog inputs. See Terminal 1 details below. |
| **Terminal 2** | Pluggable terminal for digital inputs DI5-DI10 and digital outputs DO0-DO3. See Terminal 2 details below. |
| **Ethernet** | RJ45 Ethernet port driven by Wiznet W5500 Ethernet controller (10/100M). |

## Bottom Panel

| Component | Description |
|-----------|-------------|
| **DIN Bracket** | Mounting bracket for DIN rail installation. |
| **RS485 Termination Resistor Switch** | DIP switch to enable/disable the 120Ω termination resistor. Enable only for first and last devices in RS485 chain. |
| **Analog Input Mode Switch (AN-IN MODE)** | One DIP switch per channel (AN0, AN1). Sets each channel to voltage mode (0-10.56V) or current mode (0-42.58mA). ON connects the 250Ω current shunt. |

## Terminal 1

Terminal 1 (left pluggable block, 2 rows of 8) provides power input, **DIN Group 1 (DI0-DI4)**, RS485 and the analog inputs.

| Left row (top → bottom) | Function | Right row (top → bottom) | Function |
|---|---|---|---|
| V- | Power supply negative | V+ | Power supply positive (10-30V DC) |
| DGND | Dry-contact ground for digital inputs (not the power return) | A | RS485 A |
| S/S0..4 | Common sink/source for DIN Group 1 | B | RS485 B |
| DI0 | Digital Input 0 (GPIO0) | G | RS485 ground |
| DI1 | Digital Input 1 (GPIO1) | AGND | Analog ground (shared with system GND) |
| DI2 | Digital Input 2 (GPIO2) | AGND | Analog ground (shared with system GND) |
| DI3 | Digital Input 3 (GPIO3) | AN0 | Analog input 0 (GPIO26) |
| DI4 | Digital Input 4 (GPIO4) | AN1 | Analog input 1 (GPIO27) |

:::caution Power wiring
Connect the supply **+ to V+** and **− to V-**. DGND is the ground for dry-contact inputs only; it is not the power-supply return.
:::

## Terminal 2

Terminal 2 (right pluggable block) provides **DIN Group 2 (DI5-DI10)** and the four digital outputs.

| Left row (top → bottom) | Function | Right row | Function |
|---|---|---|---|
| DGND | Dry-contact ground (shared by both DIN groups) | DO0 (2 contacts) | Digital Output 0 (GPIO12) |
| S/S5..10 | Common sink/source for DIN Group 2 | DO1 (2 contacts) | Digital Output 1 (GPIO13) |
| DI5 | Digital Input 5 (GPIO5) | DO2 (2 contacts) | Digital Output 2 (GPIO14) |
| DI6 | Digital Input 6 (GPIO6) | DO3 (2 contacts) | Digital Output 3 (GPIO15) |
| DI7 | Digital Input 7 (GPIO7) | | |
| DI8 | Digital Input 8 (GPIO8) | | |
| DI9 | Digital Input 9 (GPIO9) | | |
| DI10 | Digital Input 10 (GPIO10) | | |

## Button Functions

| Button | Function | Access Method |
|--------|----------|---------------|
| User Button | User programmable (GPIO28, active low) | Front-panel push button |
| Boot Button | Enter bootloader mode when held during reset | Pinhole button, use a paperclip |
| Reset Button | Reset the RP2350A microcontroller | Pinhole button, use a paperclip |

## LED Indicators

| LED | Function | Control |
|-----|----------|---------|
| PWR | Power status | Hardware-controlled |
| USR | User programmable | GPIO29 |
| 485 | RS485 activity indicator | Hardware-controlled |
| DOUT 0-3 | Digital output status (4 LEDs) | Follows digital output state |
| DIN 0-10 | Digital input status (11 LEDs) | Follows digital input state |

## Physical Dimensions

**Metal enclosure only** (excluding DIN socket and connectors):
- Length: 140mm
- Width: 60mm
- Height: 36mm

The DIN bracket adds 8mm and the pluggable terminals stick out 15.5mm (datasheet drawing).

---

**Source(s):**
- IRIV IO Controller Datasheet, Rev 1.0, July 2024, Sections 3.1, 5.2, 6
