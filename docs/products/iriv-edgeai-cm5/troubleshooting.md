---
sidebar_position: 7
title: Troubleshooting
---

# Troubleshooting

This page addresses common issues with the IRIV EdgeAI CM5 based on the official datasheet.

## Power Issues

### Device Does Not Power On

**Symptoms**: No LEDs illuminate, no display output.

**Check the following**:

1. **Power source**: Verify the power supply meets requirements:
   - VIN Terminal: 10-30V DC
   - USB-C: 5V 5A PD-capable adapter

2. **System Fuse (4A)**: The fuse may have blown due to surge or overcurrent.
   - Open the enclosure and inspect the 4A system fuse
   - Replace if damaged
   - Note: LED drivers have a separate 2A fuse

3. **Terminal connections**: For VIN power:
   - Verify positive (+) connected to VIN
   - Verify negative (-) connected to GND
   - Ensure secure contact in terminal block

4. **Power button** (for USB-C power):
   - Press the Power Button once to turn on
   - VIN power typically auto-starts

### LED Drivers Not Working

**Symptoms**: L0/L1 outputs have no voltage.

**Check the following**:

1. **Power source**: LED drivers are **not powered** when using USB-C power input
   - Use VIN terminal power (10-30V) for LED driver functionality

2. **LED Driver Fuse (2A)**: Check the independent 2A fuse for LED drivers
   - Located separately from the system fuse
   - Replace if blown

3. **GPIO configuration**: Ensure GPIO12 (L0) or GPIO13 (L1) are configured as outputs

## Boot Issues

### No Display Output After Power On

**Check the following**:

1. **HDMI connection**: Ensure HDMI cable is connected to the HDMI port
2. **Monitor input**: Verify monitor is set to correct HDMI input
3. **Boot/Run switch**: Must be in **Run** position for normal boot
4. **PWR LED**: If PWR LED is off, see Power Issues section
5. **ACT LED**: If ACT LED shows no activity:
   - eMMC may be corrupted
   - Reflash the OS using USB-C boot mode

### Cannot Enter Boot Mode for OS Flashing

1. Power off the device completely
2. Open enclosure to access internal board
3. Set **Boot/Run Switch** to **Boot** position
4. Connect USB-C cable to computer
5. Apply power
6. Device should be detected by rpiboot or Raspberry Pi Imager

### OS Flash Fails

1. Ensure adequate power during flashing
2. Use official Raspberry Pi Imager
3. Try a different USB-C cable (data-capable, not charge-only)
4. Try different USB port on computer

**After successful flash**:
- Set Boot/Run switch back to **Run** position
- Disconnect USB-C from computer
- Power on normally

## Peripheral Detection Issues

### RS485 Device Not Communicating

1. **Check device mapping**: RS485 should appear as `/dev/ttyACM0`
   ```bash
   ls -la /dev/ttyACM*
   ```

2. **Verify connections**:
   - A signal to A
   - B signal to B
   - GND connected (recommended for noise immunity)

3. **Check termination**: Onboard 120 ohm termination resistor is present
   - Only add external termination if required by your RS485 network topology

4. **Baud rate**: Maximum supported is 500 kbps

### Digital Inputs Not Responding

1. **Check sensor type**: The inputs support both PNP and NPN sensors
   - PNP: Connect S/S to negative (-), sensors to DI0/DI1
   - NPN: Connect S/S to positive (+), sensors to DI0/DI1

2. **Voltage levels**:
   - Low (VIL): 0 - 0.8V
   - High (VIH): 3 - 50V

3. **GPIO mapping**: DI0 = GPIO22, DI1 = GPIO27

### Digital Outputs Not Switching

1. **Load connection**: Outputs are dry contact (isolated)
   - Connect external power supply to your load circuit
   - Maximum: 50V, 500mA per channel

2. **GPIO configuration**: DO0 = GPIO23, DO1 = GPIO24
   - Ensure configured as outputs

3. **Flyback diode**: For inductive loads, add flyback diode to reduce EMI

### OLED Display Not Working

1. **Check I2C detection**:
   ```bash
   i2cdetect -y 1
   ```
   - OLED should appear at address 0x3C

2. **Connection**: Verify OLED ribbon cable is properly connected to internal connector

3. **Software**: Use SSD1315-compatible libraries (similar to SSD1306)

## AI Device Detection

### AI HAT+ Not Detected

1. **Physical connection**: Ensure AI HAT+ is properly seated on:
   - GPIO header (5V, 3V3, GND, ID_SC, ID_SD)
   - PCIe connector

2. **PCIe detection**:
   ```bash
   lspci
   ```

3. **HAT+ EEPROM**: The ID_SC/ID_SD lines are used for automatic HAT+ identification
   - Verify I2C communication on these lines

4. **Software drivers**: Install appropriate AI HAT+ software packages per Raspberry Pi documentation

### Camera Not Detected

1. **Cable connection**: Check 22-pin MIPI cable is properly inserted
   - MIPI0 and MIPI1 ports available

2. **Camera detection**:
   ```bash
   libcamera-hello --list-cameras
   ```

3. **Enable camera interface** if required in raspi-config

## Mini PCIe Module Issues

### 4G/LoRa Module Not Detected

1. **Check power GPIO**:
   ```bash
   # Ensure power is enabled
   pinctrl set 6 op dh
   ```

2. **Reset the module**:
   ```bash
   pinctrl set 5 op dl  # Assert reset
   sleep 1
   pinctrl set 5 op dh  # Release reset
   ```

3. **Physical connection**: Reseat the module in the mPCIe socket

4. **Note**: Mini PCIe socket only supports **USB 2.0**. PCIe-only modules will not function.

5. **SIM card**: For 4G modules, ensure Micro SIM is properly inserted

### NVMe SSD Not Detected

1. Verify SSD is properly seated in M.2 Key-M socket
2. Check SSD compatibility:
   - Must be NVMe (not SATA)
   - Supported sizes: 2230, 2242
3. Check detection:
   ```bash
   dmesg | grep nvme
   lsblk
   ```

## Network Issues

### Ethernet Not Working

1. **Check port**: Two ports available (eth0, eth1)
2. **Link status**: Check link LEDs on Ethernet jack
3. **Interface status**:
   ```bash
   ip link show
   ```

### WiFi Not Connecting

1. Verify WiFi is not disabled via hardware jumper
2. Check interface status:
   ```bash
   nmcli device status
   ```
3. Ensure antenna is connected

## RTC Issues

### Time Not Retained After Power Off

1. **Battery installed**: Ensure CR2032 is installed in RTC battery holder
2. **Battery condition**: Replace if depleted
3. **Polarity**: Install with correct orientation (positive up)
