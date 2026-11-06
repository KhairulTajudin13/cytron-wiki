---
title: IRIV EdgeAI Safety Box Kit
sidebar_position: 2
description: IRIV EdgeAI Safety Box Kit (KIT-IRIV-EAI-PPE) — on-site PPE and danger-zone detection for up to 6 RTSP IP cameras, built on the IRIV EdgeAI CM5 with a 26 TOPS AI HAT+.
---

# IRIV EdgeAI Safety Box Kit

**Product code:** KIT-IRIV-EAI-PPE · [Product page](https://my.cytron.io/p-iriv-edgeai-safety-box-kit) · [Quick Start Guide](https://my.cytron.io/tutorial/iriv-edgeai-safety-box-quick-start-guide)

A ready-to-deploy workplace-safety box. It watches your existing IP cameras for missing PPE and people entering danger zones, raises alarms on two outputs, and keeps an evidence log and PDF safety reports. All AI runs on the device: video does not leave the site, and the system keeps working without internet.

The controller inside is an [IRIV EdgeAI CM5](../products/iriv-edgeai-cm5/index.md) with a **26 TOPS (Hailo-8) AI HAT+** on its PCIe port.

## Key Facts

| Item | Value |
|---|---|
| Cameras | Up to **6 RTSP IP camera** sub-streams, 640×360 at 15–25 FPS, H.264/H.265 |
| Camera type | IP cameras with RTSP streaming (the software is documented for RTSP only, not CSI cameras) |
| AI accelerator | Raspberry Pi AI HAT+, Hailo-8, 26 TOPS |
| Enclosure | IP67 ABS industrial enclosure, 250 × 350 × 160 mm |
| Power | Mains via a fused, switched IEC inlet → 24V 36W industrial switching PSU (80–305 VAC or 100–430 VDC input) → controller VIN |
| Alarm outputs | Controller **DO0 = PPE alarm**, **DO1 = Zones alarm** (dry contact, max 50V 500mA) |
| Operating temperature | −20 to 60 °C (assembled box) |
| Licence | One-time purchase — no licence or subscription fee |
| Warranty | 12 months |

## Software

The web interface has five tabs:

| Tab | What it does |
|---|---|
| **Live View** | Camera grid with detections drawn live; draw danger zones here. Layouts Auto, Grid, Focus, Single. **Smart Live** pauses an idle tile after about 30 s and resumes on motion or a detection |
| **Analytics** | Charts and summaries over time |
| **Events** | Evidence record (snapshot and short clip) with filters and export |
| **Reports** | PDF safety report for a chosen period; a monthly "Workplace Safety Audit" report can be emailed |
| **Settings** | Cameras, models, alerts, users, system |

First sign-in: the front OLED shows the box's IP address — open it in a browser on the same network.

## Wiring the Alarm Outputs

In **Settings**, each output has an on/off **Status** and a **Timing** of **Hold** or **Pulse** (with a pulse duration in seconds).

:::warning DO0 / DO1 are dry contacts
The outputs are solid-state-relay switches. They **do not supply voltage** — put the siren or stack light **and its own power supply** in series across the output's two contacts, max 50V (DC or AC) and 500mA. Fit a flyback diode across inductive loads such as relay coils.
:::

Terminal positions and the rest of the controller I/O: [EdgeAI CM5 I/O Reference](../products/iriv-edgeai-cm5/io-reference.md).

## Good to Know

- **No accuracy figure is published** — results depend on lighting, camera angle and site conditions.
- Do not call the kit "IRIV EdgeAI CM5"; it is a complete solution built on that controller.
- Controller-level troubleshooting (4A fuse, Boot/Run switch): [EdgeAI CM5 Troubleshooting](../products/iriv-edgeai-cm5/troubleshooting.md).

## Further Reading

- [IRIV EdgeAI Safety Box: Quick Start Guide](https://my.cytron.io/tutorial/iriv-edgeai-safety-box-quick-start-guide)
- [IRIV EdgeAI Safety Box: Ready for OSHMP30](https://my.cytron.io/tutorial/iriv-edgeai-safety-box-ready-for-oshmp30)
- [AI PPE Zone Monitoring with IRIV EdgeAI CM5](https://my.cytron.io/tutorial/ai-ppe-zone-monitoring-iriv-edgeai-cm5)

---

**Source(s):**
- IRIV EdgeAI Safety Box Kit product page (my.cytron.io), read Oct 2026
- IRIV EdgeAI Safety Box Quick Start Guide (Cytron, Aug 2026)
- Cytron design team answers (Oct 2026); IRIV EdgeAI CM5 Datasheet Rev 1.0
