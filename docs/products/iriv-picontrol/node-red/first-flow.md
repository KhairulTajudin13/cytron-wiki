---
title: First Flow
sidebar_position: 3
---

# Your First Node-RED Flow

Conceptual introduction to creating and deploying flows on IRIV PiControl.

## What is a Flow?

A Node-RED flow is a visual representation of connected nodes that process data and execute actions. Each flow consists of:

**Nodes:** Individual functional blocks (inputs, outputs, functions, logic)
**Wires:** Connections between nodes that define data flow
**Messages:** Data packets passed between nodes

## Pre-Configured Dashboard

The IRIV PiControl ships with a default dashboard flow that demonstrates basic functionality:

**Control elements:**
- Buttons to control digital outputs (DO0-DO3)
- LED control switches (LED0, LED1)
- Buzzer activation button
- Safe shutdown button (hold User Button for about 5 seconds, per the tutorial)

**Monitoring elements:**
- Display system status on OLED
- Show IP addresses
- Monitor device states

**Access:**
Navigate to `iriv.local:1880/ui` to interact with the pre-configured dashboard.

## Flow Structure Overview

A typical IRIV PiControl flow includes:

### Input Nodes
- Inject nodes (manual triggers, timers)
- GPIO input nodes (digital inputs DI0-DI3)
- Dashboard button/switch nodes
- Serial port input (RS485, RS232)

### Processing Nodes
- Function nodes (JavaScript processing)
- Switch nodes (conditional routing)
- Change nodes (message modification)
- Template nodes (data formatting)

### Output Nodes
- GPIO output nodes (digital outputs DO0-DO3, LEDs, buzzer)
- Dashboard display nodes
- Serial port output
- Debug nodes (development/troubleshooting)

## Basic Flow Concepts

### Triggering Actions

**Manual trigger:**
- Inject node provides a button in the editor
- Dashboard button node creates UI control element

**Timed trigger:**
- Inject node configured with interval
- Used for periodic sensor readings, status updates

**Event trigger:**
- GPIO input node responds to digital input state changes
- Dashboard input nodes respond to user interaction

### Processing Data

**Function nodes:**
- Execute custom JavaScript code
- Process sensor data, apply calculations
- Format messages for output

**Logic nodes:**
- Switch nodes route based on conditions
- Filter nodes pass/block messages

### Controlling Outputs

**GPIO control:**
- GPIO output node sets pin HIGH/LOW
- Controls digital outputs, LEDs, buzzer

**Display output:**
- Dashboard nodes update UI elements
- OLED display updates via I2C function nodes

## Deploying a Flow

After creating or modifying a flow:

1. **Click "Deploy" button** in the Node-RED editor
2. **Changes take effect immediately**
3. **Test functionality** via dashboard or direct interaction

**Deploy options:**
- Full (deploys all flows)
- Modified flows (only changed flows)
- Modified nodes (only changed nodes)

## Editing Existing Flows

The pre-configured dashboard can be modified:

1. **Access editor:** Navigate to `http://iriv.local:1880`
2. **View flows:** Existing flows appear in the workspace
3. **Modify nodes:** Double-click nodes to edit configuration
4. **Add connections:** Drag between node output and input ports
5. **Deploy changes:** Click Deploy button

## Example Flow Pattern: Button Controls LED

**Conceptual flow structure:**

```
[Dashboard Button] --> [Function: Toggle] --> [GPIO Output] --> LED0
```

**Flow behavior:**
1. User clicks button on dashboard
2. Function node toggles state (ON/OFF)
3. GPIO output node sets GPIO20 HIGH or LOW
4. LED0 illuminates or turns off

Step-by-step implementation instructions are available in the official hands-on tutorial.

## Debugging Flows

**Debug nodes:**
- Display message content in the debug panel
- Monitor data flow between nodes
- Troubleshoot logic issues

**Debug panel access:**
- Located on right side of Node-RED editor
- Shows real-time message output from debug nodes

## Flow Best Practices

**Descriptive naming:**
- Label nodes with clear, meaningful names
- Group related functionality into separate flows

**Modular design:**
- Create reusable subflows for common operations
- Keep individual flows focused on specific tasks

**Error handling:**
- Include catch nodes for error management
- Validate input data before processing

**Documentation:**
- Use comment nodes to annotate flow purpose
- Document complex logic in function nodes

## Learning Resources

**Official Hands-On Tutorial:**
[IRIV PiControl Node-RED Tutorial](https://my.cytron.io/tutorial/iriv-picontrol-hands-on-using-nodered-in-industry-4)

This beginner-friendly, 13-part series covers:
- Basic flow creation
- Dashboard design
- GPIO control
- Industrial integration

**Node-RED Documentation:**
- Official Node-RED guides
- Node library reference
- Community cookbook examples

## Next Steps

1. [Explore industrial use cases](./industrial-use-cases.md)
2. [Follow the hands-on tutorial for detailed implementation](https://my.cytron.io/tutorial/iriv-picontrol-hands-on-using-nodered-in-industry-4)
3. Experiment with the pre-configured dashboard
4. Create custom flows for your application

---

**Source(s):**
- IRIV PiControl Node-RED Tutorial (my.cytron.io)
- IRIV PiControl CM4 User Manual, Rev 1.3, Nov 2025
