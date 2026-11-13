---
title: "IRIV EdgeAI Studio Camera Setup and Zones"
sidebar_label: "Camera Setup and Zones"
sidebar_position: 5
description: "Add USB, RTSP/IP, GigE or video sources in IRIV EdgeAI Studio, set resolution and box display, and draw zones and counting lines."
---

# Camera Setup and Zones

Add the camera for a system and draw the zones and lines the workflow uses. Detection cannot start until the system has a camera source.

## The Camera Setup Page

Go to **AI Configuration > Camera Setup**.

![Camera Setup page](/img/software/iriv-edgeai-studio/image74.webp)

The Camera Setup page consists of several sections that you should be familiar with.

1. **Top Buttons**

    - **Undo / Redo** - undoes or redoes your last change.

    - **Discard** - throws away unsaved changes.

    - **Save all** - saves the cameras, zones and lines.

    - **Workflow** - goes to the Workflow page.

2. **Status Strip**

    - **Live View** - shows whether the camera is Live or Stopped.

    - **Model** - the model the camera is running (e.g. hailo · yolov8n).

    - **Camera Setting** - opens the settings of the camera.

    - **Snapshots / Clips** - open the photos and clips the system has captured.

3. **Drawing Toolbar**

    - **Box, Circle, Polygon** - draw areas (zones) on the picture.

    - **Line** - draws a counting line with an arrow showing the “in” direction.

    - **Start / Stop** - starts or pauses the camera preview (right side of the toolbar).

4. **Live Video** - Shows the camera picture; each detection has a box, ID, class and confidence (e.g. #725 person 55%).

5. **Cameras** - Every camera on this system; the count (e.g. 1 out of 4) shows the slots used. Click + Add camera to add one.

![Camera entry with on/off, settings and remove buttons](/img/software/iriv-edgeai-studio/image40.webp)

- **(1) On/Off** - switches the camera on or off.

- **(2) Settings** - opens the camera settings.

- **(3) Remove** - removes the camera from the system.

6. **Zones** - Every zone and line drawn on the picture, with its type (area or line) and a tick box to switch it on or off.

7. **Overlay** - Adds extra drawings on top of the video if needed: Add link line, Add guard zone or Add motion tracking.

## Add a Camera

Follow the numbers below to connect a camera.

![Add a camera window](/img/software/iriv-edgeai-studio/image96.webp)

1. **Add a camera** - Click Add a camera (or + Add camera in the Cameras panel).

2. **Source** - Choose the source tab: USB, Depth (3D), RTSP / IP, GigE or Video / Image (a video file or picture, useful for testing).

3. **Select the camera** - Pick your camera from the list; click the rescan button after plugging a camera in.

4. **Quality** - Runs at the AI's working size (640×480) by default; turn on High resolution only if you need more detail.

5. **Frame rate** - Choose the FPS, or click Ask the camera to read its native rate.

6. **Preview snapshot** - Grabs a still image to check the picture before adding the camera.

7. **Add camera** - Click to finish.

## Draw Zones and Lines

Use **Box**, **Circle** or **Polygon** for an area (for example a queue or a restricted area) and **Line** for a counting line across a doorway or driveway. Object detection does not need a zone: with none drawn, the model watches the whole view.

Follow the numbers below to draw and save a line.

![Drawing a counting line](/img/software/iriv-edgeai-studio/image87.webp)

1. **Line** - Select the Line tool in the drawing toolbar.

2. **Draw the line** - Click one side of the doorway or walkway, then the other. The arrow shows the “in” direction.

3. **Check the Zones panel** - The line appears in the Zones panel with type line; make sure it is ticked on.

4. **Save all** - Click Save all to save your zones and lines.

### Zone settings

Click a zone or line in the **Zones** panel to change its settings, then click **Save** on the zone and **Save all**.

- **Detected when** - when an object counts as inside an area: **box touches zone** (default), **feet in zone**, **middle point in zone** or **whole box inside**. Use **middle point in zone** for parking bays so a car partly over the line is not counted.
- **Line settings** - a line has its own **Detected when** (feet at the line by default), a **Line type** (for example *in one way, out the other*), a **Flip direction** button to swap the IN side, and a **Crossing threshold**.
- **Enabled** - untick to switch the zone off without deleting it. **Duplicate** and **Delete** are on the same panel.

![Zone settings: Detected when options](/img/software/iriv-edgeai-studio/image36.webp)

Name each zone clearly (for example *Entrance Line* or *Zone 1A*): the workflow's **Zone Filter** nodes pick zones by name.

## Camera Settings

Click Camera Setting (or the settings button of the camera) to edit the camera. The example below is an RTSP / IP camera.

![Camera settings for an RTSP / IP camera](/img/software/iriv-edgeai-studio/image175.webp)

1. **Source tab** - The source type of the camera (USB, RTSP / IP, GigE or Video / Image).

2. **Camera IP Address or Stream URL** - Enter the camera's IP address, or a full RTSP URL which is used as-is.

3. **Login Credentials (optional)** - Username, password and port (554 by default); only needed if the camera requires them.

4. **Video Stream** - Choose the stream used for detection; the stream path fills in automatically.

![Video Stream brand presets](/img/software/iriv-edgeai-studio/image64.webp)

- **(1) Brand presets** - main stream or lighter sub-stream for TP-Link / Tapo, Hikvision / Hilook and Dahua / Amcrest.

- **(2) Custom** - if your camera is not listed, choose Custom and type its stream path.

- **(3) Reset** - resets the Video Stream choice.

### Quality

Scroll down to Quality to change the picture size and frame rate.

![Quality: high resolution, resolution and frame rate](/img/software/iriv-edgeai-studio/image140.webp)

- **(1) High Resolution** - turn on for more image detail; this may increase processing load.

- **(2) Resolution** - choose the resolution (e.g. 1280×720 camera max).

- **(3) Frame rate** - for an RTSP camera, the rate is set on the camera itself.

### Detection box display

Choose how detection boxes are shown, then click Apply Settings.

![Detection Box Display options](/img/software/iriv-edgeai-studio/image41.webp)

- **(1) Draw boxes in the browser** - standard accuracy and low CPU usage; boxes may appear slightly delayed during fast movement.

- **(2) Video Visibility** - under Draw boxes in the browser: turn on Show video only when an object is detected to hide the live video until something is detected. It is only available with Draw boxes in the browser; if the system embeds boxes, click Switch to Draw Boxes in the Browser to use it.

- **(3) Embed boxes in the video** - high accuracy, may impact CPU usage; boxes appear directly in the video and stay visible in other video players.

Snapshots and recorded clips keep their boxes either way. Click **Apply Settings** to save.

:::warning

Zones are attached to their camera. Removing the camera removes its zones and breaks the workflow nodes that use them.

:::

---

**Source:** IRIV EdgeAI Studio User Manual, Rev 1.0 (Draft), Cytron.
