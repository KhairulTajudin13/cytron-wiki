---
title: "IRIV EdgeAI Studio Tutorial: AI Object Detection"
sidebar_label: "AI Object Detection"
sidebar_position: 2
description: "Detect and log people and chairs with the IRIV EdgeAI Studio AI Object Detection template and learn how its workflow decides what is in view."
---

# AI Object Detection Tutorial

## Introduction

In this tutorial, you will set up an AI Object Detection system on IRIV EdgeAI Studio that spots **people** and **chairs** in a live camera feed, shows what it sees on a dashboard, and logs every detection to a database.

The system runs a YOLOv8 model on the IRIV's Hailo NPU, so all detection happens on the device itself. No cloud service is needed.

By the end, you will have:

- A USB camera streaming into the system

- A YOLOv8 model detecting people and chairs in real time

- A workflow that decides which object is in view and raises an alert for it

- Dashboard tiles and an analytics chart showing detection counts

- A database table with one row per detection alert

People and chairs are only examples. Once you understand the flow, you can swap in any of the 80 COCO classes, or your own custom model.

## What you need

| Item                    | Notes                                                                      |
|-----------------------------|--------------------------------------------------------------------------------|
| IRIV EdgeAI CM5 | Runs IRIV EdgeAI Studio and the YOLOv8 models on its AI HAT+ |
| NVMe storage                | Holds models, snapshots, clips and dataset captures                            |
| USB (UVC) camera            | Any V4L2-compatible webcam works (RTSP/IP and GigE cameras are also supported) |
| Network connection          | To open IRIV EdgeAI Studio from your browser                                  |
| Computer with a web browser | Chrome or Edge recommended                                                     |

If you are new to IRIV EdgeAI Studio, follow [Getting Started](../getting-started.md) first. It covers logging in and creating a system with the New System wizard.

## Step 1: Open the system and tour the interface

Open IRIV EdgeAI Studio in your browser and select the **AI Object Detection** system. It opens on the **Dashboard** page.

![AI Object Detection dashboard](/img/products/iriv-edgeai-cm5/edgeai-studio/image155.webp)

### The sidebar

The left sidebar groups every page you will use in this tutorial:

| Group        | Pages                         | What it is for                         |
|------------------|-----------------------------------|--------------------------------------------|
| Overview         | Dashboard, Analytics, Footage      | Watch live results and review history      |
| AI Configuration | AI Models, Camera Setup, Workflow | Set up the model, camera and logic         |
| Data             | Database                          | View and query logged detections           |
| AI Preparation   | Dataset, Dataset Library          | Capture images for training a custom model |
| Diagnostics      | Event Logs, System Logs           | Check events and troubleshoot              |

### The top bar

Three counters across the top show the state of the whole box, not just this system:

- **Systems Created**: how many systems exist on the board (for example 4 / 4, marked **MAX** when full)

- **AI Running**: how many systems are currently running detection

- **Cameras Running**: how many cameras are streaming across all systems

### The status bar

The bar along the bottom shows live board health: **CPU** load, **RAM** use, **CPU°** and **NPU°** temperatures, the number of **MODELS** loaded and the current **FPS**. Keep an eye on NPU temperature and FPS once detection is running.

## Step 2: Pick the AI model

Go to **AI Configuration > AI Models**. The page has two panels: **Default Model** on the left and **Custom Models** on the right.

![AI Models page](/img/products/iriv-edgeai-cm5/edgeai-studio/image173.webp)

### Default models

Two built-in YOLOv8 models come ready on the box as Hailo .hef files:

| Model | Description                          | Use it when                                   |
|-----------|------------------------------------------|---------------------------------------------------|
| yolov8n   | YOLOv8-nano, 80 COCO classes, the fastest | Several cameras, a Hailo-8L, or when speed matters most |
| yolov8s   | YOLOv8-small (a larger model)            | You want better accuracy                               |

For this tutorial, keep **yolov8n**. When it is the active model, its card shows a green **Active** badge, the panel header shows **running yolov8n**, and its button reads **In use · click to stop**.

To switch to yolov8s instead, click **Add onto this system** to run it alongside the current model, or **Only this** to replace it.

Both models already know the person and chair classes from the COCO dataset, so no training is needed for this example.

### Custom models

A custom model is a .hef + .json pair with the same name. Click **+ Upload a model** to upload it, or copy both files into `/mnt/nvme/model` on the board and click the refresh icon. The model then appears in the list with its details, for example *pill · hailo8 · 26 MB · detection · 2 classes*.

When the model is set, click **Camera Setup** at the top right to move on.

## Step 3: Connect a camera

On **Camera Setup**, the system already has a **Camera 1** entry, but no video source yet. A blue **No camera connected** banner says detection cannot start until one is set up.

![Camera Setup with No camera connected](/img/products/iriv-edgeai-cm5/edgeai-studio/image32.webp)

1. Plug the USB camera into the IRIV board.

2. Click **Add a camera** in the banner (or **+ Add camera** in the Cameras panel).

3. Choose the **USB** tab. The other tabs are **RTSP / IP**, **GigE** and **Video / Image**, for network cameras or a test file.

4. Open the **select a camera** dropdown under *USB / UVC cameras (V4L2)* and pick your camera. Click the refresh icon if it does not appear.

5. Under **Quality**, leave **High Resolution** off for now. The system then runs at 640×480, the AI's working size, which is enough for most detection and the lightest load on the board. Click **Check Camera Capabilities** to see the resolutions and frame rates your camera supports.

6. Under **Detection Box Display**, choose how bounding boxes are drawn (see the table below).

7. Click **Preview Snapshot** to check the camera angle, then click **Add camera**.

8. Click **Save all** at the top right.

![Add a camera window, USB tab](/img/products/iriv-edgeai-cm5/edgeai-studio/image18.webp)

| Option                    | Accuracy and load                 | Notes                                                                                    |
|---------------------------|-----------------------------------|------------------------------------------------------------------------------------------|
| Draw boxes in the browser | Standard accuracy (low CPU)       | Boxes may lag slightly on fast movement (unlocks Show video only when an object is detected) |
| Embed boxes in the video  | High accuracy (may raise CPU use) | Boxes are burned into the stream and show in other video players too                     |

Snapshots and recorded clips keep their boxes with either option.

### Optional: zones and overlays

The toolbar above the feed has **Box**, **Circle**, **Polygon** and **Line** tools for drawing zones. Object detection does not need a zone: with none drawn, the model watches the whole view. Draw a zone only if you want to detect objects in one area, such as a single desk or doorway.

The **Overlay** panel adds **link line**, **guard zone** and **motion tracking** rules on top of the video. Leave them empty for this tutorial.

## Step 4: Understand the workflow

Click **Workflow** to open the node editor. The AI Object Detection system comes with its workflow already built, so you only need to understand how the pieces connect.

![How the Object Detection workflow flows](/img/products/iriv-edgeai-cm5/edgeai-studio/image108.webp)

The top row turns each frame into a decision; the two rows below show it on the Dashboard and store it in the database.

![AI Object Detection workflow](/img/products/iriv-edgeai-cm5/edgeai-studio/image172.webp)

The header shows the workflow state: **AI off**, **workflow running (detection off)**, and **saved** with **auto-save** ticked. It also shows that the built-in **MQTT broker** is running on port 1883. The node palette on the left lists every node group, from **Source** and **Filters** to **Database**, **Dashboard** and **Integration**.

### 1. Input and AI

- **Detection Stream** (DET) sends out all detected objects, every frame. Its **ON** output feeds the next node.

- **Class Filter** (FLT) keeps only the classes you care about: person, chair. Everything else is dropped here.

- **Object Detection** (AI) counts the filtered objects. Its **What** field is set to chair, person, and **Zone (optional)** is left empty so it detects in the whole view. It has three outputs: **found**, **chair** (chair count) and **person** (person count).

![Input and AI nodes](/img/products/iriv-edgeai-cm5/edgeai-studio/image82.webp)

- The **chair** count is wired to **input1** and the **person** count to **input2** of the **If / Else if** node. It has three outputs, one per case, and only the first case that is true fires.

- The three **Variable** nodes at the top right hold the values the Set Variable nodes will write: fn_object_name_value, fn_object_value and fn_no_object_value.

### 2. Decide what is in view

- **If / Else if** (IFEL) takes the chair count as **input1** and the person count as **input2**, then checks the cases from top to bottom. The first case that holds wins:

  - if input1 > 0: a chair is in view

  - elif input2 > 0: a person is in view

  - elif input2 == 0: nothing is in view

- Three **Set Variable** nodes (SET) each take one branch of the If / Else if as **In**, plus a variable and a value. They write the result into **object_type** and **object_type_2**.

![Decision nodes: Set Variable and Variable](/img/products/iriv-edgeai-cm5/edgeai-studio/image102.webp)

- Each **Set Variable** node has three inputs: **In** (the If / Else if branch that tells it when to run), **Variable** (which variable to write) and **Value** (what to write). Its **output** sends the result on.

- The outputs feed two **Variable** nodes: object_type (stored as fn_object_type_value) and object_type_2 (stored as fn_object_type_2_value).

- object_type goes to the **Object Detection (1)** stat tile and object_type_2 to the **Object Detection (2)** stat tile. These are the two tiles on the Dashboard.

- **Trigger Chair** and **Trigger People** raise an **info alert**. Each alert goes into an **object detection** database node set to **insert on alert**, which writes one row with object_type, people_detected and chair_detected into the table.

### 3. Show and store the results

- **Object Detection (1)** and **Object Detection (2)** (CARD) are the two stat tiles on the Dashboard. They display object_type and object_type_2.

- **Trigger Chair** and **Trigger People** (TRIG) raise an **info alert** when their object is detected.

- Each trigger feeds an **object detection** database node set to **insert on alert**, which writes one row with object_type, people_detected and chair_detected.

- On the Analytics side, **People Detected** and **Chair Detected** (CARD) show the totals, **Object Detection Log** (CARD) lists each row, and **People Detection** (CHRT) is an area chart with two series, one per wired value: people and chairs.

![Dashboard and database nodes](/img/products/iriv-edgeai-cm5/edgeai-studio/image110.webp)

In the chart node, **Series 1** (blue) is people detected and **Series 2** (green) is chair detected. Click **+** to add another series.

Use **Debug** in the header to watch values move through the nodes, and **Tidy up** to rearrange the canvas if it gets crowded.

## Step 5: Start detection and watch the dashboard

1. Go back to **Camera Setup** and click **Start** above the feed. The status changes from **Stopped** to **Live View**, and the camera entry changes from **Idle** to running.

2. Open **Overview > Dashboard**.

Before detection starts, the **Live video** panel is black with *Press Start above to bring the feed back*, and both tiles show **AI OFFLINE · Detection is off**.

Once detection is running:

- **Live video** shows the camera feed with a bounding box around each person and chair.

- **Object Detection (1)** and **Object Detection (2)** show the object type the workflow decided is in view.

- The status bar shows a live **FPS** value, and **AI Running** in the top bar goes up by one.

Test it: walk into the frame, then step out and leave only a chair in view. Watch the tiles update as the If / Else if picks the first case that holds.

Click **Edit dashboard** to move or resize the tiles.

## Step 6: Review analytics, the database and the events log

### Analytics

Click **Analytics** on the Dashboard, or open it from the sidebar. Pick a date range at the top right (for example 1 Oct 2026 - 31 Oct 2026), then click a day in the date strip. Today is highlighted.

- **Chair Detected** and **People Detected** show the totals for the selected day.

- **People Detection** plots *people detected* and *chair detected* against time of day.

- **Object Detection Log** lists each logged row with **When**, **object type**, **people detected** and **chair detected**.

![Object Detection analytics](/img/products/iriv-edgeai-cm5/edgeai-studio/image63.webp)

Click **Edit layout** to rearrange the cards, or **Footage** to review recorded clips.

### Database

Go to **Data > Database** and select the **object detection** table. It has three columns:

| Column      | Type | Holds                      |
|-----------------|----------|--------------------------------|
| object_type     | text     | Which object triggered the row |
| people_detected | number   | Person count at the moment     |
| chair_detected  | number   | Chair count at that moment     |

The summary cards show **Total Rows**, **Columns**, **Table Size** and **Last updated**. Use **Refresh** to load new rows, **Export CSV** or **Export DB** to download the data, and **Edit table** to change the columns.

### Events Log

Go to **Diagnostics > Events Logs**. Each time a rule fires, detection writes an event here. Filter by **Severity**, **Type**, **Zone**, **Camera** and **Date range**, and export with **Export CSV** or **Export LOG**. How long events are kept is set in [Data Retention](../settings/system-and-data-retention.md#data-retention).

![Events Log](/img/products/iriv-edgeai-cm5/edgeai-studio/image10.webp)

## Optional: Capture a dataset for a custom model

If you want to detect something that is not in the 80 COCO classes, such as a specific product or part, you can collect training images on the box itself.

1. Make sure detection is running. The Dataset page captures from the raw camera stream, so it needs a live feed.

2. Go to **AI Preparation > Dataset**. Check that the **NVMe ready** badge shows at the top right.

3. Under **Capture**, type a **Name** for the session, for example chair_office.

4. Choose **Start / stop** to record until you press Stop, or **Fixed length** for a set duration.

5. Click **Take photo** for single images, or **Start recording** for a clip.

![Dataset page](/img/products/iriv-edgeai-cm5/edgeai-studio/image19.webp)

Photos are saved to `/mnt/nvme/dataset_image` and clips to `/mnt/nvme/dataset_rec`. The **Latest photos** and **Latest clips** panels show what you have captured.

Open **Dataset Library** to review sessions, **Select all**, **Download** them for labelling and training, or **Delete** them. After training, convert the model to a Hailo .hef with its .json file and upload it on the [AI Models](../ai-models.md#custom-models) page.

## Conclusion

You now have a working AI Object Detection system on IRIV EdgeAI Studio. You picked the yolov8n model on the Hailo NPU, connected a USB camera, walked through a workflow that filters people and chairs and decides which one is in view, and checked the results on the Dashboard, Analytics, Database and Events Log.

### Next steps

- **Detect other objects**: change the Class Filter and the Object Detection **What** field to other COCO classes, such as bottle, laptop or car.

- **Watch one area only**: draw a zone on Camera Setup and wire it into the Object Detection node.

- **Act on detections**: use the **Outputs**, [Board I/O](../settings/board-io-and-front-panel.md) or **Integration** nodes to switch a relay, send an MQTT message or push a notification.

- **Train your own model**: capture a dataset, train it, and upload the .hef + .json pair as a custom model.

For line-crossing counts, see the [AI People Counting](./people-counting.md) tutorial.

---

**Source:** IRIV EdgeAI Studio User Manual, Rev 1.0 (Draft), Cytron.
