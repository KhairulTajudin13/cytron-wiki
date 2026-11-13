---
title: "IRIV EdgeAI Studio"
sidebar_label: "IRIV EdgeAI Studio"
description: "IRIV EdgeAI Studio is Cytron's no-code AI vision platform for the IRIV EdgeAI CM5: build people counting, object detection, restricted zone and smart parking systems by wiring nodes in a browser."
---

# IRIV EdgeAI Studio

IRIV EdgeAI Studio is Cytron's **no-code AI vision platform** for the [IRIV EdgeAI CM5](../index.md). You build vision applications in a web browser by connecting ready-made blocks (nodes), and the AI runs on the device itself, on the Hailo AI accelerator. No cloud service is needed.

![IRIV EdgeAI Studio, an all-in-one AI vision platform](/img/products/iriv-edgeai-cm5/edgeai-studio/image142.webp)

:::info Draft manual
These pages follow the **IRIV EdgeAI Studio User Manual, Rev 1.0 (Draft)**. Screens and wording may change as the software is updated. Older screenshots may still show the earlier name "IRIV Vision Studio".
:::

## How It Works

Every IRIV EdgeAI Studio project, called a **system**, is built from three things:

1. **A model** that recognises objects, for example YOLOv8 for the 80 everyday COCO classes such as person, car and chair.
2. **A camera** with the zones or lines you draw on its picture.
3. **A workflow** that turns each detection into a result: a count, an alert, a database row, a dashboard card, or a message sent out by MQTT, HTTP, Modbus, email or Telegram.

## Features

| Feature | What it does |
|---|---|
| Visual Workflow Builder | Create AI vision applications by connecting ready-to-use building blocks. |
| Zone Management | Mark areas and lines in a camera view to count or watch. |
| Dashboard and Monitoring | Live results, history charts, logs and CSV export. |
| Multi-Camera Support | Up to 4 cameras: USB, RTSP/IP, GigE, or a video file for testing. |
| AI Acceleration | Detection runs on the Hailo accelerator, not the CPU. |
| Templates | Start from a ready-made system and change anything later. |
| Over-the-Air Updates | Check, install and roll back software updates from the browser. |
| User and Access Management | Accounts, roles, per-system access and session control. |
| Hardware Integration | Read the IRIV inputs and drive its outputs, LED drivers and buzzer from a workflow. |
| Easy Wi-Fi Setup | Connect straight to the device's own Wi-Fi hotspot on first use. |

## Ready-Made Templates

| Template | What it does | Tutorial |
|---|---|---|
| AI People Counting | Counts people crossing a line or standing inside an area. | [People Counting](./tutorials/people-counting.md) |
| AI Object Detection | Detects and counts the objects you choose on a live camera. | [Object Detection](./tutorials/object-detection.md) |
| AI Restricted Zone | Raises an alert when someone enters an area. | [Restricted Zone](./tutorials/restricted-zone.md) |
| AI Smart Parking | Counts cars in and out, checks each bay and alerts when the car park is full. | [Smart Parking](./tutorials/smart-parking.md) |
| Blank Canvas | An empty dashboard and workflow to build your own system. | [Getting Started](./getting-started.md) |

## What You Need

| Item | Notes |
|---|---|
| IRIV EdgeAI CM5 | With its Hailo AI HAT+ and an NVMe drive (models, footage and datasets are stored on the NVMe). |
| Camera | USB (UVC) camera, IP camera with an RTSP stream, or an industrial GigE camera. |
| Power supply | See [Getting Started with the IRIV EdgeAI CM5](../getting-started.md). |
| Computer with a browser | On the same network as the IRIV. Google Chrome or Microsoft Edge is recommended. |
| Ethernet cable (optional) | To join your local network instead of using the device's Wi-Fi hotspot. |

## Limits

- One IRIV runs up to **4 systems, 4 AI processes and 4 cameras** at the same time. The counters at the top of the screen show **MAX** when a limit is reached.
- With USB or GigE cameras the CPU does more work, so fewer cameras or systems may run smoothly than with IP cameras.
- At the default 640×480 the load is lowest; turning on High Resolution raises CPU use.

## Words You Will See

| Word | Meaning |
|---|---|
| System | One AI vision project: camera, AI model, workflow and dashboard. |
| Template | A ready-made system you can start from, for example AI People Counting. |
| Model (.hef) | The AI that recognises objects. A `.hef` file is a model compiled for the Hailo AI chip. |
| Class | A type of object the model knows, for example person or car. |
| Zone / Line | An area or line you draw on the camera picture to count or watch. |
| Workflow / Node | The chain of blocks (nodes) that decides what happens with each detection. |
| NPU / Hailo | The AI chip inside the IRIV that runs the model fast. |
| RTSP | The video stream address used by IP (network) cameras. |

## Where to Start

1. **New to the software?** Follow [Getting Started](./getting-started.md) to go from a new IRIV to a live people count.
2. **Want a ready-made project?** Pick one of the [tutorials](#ready-made-templates) above.
3. **Looking for one screen or setting?** Use the user manual pages:

| Page | Covers |
|---|---|
| [Connect and Sign In](./connect-and-sign-in.md) | Hotspot, Ethernet or Wi-Fi, the browser warning, master account, password reset |
| [Main Screen and Updates](./main-screen-and-updates.md) | Sidebar, notifications, capacity counters, system cards, updates and roll back |
| [Create a System](./create-a-system.md) | New system wizard, system card, setup guide |
| [AI Models](./ai-models.md) | Built-in YOLOv8 models, custom .hef models, confidence and classes |
| [Camera Setup and Zones](./camera-setup.md) | Camera sources, quality, box display, zones and lines |
| [Workflow and Nodes](./workflow.md) | Node palette, main nodes, example workflows |
| [System Control and Dashboard](./run-and-dashboard.md) | Start/stop, Detection, Snap, Record, Autostart, Dashboard, Live Preview |
| [Analytics and Footage](./analytics-and-footage.md) | History, charts, logs, CSV, captured photos and clips |
| [Database and Dataset](./database-and-dataset.md) | Tables, SQL Playground, dataset capture for training |
| [Performance](./performance.md) | CPU, RAM, storage, temperatures, NPU load, FPS |
| [Settings](./settings/accounts.md) | Accounts, data retention, Board I/O, front panel, network, HTTPS, email, Telegram, MQTT |
| [Troubleshooting](./troubleshooting.md) | Common problems and fixes |

## Related Pages

- [IRIV EdgeAI CM5 AI Quick Start](../ai-quickstart.md): check the Hailo accelerator from the command line.
- [IRIV EdgeAI CM5 I/O Reference](../io-reference.md): wiring for the terminals IRIV EdgeAI Studio can drive.
- [IRIV EdgeAI Safety Box Kit](../../../kits/iriv-edgeai-safety-box-kit.md) and [IRIV EdgeAI Industry 4.0 Vision Training](../../../kits/iriv-edgeai-vision-training.md).

---

**Source:** IRIV EdgeAI Studio User Manual, Rev 1.0 (Draft), Cytron.
