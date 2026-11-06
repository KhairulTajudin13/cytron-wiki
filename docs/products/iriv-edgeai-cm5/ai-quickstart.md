---
sidebar_position: 4
title: AI Quickstart
---

# AI Quickstart

This page provides an overview of AI capabilities and setup for the IRIV EdgeAI CM5 based on the official datasheet.

## AI Hardware Support

The IRIV EdgeAI CM5 includes hardware provisions for AI acceleration:

### Raspberry Pi AI HAT+ Support

| Feature | Description |
|---------|-------------|
| PCIe Port | Dedicated PCIe connection for Raspberry Pi AI HAT+ |
| GPIO Header | 40-pin header with key pins for HAT+ identification |
| Form Factor | Compatible with standard Raspberry Pi AI HAT+ |

The PCIe port for the AI HAT+ is similar to the PCIe port on Raspberry Pi 5.

### GPIO Header for AI HAT+

The GPIO header connects to the AI HAT+ with the following pins:

| Pin | Function |
|-----|----------|
| 5V | 5V power supply to AI HAT+ |
| 3V3 | 3.3V power supply to AI HAT+ |
| GND | Ground |
| ID_SC | I2C clock for HAT+ EEPROM |
| ID_SD | I2C data for HAT+ EEPROM |

*Note: The HAT+ EEPROM is used for automatic identification of the HAT+ by Raspberry Pi.*

## Camera Inputs

The IRIV EdgeAI CM5 provides dual camera inputs for vision-based AI applications:

| Port | Specification |
|------|---------------|
| MIPI0 | 22-way MIPI port for CSI camera |
| MIPI1 | 22-way MIPI port for CSI camera |

Both ports support standard Raspberry Pi CSI cameras.

## AI HAT+ Installation

To install the Raspberry Pi AI HAT+:

1. Power off the device and disconnect all cables
2. Remove the enclosure cover
3. Align the AI HAT+ with the GPIO header and PCIe connector
4. Press down firmly to seat the HAT+ on both connectors
5. Secure with standoffs if required
6. Reassemble the enclosure

![AI HAT+ mounted on the IRIV EdgeAI CM5 board](/img/products/iriv-edgeai-cm5/ai-hat-installation.png)

*AI HAT+ position on the internal board (Datasheet, Section 3.2).*

## Configurations on Sale

The IRIV EdgeAI CM5 is sold with a Raspberry Pi AI HAT+ pre-installed (product page, Oct 2026):

| RAM | eMMC | AI HAT+ |
|---|---|---|
| 8GB | 32GB | 13 TOPS |
| 8GB | 32GB | 26 TOPS |
| 16GB | 64GB | 26 TOPS |

The product page names Hailo-8 as an example accelerator. Per Raspberry Pi, the 13 TOPS AI HAT+ uses Hailo-8L and the 26 TOPS version uses Hailo-8; Cytron has not stated the chip per configuration.

Kits (product page):
- **EdgeAI Only:** controller, dual-band antenna, screwdriver, 4 silicone bumpers
- **Basic Kit:** adds Meanwell 24V 24W DIN-rail PSU, USB 3.0 industrial camera 2MP with CS lens, 175mm industrial dome light, VisionPro camera stand
- **Complete Kit:** adds 1m HDMI cable and wireless keyboard/mouse

## Software Configuration

Cytron's datasheet does not describe the AI software stack. The AI HAT+ is the standard Raspberry Pi accessory, so follow the [Raspberry Pi AI HAT+ documentation](https://www.raspberrypi.com/documentation/accessories/ai-hat-plus.html) and [AI software guide](https://www.raspberrypi.com/documentation/computers/ai.html) (Raspberry Pi OS Bookworm; Hailo packages are installed with `sudo apt install hailo-all`).

## Cytron AI Tutorials

| Tutorial | Level |
|---|---|
| [Getting Started with IRIV EdgeAI CM5](https://my.cytron.io/tutorial/getting-started-with-iriv-edgeai-cm5) (6 parts) | Intermediate |
| [Custom Object Detection on IRIV Edge AI](https://my.cytron.io/tutorial/custom-object-detection-on-iriv-edge-ai) (7 parts) | Advanced |
| [Exploration of YOLOv4 with IRIV EdgeAI CM5 in Custom Object Detection](https://my.cytron.io/tutorial/Yolov4-training-intro) (3 parts) | — |
| [IRIV EdgeAI CM5: Enhancing CCTV Cameras](https://my.cytron.io/tutorial/enhance-rtsp-camera-with-iriv-edge-ai) | Intermediate |
| [Capture Hand Movement using Mediapipe on IRIV Edge AI](https://my.cytron.io/tutorial/capture-hand-movement-using-mediapipe-on-iriv-edge-ai) | Intermediate |
| [AI Packaging Detection for Missing Item Inspection](https://my.cytron.io/tutorial/ai-packaging-detection-missing-item-inspection) | Intermediate |
| [Real-Time PPE Detection on Raspberry Pi With Edge AI](https://my.cytron.io/tutorial/real-time-ppe-detection-raspberry-pi) | Beginner |
| [AI PPE Zone Monitoring with IRIV EdgeAI CM5](https://my.cytron.io/tutorial/ai-ppe-zone-monitoring-iriv-edgeai-cm5) | Beginner |
| [How AI Detects Defects in Product Quality Inspection](https://my.cytron.io/tutorial/how-ai-detects-defects-in-product-quality-inspection) | Beginner |
| [Exploring Industrial Edge AI Applications with IRIV EdgeAI CM5](https://my.cytron.io/tutorial/industrial-edge-ai-applications-iriv-edgeai-cm5) | Beginner |
| [Automate Shutdown and Power-On with IRIV Real-Time Clock](https://my.cytron.io/tutorial/automate-shutdown-and-poweron-with-iriv-realtime-clock) | Beginner |

## Vision System Considerations

When designing vision-based AI applications:

1. **Camera Selection**: Use compatible CSI cameras with the 22-pin MIPI connector
2. **Dual Camera**: Both MIPI ports can be used simultaneously for stereo vision or multi-angle capture
3. **Lighting**: The LED lighting driver outputs (L0, L1) can be used for controlled illumination
4. **Processing**: AI HAT+ provides dedicated acceleration for inference workloads

## Performance Notes

*Cytron has not published inference benchmarks for this controller. The datasheet's max 11W power figure is a CPU stress test with USB load excluded; it does not say whether AI HAT+, NVMe or mini PCIe load is included.*

For performance information, refer to:
- Raspberry Pi AI HAT+ official specifications
- Application-specific testing in your deployment environment

---

**Source(s):**
- IRIV EdgeAI CM5 Datasheet, Rev 1.0, July 2025
- IRIV EdgeAI CM5 product page (my.cytron.io), read Oct 2026
