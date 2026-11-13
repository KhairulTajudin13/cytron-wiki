---
title: "IRIV EdgeAI Studio Workflow and Nodes"
sidebar_label: "Workflow and Nodes"
sidebar_position: 6
description: "Build IRIV EdgeAI Studio logic with drag-and-drop nodes: the node palette, the six main nodes and four example workflows."
---

# Workflow and Nodes

The workflow decides what happens with each detection. You build it by dragging nodes onto a canvas and wiring them from left to right: no coding needed.

## The Workflow Page

Go to **AI Configuration > Workflow**.

![Workflow page with node palette, canvas and top bar](/img/software/iriv-edgeai-studio/image135.webp)

1. **Node Palette** - Every node, grouped by job, with a **Search nodes** box at the top. The number beside a group is how many nodes it holds.
2. **Canvas** - Drop nodes here, then drag from the output dot on the right of one node to the input dot on the left of the next. Click a node to open its settings.
3. **Top Bar** - see below.
4. **Zoom Controls** - Plus and minus zoom in and out; the fit button fits the whole workflow on screen, and the arrow button expands the canvas.
5. **Minimap** - A small map of the whole canvas to find your way around a large workflow.

### Top bar

![Workflow top bar](/img/software/iriv-edgeai-studio/image112.webp)

1. **MQTT broker status** - shows the built-in MQTT broker, e.g. running on :1883 (network, open - no password). Set a password in [Settings > MQTT Broker](./settings/email-telegram-mqtt.md#mqtt-broker).

2. **AI Detection** - shows whether AI detection is running (green dot) or stopped (red dot).

3. **saved / auto-save** - shows the workflow is saved; tick auto-save to save every change automatically.

4. **Undo / Redo** - undo or redo your last change.

5. **Debug** - shows the live values flowing through each node.

6. **Tidy up** - arrange the nodes neatly.

7. **Menu** - more options.

:::note

A node only acts when data reaches it through a wire, so every node you want to run must be connected to the chain.

:::

## Node Palette

The nodes in the palette are grouped by what they are used for:

1. **Common** - everyday helper nodes most users need, for testing, notes, tidy wiring and timing.

2. **Input** - where the data comes in: the AI detections from the camera, filters to pick objects or zones, board inputs and schedules.

3. **Processing** - works on the detections, e.g. counting, measuring time or distance, and maths on the values.

4. **Logic** - makes decisions, e.g. checking a condition and raising an event, and stores values in variables.

5. **Storage** - saves the results into the system's database tables.

6. **Visualization** - shows the results as cards and charts on the Dashboard and Analytics.

7. **Actions** - does something with the result, e.g. takes a snapshot, records a clip, or sends it out by MQTT, HTTP, Modbus, Email or Telegram.

## The Main Nodes

Every node is **drag and drop**: drag it from the palette onto the canvas, then **wire node to node** by dragging from the output dot on the right of one node to the input dot on the left of the next. Data flows from left to right along the wires. Click any node to open its settings on the right, adjust it for your project, then click **Save**.

A simple system is built from six main nodes: Detection Stream > Class Filter > (Zone Filter) > Counter > Card or Chart.

### 1. Source - Detection Stream

![Detection Stream node](/img/software/iriv-edgeai-studio/image68.webp)

**What it does:** the starting point of every workflow. It sends out every object the AI model detects from the camera.

**How to use it:** place it first and wire its **ON** output to the next node, usually a Class Filter.

**Adjust for your project:** under Model, choose the AI model your system uses (e.g. yolov8n). Use the **OFF** output only when something should happen while detection is stopped, e.g. switching off a light. The dot on the node is green while detection is running and red when it is stopped.

### 2. Filter - Class Filter

![Class Filter node](/img/software/iriv-edgeai-studio/image73.webp)

**What it does:** keeps only the objects you care about and passes them on.

**How to use it:** wire it after the Detection Stream, then tick the class to keep under Object classes.

**Adjust for your project:** pick the class your project counts, e.g. person for people counting or car for a car park, and give the filter a clear name (e.g. Person 1). Use one Class Filter per class if you track several objects. With no class ticked, it passes everything.

### 3. Filter - Zone Filter

![Zone Filter node](/img/software/iriv-edgeai-studio/image2.webp)

**What it does:** brings a zone or line drawn in Camera Setup into the workflow.

**How to use it:** pick the zone or line in its settings, then wire it into the Counter's **Zone** or **Line** input.

**Adjust for your project:** use an area (e.g. Zone 1) to count objects inside a space, or a line (e.g. Line 2) to count objects crossing a doorway or gate. Draw the zone or line in Camera Setup first; until one is picked, the node shows “zone missing”.

### 4. AI Processing Nodes - Counter

![Counter node](/img/software/iriv-edgeai-studio/image60.webp)

**What it does:** counts objects and sends out a number.

**How to use it:** wire the filtered objects into **In**. What it counts depends on what else you wire in:

- **Object counter** - only In: counts objects in the whole view.

- **Zone counter** - In + Zone: counts objects inside the zone.

- **Line counter** - In + Line: counts objects crossing the line (Count and Crossings outputs).

**Adjust for your project:** under Count, choose How many are in view now (live occupancy) or Total seen (each object once, e.g. daily visitors). Under Advanced, choose Real-time counting or Minimum stay to ignore objects that only pass by. Tick **OID** if a later node needs the ID of each object.

### 5. Dashboard - Card

![Card node](/img/software/iriv-edgeai-studio/image179.webp)

**What it does:** shows a value as a card on the Dashboard and Analytics.

**How to use it:** wire a value into it, e.g. the Counter's output, then set a Title.

**Adjust for your project:** under Show as, pick a stat tile for a number, a gauge, a status (OK / ALERT) or a verdict. Set the Date range (e.g. Live value, Today, This week) and Show the value as (number, text, YES / NO, ON / OFF), and add a Unit label such as people or cars.

### 6. Dashboard - Chart

![Chart node](/img/software/iriv-edgeai-studio/image84.webp)

**What it does:** shows recorded values over time as a chart in Analytics.

**How to use it:** wire the values into Series 1 (the examples below save them with a Data Table first), then click Change chart type to choose a chart.

**Adjust for your project:** choose Line or Area for trends, Bar to compare, or Pie / Donut for proportions. Set the Interval (e.g. one point per hour), the Date range (e.g. Last 24 hours) and the Y axis (e.g. Count records, Sum or Average).

## Example Workflows

### Object counter

Counts people in the whole view, shows the number on a card, and records it every 60 seconds for a line chart.

![Example: object counter workflow](/img/software/iriv-edgeai-studio/image202.webp)

1. **Detection Stream** - sends the detections from yolov8n.

2. **Class Filter (Person 1)** - keeps only people.

3. **Counter (object counter)** - counts the people in view.

4. **Card** - shows the count as a stat tile.

5. **Data Table (test)** - inserts a row every 60 seconds.

6. **Chart (chart 1)** - shows the recorded rows as a line chart.

### Object in zone counter

Counts people inside a zone.

![Example: object in zone counter workflow](/img/software/iriv-edgeai-studio/image113.webp)

1. **Detection Stream** - sends the detections.

2. **Class Filter (Person 2)** - keeps only people.

3. **Zone Filter** - Zone 1 (area), wired into the Counter's Zone input.

4. **Counter (zone counter)** - counts the people inside Zone 1.

5. **Card (card 1)** - shows the count.

### Line crossing counter

Counts people crossing a line.

![Example: line crossing counter workflow](/img/software/iriv-edgeai-studio/image118.webp)

1. **Detection Stream** - sends the detections.

2. **Class Filter (Person 3)** - keeps only people.

3. **Zone Filter** - Line 2 (line), wired into the Counter's Line input.

4. **Counter (line counter)** - counts crossings, with Count and Crossings outputs.

5. **Card (card 2)** - shows the Count.

### Raising an alert

Raises an alert when more than one person is in view, and records each alert.

![Example: alert workflow](/img/software/iriv-edgeai-studio/image80.webp)

1. **Detection Stream** - sends the detections.

2. **Class Filter (person)** - keeps only people.

3. **Counter** - counts the people in view.

4. **Card** - shows the count.

5. **If / Else if** - checks if input1 > 1 (more than one person).

6. **Trigger (test)** - raises a warning alert.

7. **Data Table (test)** - inserts a row on each alert.

8. **Chart** - shows the alerts as an area chart.

:::note

A node shows a red message when something it uses is missing, e.g. an unwired input or a deleted Modbus server. Open the node and fix the setting.

:::

## More Nodes Used in the Templates

The ready-made templates use these nodes as well. Open a template's workflow to see them wired up.

| Node | What it does |
|---|---|
| Object Detection | Counts the chosen classes, in the whole view or in a zone, with one output per class. |
| If / Else if | Checks cases from top to bottom (for example `input1 > 0`); only the first case that is true fires. |
| Trigger / Violate | Raises an alert (info, warn or crit) that appears in the Events Log; Violate also paints the boxes and zone on the video. |
| Set Variable / Variable | Writes a value (for example a status text) and stores it for cards or the database. |
| Database / Data Table | Inserts a row into a table, on every alert, on change, or on a timer. |
| Arithmetic / Custom Formula | Works out values, for example *In − Out* or *3 − (lot1a + lot2a + lot3a)*. |
| Cycle Time | Measures how long an object has stayed inside a zone, in seconds. |
| Pre-process | Changes the frame before filtering, for example to grayscale. |
| Link out / Link in | Passes data between parts of the canvas without long wires; give both the same name. |
| Board I/O, MQTT, HTTP, Modbus, Email, Telegram | Act on the result: drive an output, buzzer or LED driver, or send the data out. Board terminals must first be enabled in [Board I/O](./settings/board-io-and-front-panel.md). |

See the [tutorials](./index.md#ready-made-templates) for step-by-step walk-throughs of each template's workflow.

---

**Source:** IRIV EdgeAI Studio User Manual, Rev 1.0 (Draft), Cytron.
