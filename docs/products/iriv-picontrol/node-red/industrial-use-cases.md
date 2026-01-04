---
title: Industrial Use Cases
sidebar_position: 4
---

# Industrial Use Cases

Common industrial automation patterns and applications using Node-RED on IRIV PiControl.

## Overview

IRIV PiControl with Node-RED serves as a platform for Industry 4.0 applications, combining edge computing, industrial I/O, and visual programming for rapid deployment.

**Target applications:** Edge computing, IoT gateways, industrial automation, robotics, data logging, energy management systems.

## Sensor Monitoring and Data Acquisition

### Real-Time Monitoring

**Pattern:** Continuous sensor reading and visualization

**Components:**
- Analog inputs (AI0-AI3) for voltage/current sensors
- Digital inputs (DI0-DI3) for discrete sensors
- Dashboard gauges and charts for visualization
- Threshold monitoring for alarms

**Typical sensors:**
- Temperature sensors (0-10V or 4-20mA)
- Pressure sensors
- Flow meters
- Proximity sensors (digital)
- Door/limit switches (digital)

**Flow structure:**
```
Periodic Inject → Read ADC → Process Data → Dashboard Display
                            → Check Thresholds → Trigger Alarm
```

### Multi-Point Data Collection

**Pattern:** Aggregating data from multiple sensors

**Use cases:**
- Environmental monitoring (temperature, humidity, air quality)
- Machine condition monitoring (vibration, temperature, pressure)
- Energy monitoring (voltage, current, power factor)

**Data handling:**
- Real-time dashboard display
- Local database logging
- Cloud data transmission
- CSV file export

## Process Control and Automation

### Sequential Control

**Pattern:** Step-by-step process automation

**Applications:**
- Manufacturing assembly sequences
- Material handling automation
- Batch processing control

**Control elements:**
- Digital outputs (DO0-DO3) for actuator control
- Digital inputs for feedback and interlock signals
- Timer functions for dwell periods
- State machine logic in function nodes

**Example sequence:**
```
Start → Activate Output 1 → Wait for Input 1 → Activate Output 2 → Complete
```

### Conditional Logic Control

**Pattern:** Decision-based automation

**Applications:**
- Quality control sorting
- Safety interlock systems
- Adaptive process control

**Logic elements:**
- Switch nodes for conditional routing
- Function nodes for complex decision logic
- Multiple input/output coordination

## Protocol Gateway and Conversion

### Serial Protocol Gateway

**Pattern:** Bridge between different communication protocols

**Use cases:**
- Modbus RTU to MQTT gateway
- RS485 sensor network to cloud connector
- Legacy equipment integration

**Interfaces:**
- RS485 (/dev/ttyACM0) for Modbus devices
- RS232 (/dev/ttyACM1) for legacy equipment
- Ethernet (eth0, eth1) for network protocols
- WiFi for cloud connectivity

**Data flow:**
```
RS485 Modbus Devices → Node-RED Processing → MQTT/Cloud
```

### Multi-Protocol Integration

**Pattern:** Unified data collection from diverse sources

**Integration points:**
- Industrial sensors (analog, digital)
- Modbus RTU devices (RS485)
- Ethernet-connected PLCs
- Cloud APIs and databases

## Data Logging and Reporting

### Local Data Logging

**Pattern:** Store sensor data for analysis and compliance

**Storage options:**
- Local file system (CSV, JSON)
- SQLite database
- InfluxDB time-series database

**Logged data:**
- Timestamped sensor readings
- Process events and alarms
- System status and diagnostics

**Retention:**
- Configurable logging intervals
- Automatic file rotation
- Storage management

### Remote Reporting

**Pattern:** Transmit data to external systems

**Destinations:**
- Cloud platforms (AWS IoT, Azure IoT, Google Cloud)
- MQTT brokers
- HTTP REST APIs
- Email notifications

**Use cases:**
- Remote monitoring dashboards
- Alert notifications
- Compliance reporting
- Predictive maintenance data

## Edge Computing Applications

### Local Decision Making

**Pattern:** Process data and make decisions at the edge

**Advantages:**
- Reduced latency
- Continued operation during network outages
- Reduced cloud data transmission costs

**Functions:**
- Real-time threshold detection
- Alarm generation
- Emergency shutdown logic
- Data filtering and aggregation

### Predictive Maintenance

**Pattern:** Monitor equipment condition for maintenance scheduling

**Monitored parameters:**
- Vibration levels
- Temperature trends
- Operating hours
- Cycle counts

**Actions:**
- Alert when thresholds exceeded
- Schedule maintenance notifications
- Log historical trends

## Energy Management

### Power Monitoring

**Pattern:** Track energy consumption and efficiency

**Measurements:**
- Voltage and current (analog inputs)
- Power calculation (function nodes)
- Energy accumulation over time

**Outputs:**
- Real-time power display
- Daily/monthly energy reports
- Cost calculation
- Peak demand tracking

### Load Control

**Pattern:** Manage electrical loads for efficiency

**Control strategies:**
- Load shedding during peak demand
- Scheduled equipment operation
- Power factor correction

**Implementation:**
- Digital outputs control contactors/relays
- Analog inputs monitor power parameters
- Timer-based scheduling

## Machine Integration and Control

### PLC Communication

**Pattern:** Interface with programmable logic controllers

**Protocols:**
- Modbus RTU (RS485)
- Modbus TCP (Ethernet)

**Data exchange:**
- Read sensor data from PLC
- Write setpoints to PLC
- Monitor alarm states
- Coordinate multiple PLCs

### HMI Dashboard

**Pattern:** Human-machine interface for operators

**Dashboard elements:**
- Start/stop buttons
- Status indicators
- Process parameter displays
- Alarm panels
- Historical trend charts

**Accessibility:**
- Web browser access (desktop, tablet, mobile)
- Local network or remote access
- Multi-user support

## Robotics and Motion Control

### Coordinate Multiple Outputs

**Pattern:** Synchronized control of multiple actuators

**Applications:**
- Multi-axis positioning
- Conveyor coordination
- Gripper control sequences

**Coordination:**
- Timed output sequences
- Input-triggered actions
- Feedback-based control

## Industry 4.0 Integration

### IoT Gateway

**Pattern:** Connect industrial equipment to IoT platforms

**Functions:**
- Protocol translation
- Data aggregation
- Edge analytics
- Bidirectional communication

**Cloud platforms:**
- AWS IoT Core
- Microsoft Azure IoT
- Google Cloud IoT
- ThingSpeak
- MQTT brokers

### Digital Twin Data Source

**Pattern:** Provide real-time data for digital twin models

**Data streams:**
- Sensor measurements
- Equipment status
- Process parameters
- Environmental conditions

## Implementation Resources

**Hands-On Tutorial:**
The official [13-part Node-RED tutorial series](https://my.cytron.io/tutorial/iriv-picontrol-hands-on-using-nodered-in-industry-4) provides step-by-step implementation guidance for industrial applications.

**Community Flows:**
Node-RED flow library contains shared examples for industrial automation patterns.

---

**Source(s):**
- IRIV PiControl product page (my.cytron.io)
- IRIV PiControl CM4 User Manual, Rev 1.3, Nov 2025
- IRIV PiControl Node-RED Tutorial (my.cytron.io)
