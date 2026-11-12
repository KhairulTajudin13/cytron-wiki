---
title: "IRIV PiControl Downloads"
sidebar_label: "Downloads"
sidebar_position: 11
description: "Downloadable resources and support contact information for IRIV PiControl."
---

# Downloads

Downloadable resources and support contact information for IRIV PiControl.

## Documentation

### User Manual

Always use the live manuals below — Cytron updates them in place, so they are newer than any downloaded copy.

| Document | Link |
|---|---|
| IRIV PiControl **CM4** User Manual (live) | [Google Docs](https://docs.google.com/document/d/1p-vkd4Mo6jo5eyJNYteiMlDj0v4FB1QaCtm9nPxw_6g/edit?usp=sharing) |
| IRIV PiControl **CM5** User Manual (live) | [Google Docs](https://docs.google.com/document/d/1bbRILpRxjq1vMsS7YbCQ24jX8AQsf40NUcQ_WF_xHCc/edit?usp=sharing) |
| IRIV PiControl brochure | [PDF](https://drive.google.com/file/d/1RTGSiJ0V6rmAZ39GbwgU8OwYRri6kY_7/view?usp=sharing) |
| CM4 User Manual Rev 1.3, Nov 2025 (archived copy used for this wiki) | [PDF](../../../sources/manuals/IRIV%20PiControl%20CM4%20User%20Manual.pdf) |

## Software and Firmware

### Configuration Script

**Setup Script:**
```bash
curl -L tinyurl.com/setup-iriv-picontrol | sudo bash
```

The short link opens the setup script hosted by Cytron. Only Raspberry Pi OS is supported.

### OS Images

**Cytron image (recommended):** [Bookworm OS for IRIV PiControl](https://drive.google.com/file/d/102NEIwVMQYr2e7foh_mHuBLMuZOCUxTR/view) — the image linked from the product page, with Cytron's setup and Quick Start dashboard.

**Plain Raspberry Pi OS:** [raspberrypi.com/software/operating-systems](https://www.raspberrypi.com/software/operating-systems/) — run the setup script above after flashing.

### Python Libraries

**ADC Library (Adafruit_ADS1x15):**
```bash
# Raspberry Pi OS Bookworm blocks system-wide pip installs,
# so create a virtual environment first (one time):
python3 -m venv --system-site-packages ~/iriv-env
source ~/iriv-env/bin/activate
pip install Adafruit_ADS1x15
```

**Serial Communication (pySerial):**
```bash
# Bookworm: install from apt, or pip inside the venv above
sudo apt install python3-serial
```

## Utilities

### CM4 Flashing Tool

**rpiboot Utility:**
- Used to flash eMMC on CM4 via USB-C boot mode
- Available from Raspberry Pi GitHub repository

Download: [github.com/raspberrypi/usbboot](https://github.com/raspberrypi/usbboot)

## Hardware Resources

### Mechanical Drawings

- Dimension specifications available in User Manual Section 7
- DIN rail mounting positions documented

### Schematics

Circuit schematics are not published. The user manual includes the block diagram and a simplified analog-input schematic.

### 3D Models

[IRIV PiControl 3D CAD (Google Drive)](https://drive.google.com/drive/folders/11rdPOow4ErHUyNKBKKNPCmCvhTMkd--6?usp=sharing)

## Example Code

### Sample Projects

See [Programming Reference](./programming-reference.md) for GPIO, ADC and serial examples. Cytron has not published a separate example-code repository for IRIV PiControl.

### Node-RED Flows

The Quick Start image's built-in dashboard flow is covered in the [IRIV PiControl hands-on using Node-RED in Industry 4.0](https://my.cytron.io/tutorial/iriv-picontrol-hands-on-using-nodered-in-industry-4) series (13 tutorials, including digital I/O, OLED, Modbus RTU, CSV/MySQL logging, ThingSpeak and Blynk).

## Tutorials and Guides

### Online Tutorials

See **[Tutorials](./tutorials.md)** for the 13-part Node-RED series and other Cytron projects using IRIV PiControl.

## Support and Contact

### Technical Support

**Cytron Technologies Sdn Bhd**

**Address:**
```
No. 1, Lorong Industri Impian 1
Taman Industri Impian
14000 Bukit Mertajam
Penang, Malaysia
```

**Phone:** +604 - 548 0668
**Fax:** +604 - 548 0669

**Email:**
- Technical support: [support@cytron.io](mailto:support@cytron.io)
- Sales inquiries: [sales@cytron.io](mailto:sales@cytron.io)

**Website:** [www.cytron.io](https://www.cytron.io)

### Warranty

Warranty terms are not stated in the user manual. Check the product page or contact Cytron Technologies support.

## Community Resources

### Product Page

Official product page: [my.cytron.io/p-iriv-picontrol-cm4-industrial-controller](https://my.cytron.io/p-iriv-picontrol-cm4-industrial-controller)

### Forums and Discussion

Ask questions in the comments of the Cytron tutorials, or contact [support@cytron.io](mailto:support@cytron.io).

### Third-Party Resources

**Raspberry Pi Documentation:**
- Official Raspberry Pi documentation
- GPIO reference
- Linux command references

**Node-RED Documentation:**
- Official Node-RED guides
- Flow library
- Community contributed nodes

---

**Source(s):**
- IRIV PiControl CM4 User Manual, Rev 1.3, Nov 2025
- IRIV PiControl product page (my.cytron.io)
- IRIV PiControl Node-RED Tutorial (my.cytron.io)
