---
title: Node-RED Documentation
sidebar_position: 1
---

# Node-RED on IRIV PiControl

Visual programming environment for industrial automation and IoT workflows on IRIV PiControl.

## Overview

Node-RED is a flow-based programming tool for wiring together hardware devices, APIs, and online services. On IRIV PiControl, Node-RED provides a web-based interface for creating industrial automation workflows without traditional coding.

**Why Node-RED on IRIV PiControl:**
- Visual programming environment accessible via web browser
- Real-time dashboard for monitoring and control
- Integration with digital I/O, analog inputs, and serial interfaces
- Pre-built nodes for industrial protocols
- Suitable for rapid prototyping and production deployment

## Role in Industrial Applications

Node-RED serves as the primary interface for:

**Monitoring:**
- Real-time sensor data visualization
- System status dashboards
- Alert and notification systems

**Control:**
- Digital output switching
- Process automation sequences
- Remote device control

**Data Processing:**
- Sensor data logging
- Protocol conversion (RS485, RS232, Modbus)
- Gateway functionality between industrial networks

**Integration:**
- Cloud service connectivity
- Database logging
- API communication

## Accessing Node-RED

After initial setup, Node-RED is accessible via web browser:

**URL:** `http://iriv.local:1880/ui`

**Dashboard:** Provides real-time interface for:
- Controlling digital outputs (buttons, LEDs, buzzer)
- Monitoring digital inputs
- Viewing system status
- Executing shutdown procedures

## Documentation Structure

### Getting Started
- [Installation](./install.md) - Node-RED setup overview
- [First Flow](./first-flow.md) - Understanding basic workflow concepts

### Applications
- [Industrial Use Cases](./industrial-use-cases.md) - Common industrial automation patterns

### External Resources
- [Official Hands-On Tutorial](https://my.cytron.io/tutorial/iriv-picontrol-hands-on-using-nodered-in-industry-4) - Complete 13-part beginner series

## Default Dashboard Features

The pre-configured Node-RED dashboard on IRIV PiControl includes:

**Control Elements:**
- Digital output buttons (DO0-DO3)
- LED control (LED0, LED1)
- Buzzer activation
- Safe shutdown button

**Monitoring:**
- System status display
- Network information
- Device state indicators

**Access Point Mode:**
When operating in AP mode:
- Network SSID: `iriv`
- Password: `iriv1234`
- Dashboard accessible at: `iriv.local:1880/ui`

## Integration with IRIV PiControl Hardware

Node-RED can interface with all IRIV PiControl hardware features:

**Digital I/O:**
- Read digital inputs via GPIO nodes
- Control digital outputs for switching loads
- Monitor button states and trigger events

**Analog Inputs:**
- Read sensor data from ADS1115 ADC
- Process voltage and current measurements
- Implement threshold monitoring and alarms

**Serial Communication:**
- RS485 device communication (`/dev/ttyACM0`)
- RS232 device communication (`/dev/ttyACM1`)
- Modbus RTU protocol support

**System Features:**
- OLED display updates
- RTC integration for scheduling
- Network status monitoring

## Skill Level

Node-RED is designed for users at all skill levels:
- **Beginners:** Visual drag-and-drop interface, no coding required
- **Intermediate:** Custom function nodes with JavaScript
- **Advanced:** Complex industrial automation workflows, custom node development

## Next Steps

1. [Install Node-RED](./install.md) (if not pre-installed)
2. [Build your first flow](./first-flow.md)
3. [Explore industrial use cases](./industrial-use-cases.md)
4. [Follow the official hands-on tutorial](https://my.cytron.io/tutorial/iriv-picontrol-hands-on-using-nodered-in-industry-4)

---

**Source(s):**
- IRIV PiControl Node-RED Tutorial (my.cytron.io)
- IRIV PiControl CM4 User Manual, Rev 1.3, Nov 2025
