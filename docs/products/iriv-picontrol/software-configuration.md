---
title: Software Configuration
sidebar_position: 8
---

# Software Configuration

System configuration requirements and setup script details for IRIV PiControl.

## Purpose of Configuration

The IRIV PiControl requires system-level configuration to enable hardware features that are disabled by default on Raspberry Pi CM4. Configuration is performed via an automated setup script.

**Pre-configured units:** If your IRIV PiControl was shipped with CM4 already installed, configuration should be pre-applied.

**User configuration required when:**
- Installing a fresh OS image
- Replacing the CM4 module
- Reinstalling Raspberry Pi OS

## Setup Script Command

The configuration script is hosted online and executed via curl:

```bash
curl -L tinyurl.com/setup-iriv-picontrol | sudo bash
```

**Requirements:**
- Active internet connection
- Raspberry Pi OS (Bullseye, Bookworm, or compatible)
- sudo privileges

**After execution:** Reboot the CM4 for changes to take effect.

**Supported OS:** Raspberry Pi OS only. Other operating systems are not supported by this script.

## Configuration Changes

The setup script modifies system configuration files and installs a background monitoring script.

### 1. USB Host Mode

**File modified:** `/boot/config.txt` (Bullseye) or `/boot/firmware/config.txt` (Bookworm)

**Changes:**
- **Disable USB OTG mode** by commenting out:
  ```
  #otg_mode=1
  ```
- **Enable USB host** for USB 2.0 ports and USB Ethernet controller:
  ```
  dtoverlay=dwc2,dr_mode=host
  ```

**Purpose:** By default, CM4 USB is disabled to save power. This enables the USB host controller for the onboard USB 2.0 ports and the USB-to-Ethernet adapter (eth1).

### 2. I2C Bus Activation

**File modified:** `/boot/config.txt` (Bullseye) or `/boot/firmware/config.txt` (Bookworm)

**I2C0 for RTC:**
```
dtparam=i2c_vc=on
dtoverlay=i2c-rtc,pcf85063a,i2c_csi_dsi
```

**Purpose:** Enables I2C0 (I2C_vc) on the CSI/DSI interface and configures the PCF85063A real-time clock.

**I2C1 for peripherals:**
```
dtparam=i2c_arm=on
```

**Purpose:** Enables I2C1 (I2C_arm) for communication with:
- ADS1115 ADC (address 0x48)
- SSD1306 OLED (address 0x3C)
- ATECC608B crypto chip (address 0x60)

### 3. External Antenna Selection

**File modified:** `/boot/config.txt` (Bullseye) or `/boot/firmware/config.txt` (Bookworm)

**Change:**
```
dtparam=ant2
```

**Purpose:** Switches WiFi and Bluetooth antenna from internal (default on CM4) to the external antenna connector on IRIV PiControl.

**Note:** Only applicable to CM4 variants with wireless capability.

### 4. OLED Background Service

**Script location:**
```
/usr/local/bin/iriv_pi_control/background_script.py
```

**Functions:**
- Display IP addresses for eth0 and eth1
- Display system status: CPU load, CPU temperature, RAM usage, storage usage
- Monitor User Button state
- Shut down the Pi safely when the User Button is pressed (user manual wording)

**Auto-start:** The script is configured to run automatically on boot.

**User interaction (per Cytron's Node-RED tutorial — not stated in the user manual, may vary by software version):**
- Press User Button to cycle through OLED display pages
- Hold User Button for about 5 seconds to shut down safely (buzzer sounds)

## File Paths Reference

### Config File Location

**Raspberry Pi OS Bullseye and earlier:**
```
/boot/config.txt
```

**Raspberry Pi OS Bookworm and later:**
```
/boot/firmware/config.txt
```

### Background Script

```
/usr/local/bin/iriv_pi_control/background_script.py
```

## Manual Configuration

If the automated script cannot be used, apply the following changes manually:

### Edit config.txt

Open the config file in a text editor with sudo privileges:

```bash
# For Bullseye and earlier
sudo nano /boot/config.txt

# For Bookworm and later
sudo nano /boot/firmware/config.txt
```

Add or modify these lines:

```ini
# Disable USB OTG (comment out if exists)
#otg_mode=1

# Enable USB host
dtoverlay=dwc2,dr_mode=host

# Enable I2C0 for RTC
dtparam=i2c_vc=on
dtoverlay=i2c-rtc,pcf85063a,i2c_csi_dsi

# Enable I2C1 for peripherals
dtparam=i2c_arm=on

# Use external antenna (wireless CM4 only)
dtparam=ant2
```

Save the file and reboot.

### OLED Script Installation

The setup script installs it automatically to `/usr/local/bin/iriv_pi_control/background_script.py`. Cytron has not published a separate manual install procedure — re-run the setup script if it is missing.

## Verification

After configuration and reboot, verify:

1. **I2C devices detected:**
   ```bash
   i2cdetect -y 1
   ```
   Should show devices at addresses 0x3C, 0x48, and 0x60.

2. **OLED display active:**
   - IP addresses visible on screen
   - User Button cycles through pages

3. **USB Ethernet active:**
   ```bash
   ip addr show eth1
   ```
   Should show eth1 interface.

4. **RTC functional:**
   ```bash
   timedatectl
   ```
   Should show RTC time.

---

**Source(s):**
- IRIV PiControl CM4 User Manual, Rev 1.3, Nov 2025, Section 6
