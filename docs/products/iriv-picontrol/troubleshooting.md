---
title: Troubleshooting
sidebar_position: 10
---

# Troubleshooting

Common issues and solutions for IRIV PiControl operation.

## Power Issues

### Device Does Not Power Up via Terminal 1

**Symptoms:**
- No LEDs illuminate
- OLED display remains blank
- No response when connected to Terminal 1 power input

**Possible causes and solutions:**

1. **Power supply voltage out of range**
   - Verify supply voltage is between 10V and 30V DC
   - Measure voltage at power supply output terminals
   - Check polarity (+ and - terminals)

2. **Blown fuse**
   - Open enclosure and locate the 4A fuse on internal board
   - Check fuse continuity with multimeter
   - Replace with 4A fuse if blown
   - Investigate cause of overcurrent before reconnecting power

3. **Wiring error**
   - Verify correct polarity (+ to +, - to -)
   - Check for loose terminal connections
   - Ensure adequate wire gauge for current capacity

### Device Powers Up via USB-C but Not Terminal 1

**Symptoms:**
- Device works when powered by USB-C
- No response when powered via Terminal 1

**Solution:**
- Check the 4A fuse on the internal board
- Fuse protects Terminal 1 input only; USB-C power bypasses the fuse

## RS485 Communication Issues

### No Communication on RS485 Bus

**Check the following:**

1. **A/B signal polarity**
   - Verify A connects to A on all devices
   - Verify B connects to B on all devices
   - Reversed polarity will prevent communication

2. **Termination resistor configuration**
   - Enable 120Ω termination only at both endpoints of the bus
   - Disable termination on intermediate devices
   - Check internal DIP switch position

3. **Baud rate mismatch**
   - Verify all devices on bus use the same baud rate
   - Maximum supported: 500 kbps

4. **Device path**
   - Confirm using `/dev/ttyACM0` for RS485
   - Check device exists: `ls -l /dev/ttyACM0`

5. **GND connection**
   - Connect 485-GND between devices for better noise immunity
   - Missing GND may cause intermittent communication errors

### RS485 Works Intermittently

**Possible causes:**
- Electrical noise on the bus (add GND connection if missing)
- Improper termination (verify only endpoints are terminated)
- Cable length exceeds RS485 specification for baud rate

## USB-C Boot vs Debug Confusion

### Cannot Access CM4 eMMC for Flashing

**Check boot/debug switch:**
1. Power off the device
2. Open enclosure
3. Locate Boot/Debug Mode Switch on internal board
4. Set switch to **Boot** position
5. Connect USB-C cable
6. Use rpiboot utility on host computer

### Cannot Access Serial Console

**Check boot/debug switch:**
1. Power off the device
2. Open enclosure
3. Locate Boot/Debug Mode Switch on internal board
4. Set switch to **Debug** position
5. Connect USB-C cable
6. Open serial terminal at 115200 baud (default UART settings)

**Note:** The USB-C port function is determined by the physical switch position, not by software configuration.

## OLED Display Issues

### OLED Display Blank or Not Showing IP Address

**Check the following:**

1. **Configuration script not run**
   - Run the setup script:
     ```bash
     curl -L tinyurl.com/setup-iriv-picontrol | sudo bash
     ```
   - Reboot after script completes

2. **I2C not enabled**
   - Verify I2C1 is enabled in `/boot/config.txt` or `/boot/firmware/config.txt`
   - Should contain: `dtparam=i2c_arm=on`

3. **Background script not running**
   - Check if script exists:
     ```bash
     ls -l /usr/local/bin/iriv_pi_control/background_script.py
     ```
   - Manually run script to test:
     ```bash
     python3 /usr/local/bin/iriv_pi_control/background_script.py
     ```

4. **I2C device not detected**
   - Check I2C bus for OLED at address 0x3C:
     ```bash
     i2cdetect -y 1
     ```
   - Should show "3C" in the grid

### User Button Does Not Cycle OLED Pages

**Verify:**
- Background script is running (see above)
- Button is not held for 5+ seconds (this triggers shutdown instead)

## Ethernet and Network Issues

### eth1 (10/100M Ethernet) Not Present

**Symptoms:**
- Only eth0 appears in `ip addr` output
- eth1 missing

**Solution:**
- Verify USB host is enabled in config.txt:
  ```
  dtoverlay=dwc2,dr_mode=host
  ```
- USB OTG mode should be disabled (commented out):
  ```
  #otg_mode=1
  ```
- Reboot after modifying config.txt

### Cannot Access Device at iriv.local

**Check:**
1. Device and client computer on same network
2. mDNS/Avahi service enabled on IRIV PiControl
3. Try IP address directly instead of hostname
4. Press User Button to view IP address on OLED display

## Digital Input Issues

### Digital Input Not Responding

**Verify:**
1. **Wet contact voltage applied**
   - Digital inputs require external voltage source
   - Minimum: 3.0V DC
   - Dry contact switches will not work

2. **Correct wiring polarity**
   - Positive signal to DI+ terminal
   - Ground to DI- terminal

3. **Voltage within range**
   - Minimum: 3V
   - Maximum: 50V

## Analog Input Issues

### Analog Input Reads Zero in Current Mode

**Check:**
1. **DIP switch enabled**
   - Internal Analog Input Mode Switch must be set to current position
   - DIP switch ON to enable 250Ω shunt resistor

2. **ADC gain setting**
   - Use `gain=2` for 0-20mA measurement

### All Analog Channels Must Be Same Mode

**Remember:**
- Voltage/current mode applies to all four channels
- Cannot mix voltage and current measurement
- Internal DIP switch sets mode for AI0, AI1, AI2, and AI3 simultaneously

---

**Source(s):**
- IRIV PiControl CM4 User Manual, Rev 1.3, Nov 2025
- IRIV PiControl Node-RED Tutorial (my.cytron.io)
