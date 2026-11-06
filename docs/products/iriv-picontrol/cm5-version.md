---
title: IRIV PiControl CM5
sidebar_position: 2
description: Differences between IRIV PiControl CM4 (IRIV-PICL) and IRIV PiControl CM5 (IRIV-PICL5).
---

# IRIV PiControl CM5

IRIV PiControl is sold in two versions: **CM4** (`IRIV-PICL`, Raspberry Pi Compute Module 4) and **CM5** (`IRIV-PICL5`, Raspberry Pi Compute Module 5). Both use the same enclosure, terminals, isolated I/O, RS485/RS232, GPIO mapping and setup script. Most pages in this section apply to both; this page lists only what is different on CM5.

:::tip Always name the version
"IRIV PiControl" on its own can mean either version. When asking for support or writing a tutorial, say CM4 or CM5.
:::

## CM4 vs CM5

| Item | IRIV PiControl CM4 | IRIV PiControl CM5 |
|---|---|---|
| Document code | IRIV-PICL | IRIV-PICL5 |
| Compute module | Raspberry Pi CM4 | Raspberry Pi CM5 |
| CPU | Broadcom BCM2711, quad-core Cortex-A72 @ 1.5GHz | Broadcom BCM2712, quad-core Cortex-A76 @ 2.4GHz |
| GPU (product page) | VideoCore VI 700MHz, OpenGL ES 3.0 | VideoCore VII 800MHz, OpenGL ES 3.1 |
| RAM (datasheet) | 1 / 2 / 4 / 8GB LPDDR4-3200 | 2 / 4 / 8 / 16GB LPDDR4-4267 |
| eMMC (datasheet) | 8 / 16 / 32GB | 16 / 32 / 64GB |
| Variants on sale (product page, Oct 2026) | Wireless 2GB/16GB, 4GB/32GB, 8GB/32GB | Wireless 8GB/64GB, 16GB/64GB |
| Power consumption (`stress-ng --cpu 4 --cpu-method fft`, USB load excluded) | max 6.5W | max 10.5W |
| M.2 Key-M (NVMe 2230/2242) | PCIe Gen 2 x1 | PCIe Gen 2 x1; Gen 3 can be enabled but is **not certified** |
| DI / DO GPIOs | DI0–3 = GPIO13/17/22/27, DO0–3 = GPIO23/24/25/26 | Same |
| I/O, serial, terminals, enclosure, dimensions, power input, temperature | — | Same as CM4 |

## Notes for CM5

- **Analog input mode switch** is a 4-way DIP labelled "ADC Current Mode" (positions 1–4, ON = current). The CM5 user manual figure shows voltage and current channels used at the same time.
- **Wireless disable** uses two separate solder jumpers, labelled **WLAN** and **BT**, under "DISABLE" on the board.
- **RS485 / RS232** are `/dev/ttyACM0` / `/dev/ttyACM1`, the same as CM4. They sit behind the onboard USB hub, together with the USB 2.0 ports, eth1 and the mini PCIe USB.
- **Setup script** is the same: `curl -L tinyurl.com/setup-iriv-picontrol | sudo bash`, then reboot. Units shipped with the CM5 fitted should already be configured.
- **Reset button** is wired to CM5 `GLOBAL_EN`: hard reset, and wakes the CM5 after shutdown.
- **Front-panel LEDs:** the CM5 user manual shows **mPCIe PWR** and **mPCIe STAT** LEDs. The shared datasheet (whose pictures are of the CM4 version) lists 4G PWR / WWAN LEDs and a Micro SIM socket instead. 4G/SIM hardware on CM5 is not confirmed.

## Still to be confirmed with Cytron

- Whether `dtoverlay=dwc2,dr_mode=host` (set by the setup script) is needed on CM5. The CM5 manual repeats the CM4 text.
- Which DIP position maps to which analog channel (position 1 → AI0 is likely but not stated).
- Purpose of the internal 4-pin SCL / SDA / 3V3 / GND header on the CM5 board.
- Per-variant SKU codes.

---

**Source(s):**
- IRIV PiControl Datasheet (CM4 / CM5), Rev 1.2, Nov 2025
- IRIV PiControl CM5 User Manual, Rev 1.5, Jan 2026
- IRIV PiControl product page (my.cytron.io), read Oct 2026
