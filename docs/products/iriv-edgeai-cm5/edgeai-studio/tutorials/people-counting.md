---
title: "IRIV EdgeAI Studio Tutorial: AI People Counting"
sidebar_label: "AI People Counting"
sidebar_position: 1
description: "Count people crossing a line with the IRIV EdgeAI Studio AI People Counting template: camera, counting line, workflow, dashboard and database."
---

# AI People Counting Tutorial

## Introduction

By the end of this tutorial, your IRIV board will count people walking in and out across a line you draw on a camera feed, and log every crossing to a database. Everything runs on the board's Hailo NPU, so no cloud service is needed.

IRIV EdgeAI Studio ships with an **AI People Counting** system that already has the AI model, workflow, database table and dashboard wired together. Your job is to connect a camera, draw the counting line and press Start. This guide walks through each page in the order you will use them.

## What you need

| Item                     | Notes                                                       |
|------------------------------|-----------------------------------------------------------------|
| IRIV EdgeAI CM5 | Running IRIV EdgeAI Studio, with its AI HAT+ and NVMe storage |
| Camera                       | USB, IP (RTSP) or GigE camera                                   |
| Computer on the same network | Any browser (you can open the studio by the board’s IP address) |
| A spot to film               | A doorway or corridor where people walk across one line         |

Before you start, set up the IRIV and sign in: see [Getting Started](../getting-started.md).

:::tip

Mount the camera high and angled down at the doorway. People crossing the frame from side to side, or top to bottom, are counted most reliably.

:::

## Step 1: Open the system and find your way around

Open a browser and go to `https://<board-ip>/`, then open the **AI People Counting** system. In our setup the address was `https://192.168.1.164/s/ai_people_counting/`.

The sidebar groups every page by what you do there:

| Group        | Pages                         | What it is for                                   |
|------------------|-----------------------------------|------------------------------------------------------|
| Overview         | Dashboard, Analytics, Footage     | Live counts, daily history, recorded video           |
| AI Configuration | AI Models, Camera Setup, Workflow | Pick the model, add the camera, wire the logic       |
| Data             | Database                          | View, export and query logged crossings              |
| AI Preparation   | Dataset, Dataset Library          | Capture photos and clips for training your own model |
| Diagnostics      | Event Logs, System Logs           | Find out why something is not running                |

Two bars are worth watching:

- **Top bar:** Systems Created, AI Running and Cameras Running, each out of 4. The board runs up to four systems at once.

- **Bottom bar:** CPU and RAM usage, CPU and NPU temperature, loaded models and FPS. It shows **IDLE** when detection is off.

![AI People Counting dashboard](/img/products/iriv-edgeai-cm5/edgeai-studio/image160.webp)

## Step 2: Check the AI model

The template already runs **yolov8s**, so for people counting you can leave this page as it is. Go to **AI Configuration > AI Models** to confirm the yolov8s card shows **Active**.

| Model | Type                  | When to use it                                        |
|-----------|---------------------------|-----------------------------------------------------------|
| yolov8s   | Built-in, 80 COCO classes | Default: better accuracy |
| yolov8n   | Built-in, 80 COCO classes | Fastest: pick it for a Hailo-8L or four or more camera streams |
| Your own  | Custom .hef + .json pair  | Objects outside COCO such as the sample pill model        |

- To switch, click **Add onto this system** on another model, or **Only this** to make it the only model.

- To stop the active model, click **In use · click to stop**.

- To add your own model, click **+ Upload a model**, or copy the .hef and .json pair into `/mnt/nvme/model` on the board. Both files must share one name.

"person" is one of the 80 COCO classes, which is why the built-in models work for this project without any training.

![AI Models page with yolov8s active](/img/products/iriv-edgeai-cm5/edgeai-studio/image37.webp)

## Step 3: Connect a camera and draw the counting line

Detection cannot start until the system has a camera source and a counting line. Go to **AI Configuration > Camera Setup**. A fresh system shows a **No camera connected** banner, because Camera 1 exists but has no source yet.

1. Click **Add a camera** and choose your source: a USB camera, an IP camera by its RTSP URL, or a GigE camera. See [Camera Setup and Zones](../camera-setup.md#add-a-camera) for the details.

2. In the **Cameras** panel, make sure the Camera 1 toggle is on. Use the sliders icon to adjust its settings.

![Camera 1 entry with Camera OK](/img/products/iriv-edgeai-cm5/edgeai-studio/image235.webp)

3. Click **Start** above the feed. The live view appears and the badge changes from **Stopped**.

![Start button above the feed](/img/products/iriv-edgeai-cm5/edgeai-studio/image213.webp)

4. Pick the **Line** tool from the toolbar and draw a line across the doorway, where every person must cross it: click one side, then the other.

![Drawing toolbar: Box, Circle, Polygon, Line](/img/products/iriv-edgeai-cm5/edgeai-studio/image227.webp)

![Counting line drawn across the doorway](/img/products/iriv-edgeai-cm5/edgeai-studio/image66.webp)

   In the **Zones** panel on the right, set the line's properties: **Detected when**, **Line type** and the IN direction (**Flip direction** swaps it). Then click **Save** on the line.

![Line settings in the Zones panel](/img/products/iriv-edgeai-cm5/edgeai-studio/image89.webp)

5. Check that the line now appears under **Zones**, then click **Save all**.

![Camera Setup with the saved line](/img/products/iriv-edgeai-cm5/edgeai-studio/image237.webp)

The other tools (Box, Circle, Polygon) draw areas instead of lines. Use them for zone-based counting, such as how many people stand in a queue. The **Overlay** panel adds link lines, guard zones and motion tracking on top of the video.

## Step 4: Understand the workflow

The workflow is already built, so you only need to link it to the line you drew. Go to **AI Configuration > Workflow**. Nodes are grouped into six coloured areas, and data flows from left to right.

![People Counting workflow overview](/img/products/iriv-edgeai-cm5/edgeai-studio/image75.webp)

The Zone Filter is the only node you set yourself; everything after it is pre-wired.

| Group             | Nodes                                         | What they do                                                |
|-----------------------|---------------------------------------------------|-----------------------------------------------------------------|
| Camera & AI Model     | Detection Stream                                  | Sends every detected object and every frame                     |
| AI Logic              | Class Filter, Zone Filter, Line Counter           | Keeps only person then counts line crossings in both directions |
| Data Logging          | If / Else if, Set Variable, Variable              | Tag each crossing as in or out                                  |
| Database Table        | People Counting (x2)                              | Inserts one row per crossing into **people_counting**           |
| Counting Logic        | Arithmetic (x2)                                   | Works out value such as the number inside                       |
| Dashboard & Analytics | In, Out, Inside, People Counting Log, Enter Graph | Feeds the title, log and chart you see on the dashboards        |

One setting needs your attention: the **Zone Filter** node shows *a missing zone - pick one in the inspector* until it is linked to a zone. Click the node and select the line you drew in Step 3. The **Line Counter** then counts crossings of that line only.

Useful controls on this page:

- **auto-save** keeps changes as you edit; the **saved** badge confirms it.

- **Debug** shows the values passing through each node.

- **Tidy up** rearranges the nodes neatly.

- The left panel lists every node type you can add, from Filters and Math to Database and Integration.

The header also shows the board's MQTT broker running on port 1883 with no password. Keep the board on a trusted network, or [add a password](../settings/email-telegram-mqtt.md#mqtt-broker) before using it on a shared one.

## Step 5: Start detection and watch the dashboard

With detection running, the dashboard updates its four counts each time someone crosses the line. Click **Start** on Camera Setup, then go to **Overview > Dashboard**.

| Tile | Meaning                                        |
|----------|----------------------------------------------------|
| In       | People who crossed the line in the entry direction |
| Out      | People who crossed the line in the exit direction  |
| Inside   | In minus Out (people currently inside) |
| Crossing | All crossings (both directions)                    |

While detection is off, the video shows *Detection is stopped* and the Inside and Crossing tiles show **AI OFFLINE**. Once it starts, the top bar shows AI Running and Cameras Running at 1 / 4, and the bottom bar shows the live FPS.

Test it: walk across the line once in each direction. **In** and **Out** should each go up by 1. If they are swapped, redraw the line in the opposite direction, or click **Flip direction** on the line.

Click **Edit dashboard** to rearrange or resize the tiles.

![AI People Counting dashboard](/img/products/iriv-edgeai-cm5/edgeai-studio/image160.webp)

## Step 6: Review analytics and the database

Every crossing is stored, so you can look back at any day and export the data.

### Analytics

Go to **Overview > Analytics**. Pick a day from the date strip, or set a range with the date picker at the top right.

- **Total Enter (Day)** and **Total Out (Day)** show the day's totals.

- **Total People Enter (Day/Days)** plots Enter and Leave over the day.

- **People Counting Log** lists each crossing with its time, in, out and status.

Click **Edit layout** to rearrange the cards, or **Footage** to see recorded video.

![People Counting analytics](/img/products/iriv-edgeai-cm5/edgeai-studio/image59.webp)

### Database

Go to **Data > Database** and open the **People Counting** table. It has three columns: in, out and status, and a new row arrives for every crossing.

![People Counting database table](/img/products/iriv-edgeai-cm5/edgeai-studio/image76.webp)

- **Export CSV** downloads the table for Excel or Python.

- **Export DB** downloads the whole database file.

- **Add Row** and **Edit table** let you add data or change columns by hand.

For custom reports, open the **SQL Playground** tab. It runs read-only SELECT queries and returns up to 500 rows. The default query shows the newest crossings first:

```sql
SELECT * FROM people_counting ORDER BY ts DESC;
```

To filter by the **Period** dropdown (for example, today), add `ts >= %(from)s AND ts < %(to)s` to a WHERE clause. Click **Save query** to keep a query for later.

![SQL Playground for the people_counting table](/img/products/iriv-edgeai-cm5/edgeai-studio/image9.webp)

## Optional: Capture a dataset

You only need this if you plan to train your own model later, for example to count something that is not a COCO class. Capture works from the raw camera stream, so detection must be running.

1. Go to **AI Preparation > Dataset** and check the **NVMe ready** badge.

2. Type a session **Name**, such as entrance_morning.

3. Choose **Start / stop** to record until you press Stop, or **Fixed length** for a set duration.

4. Click **Take photo** for still images or **Start recording** for video clips.

Photos are saved to `/mnt/nvme/dataset_image` and clips to `/mnt/nvme/dataset_rec`. Open **Dataset Library** to review, download or delete them.

![Dataset page](/img/products/iriv-edgeai-cm5/edgeai-studio/image19.webp)

![Dataset Library](/img/products/iriv-edgeai-cm5/edgeai-studio/image196.webp)

## Conclusion

You now have a working people counter: a camera feeding YOLOv8 on the Hailo NPU, a line that splits crossings into In and Out, and a database that logs every one. From here you can add up to three more cameras to the same system, send counts to other devices over MQTT with the Integration nodes, or train a custom model from the dataset you captured.

---

**Source:** IRIV EdgeAI Studio User Manual, Rev 1.0 (Draft), Cytron.
