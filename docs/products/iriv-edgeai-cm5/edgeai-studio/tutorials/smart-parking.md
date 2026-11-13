---
title: "IRIV EdgeAI Studio Tutorial: AI Smart Parking"
sidebar_label: "AI Smart Parking"
sidebar_position: 4
description: "Count cars in and out, check each parking bay and raise a Lot Full alert with the IRIV EdgeAI Studio AI Smart Parking template and an example video."
---

# AI Smart Parking Tutorial

## Introduction

The AI Smart Parking system watches a car park from above and tells you, live, how many bays are free and when the lot is full. It runs on the IRIV EdgeAI CM5 with the built-in **yolov8s** model on the Hailo NPU, so no cloud or coding is needed.

The system does four jobs at once:

- **Counts cars entering and leaving** across a line drawn at the driveway (IN and OUT).

- **Checks each parking bay** (Zone 1A, 2A and 3A) and shows whether it is Empty or Occupied.

- **Calculates the Park Capacity**: total bays minus occupied bays.

- **Raises a Lot Full alert** when the capacity reaches 0.

![AI Smart Parking dashboard with numbered parts](/img/products/iriv-edgeai-cm5/edgeai-studio/image180.webp)

1. **Live video** - the camera feeds with a box around each detected car.

2. **Park Capacity** - the number of free bays.

3. **in stat** - cars that entered.

4. **out stat** - cars that left.

5. **Zone 1A, 2A, 3A** - each bay shows Empty or Occupied.

6. **Park Lot** - Available while bays are free, Full when none are left.

7. **Stop / Edit dashboard / Analytics** - stop detection, rearrange the cards, or open the history.

## What You Need

- IRIV EdgeAI CM5 with its AI HAT+, powered on and connected to your network.

- IRIV EdgeAI Studio open in your browser (see [Getting Started](../getting-started.md)).

- A camera looking down at the car park, or the example video **car_parking_3.mp4** (download link in Step 2).

- A new system made from the **AI Smart Parking** template (Step 1).

## Step 1: Create a New System

Every IRIV EdgeAI Studio tutorial starts by creating a new system. On the Systems page, click **+ New System** (or the dashed New system card). Pick a template, give the system a title, and create it.

### 1. Choose a template

Click **AI Smart Parking**, then click **Next**. The other templates are AI People Counting, AI Object Detection, AI Restricted Zone and Blank Canvas.

![New system wizard with AI Smart Parking selected](/img/products/iriv-edgeai-cm5/edgeai-studio/image133.webp)

### 2. Give it a title and create it

1. **System name** - type a title for your system, e.g. **Smart Parking**.

2. **Create system** - click **Next**, then **Create system**. The new system appears as a card on the Systems page; open it to continue.

![Naming the new system](/img/products/iriv-edgeai-cm5/edgeai-studio/image145.webp)

## Step 2: Load the Example Video

This tutorial uses a recorded top-down car park video, so you can follow along without a real camera. Download it first from Google Drive: [Smart Parking example video](https://drive.google.com/drive/folders/1UNvVOrsqBYA_BoVbXb0ShcbjFn2uG48F?usp=sharing).

1. Go to **AI Configuration > Camera Setup** and click **Camera Setting**.

2. Open the **Video / Image** tab. Detection runs on a video exactly as it runs on a live camera.

3. Click **Upload…** and choose **car_parking_3.mp4** from your computer.

4. Pick **car_parking_3.mp4 (video, 1.7 MB)** from the drop-down list.

![Video / Image tab with car_parking_3.mp4 selected](/img/products/iriv-edgeai-cm5/edgeai-studio/image153.webp)

5. Leave **High Resolution** off. The system runs at 640×480, the AI's working size, which is enough for this video and keeps the load low.

6. Under **Detection Box Display**, choose one option:

    - **Draw boxes in the browser** - low CPU use, boxes may lag slightly on fast movement.

    - **Embed boxes in the video** - higher accuracy, boxes stay in the video and in recorded clips. This tutorial uses this option.

![Quality and Detection Box Display settings](/img/products/iriv-edgeai-cm5/edgeai-studio/image157.webp)

:::note

To use a real camera later, pick the **USB**, **RTSP / IP** or **GigE** tab instead. The rest of the tutorial stays the same.

:::

## Step 3: Choose the AI Model and Detection Settings

The system uses the built-in **yolov8s** model, set to detect cars only.

1. Go to **AI Configuration > AI Models**.

2. Under **Default Model**, find **yolov8s** and click **Add onto this system**. It turns **Active** and the button changes to **In use · click to stop**.

    - **yolov8n** - the fastest, best for a Hailo-8L or four or more camera streams.

    - **yolov8s** - slightly larger and more accurate, used in this tutorial.

![AI Models page: add yolov8s](/img/products/iriv-edgeai-cm5/edgeai-studio/image16.webp)

3. Click the arrow at the bottom of the yolov8s card to open **Detection settings**.

4. Set **Minimum confidence** to **0.5** (50%). Cars below 50% confidence are ignored. This is enforced on the accelerator, so raising it costs nothing.

5. Under **Classes to keep**, tick **car** only, then click **Save settings**. The card shows **1 of 80 classes kept**.

![yolov8s detection settings: confidence 0.5, car only](/img/products/iriv-edgeai-cm5/edgeai-studio/image34.webp)

:::note

Classes can only be added or removed while AI detection is stopped. Click **In use · click to stop** first if the list is locked.

:::

## Step 4: Draw the Zones

The zones must be drawn before parking detection can work. Until then, every Zone Filter node in the workflow shows **zone missing** and the bay cards and IN/OUT stats stay empty.

You need four zones in total:

| Zone      | Tool       | Where to draw it                             | Used by           |
|---------------|----------------|--------------------------------------------------|-----------------------|
| Entrance Line | Line           | Across the driveway, where cars drive in and out | Line counter (IN/OUT) |
| Zone 1A       | Box or Polygon | Around the parking bay                           | Bay 1A card           |
| Zone 2A       | Box or Polygon | Around the parking bay                           | Bay 2A card           |
| Zone 3A       | Box or Polygon | Around the parking bay                           | Bay 3A card           |

1. Go to **AI Configuration > Camera Setup**. Make sure **Camera 1 (car_parking_3.mp4)** shows **Live**.

2. Pick the **Line** tool in the toolbar above the video. Click one side of the driveway, then the other side, to draw the line across the lane.

3. Pick the **Box** tool (or **Polygon** for a slanted bay). Draw it tightly around the first parking bay, covering only that bay.

4. Repeat step 3 for the second and third bays.

5. Name each zone so it matches the table above. The zones appear in the **Zones** panel on the right.

6. Click **Save all** at the top right.

![Entrance line and three bay zones drawn](/img/products/iriv-edgeai-cm5/edgeai-studio/image185.webp)

:::tip

Draw each bay zone slightly smaller than the painted lines. A zone that overlaps the next bay or the driving lane will count passing cars as parked. Set each bay's **Detected when** to **middle point in zone** (see [Zone settings](../camera-setup.md#zone-settings)). A car must then be properly parked over the centre of the bay to count, so a car partly over the bay line or passing close by is ignored. Draw the entrance line square across the lane, away from the parking bays, so each car crosses it once.

:::

## Step 5: Understand the Workflow

The workflow is split into four parts that all start from the same car detections. Open **AI Configuration > Workflow** to see it.

### Part A: Detect cars

![Workflow Part A (top row) and Part B (bottom row)](/img/products/iriv-edgeai-cm5/edgeai-studio/image198.webp)

In this picture, **A1-A4** mark the Part A nodes (top row) and **B1-B7** the Part B nodes (bottom row), in the same order as the lists.

1. **Detection Stream** - takes the live video and runs **yolov8s** on it. The **ON** output sends detections onward; **OFF** fires when detection stops.

2. **Pre-process** - converts the frame to **grayscale** before filtering. *preview* means the change is shown in the live view.

3. **Class Filter** - keeps only the **car** class and drops every other object.

4. **Link out (car_filter)** - sends the car detections to any **Link in** node with the same name, so the other parts need no long wires.

**How to use it:** give the Link out a name (here **car_filter**), then pick the same name in each Link in node.

### Part B: Count cars entering and leaving

The Part B nodes are the bottom row (B1-B7) of the picture above.

1. **Link in (car_filter)** - receives the car detections from Part A.

2. **Zone Filter** - holds the **Entrance line** drawn in Step 4.

3. **Counter (line counter)** - counts cars crossing the line. **In** takes the detections and **Line** takes the Zone Filter. Its outputs are **In**, **Out**, **Inside** and **Crossings**.

4. **car_count (Database)** - saves the **In** value as **enter** and the **Out** value as **exit**. *insert on change* adds a new row only when a value changes.

5. **Total, in stat, out stat (Cards)** - show the latest values as stat tiles on the Dashboard and Analytics pages.

6. **Lane Counting (Chart)** - an area chart with two series, IN and OUT, over time.

7. **Lane Percentage (Chart)** - a pie chart showing the share of IN versus OUT.

**How to use it:** pick the **Entrance line** in the Zone Filter's inspector, then wire it into the Counter's **Line** input.

### Part C: Check each parking bay

![Workflow Part C: one row per parking bay](/img/products/iriv-edgeai-cm5/edgeai-studio/image33.webp)

Each bay has its own row of nodes. The Zone 1A row works like this:

1. **Link in (car_filter)** - receives the car detections.

2. **Zone Filter** - holds **Zone 1A** from Step 4 and feeds the **Zone (optional)** input of the next two nodes.

3. **Object Detection** - counts the cars inside Zone 1A.

4. **Variable (lot1a)** - stores that count as a whole number (saved as *fn_lot1a_value*). It is 0 when the bay is empty and 1 when a car is in it.

5. **Cycle Time** - measures how long a car has stayed inside Zone 1A, in seconds.

6. **Custom Formula (Zone State)** - turns the cycle time into a bay state. A car that stays more than **5 seconds** gives state **2**, so a car only driving past is not counted as parked.

7. **Zone 1A (Card)** - shows the state as **Empty** or **Occupied** on the Dashboard.

The Zone 2A and Zone 3A rows are the same, using **lot2a** and **lot3a**.

**How to use it:** pick a different zone (1A, 2A, 3A) in each row's Zone Filter. A row with no zone picked shows **zone missing** and its card stays Empty.

### Part D: Park Capacity and Lot Full alert

![Workflow Part D: Park Capacity and Lot Full](/img/products/iriv-edgeai-cm5/edgeai-studio/image174.webp)

1. **Custom Formula (Parking Counter)** - calculates the free bays with *3 − (lot1a + lot2a + lot3a)*. 3 is the total number of bays.

2. **Park Capacity (Card)** - shows the number of free bays.

3. **If / Else if** - checks if input1 == 0, meaning no bay is free. The first case that holds wins, top to bottom.

4. **Lot Full (Trigger)** - raises a crit alert when the If / Else if condition is true.

5. **Park Lot (Card)** - shows Available while bays are free and Full when the alert fires.

**How to use it**: for a car park with more bays, change the 3 in the formula to your number of bays, and add one bay row (Part C) for each extra bay.

:::note

Keep auto-save ticked at the top of the Workflow page. The saved badge confirms your changes are kept.

:::

## Step 6: Run and Monitor the System

Once the zones are drawn and saved, the system updates every page below live.

### Dashboard

Go to **Overview > Dashboard** to watch the system live. Each part is explained in the [Introduction](#introduction) picture.

:::note

**in stat** and **out stat** show **-** until a car crosses the entrance line.

:::

### Analytics

Go to **Overview > Analytics** to see the history.

1. **Date strip and range picker** - pick a day, or a range such as 1 Oct 2026 - 31 Oct 2026.

2. **Lane Percentage** - the share of IN versus OUT.

3. **Park Capacity** - the free bays.

4. **Park Lot** - Available or Full.

5. **Lane Counting** - IN and OUT over time.

6. **Total** - a table of every enter and exit record.

7. **CSV** - download the Total table.

![Smart Parking analytics](/img/products/iriv-edgeai-cm5/edgeai-studio/image159.webp)

### Database

Go to **Data > Database** to see the saved counts.

1. **car_count** - the table the workflow writes to.

2. **Rows** - each row has a Datetime plus the enter and exit values. They stay null until the entrance line is drawn.

3. **Refresh** - load new rows.

4. **Export** - download the table.

5. **Open SQL Playground** - run read-only queries, e.g. `SELECT * FROM car_count ORDER BY Datetime DESC;`

![car_count database table](/img/products/iriv-edgeai-cm5/edgeai-studio/image45.webp)

### Events Log

Go to **Diagnostics > Events Logs** to see what the system recorded.

1. **Filters** - search, or filter by severity, type, zone, camera, date and sort order.

2. **Export CSV / Export LOG** - download the events.

3. **Events** - each event, such as car detected (with a footage link) and car count. The Lot Full crit alert also appears here.

![Events Log](/img/products/iriv-edgeai-cm5/edgeai-studio/image137.webp)

### Dataset (optional)

Go to **AI Preparation > Dataset** to save photos or clips, e.g. to train a custom model later.

1. **Name** - a name for the capture session.

2. **Take photo / Start recording** - capture a photo or record a clip.

3. **Where it goes** - photos are saved to `/mnt/nvme/dataset_image` and clips to `/mnt/nvme/dataset_rec`.

![Dataset page](/img/products/iriv-edgeai-cm5/edgeai-studio/image92.webp)

## Conclusion

You have built an AI Smart Parking system on IRIV EdgeAI Studio that counts cars at the entrance, checks each bay and shows the free spaces live. Swap the example video for a real camera in Camera Setup to use it on your own car park.

---

**Source:** IRIV EdgeAI Studio User Manual, Rev 1.0 (Draft), Cytron.
