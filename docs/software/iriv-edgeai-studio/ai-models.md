---
title: "IRIV EdgeAI Studio AI Models"
sidebar_label: "AI Models"
sidebar_position: 4
description: "Choose the built-in YOLOv8 models or upload your own Hailo .hef model in IRIV EdgeAI Studio, and set confidence and classes to keep."
---

# AI Models

The AI model is what recognises objects in the camera picture. Every system needs one before anything can be detected.

## Which Model to Use

| Model | Type | Use it when |
|---|---|---|
| yolov8n | Built-in, 80 COCO classes | You want the fastest model: a Hailo-8L, or four or more camera streams. |
| yolov8s | Built-in, 80 COCO classes | You want better accuracy (a larger model). Used by the People Counting, Restricted Zone and Smart Parking templates. |
| Your own | Custom `.hef` + `.json` pair | You need objects outside the 80 COCO classes, for example a specific part or product. |

The 80 COCO classes include everyday objects such as person, car, bicycle, chair, bottle and laptop, so most projects need no training.

## The AI Models Page

Go to **AI Configuration > AI Models**.

![AI Models page](/img/software/iriv-edgeai-studio/image166.webp)

The AI Models page consists of several sections that you should be familiar with.

1. **Default Model** - Click + Add a model to choose a built-in model; whatever you save appears here.

2. **Custom Models** - For your own trained models: a .hef + .json pair with one name.

    - **+ Upload a model** - upload the pair from your computer.

    - **Model folder** - or copy the pair into /mnt/nvme/model on the board; use the refresh button to rescan.

3. **Setup Guide Buttons** - Setup 1 of 3 shows your place in the setup guide; Skip or Next: Camera Setup moves on to Camera Setup.

4. **Setup Guide** - Reminds you to choose an AI model; click Done - next: Camera Setup when finished.

## Choose a Built-in Model

Follow the numbers below to pick a model for the system.

![Steps to add a built-in model](/img/software/iriv-edgeai-studio/image50.webp)

1. **+ Add a model** - Shows the built-in models stored on the device.

2. **Model card** - Each card shows the model name, tags (built-in, hailo8, .hef on this box) and a short description.

    - **yolov8n** - fastest; best for the Hailo-8L or four or more camera streams.

    - **yolov8s** - a good balance of speed and accuracy for most setups.

3. **Add onto this system / Only this**

    - **Add onto this system** - adds the model alongside any model the system already has.

    - **Only this** - makes this the only model the system uses (recommended here).

4. **Active model** - The model in use shows Active, and its button changes to In use · click to stop.

5. **Default Model status** - Shows how many models are saved and which one is running (e.g. running yolov8s).

6. **Saved model** - Shows the model details (e.g. hailo8, 11 MB, nms_on_chip, 80 classes); click the arrow to expand its settings.

## Detection Settings

Expand the model card to set what the model reports.

![Detection settings: confidence and classes](/img/software/iriv-edgeai-studio/image178.webp)

1. **Minimum confidence** - The minimum confidence for a detection to count (e.g. 0.5). Lower it to catch more objects; raise it to reduce false detections. It is enforced on the accelerator, so raising it costs nothing.

2. **Kept classes** - The classes you keep appear as tags; click × on a tag to remove it.

3. **Class list** - Search the 80 YOLOv8 classes and tick the ones to detect. For people counting, tick only **person**. With no class ticked, every class is kept.

4. **Class count** - Shows how many classes are kept (e.g. 5 of 80 classes kept).

5. **Clear classes** - Resets the selection.

6. **Save settings** - Saves confidence and classes.

:::note

Classes can only be added or removed while AI detection is stopped, and the model cannot be changed while the camera is running. Click **In use · click to stop** (or **Stop** on Camera Setup) first.

:::

## Custom Models

A custom model is a `.hef` file (compiled for the Hailo chip) plus a `.json` file, **both with the same name**. Add it in either of two ways:

- Click **+ Upload a model** and choose the pair from your computer.
- Copy both files into `/mnt/nvme/model` on the IRIV, then click the refresh icon.

The model then appears in the list with its details, for example *pill · hailo8 · 26 MB · detection · 2 classes*. To collect training pictures on the device, see [Dataset](./database-and-dataset.md#dataset-ai-preparation).

---

**Source:** IRIV EdgeAI Studio User Manual, Rev 1.0 (Draft), Cytron.
