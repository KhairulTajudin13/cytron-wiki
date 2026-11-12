---
title: Node-RED Installation
sidebar_position: 2
description: "Overview of Node-RED installation on IRIV PiControl."
---

# Node-RED Installation

Overview of Node-RED installation on IRIV PiControl.

## Pre-Installation Status

**If shipped with CM4 installed:** Node-RED should be pre-configured on the IRIV PiControl, with a default dashboard accessible at `iriv.local:1880/ui`.

**If installing fresh OS:** Node-RED installation may be required.

## Installation Overview

Node-RED installation on Raspberry Pi CM4 follows standard Raspberry Pi installation procedures.

Detailed installation steps are not provided in the user manual. For complete installation instructions, refer to the official hands-on tutorial.

## Official Installation Resources

**Recommended Tutorial:**
[IRIV PiControl Hands-On Using Node-RED in Industry 4.0](https://my.cytron.io/tutorial/iriv-picontrol-hands-on-using-nodered-in-industry-4)

This beginner-friendly tutorial provides step-by-step installation and setup guidance as part of a 13-part series.

**Node-RED Official Documentation:**
[Node-RED Installation on Raspberry Pi](https://nodered.org/docs/getting-started/raspberrypi)

Standard installation methods:
- Install script for Raspberry Pi OS
- npm installation
- Docker container deployment

## Verification

After installation, verify Node-RED is running:

**Check service status:**
```bash
sudo systemctl status nodered
```

**Access the editor:**
Open web browser and navigate to:
```
http://iriv.local:1880
```

**Access the dashboard:**
Navigate to:
```
http://iriv.local:1880/ui
```

## Dashboard Configuration

The default dashboard on pre-configured units includes:

**Control panels:**
- Digital output controls
- LED controls
- Buzzer activation
- System shutdown button

**Monitoring panels:**
- System status
- Network information
- Device states

Dashboard customization requires Node-RED flow editing.

## Required Nodes for IRIV PiControl

Common Node-RED nodes for industrial applications:

**GPIO Control:**
- `node-red-node-pi-gpio` - Raspberry Pi GPIO nodes, installed by the Node-RED Raspberry Pi install script
- The `rpi-gpio` nodes use **physical header pin numbers**, not GPIO (BCM) numbers — e.g. DI0 = GPIO13 = pin 33, DO0 = GPIO23 = pin 16 (see [Example Flows](./example-flows.md))

**Serial Communication:**
- `node-red-node-serialport` - RS232/RS485 communication
- Pre-installed with Node-RED

**I2C Devices:**
- Custom nodes or function nodes with I2C libraries

**Modbus (RS485 sensors and meters):**
- `node-red-contrib-modbus` - Modbus RTU/TCP read and write nodes, used by Cytron's Modbus tutorials

**Dashboard:**
- `node-red-dashboard` (Dashboard 1, URL `/ui`) - used by Cytron's Quick Start image and tutorials. It is **deprecated** by the Node-RED project and no longer maintained
- `@flowfuse/node-red-dashboard` (Dashboard 2.0, URL `/dashboard`) - the maintained successor; use it for new projects

Install extra nodes from the Node-RED editor (**Menu → Manage palette → Install**), or from the shell in `~/.node-red`, e.g. `npm install node-red-dashboard`, then restart Node-RED.

## Configuration Files

Node-RED keeps its files in the `.node-red` folder of the user that runs it. Raspberry Pi OS Bookworm has no default `pi` user — it is the user you created when flashing the OS.

| File | Path |
|---|---|
| User directory | `~/.node-red/` |
| Flows | `~/.node-red/flows.json` |
| Settings | `~/.node-red/settings.js` |

## Auto-Start Configuration

Node-RED should be configured to start automatically on boot.

**Enable auto-start:**
```bash
sudo systemctl enable nodered
```

**Start service:**
```bash
sudo systemctl start nodered
```

**Restart service:**
```bash
sudo systemctl restart nodered
```

## Port Configuration

**Default ports:**
- Editor: 1880
- Dashboard: 1880/ui

Port configuration is managed in the Node-RED settings file.

## Network Access

**Local access:**
```
http://iriv.local:1880
```
or
```
http://[IP_ADDRESS]:1880
```

**Access Point mode:**
When IRIV PiControl is in AP mode:
1. Connect to WiFi SSID: `iriv`
2. Password: `iriv1234` (default — change it before deploying on site)
3. Navigate to: `http://iriv.local:1880/ui`

## Next Steps

After installation:
1. [Build your first flow](./first-flow.md)
2. [Explore industrial use cases](./industrial-use-cases.md)
3. [Follow the complete hands-on tutorial](https://my.cytron.io/tutorial/iriv-picontrol-hands-on-using-nodered-in-industry-4)

---

**Source(s):**
- IRIV PiControl Node-RED Tutorial (my.cytron.io)
- IRIV PiControl CM4 User Manual, Rev 1.3, Nov 2025
