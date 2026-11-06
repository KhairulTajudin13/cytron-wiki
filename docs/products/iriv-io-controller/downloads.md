---
title: Downloads
sidebar_position: 9
---

# Downloads

Downloadable resources and support contact information for the IRIV IO Controller.

## Documentation

### Datasheet

**IRIV IO Controller Datasheet**
- Version: Rev 1.0
- Date: July 2024
- Format: PDF

Download: [IRIV IO Controller Datasheet (PDF)](../../../sources/manuals/IRIV%20IO%20Controller%20Datasheet.pdf) — also linked from the product page.

## Example Code

- [CytronTechnologies/Cytron-IRIV-IO-Controller](https://github.com/CytronTechnologies/Cytron-IRIV-IO-Controller) — official example code (GitHub), linked from the product page
- [CircuitPython board build for IRIV IO Controller](https://circuitpython.org/board/cytron_iriv_io_controller/)

## 3D Models

**IRIV IO Controller 3D CAD Files**
- Format: Multiple CAD formats
- Link: [Google Drive - IRIV IO Controller 3D Models](https://drive.google.com/drive/folders/1QK7IpfoBMk6oEOzWjXBTad1ygx5aiyUH)

The 3D models are useful for:
- Panel and enclosure design
- DIN rail mounting planning
- Integration with other equipment
- Mechanical clearance verification

## Mechanical Drawings

![IRIV IO Controller Dimensions and DIN Rail Mounting](/img/products/iriv-io-controller/dimension-din-rail-mounting.png)

*Enclosure dimensions and DIN rail mounting specifications.*

## Firmware

### Default Firmware

Cytron's getting-started material describes the unit as shipping preprogrammed as a MODBUS RTU IO Expander with counter function.

:::note
The default firmware is not described in the datasheet. Confirm the firmware version and MODBUS register map with Cytron support before relying on it.
:::

### CircuitPython Firmware

CircuitPython firmware for RP2350A:
- Available from official CircuitPython website
- Format: UF2 file
- Link: [CircuitPython Downloads](https://circuitpython.org/downloads)

Search for "Raspberry Pi RP2350" compatible builds.

### MicroPython Firmware

MicroPython firmware for RP2350A:
- Available from official MicroPython website
- Format: UF2 file
- Link: [MicroPython Downloads](https://micropython.org/download/)

Search for RP2350A-compatible releases.

## Software Tools

### Programming Tools

**RP2350A Bootloader:**
- Built into the RP2350A microcontroller
- No additional software required for firmware upload
- Appears as USB mass storage device

### Serial Console Tools

For debugging and serial communication:
- Windows: PuTTY, TeraTerm
- macOS/Linux: screen, minicom
- Cross-platform: Arduino IDE Serial Monitor

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

### Product Page

Official product page:
[IRIV IO Controller - IR4.0 Industrial I/O Controller](https://my.cytron.io/c-industrial-with-raspberry-pi/p-iriv-io-controller)

### Warranty

Warranty terms are not stated in the datasheet. Check the product page or contact Cytron Technologies support.

## Community Resources

### Raspberry Pi Resources

**RP2350A Documentation:**
- Official Raspberry Pi RP2350A datasheet
- Raspberry Pi Pico SDK documentation
- Hardware design guidelines

**Links:**
- [Raspberry Pi Documentation](https://www.raspberrypi.com/documentation/microcontrollers/)

### Wiznet W5500 Resources

**W5500 Ethernet Controller:**
- Official W5500 datasheet
- Application notes
- Example code and libraries

**Links:**
- [Wiznet Official Website](https://www.wiznet.io/product-item/w5500/)

### CircuitPython Libraries

**Community Libraries:**
- CircuitPython library bundle
- Driver libraries for sensors and peripherals
- Example code

**Links:**
- [CircuitPython Libraries](https://circuitpython.org/libraries)

---

**Source(s):**
- IRIV IO Controller Datasheet, Rev 1.0, July 2024
- IRIV IO Controller product page (my.cytron.io)
