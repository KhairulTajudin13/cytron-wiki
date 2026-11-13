---
title: "IRIV EdgeAI Studio System Control and Dashboard"
sidebar_label: "System Control and Dashboard"
sidebar_position: 7
description: "Start and stop systems in IRIV EdgeAI Studio, switch detection, snapshots, recording and autostart, and use the live Dashboard, Live Preview and Dashboard Builder."
---

# System Control and Dashboard

Start and stop systems, switch AI detection on, and watch the results live.

## System Control

Go to **Run > System Control**, click **Start** on your system and switch **Detection** on.

![System Control page](/img/software/iriv-edgeai-studio/image70.webp)

The System Control page lists every system in one table. It consists of several parts that you should be familiar with.

1. **System Control** - Opens the table of all systems from the sidebar.

2. **System and Status** - The system name, and whether it is Running or Stopped.

3. **Camera / Source and Model**

    - **Camera / Source** - the camera or video file the system reads from.

    - **Model** - the AI model in use, e.g. yolov8s.

4. **Switches**

    - **Detection** - switches the AI detection on or off.

    - **Snap** - allows the system to save snapshots.

    - **Record** - allows the system to record video clips.

    - **Autostart** - starts the system automatically whenever the IRIV boots up.

![Detection, Snap, Record and Autostart switches](/img/software/iriv-edgeai-studio/image42.webp)

5. **Start / Restart / Stop** - The buttons at the end of each row control the system.

![Start, Restart and Stop buttons](/img/software/iriv-edgeai-studio/image8.webp)

    1. **Start** - starts the system.
    2. **Restart** - restarts the system.
    3. **Stop** - stops the system.

:::tip

Turn on Autostart if the system should keep running after a power cut or reboot.

:::

A message confirms the system is starting.

![System is starting message](/img/software/iriv-edgeai-studio/image103.webp)

:::note

The system pages come up within a few seconds, but AI detection stays off until you turn on Detection in System Control.

:::

## Dashboard

Go to **Overview > Dashboard** to see the live video and cards update in real time.

![Dashboard with live video, cards, class filters and status bar](/img/software/iriv-edgeai-studio/image114.webp)

The Dashboard consists of several sections that you should be familiar with.

1. **Dashboard** - Open the Dashboard from the Overview menu of the system sidebar.

2. **Dashboard Buttons**

    1. **Start / Stop** - starts or stops the system; when stopped, the last counts stay on the cards.
    2. **Edit dashboard** - opens the Dashboard Builder to change the layout.
    3. **Analytics** - jumps to the Analytics page.

    ![Dashboard buttons: Stop, Edit dashboard, Analytics](/img/software/iriv-edgeai-studio/image91.webp)

3. **Live Video** - The real-time camera feeds with a box and label around each detected object.

4. **Status Cards** - Cards built from your workflow, e.g. a count (People In Zone Counting) or a status (Zone Status).

5. **Class Filter** - Lists each Class Filter in the workflow so you can pause or run it from the Dashboard.

    - **Filter name** - the name of the Class Filter, e.g. people detection.
    - **Switch** - shows Running; click to pause or run that filter.

    ![Class filter switches on the Dashboard](/img/software/iriv-edgeai-studio/image90.webp)

6. **Detection Cards** - Show an alert colour and label (e.g. PEOPLE) when the condition is active, or “Everything within limits” when it is not.

7. **Status Bar** - Live CPU, RAM, CPU temperature, NPU temperature, the number of loaded models and FPS.

![Status bar: CPU, RAM, temperatures, models and FPS](/img/software/iriv-edgeai-studio/image78.webp)

While AI detection is running, the card shows the live value:

![Card showing a live value](/img/software/iriv-edgeai-studio/image52.webp)

When detection is stopped, it shows **AI OFFLINE - Detection is off**. Turn Detection back on in System Control to see the value again.

![Card showing AI OFFLINE](/img/software/iriv-edgeai-studio/image3.webp)

## Live Preview

Open Live Preview from the main sidebar to watch up to 4 feeds at once without lag.

![Live Preview with four feeds](/img/software/iriv-edgeai-studio/image168.webp)

1. **Live Preview** - Opens Live Preview from the Run menu of the main sidebar.

2. **Feed Count** - How many of the 4 feeds are open; clear the ones you are not watching.

3. **Grid / Spotlight**

    - **Grid** - all feeds the same size.

    - **Spotlight** - one large feed.

4. **Refresh devices** - Click it if a newly connected camera does not appear.

5. **Feeds** - Pick a system and camera in each slot to show up to 4 live feeds.

    - **Feed name** - the system and camera shown, e.g. DEMO UK · IP camera.
    - **FPS** - the Hailo (AI) and camera frame rates.
    - **×** - clears the feed from the slot.

    ![Feed header with name, FPS and clear button](/img/software/iriv-edgeai-studio/image98.webp)

## Dashboard Builder

Click **Edit dashboard** to open the Dashboard Builder.

![Dashboard Builder](/img/software/iriv-edgeai-studio/image195.webp)

The Dashboard Builder consists of several sections that you should be familiar with.

1. **Widgets** - Ready-made widgets you can add to any dashboard. Drag one onto the canvas, or double-click it to add it to the end.

    - **Live video** - the camera feed.

    - **Class filter** - a switch to pause or run a named Class Filter.

    - **Image card** - a picture you upload, e.g. a logo or site map.

    - **Text card** - your own words, e.g. a title or instructions.

2. **Dashboard cards** - The cards you drew on the Workflow canvas, grouped by type (e.g. Number tile, Line chart, Area chart). Drag one onto the canvas, or click it to add it to the end.

3. **Size and View**

    - **Small / Medium / Big** - set the default size for new widgets.

    - **View** - shows a preview of the finished dashboard.

4. **Canvas** - Arrange your dashboard here. Drag a widget by the handle at its top left to move it, drag its bottom-right corner to resize it, use the arrows to move it up or down, and click × to remove it.

5. **Properties** - Click a widget on the canvas to edit its settings here, e.g. its title or the camera it shows.

6. **Save and Back to dashboard** - Click Save (a “saved” label appears), then Back to the dashboard to see the result.

---

**Source:** IRIV EdgeAI Studio User Manual, Rev 1.0 (Draft), Cytron.
