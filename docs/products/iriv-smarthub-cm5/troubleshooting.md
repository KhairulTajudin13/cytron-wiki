---
sidebar_position: 6
title: Troubleshooting
---

# Troubleshooting

This page addresses common issues with the IRIV SmartHub CM5 based on the official user manual.

## Power Issues

### Device Does Not Power On

**Symptoms**: No LEDs illuminate, no display output.

**Check the following**:

1. **Power source**: Verify the power supply meets requirements:
   - DC Barrel Jack: 10-30V DC, minimum 2A recommended
   - USB-C: 4.9-5.2V; 5V 5A adapter recommended

2. **Fuse**: The 4A fuse may have blown due to surge or overcurrent.
   - Open the enclosure and inspect the 4A fuse on the internal board
   - Replace if damaged

3. **Boot/Run switch** (if using USB-C power):
   - Ensure switch is in **Run** position, not Boot
   - Boot position is only for OS flashing via USB-C

4. **Power button**:
   - Press the Power Button once to turn on (DC jack or USB-C)

### Device Powers Off Unexpectedly

**Possible causes**:

1. **Insufficient power supply current**: Use a power supply with adequate current rating (>2A for DC, 5A for USB-C)
2. **Thermal shutdown**: Ensure adequate ventilation around the device. Operating temperature range is -20°C to 60°C
3. **User button configured as shutdown**: Check if GPIO4 is programmed to trigger shutdown

## Boot Issues

### No Display Output After Power On

**Check the following**:

1. **HDMI connection**: Ensure HDMI cable is firmly connected to HDMI0 or HDMI1 port
2. **Monitor input**: Verify monitor is set to correct HDMI input
3. **Boot/Run switch**: Must be in **Run** position for normal boot
4. **PWR LED**: If PWR LED is off, see Power Issues section
5. **ACT LED**: If ACT LED shows no activity, the system may not be booting:
   - eMMC may be corrupted
   - Reflash the OS (see USB-C Boot Problems)

### System Stuck at Boot

**Possible causes**:

1. **Corrupted OS**: Reflash Raspberry Pi OS using USB-C boot mode
2. **Peripheral conflict**: Disconnect all USB devices and try booting with only HDMI connected
3. **NVMe boot issue**: If booting from NVMe, ensure the drive is properly seated and formatted correctly

## USB-C Boot Problems

### Cannot Enter Boot Mode

**Symptoms**: Computer does not detect device when attempting to flash OS.

**Steps**:

1. Power off the device completely
2. Open enclosure to access internal board
3. Set **Boot/Run Mode Switch** to **Boot** position
4. Connect USB-C cable between device and computer
5. Apply power (the device should appear as a USB mass storage device or be detected by rpiboot)

### rpiboot Not Detecting Device

1. Ensure Boot/Run switch is in **Boot** position
2. Try a different USB-C cable (use data-capable cable, not charge-only)
3. Try different USB port on computer
4. Install/update rpiboot tools from Raspberry Pi

### OS Flash Fails

1. Ensure adequate power during flashing process
2. Use official Raspberry Pi Imager
3. Verify the image file is not corrupted
4. Try a different USB-C cable

**After successful flash**:
- Set Boot/Run switch back to **Run** position
- Disconnect USB-C from computer
- Apply power normally

## RTC / Battery Notes

### RTC Not Keeping Time

**Symptoms**: System time resets after power off.

**Check the following**:

1. **Battery installed**: Ensure CR2032 coin cell is installed in the RTC battery holder
2. **Battery orientation**: Install with correct polarity (positive side up, typically)
3. **Battery charge**: Replace battery if low or depleted
4. **RTC enabled**: The RTC is built into the CM5 module and should work automatically with Raspberry Pi OS

### Installing RTC Battery

1. Power off the device
2. Open the enclosure
3. Locate the CR2032 battery holder on the internal board
4. Insert CR2032 battery with positive terminal facing up
5. Reassemble enclosure

## Network Issues

### Ethernet Not Working

1. Check cable connection to Gigabit Ethernet port
2. Verify link LEDs on the Ethernet jack
3. In Raspberry Pi OS, check interface status:
   ```bash
   ip link show eth0
   ```

### WiFi Not Connecting

1. Verify WiFi is not disabled via hardware jumper
2. Check WiFi status:
   ```bash
   nmcli device status
   ```
3. Ensure antenna is connected

## Expansion Module Issues

### Mini PCIe Module Not Detected

1. **Power cycle the module**: Use GPIO6 to toggle power:
   ```bash
   pinctrl set 6 op dl  # Power off
   sleep 1
   pinctrl set 6 op dh  # Power on
   ```

2. **Reset the module**: Use GPIO5:
   ```bash
   pinctrl set 5 op dl  # Assert reset
   sleep 1
   pinctrl set 5 op dh  # Release reset
   ```

3. **Check physical connection**: Reseat the module in the socket

4. **Note**: The mini PCIe socket only supports **USB 2.0**. Modules requiring PCIe interface will not function.

### NVMe SSD Not Detected

1. Verify SSD is properly seated in M.2 Key-M socket
2. Check SSD compatibility:
   - Must be NVMe (not SATA)
   - Supported sizes: 2230, 2242
3. Check dmesg for detection:
   ```bash
   dmesg | grep nvme
   ```

---

**Source(s):**
- IRIV SmartHub CM5 User Manual (IRIV-SH5), Rev 1.3, Dec 2025
- IRIV SmartHub CM5 product page (my.cytron.io), read Oct 2026
