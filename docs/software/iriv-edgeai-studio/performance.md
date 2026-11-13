---
title: "IRIV EdgeAI Studio Performance"
sidebar_label: "Performance"
sidebar_position: 10
description: "Check CPU, memory, storage, temperatures, Hailo NPU load and per-model FPS on the IRIV EdgeAI Studio Performance page."
---

# Performance

Check the health of the device, the Hailo accelerator and each running model.

## The Performance Page

Open **Performance** from the main sidebar (under **Run**) to check the device, the Hailo accelerator and each model.

![Performance page](/img/software/iriv-edgeai-studio/image11.webp)

The Performance page consists of several sections that you should be familiar with.

1. **Performance Menu** - Found under Run in the main sidebar.

2. **IRIV EdgeAI**

    - **Cores / Load** - number of CPU cores and current load.

    - **CPU / RAM** - current CPU and memory usage.

    - **Storage 1 / Storage 2** - eMMC and NVMe usage and size.

    - **CPU temp** - current CPU temperature.

3. **Hailo Accelerator**

    - **Hailo HAT** - architecture (e.g. HAILO8) and firmware version.

    - **NPU load (est)** - estimated NPU load, e.g. 68% moderate.

    - **Inference FPS** - inference speed across all running pipelines.

    - **NPU temp** - current NPU temperature.

    - **Running pipelines** - how many systems are using the NPU.

4. **Loaded Networks** - Every system's model with its FPS, process ID (PID), camera source, and Active/Stopped status.

If your model is Active with a steady FPS and the CPU load stays low, the Hailo NPU is handling the AI work correctly.

:::tip

If a whole system stops, check Performance first, then **Diagnostics > System Logs** inside the system. See also [Troubleshooting](./troubleshooting.md).

:::

---

**Source:** IRIV EdgeAI Studio User Manual, Rev 1.0 (Draft), Cytron.
