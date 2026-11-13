---
title: "IRIV EdgeAI Studio Tutorial: AI Restricted Zone"
sidebar_label: "AI Restricted Zone"
sidebar_position: 3
description: "Raise and log a violation whenever a person enters a zone with the IRIV EdgeAI Studio AI Restricted Zone template."
---

# AI Restricted Zone Tutorial

## Introduction

The AI Restricted Zone template raises a violation whenever a person is detected inside a zone you draw on the camera feed. It runs fully on the IRIV EdgeAI CM5, with the Hailo NPU handling AI detection at the edge.

Every violation is shown live on the Dashboard, counted in Analytics and saved to the database with its status and person ID.

By the end of this tutorial, you will know how to:

- Open the AI Restricted Zone system and find your way around it

- Choose the AI model for detection

- Add a camera and draw the restricted zone

- Understand how the workflow turns a detection into a violation

- Start detection and watch violations on the Dashboard

- Review violation history in Analytics and the Database

This tutorial follows on from [Getting Started](../getting-started.md). If you have not set up your IRIV yet, start there first.

## What You Need

- IRIV EdgeAI CM5 with its AI HAT+, with IRIV EdgeAI Studio installed

- Camera: USB camera, IP camera with an RTSP stream, or industrial GigE camera

- Power supply

- A laptop or PC with a web browser (Google Chrome recommended), on the same network as the IRIV

- An AI Restricted Zone system already created from the built-in template (see [Create a System](../create-a-system.md))

## Step 1: Open the AI Restricted Zone System

From the Systems page, open the **AI Restricted Zone** system. It opens on the **Dashboard**, with a **Live video** panel and a **Violation** card.

Before detection starts, the video shows *Detection is stopped* and the Violation card shows **AI OFFLINE**.

![AI Restricted Zone dashboard before detection](/img/products/iriv-edgeai-cm5/edgeai-studio/image5.webp)

| Area          | What it shows                                                                     |
|-------------------|---------------------------------------------------------------------------------------|
| Top bar           | Systems Created, AI Running and Cameras Running out of the 4-per-device limit         |
| Sidebar           | Overview, AI Configuration, Data, AI Preparation and Diagnostics pages for this system |
| Bottom status bar | Live CPU, RAM, CPU and NPU temperature, models loaded and FPS                         |

## Step 2: Choose the AI Model

Go to **AI Configuration > AI Models**. The template runs **yolov8s** by default, marked **Active**, which detects the *person* class needed for this system.

![AI Models page with yolov8s active](/img/products/iriv-edgeai-cm5/edgeai-studio/image28.webp)

| Model    | Best for                                                                            |
|--------------|-----------------------------------------------------------------------------------------|
| yolov8n      | Fastest: best for a Hailo-8L or four or more camera streams |
| yolov8s      | Higher accuracy (default) |
| Custom model | Your own .hef + .json pair, uploaded with + Upload a model or copied to `/mnt/nvme/model` |

To switch models, click **Add onto this system** on the model you want. Click **In use · click to stop** to stop the current one.

## Step 3: Add a Camera and Draw the Restricted Zone

Go to **AI Configuration > Camera Setup**. The template has a **Camera 1** entry but no source yet, so the page shows **No camera connected**.

![Camera Setup with No camera connected](/img/products/iriv-edgeai-cm5/edgeai-studio/image79.webp)

1. Click **Add a camera** and choose your USB, IP (RTSP) or GigE camera.

2. Click **Start** to bring up the live feed.

3. Pick **Box**, **Circle** or **Polygon** from the toolbar and draw the restricted area on the feed. It appears under **Zones** as *Zone 1*.

4. Click **Save all**.

The **Overlay** panel can add a link line, guard zone or motion tracking on top of the feed, but none are needed for this template.

## Step 4: Understand the Workflow

Go to **AI Configuration > Workflow**. The template's nodes are already wired: detections flow left to right, from the camera to a violation on the dashboard and in the database.

![AI Restricted Zone workflow](/img/products/iriv-edgeai-cm5/edgeai-studio/image181.webp)

The node library is on the left, and the template's nodes run left to right from detection to dashboard. The toolbar shows the MQTT broker, AI and workflow status.

### Detect people inside the zone

![Detection nodes: Detection Stream, Class Filter, Zone Filter, Counter](/img/products/iriv-edgeai-cm5/edgeai-studio/image15.webp)

This is the detection part of the workflow. Detections pass through the Class Filter (person) and Zone Filter, then the Counter counts people inside Zone 1.

| Node                   | What it does                                                                    |
|----------------------------|-------------------------------------------------------------------------------------|
| Detection Stream           | Sends every object the AI detects and every frame                                   |
| Class Filter               | Keeps only the person class                                                         |
| Zone Filter                | Keeps only people inside the restricted zone                                        |
| Counter (Zone 1 violations) | Counts how many people are in the zone right now and outputs their object IDs (OID) |

:::info

If the Zone Filter shows *zone missing - pick one in the inspector*, click the node and select the zone you drew.

:::

### Raise the violation

![Violation nodes: If / Else if, Violate, Set Variable, database](/img/products/iriv-edgeai-cm5/edgeai-studio/image115.webp)

This is the violation logic. When the count is above 0, the Violate node raises the alert, the Variable nodes set the status, and the violation node saves the status and person ID to the database.

| Node                | What it does                                                            |
|-------------------------|-----------------------------------------------------------------------------|
| If / Else if            | Passes on when the count is above 0 (if input1 > 0)                        |
| Violate                 | Shows a warn alert and paints the boxes and zone on the feed                |
| Set Variable + Variable | Sets the status text (fn_status_value) and stores it as fn_status_out_value |
| Violation (database)    | Inserts a row with status and person_id on every alert                      |

### Show it on the dashboard

![Dashboard nodes: Violation Log, total violation chart and tile](/img/products/iriv-edgeai-cm5/edgeai-studio/image7.webp)

These are the dashboard nodes. These cards and the area chart feed the Violation Log, hourly chart and Total Violation tile on the Analytics page.

| Node                | Shows                                |
|-------------------------|------------------------------------------|
| Violation (card)        | The live Violation tile on the Dashboard |
| Violation Log (card)    | The log table in Analytics               |
| Total Violation (chart) | The hourly area chart in Analytics       |
| Total Violation (card)  | The total count tile in Analytics        |

:::note

The toolbar shows the MQTT broker running on port 1883 with no password. [Add a password](../settings/email-telegram-mqtt.md#mqtt-broker) before using this system on a shared network.

:::

## Step 5: Start Detection and Watch the Dashboard

Click **Start** in Camera Setup, then go to **Overview > Dashboard**. The Live video shows the feed with your zone drawn on it.

Walk into the zone: the Violate node paints the person's box and the zone, and the **Violation** card changes from *AI OFFLINE* to a live alert.

## Step 6: Review Violations in Analytics and the Database

### Analytics

Go to **Overview > Analytics** and pick a day from the date strip, or set a range at the top right.

![Restricted Zone analytics](/img/products/iriv-edgeai-cm5/edgeai-studio/image14.webp)

*It shows the total violations, an hourly chart and the violation log; all are empty until detection has run.*

| Card        | What it shows                                  |
|-----------------|----------------------------------------------------|
| Total Violation (tile) | Number of violations in the selected period |
| Total Violation (chart) | Violations per hour as an area chart |
| Violation Log   | Each violation’s time (when), status and person ID |

### Database

Go to **Data > Database** and open the **violation** table. The workflow fills it with one row per alert, in two text columns: status and person_id.

![Database page with the violation table selected](/img/products/iriv-edgeai-cm5/edgeai-studio/image65.webp)

The table has 0 rows until the first violation is logged.

## Conclusion

You now have an AI Restricted Zone system that flags anyone entering a zone, shows the alert live and logs every violation for later review.

To take it further, add an **Outputs** or **Integration** node after Violate to trigger a buzzer, relay or [Telegram](../settings/email-telegram-mqtt.md#telegram) alert, or draw extra zones for more restricted areas.

---

**Source:** IRIV EdgeAI Studio User Manual, Rev 1.0 (Draft), Cytron.
