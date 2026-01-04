---
title: Getting Started
sidebar_position: 2
---

# Getting Started

Task-based guide to set up and configure your IRIV PiControl for first use.

## Hardware Requirements

**Minimum Requirements:**
- IRIV PiControl CM4 unit
- Power supply: DC 10-30V (Terminal 1) OR USB-C 5V 1.5A minimum
- Network connection (Ethernet cable or WiFi)

**Optional:**
- HDMI monitor and cable
- USB keyboard and mouse
- WiFi antenna (for wireless-enabled CM4 variants)

## Power Requirements

The IRIV PiControl supports two power input methods:

### Terminal 1 Power Input
- **Voltage Range:** DC 10V to 30V
- **Surge Protection:** Up to 60V for 20ms
- **Fuse Protection:** 4A replaceable fuse
- **Current Draw:** Approximately 0.3A (device only, excluding USB loads)
- **No earth connection required**

### USB-C Power Input
- **Voltage:** DC 5V
- **Minimum Current:** 1.5A
- **Maximum Current:** 3A
- **Voltage Range:** 4.9V to 5.2V

## Power-Up Checklist

1. **Verify fuse** - Check that the 4A fuse is installed on the internal board
2. **Connect power** - Use either Terminal 1 (DC 10-30V) or USB-C (5V)
3. **Observe LEDs:**
   - **PWR** (red) - CM4 power indicator, should illuminate
   - **ACT** (green) - CM4 activity indicator, should blink during boot
4. **Check OLED display** - Should show model and variant information after boot

## First Boot and Access

### OLED Display Navigation

Upon startup, the OLED display shows:
- Model and variant information (first screen)
- Press **User Button** to cycle through pages:
  - Network IP addresses
  - CM4 status information (CPU load, temperature, RAM, storage usage)

### Network Connection

The IRIV PiControl can operate in two network modes:

**Access Point Mode (Default for tutorial setup):**
1. Device creates WiFi network named **"iriv"**
2. Connect from your computer/device
3. Password: **"iriv1234"**
4. Note: This network has no internet connection

**Standard Network Mode:**
1. Connect Gigabit Ethernet to **eth0** (mapped to CM4 default Ethernet)
2. Connect 10/100M Ethernet to **eth1** (USB Ethernet controller)
3. IP address will be displayed on OLED after connection

### Dashboard Access

After connecting to the network:
1. Open web browser
2. Navigate to: **`iriv.local:1880/ui`**
3. Access the monitoring dashboard to control buttons, LEDs, and buzzers

## Configuration

Run the configuration script to enable all IRIV PiControl features.

### Configuration Script Command

```bash
curl -L tinyurl.com/setup-iriv-picontrol | sudo bash
```

**Important:** Reboot the CM4 when the script completes.

### What the Script Configures

The script modifies system files to enable:

1. **USB Host Mode** - Enables USB 2.0 ports and USB Ethernet controller
2. **I2C Buses** - Activates I2C0 (RTC) and I2C1 (ADC, OLED, crypto chip)
3. **Real-Time Clock** - Configures PCF85063A RTC on I2C0
4. **External WiFi Antenna** - Switches from internal to external antenna
5. **OLED Background Service** - Displays IP address and system status automatically

The configuration script is only available for Raspberry Pi OS.

## OLED System Status

After configuration, the OLED automatically displays:
- IP addresses for both Ethernet interfaces
- CPU load and temperature
- RAM usage
- Storage usage

Press the **User Button** to cycle through status pages.

The User Button can also be programmed as a safe shutdown button (configured by the background script - hold for 5 seconds to trigger shutdown).

## Safe Shutdown

Two methods to safely shut down the system:

1. **User Button:** Hold for 5 seconds - buzzer will sound, then system shuts down
2. **Dashboard:** Use the shutdown function in the web UI at `iriv.local:1880/ui`

The **Reset Button** can wake up the CM4 after shutdown.

## Next Steps

**Hardware Configuration:**
- Review [hardware layout](./hardware-layout.md) and [internal components](./internal-board-layout.md)
- Understand [Terminal 1](./terminal-1.md) and [Terminal 2](./terminal-2.md) connections

**Software Development:**
- Explore [Node-RED installation](./node-red/install.md)
- Build your [first Node-RED flow](./node-red/first-flow.md)
- Review [programming reference](./programming-reference.md) for GPIO and ADC usage

**Industrial Applications:**
- Study [industrial use cases](./node-red/industrial-use-cases.md) with Node-RED

---

**Source(s):**
- IRIV PiControl CM4 User Manual, Rev 1.3, Nov 2025
- IRIV PiControl Node-RED Tutorial (my.cytron.io)
