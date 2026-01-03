---
title: Programming Reference
sidebar_position: 9
---

# Programming Reference

GPIO pin assignments and code examples for programming IRIV PiControl I/O.

## GPIO Pin Assignments

### Digital Inputs (Terminal 2)

| Terminal | GPIO Pin | Logic | Voltage Range |
|----------|----------|-------|---------------|
| DI0 | GPIO13 | Active HIGH | 3V - 50V |
| DI1 | GPIO17 | Active HIGH | 3V - 50V |
| DI2 | GPIO22 | Active HIGH | 3V - 50V |
| DI3 | GPIO27 | Active HIGH | 3V - 50V |

**Input type:** Wet contact (requires external voltage)

### Digital Outputs (Terminal 1)

| Terminal | GPIO Pin | Logic | Specifications |
|----------|----------|-------|----------------|
| DO0 | GPIO23 | Active HIGH | Up to 50V, 500mA |
| DO1 | GPIO24 | Active HIGH | Up to 50V, 500mA |
| DO2 | GPIO25 | Active HIGH | Up to 50V, 500mA |
| DO3 | GPIO26 | Active HIGH | Up to 50V, 500mA |

**Output type:** Dry contact (solid state relay)

### User Controls

| Function | GPIO Pin | Description |
|----------|----------|-------------|
| User Button | GPIO4 | Input, active LOW when pressed |
| LED0 | GPIO20 | Output, user-programmable LED |
| LED1 | GPIO21 | Output, user-programmable LED |
| Buzzer | GPIO19 | Output, beeps when HIGH |
| Mini PCIe Power | GPIO6 | Output, HIGH to enable power to Mini PCIe socket |

## Analog Input (ADC)

**Chip:** ADS1115
**Interface:** I2C address 0x48, bus 1
**Channels:** 4 (AI0, AI1, AI2, AI3)

### Python Library Installation

```bash
pip install Adafruit_ADS1x15
```

### Initialization

```python
import Adafruit_ADS1x15

# Initialize the ADC
adc = Adafruit_ADS1x15.ADS1115(address=0x48, busnum=1)
```

### Reading 0-10V Voltage Input

```python
# Read ADC
# Param 1 = Analog Input Channel (0-3)
# Param 2 = ADC Gain (Gain 1 for 0-10V)
val = adc.read_adc(0, gain=1)

# Calculate the analog voltage (V)
# Full scale value = 32767
# Full scale voltage = 4.096V
# Voltage divider scale = 2.5
# voltage(V) = val / 32767 * 4.096 * 2.5
voltage = val / 3200
```

### Reading 0-5V Voltage Input

```python
# Read ADC
# Param 1 = Analog Input Channel (0-3)
# Param 2 = ADC Gain (Gain 2 for 0-5V)
val = adc.read_adc(0, gain=2)

# Calculate the analog voltage (V)
# Full scale value = 32767
# Full scale voltage = 2.048V
# Voltage divider scale = 2.5
# voltage(V) = val / 32767 * 2.048 * 2.5
voltage = val / 6400
```

### Reading 0-20mA Current Input

**Important:** DIP switch must be ON to enable the internal shunt resistor.

```python
# Read ADC
# Param 1 = Analog Input Channel (0-3)
# Param 2 = ADC Gain (Gain 2 for 0-20mA)
val = adc.read_adc(0, gain=2)

# Calculate the current (mA)
# Full scale value = 32767
# Full scale voltage = 2.048V
# Voltage divider scale = 2.5
# Shunt resistor value = 250 ohm
# voltage(V) = val / 32767 * 2.048 * 2.5
# current(mA) = voltage * 1000 / 250
current = val / 1600
```

## Serial Communication

### RS485

**Device:** `/dev/ttyACM0`
**Maximum baud rate:** 500 kbps
**Direction control:** Automatic

Example using pySerial:

```python
import serial

# Open RS485 port
ser = serial.Serial(
    port='/dev/ttyACM0',
    baudrate=9600,
    timeout=1
)

# Write data
ser.write(b'Hello RS485\n')

# Read data
data = ser.read(100)
print(data)

ser.close()
```

### RS232

**Device:** `/dev/ttyACM1`
**Maximum baud rate:** 120 kbps

Example using pySerial:

```python
import serial

# Open RS232 port
ser = serial.Serial(
    port='/dev/ttyACM1',
    baudrate=9600,
    timeout=1
)

# Write data
ser.write(b'Hello RS232\n')

# Read data
data = ser.read(100)
print(data)

ser.close()
```

## I2C Devices

Access to onboard I2C devices requires I2C to be enabled (via configuration script).

### I2C Bus 1 Devices

| Device | Address | Purpose |
|--------|---------|---------|
| OLED Display (SSD1306) | 0x3C | Status display |
| ADC (ADS1115) | 0x48 | Analog input |
| Crypto Auth (ATECC608B) | 0x60 | Authentication |

### I2C Bus 0 Devices

| Device | Address | Purpose |
|--------|---------|---------|
| RTC (PCF85063A) | 0x51 | Real-time clock |

## Complete Example: Digital I/O Control

Not specified in current sources: Complete GPIO control example code.

Standard Raspberry Pi GPIO libraries (RPi.GPIO, gpiozero) can be used with the GPIO pin numbers listed above.

## Additional Programming Resources

For general Raspberry Pi GPIO programming:
- RPi.GPIO documentation
- gpiozero documentation
- Official Raspberry Pi programming guides

For I2C device programming:
- Adafruit CircuitPython libraries
- smbus2 Python library

For serial communication:
- pySerial documentation

---

**Source(s):**
- IRIV PiControl CM4 User Manual, Rev 1.3, Nov 2025, Sections 3, 4, 5
