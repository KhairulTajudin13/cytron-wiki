---
title: Troubleshooting
sidebar_position: 9
description: Common problems with the IRIV IO Controller (power, uploading, digital and analog inputs, RS485) and how to fix them.
---

# Troubleshooting

Common issues and fixes for the IRIV IO Controller.

:::info It is a microcontroller
The IRIV IO Controller runs on a Raspberry Pi RP2350A microcontroller. It has no Linux, Raspberry Pi OS or Node-RED. If a guide tells you to SSH in or run `sudo`, it is for a different IRIV product.
:::

## Power

### Unit does not power up

1. **Check the supply:** Terminal 1 needs 10–30 V DC on **V+** and **V-** (not DGND). USB-C needs 4.9–5.2 V.
2. **PTC has opened:** the power input is protected by a 500 mA resettable PTC. After a surge or overcurrent it can open. Remove power, let it cool for a few minutes, and try again.
3. If it still does not power up, contact [support@cytron.io](mailto:support@cytron.io).

## Uploading Firmware

### Board does not appear as a USB drive

1. Use a USB-C cable that carries data (some cables are charge-only).
2. Hold **BOOT**, press and release **RESET**, then release BOOT. Both are pinhole buttons — use a paperclip.
3. A drive should appear. Copy the UF2 file (for example the [CircuitPython build](https://circuitpython.org/board/cytron_iriv_io_controller/)) onto it; the board reboots by itself.

## Digital Inputs

### Sensor does not trigger a DI

- **Check the group's S/S polarity.** PNP sensors need S/S to the supply **−**; NPN sensors need S/S to the supply **+**.
- **Check the right S/S.** DI0–DI4 use **S/S0..4 on Terminal 1**; DI5–DI10 use **S/S5..10 on Terminal 2**. Each group can be PNP or NPN independently.
- **Dry contacts** (switches, relay contacts) go between DIx and **DGND**, not S/S. The built-in isolated supply powers them.
- **Signal level:** high must be at least 3 V; low must be below 0.8 V.
- **Fast pulses:** the inputs are rated to 5000 Hz at 50% duty cycle.

## Digital Outputs

### Load does not switch

- The outputs are **dry-contact solid-state relays**. They do not supply voltage: wire the load and its own supply in series across the two DO contacts.
- Maximum 50 V and 500 mA per channel, DC or AC.

### Electrical noise when switching relays

Fit a flyback diode across the relay coil (or other inductive load). The outputs have built-in surge protection, but the diode reduces EMI.

## Analog Inputs

### Readings are wrong or stuck

- **Check that channel's AN-IN MODE switch** on the bottom panel: voltage mode (0–10.56 V) or current mode (0–42.58 mA, switch ON). AN0 and AN1 have separate switches.
- **Scaling:** in voltage mode the ADC pin sees AN × 5/16, so 10.56 V reads as full scale.
- **CircuitPython:** `analogio.AnalogIn.value` is scaled to 0–65535 even though the ADC is 12-bit.
- **Ground:** the analog inputs are **not isolated** — AGND is the system ground. Avoid ground loops with sensors powered from another supply.

## RS485

### No communication or errors on long buses

- Swap-check A and B, and wire **G** as well as A/B for noise immunity.
- Turn the **RS485 R-Term** DIP switch ON only on the first and last device of the bus.
- Match baud rate and serial settings (maximum 500 kbps).
- In your own firmware, RS485 is **UART1: TX = GP24, RX = GP25**. Direction control is automatic, so there is no DE/RE pin.

### Modbus slave ID or baud rate unknown

Cytron's [Modbus Configuration Tool tutorial](https://my.cytron.io/tutorial/modbus-configuration-tool-slave-id-and-baudrate-setup) shows how to set the slave ID and baud rate. The default firmware and its register map are not in the datasheet — ask [Cytron support](mailto:support@cytron.io) if you need them.

## Ethernet

### No network link

- The RJ45 is a 10/100 W5500 controller on SPI0 (MOSI GP19, MISO GP20, SCK GP22, CSn GP21, INT GP18, RESET GP23). Use these pins when initialising it in your code.
- Check the cable and that your firmware brings the W5500 out of reset.

## Clock

### Time is lost after power-off

Insert a CR2032 coin cell in the RTC holder (PCF85063A, I2C0 at 0x51 on GP16/GP17). The cell is fitted by the user.

---

**Source(s):**
- IRIV IO Controller Datasheet, Rev 1.0, July 2024
- Cytron Knowledge Base, IRIV IO Controller verified reference (Oct 2026)
