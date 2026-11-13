---
title: "IRIV EdgeAI Studio Troubleshooting"
sidebar_label: "Troubleshooting"
sidebar_position: 20
description: "Fixes for common IRIV EdgeAI Studio problems: page will not open, AI OFFLINE cards, zone missing, model locked, camera not listed, forgotten password, hostname clash and MQTT security."
---

# Troubleshooting

Common problems in IRIV EdgeAI Studio and how to fix them. If a whole system stops, check [Performance](./performance.md) first, then **Diagnostics > System Logs**.

## Access and Sign-In

### The page does not open

- Your computer must be on the **same network** as the IRIV: joined to its hotspot, or on the same router by Ethernet or Wi-Fi.
- Read the address from the OLED: press **USER** until **IP ADDRESSES** appears. `wlan0` = `10.42.0.1` means the IRIV is in hotspot mode. See [Connect and Sign In](./connect-and-sign-in.md).
- If you gave the device a name, try `http://<hostname>.local`. If two devices share a name, one answers on another name, for example `irivstudio-2.local`. Give each IRIV its own name in [Network settings](./settings/network.md#dashboard-access-and-device-name).

### "Your connection is not private"

This warning is expected with the device's self-signed certificate. Check that the address is your IRIV's, then click **Advanced > Proceed**. To remove the warning for good, install the device's root certificate on each computer ([Secure Connection (HTTPS)](./settings/network.md#secure-connection-https)).

### Forgot the master password

Click **Forgot password** on the sign-in page, then hold **USER** on the IRIV for 5 seconds. Type the 6-digit code shown on the OLED (valid for 10 minutes) and set a new password. See [Connect and Sign In](./connect-and-sign-in.md#forgot-the-master-password).

## Systems and Detection

### Cards show "AI OFFLINE · Detection is off"

The system is running but AI detection is off. Open **System Control** and switch **Detection** on, or click **Start** on Camera Setup. See [System Control and Dashboard](./run-and-dashboard.md).

### A node shows "zone missing" or another red message

A Zone Filter has no zone picked, or something a node uses is missing (an unwired input, a deleted Modbus server). Draw the zone or line in [Camera Setup](./camera-setup.md) first, click **Save all**, then click the node and pick it.

### I cannot change the model or classes

The model cannot be changed while the camera is running, and classes can only be added or removed while detection is stopped. Click **Stop** (or **In use · click to stop**) first. See [AI Models](./ai-models.md).

### A new camera does not appear

Click the refresh icon next to the camera list in Camera Setup, or **Refresh devices** in Live Preview. For USB, try another port and check the camera is UVC (V4L2) compatible.

### In and Out counts are swapped

Redraw the line in the opposite direction, or use **Flip direction** on the line's settings in Camera Setup.

### A parked car is not counted, or passing cars are

Draw each bay zone slightly smaller than the painted lines and set it to detect on **middle point in zone**. See the [Smart Parking tutorial](./tutorials/smart-parking.md#step-4-draw-the-zones).

### The counter shows MAX / a system will not start

One IRIV runs up to 4 systems, 4 AI processes and 4 cameras. Stop a system you do not need. With USB or GigE cameras, the CPU may limit you to fewer.

### Video is slow or FPS drops

- Use **yolov8n** instead of yolov8s, especially with several cameras.
- Turn **High Resolution** off (640×480 is the AI's working size).
- Choose **Draw boxes in the browser** instead of embedding boxes in the video.
- Check CPU, NPU temperature and FPS on [Performance](./performance.md).

## Data

### Dataset capture does nothing

Capture works from the raw camera stream, so detection must be running, and the **NVMe ready** badge must show. See [Database and Dataset](./database-and-dataset.md).

### SQL Playground gives a syntax error

Clear the editor before typing a new query; leftover lines run together with the new one. Queries are read-only, for this system only, and return up to 500 rows.

### Old data disappeared

Check the retention periods in [System and Data Retention](./settings/system-and-data-retention.md). Saving a policy also runs a deletion pass straight away.

## Security

:::warning Set an MQTT password
The built-in MQTT broker starts **open, with no password**, on port 1883. Anyone on the network can then read and send messages, including on topics that machines act on. Set a username and password in [Email, Telegram and MQTT](./settings/email-telegram-mqtt.md#mqtt-broker) unless the network is fully trusted and isolated.
:::

- Change the hotspot password after first setup ([Network](./settings/network.md)).
- Turn on **Sign out automatically when idle** if several people share a computer ([System and Data Retention](./settings/system-and-data-retention.md)).
- Review and revoke old sign-ins under **Settings > Accounts > Sessions** ([Accounts](./settings/accounts.md)).

---

**Source:** IRIV EdgeAI Studio User Manual, Rev 1.0 (Draft), Cytron.
