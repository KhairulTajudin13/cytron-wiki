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

> **Image placeholder** — AI HAT+ installation diagram (to be added later)

## Software Configuration

*Note: Specific AI software stack details, frameworks, and model support are not specified in the official datasheet. Refer to Raspberry Pi AI HAT+ documentation for software setup instructions.*

For AI HAT+ software setup, consult:
- Official Raspberry Pi AI HAT+ documentation
- Raspberry Pi OS AI software packages

## Additional AI-Related Resources

The official getting started tutorial references the following related topics:

- AI Processor setup
- AI Computer Vision implementation

*Note: Detailed procedures for these topics are not included in the datasheet. Refer to the official Cytron tutorials for step-by-step guides.*

## Vision System Considerations

When designing vision-based AI applications:

1. **Camera Selection**: Use compatible CSI cameras with the 22-pin MIPI connector
2. **Dual Camera**: Both MIPI ports can be used simultaneously for stereo vision or multi-angle capture
3. **Lighting**: The LED lighting driver outputs (L0, L1) can be used for controlled illumination
4. **Processing**: AI HAT+ provides dedicated acceleration for inference workloads

## Performance Notes

*Performance specifications, supported AI models, inference speeds, and benchmark data are not specified in the official datasheet.*

For performance information, refer to:
- Raspberry Pi AI HAT+ official specifications
- Application-specific testing in your deployment environment
