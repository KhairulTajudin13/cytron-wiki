---
title: Terminal 2
sidebar_position: 6
---

# Terminal 2

Terminal 2 provides isolated digital inputs and isolated analog inputs for voltage and current measurement.

## Isolated Digital Input

### Specifications

| Parameter | Minimum | Maximum | Unit |
|-----------|---------|---------|------|
| Low Level (VIL) | -50 | 0.8 | V |
| High Level (VIH) | 3 | 50 | V |
| Minimum ON Current | 0.2 | - | mA |
| Isolation Voltage | - | 3750 | Vrms |

### Characteristics

**Input type:** Wet contact (requires external voltage source)
**Control logic:** Active HIGH
**Number of channels:** 4 (DI0, DI1, DI2, DI3)
**Isolation:** Each channel isolated from system and from other channels

### GPIO Mapping

| Input | GPIO Pin |
|-------|----------|
| DI0 | GPIO13 |
| DI1 | GPIO17 |
| DI2 | GPIO22 |
| DI3 | GPIO27 |

### Wiring

Each digital input requires an external voltage source (wet contact configuration):
- **Positive terminal (+):** Connect to signal source
- **Negative terminal (-):** Connect to signal ground

**Minimum activation:** DC 3.0V at 0.2mA
**Maximum input:** DC 50V

**Example - Connecting a 24V sensor:**
```
Sensor Output (+) ----[DI0 +]
Sensor Ground     ----[DI0 -]
```

When sensor outputs 3V or higher, GPIO13 reads HIGH.

### Important Notes

- Inputs are **wet contact only** - they require external power
- Dry contact signals (unpowered switches) will not work
- Each channel is isolated from the others and from system ground

## Isolated Analog Input

### Specifications

| Parameter | Minimum | Maximum | Unit |
|-----------|---------|---------|------|
| Voltage Mode Range | 0 | 10 | V |
| Voltage Mode (0-5V) | 0 | 5 | V |
| Current Mode Range | 0 | 20 | mA |
| Input Impedance (Voltage) | 25 (nominal) | 25 (nominal) | kΩ |
| Input Impedance (Current) | 250 (nominal) | 250 (nominal) | Ω |
| Isolation Voltage | - | 3000 (rated) | Vrms |

### ADC Specifications

**Chip:** ADS1115
**Interface:** I2C Slave Address 0x48
**Channels:** 4 (AI0, AI1, AI2, AI3)
**Resolution:** 16-bit
**Full Scale Range:** Configurable via gain setting

### Operating Modes

The analog inputs support three measurement modes:
- **0-5V** voltage measurement
- **0-10V** voltage measurement
- **0-20mA** current measurement

**Important:** Each analog input has its own current-mode switch (4-way DIP, one position per channel). The user manual wiring figure shows AI0/AI1 on 0-10V and AI2/AI3 on 0-20mA at the same time, so voltage and current channels can be mixed. Which DIP position maps to which channel is not labelled in the manual — check by testing or ask Cytron support.

### Voltage Mode Configuration

**For 0-5V or 0-10V measurements:**
1. Set internal **Analog Input Mode Switch** to voltage position
2. Connect signal to **AI[n] +** terminal
3. Connect ground to **AGND** terminal

**Input impedance:** 25kΩ

### Current Mode Configuration

**For 0-20mA measurements:**
1. Set internal **Analog Input Mode Switch** to current position
2. **DIP switch MUST be ON to enable internal shunt resistor**
3. Connect current loop to **AI[n] +** terminal
4. Connect current return to **AGND** terminal

**Input impedance:** 250Ω (shunt resistor)

### AGND Isolation

⚠️ **Important:** AGND is isolated from system ground but **common among all four analog input channels**.

- Do not connect AGND to system ground
- All four analog inputs share the same AGND reference
- AGND isolation: 3000 Vrms from system ground

### Wiring Examples

**Voltage measurement (0-10V sensor):**
```
Sensor Output (+) ----[AI0]
Sensor Ground     ----[AGND]
```

**Current measurement (0-20mA sensor):**
```
Sensor Current Output (+) ----[AI0]
Sensor Current Return     ----[AGND]
```

Ensure DIP switch is set to current mode and enabled.

### ADC Python Library

**Recommended library:** Adafruit_ADS1x15

**Installation:**
```bash
# Raspberry Pi OS Bookworm blocks system-wide pip installs,
# so create a virtual environment first (one time):
python3 -m venv --system-site-packages ~/iriv-env
source ~/iriv-env/bin/activate
pip install Adafruit_ADS1x15
```

**Initialization:**
```python
import Adafruit_ADS1x15

# Initialize ADC
adc = Adafruit_ADS1x15.ADS1115(address=0x48, busnum=1)
```

**Reading voltage (0-10V):**
```python
# Read ADC (channel 0, gain 1 for 0-10V)
val = adc.read_adc(0, gain=1)

# Calculate voltage
# Full scale: 32767 @ 4.096V * 2.5 (divider) = 10.24V
voltage = val / 3200  # Result in volts
```

**Reading voltage (0-5V):**
```python
# Read ADC (channel 0, gain 2 for 0-5V)
val = adc.read_adc(0, gain=2)

# Calculate voltage
# Full scale: 32767 @ 2.048V * 2.5 (divider) = 5.12V
voltage = val / 6400  # Result in volts
```

**Reading current (0-20mA):**
```python
# Read ADC (channel 0, gain 2 for 0-20mA)
# DIP switch must be ON to enable shunt resistor
val = adc.read_adc(0, gain=2)

# Calculate current
# Full scale: 32767 @ 2.048V * 2.5 (divider) / 250Ω = 20.48mA
current = val / 1600  # Result in mA
```

### Calculation Details

**0-10V mode (gain=1):**
- ADC full scale: 32767 = 4.096V
- Voltage divider: 2.5×
- Maximum measurable: 4.096V × 2.5 = 10.24V
- Conversion: `voltage = val / 3200`

**0-5V mode (gain=2):**
- ADC full scale: 32767 = 2.048V
- Voltage divider: 2.5×
- Maximum measurable: 2.048V × 2.5 = 5.12V
- Conversion: `voltage = val / 6400`

**0-20mA mode (gain=2):**
- ADC full scale: 32767 = 2.048V
- Voltage divider: 2.5×
- Shunt resistor: 250Ω
- Maximum measurable: (2.048V × 2.5) / 250Ω = 20.48mA
- Conversion: `current = val / 1600`

## Common Issues

### Digital Input Issues
- **No response from dry contact switch** - Digital inputs require wet contact (external voltage)
- **Voltage below 3.0V** - Input will not register as HIGH
- **Voltage above 50V** - May damage input circuitry

### Analog Input Issues
- **Current mode not working** - DIP switch must be enabled for shunt resistor
- **AGND connected to system ground** - AGND is isolated; do not connect to system ground
- **Wrong ADC gain setting** - Use gain=1 for 0-10V, gain=2 for 0-5V and 0-20mA

---

**Source(s):**
- IRIV PiControl CM4 User Manual, Rev 1.3, Nov 2025, Sections 2, 4, 5.2
