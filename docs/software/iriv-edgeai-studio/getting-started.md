---
title: "IRIV EdgeAI Studio Getting Started"
sidebar_label: "Getting Started"
sidebar_position: 2
description: "Set up IRIV EdgeAI Studio for the first time and build a working people counter from a blank canvas: connect, sign in, update, create a system, add a model, camera and workflow."
---

# Getting Started

In this tutorial you go from a new IRIV to your first live people count, in three parts:

- **Part 1: Setting Up the Device** – connect your computer, log in, update the software and get to know the main screen.

- **Part 2: Building Your First System** – create a system and follow the setup guide to choose the AI model, add the camera and build the workflow.

- **Part 3: Running and Monitoring the System** – build your Dashboard, see the live count and check Analytics.

Before you begin, prepare the following hardware:

| No. | Hardware |
|---|---|
| 1      | IRIV EdgeAI CM5 with its AI HAT+ and NVMe drive |
| 2      | Camera: USB Camera or IP Camera with RTSP stream or Industrial GigE camera                                              |
| 3      | Power Supply                                                                                                            |
| 4      | **Optional:** Ethernet cable (if you prefer to connect the IRIV to the local network instead of the Wi-Fi access point) |

New to AI vision? See [Words You Will See](./index.md#words-you-will-see) for the terms used in this guide.

## Part 1: Setting Up the Device

### Step 1: Power On and Connect Your Computer

Plug in the camera and the power supply. When the IRIV has started, the small screen on the front (the **OLED**) shows its details. Press the **USER** button to move through its pages. Then connect your computer in **one** of these ways:

**Option A: Wi-Fi hotspot (easiest, default)**

Press **USER** until the OLED shows **ACCESS DASHBOARD**, then join that Wi-Fi network with the password shown.

![OLED ACCESS DASHBOARD page with the hotspot name](/img/software/iriv-edgeai-studio/image100.webp)

Press **USER** again until **IP ADDRESSES** appears. If **wlan0** is **10.42.0.1**, the IRIV is in hotspot mode – use this address.

![OLED IP ADDRESSES page in hotspot mode](/img/software/iriv-edgeai-studio/image104.webp)

:::info

Change the default access point password later in Settings > Network.

:::

**Option B: Ethernet**

Connect the IRIV to your router with an Ethernet cable. Press **USER** until **IP ADDRESSES** appears, then use the address next to **eth0** or **eth1**.

![OLED IP ADDRESSES page with an Ethernet address](/img/software/iriv-edgeai-studio/image161.webp)

**Option C: Your Wi-Fi network**

Press **USER** until **IP ADDRESSES** appears. If **wlan0** shows an address **other than 10.42.0.1**, the IRIV is already on your Wi-Fi – use that address.

![OLED IP ADDRESSES page with a Wi-Fi address](/img/software/iriv-edgeai-studio/image141.webp)

:::tip

Write down the IP address – you need it in the next step.

:::

### Step 2: Open IRIV EdgeAI Studio and Log In

In your browser, type **https://** and the IP address, for example `https://10.42.0.1` in hotspot mode.

The browser shows a security warning because the device uses its own (self-signed) certificate.

This warning is normal. Click **Advanced**.

![Browser security warning with Advanced button](/img/software/iriv-edgeai-studio/image186.webp)

Click **Proceed to `<IRIV IP address>` (unsafe)**.

![Proceed to the IRIV address link](/img/software/iriv-edgeai-studio/image177.webp)

The sign-in page will open if an account has been created. **The first time**: create the master account (the main admin account) by choosing a username and password. Keep them safe. After that, type your username and password and click **Sign in**.

![IRIV EdgeAI Studio sign-in page](/img/software/iriv-edgeai-studio/image111.webp)

#### Forgot the master password

Click **Forgot password** on the sign-in page, then hold the **USER** button on the IRIV for 5 seconds. A 6-digit code appears on the OLED screen for 10 minutes. Type it in to set a new password.

### Step 3: Check for a New Software Update

Keep IRIV EdgeAI Studio up to date for new features and fixes.

Click the **Bell** at the top right to open the notification panel. It has two tabs, **Inbox** and **System**.

**Inbox** – shows recent activity, including the newest system update.

![Notification panel Inbox tab](/img/software/iriv-edgeai-studio/image151.webp)

**System** – shows the version the IRIV is running (e.g. v1.0.41), when it last checked, and which version it can roll back to.

![Notification panel System tab](/img/software/iriv-edgeai-studio/image30.webp)

- **Check now** – checks for a new update straight away. The result appears below, e.g. “This box is up to date” or the newest update ready to install.

- **Update manually** – updates from an update file you have downloaded. Click it and browse to the file.

- **Roll back** – returns to the previous version if a new update causes a problem.

- **Check for updates automatically** – when on, the IRIV checks for updates by itself. When off, it only checks when you press Check now.

To update, open the **System** tab and click **Check now**.

![Check now on the System tab](/img/software/iriv-edgeai-studio/image29.webp)

If a new version appears, click **Update**. If it says **up to date**, go to Step 4.

![New version available with Update button](/img/software/iriv-edgeai-studio/image107.webp)

Click **Update now** to confirm.

![Update confirmation](/img/software/iriv-edgeai-studio/image122.webp)

Wait for it to finish. Do not close the page.

![Update in progress](/img/software/iriv-edgeai-studio/image47.webp)

Click **Restart now**, then refresh the page.

![Restart the box to finish](/img/software/iriv-edgeai-studio/image183.webp)

The new version is now installed.

![New version installed](/img/software/iriv-edgeai-studio/image88.webp)

The **Inbox** tab shows what changed.

![Inbox showing what changed](/img/software/iriv-edgeai-studio/image146.webp)

:::tip

Turn on **Check for updates automatically**. Use **Roll back** if a new version causes a problem.

:::

### Step 4: A Quick Look at the Main Screen

This is the main Systems page. A **system** is one AI vision project. At the top, **Start from a template** shows the ready-made templates. Below it, **Your system** shows the systems you have made.

The sidebar on the left opens the other pages:

- **Systems** – create, open, start or stop systems.

- **System Control** – start and stop systems, and switch Detection, Snap, Record and Autostart on or off.

- **Performance** – the health of the device and the Hailo AI chip.

- **Live Preview** – watch up to 4 live camera feeds at once.

- **Logs** – the device-wide Log Hub with the IRIV's activity.

- **Settings** – accounts, network and other device settings.

![Main Systems page](/img/software/iriv-edgeai-studio/image116.webp)

**Home and sidebar buttons** – at the top left:

- **Home** – takes you back to the main page.

- **Sidebar toggle** – opens or hides the sidebar to give you more room.

![Home and sidebar toggle buttons](/img/software/iriv-edgeai-studio/image184.webp)

**System Capacity Monitor** – the counters at the top track how many systems, AI processes and cameras are running, up to 4 each.

![System capacity counters](/img/software/iriv-edgeai-studio/image126.webp)

:::note

One IRIV EdgeAI Studio runs up to **4 systems**, **4 AI** and **4 cameras** at the same time without lagging. A counter shows **MAX** when it is full.

:::

**Start from a template –** click a template to see a preview of what it gives you. Click Use this template to create a system from it. You can change everything later.

![Template preview](/img/software/iriv-edgeai-studio/image163.webp)

To check for new templates, click **Check for new templates**. While it checks, the link changes to **Checking…**. Wait a moment.

![Checking for new templates](/img/software/iriv-edgeai-studio/image194.webp)

When it is done, it shows **Templates are up to date** and the link changes back to **Check for new templates**. You are now choosing from the newest templates.

![Templates are up to date](/img/software/iriv-edgeai-studio/image167.webp)

**System space** – your systems appear here as cards. At first it is empty and shows **Create your first system**.

![System space with system cards](/img/software/iriv-edgeai-studio/image176.webp)

**System buttons** – at the top right of the Systems page:

- **Select** – select a system to delete.

- **Import system** – import a system that was exported before.

- **+ New System** – create a new system.

![Select, Import system and New System buttons](/img/software/iriv-edgeai-studio/image117.webp)

**Account menu** – click your account name at the bottom left to **Sign out**, **Reboot** or **Shut down** the IRIV.

![Account menu: Sign out, Reboot, Shut down](/img/software/iriv-edgeai-studio/image125.webp)

## Part 2: Building Your First System

### Step 1: Create a New System

On the main page, click **Blank Canvas** under **Start from a template**. You will build the workflow yourself in Step 4.

![Blank Canvas template](/img/software/iriv-edgeai-studio/image121.webp)

A preview shows what Blank Canvas gives you: an empty dashboard and an empty Workflow page. Click **Use this template**.

![Blank Canvas preview](/img/software/iriv-edgeai-studio/image169.webp)

Type a name for your system under **System name**, e.g. “Test”, then click **Next**. You can leave **more options** as they are. To pick a different template, click **Change template**.

![Name the system](/img/software/iriv-edgeai-studio/image148.webp)

Check the summary, then click **Create system**.

![Review and create system](/img/software/iriv-edgeai-studio/image94.webp)

**The new system card**

Your new system appears on the Systems page as a card, and the **Systems Created** counter goes up by one. On the card:

- **Status** – shows **offline** until the system is started.

- **Card buttons** – change the card picture, rename the system or export it.

- **Start this system** – starts the system.

- **Open** – click the arrow to open your system. Do this now.

![New system card](/img/software/iriv-edgeai-studio/image189.webp)

**The setup guide**

When you open your system, a **setup guide** pops up at the bottom right. It walks you through 3 steps: choose the AI model, add the camera, and build the workflow. Click **Go to …** to open each step. You can also **Skip** a step, minimise the guide with **–**, or close it with **×**.

![Setup guide step 1 of 3](/img/software/iriv-edgeai-studio/image51.webp)

When minimised, the guide waits in the bottom-right corner of the screen, out of your way. Click **Setup 1/3** to carry on.

![Minimised setup guide](/img/software/iriv-edgeai-studio/image147.webp)

### Step 2: Choose the AI Model

Click **Go to AI Models** in the guide.

Click **+ Add a model**. This adds **yolov8n**, a ready-made AI model that can recognise 80 kinds of objects, including people. The card shows **Active** and **In use**, so the model is running. Then click the small arrow at the bottom of the card to open its settings.

![AI Models page with yolov8n added](/img/software/iriv-edgeai-studio/image101.webp)

Under **Detection settings**, tick only **person** so it counts people only, then click **Save settings**.

![Detection settings with person ticked](/img/software/iriv-edgeai-studio/image38.webp)

Back in the setup guide, click **Done – next: Camera Setup** to move on to the camera.

![Done - next: Camera Setup](/img/software/iriv-edgeai-studio/image95.webp)

### Step 3: Add the Camera and Draw a Zone

The guide takes you to **Camera Setup** and opens the add-camera window for you.

Choose the type of camera you are using: **USB**, **RTSP / IP**, **GigE** or **Video / Image**. Pick your camera from the list, leave the other settings as they are, then scroll down and click **Add camera**.

![Add a camera window](/img/software/iriv-edgeai-studio/image25.webp)

Your camera now appears in the **Cameras** list. **Camera OK** means it is streaming well. Click **Start** to turn on the camera so you can see the live picture.

![Camera added, Start button](/img/software/iriv-edgeai-studio/image143.webp)

A **Detection started** message pops up at the bottom right, and the status shows **Connecting…**. Wait a few seconds for the live picture to appear.

![Detection started message](/img/software/iriv-edgeai-studio/image55.webp)

When the camera is on, the status changes to **Live** and the live picture appears. Now you can draw the zone.

![Live camera picture](/img/software/iriv-edgeai-studio/image105.webp)

Draw a zone on the live picture where you want to detect. Pick the tool that suits your system: **Line** to count people crossing a doorway, or **Box**, **Circle** or **Polygon** for an area. Once the zone is drawn, click **Save** on the zone, then **Save all** to keep the setting. You can still change its position later: drag its points, then save again.

![Zone drawn on the live picture](/img/software/iriv-edgeai-studio/image119.webp)

**Detected when** a person counts as inside the zone. **box touches zone (default)** is fine for your first system. You can also pick **feet in zone**, **middle point in zone** or **whole box inside**.

![Detected when options](/img/software/iriv-edgeai-studio/image36.webp)

Walk into the camera view to test. A box appears around each person it detects, with its name and confidence, e.g. **person 80%**. When the box touches your zone, the person is detected in the zone.

![Person detected in the zone](/img/software/iriv-edgeai-studio/image69.webp)

:::note

While the camera is on, the AI model cannot be changed. Click **Stop** first if you need to change it.

:::

When you are happy with the zone, click **Done – next: Workflow** in the guide (click **Setup 2/3** if it is minimised). The guide takes you to the next step, setting up the workflow.

![Done - next: Workflow](/img/software/iriv-edgeai-studio/image62.webp)

### Step 4: Build the Workflow

The guide opens the **Workflow** page. It starts as a blank canvas with only the **Detection Stream** block, which sends everything the camera's AI detects. The blocks you can add are listed on the left.

![Blank workflow with Detection Stream](/img/software/iriv-edgeai-studio/image17.webp)

Build a simple workflow like the one below. Drag each block from the left onto the canvas, click it to set it up, then **Save**. Wire from the **right dot** of one block to the **left dot** of the next.

1. **Detection Stream** – already on the canvas. Everything the camera's AI sees comes out of its **ON** output.

2. **Class Filter** (Input > Filters) – wire Detection Stream **ON** into it, tick **person** so only people are detected, and name it e.g. People.

3. **Zone Filter** (Input > Filters) – pick the zone you drew in Step 3, e.g. Zone 1 (area).

4. **Counter** (Processing > AI Processing) – wire the People filter's **ON** into **In** and the Zone Filter into **Zone** (use **Line** instead if you drew a line). It now counts the people in your zone.

5. **Card** (Visualization > Dashboard) – wire the Counter's output into it and give it a title, e.g. People Counter. This is the number you will see on the Dashboard.

Your finished workflow looks like this. If a block shows a red message, a setting is missing.

![Finished workflow: Detection Stream, Class Filter, Zone Filter, Counter and Card](/img/software/iriv-edgeai-studio/image39.webp)

Click **Finish** in the guide to complete the setup.

![Finish button in the setup guide](/img/software/iriv-edgeai-studio/image120.webp)

## Part 3: Running and Monitoring the System

### Step 1: Build Your Dashboard

After you click **Finish**, the **Dashboard** opens. It is empty at first. To build your dashboard, click **Edit dashboard**.

![Empty Dashboard with Edit dashboard](/img/software/iriv-edgeai-studio/image57.webp)

The **Dashboard Builder** opens. Drag items from the left onto the canvas: **Widgets** such as Live video, Class filter, Image card and Text card, or the **Dashboard cards** you made in your workflow, e.g. **People Counter**. You can also double-click a widget or click a card to add it.

![Dashboard Builder](/img/software/iriv-edgeai-studio/image67.webp)

Arrange the widgets the way you like: drag them to move, or drag the corner to resize. Click a widget to change how it looks in **Properties** on the right, e.g. its title, colours and text size.

![Arranging widgets in the Dashboard Builder](/img/software/iriv-edgeai-studio/image197.webp)

When you have finished setting up, click **Save** at the top right. It shows **saved** when your dashboard is stored.

![Save and Back to dashboard](/img/software/iriv-edgeai-studio/image22.webp)

### Step 2: See Your Count

Click **Back to the dashboard**. Walk past the camera and watch the count go up. If a card shows **AI OFFLINE**, open **System Control** and switch **Detection** on.

![Dashboard with the live people count](/img/software/iriv-edgeai-studio/image182.webp)

To see totals and charts over time, click **Analytics** in the sidebar (under Overview).

![Analytics page](/img/software/iriv-edgeai-studio/image139.webp)

**Well done – your IRIV is now counting people.**

### Step 3 (Optional): Customise Analytics

On **Analytics**, click **Edit layout**. It works like the Dashboard Builder: drag in widgets and cards, arrange them, use **Today / Week / Month** to preview, then click **Save**.

![Analytics Builder](/img/software/iriv-edgeai-studio/image61.webp)

:::note

Cards show **AI OFFLINE** in the builder until the system runs. This is normal.

:::

## Get to Know the Other Pages

You do not need these on day one, but it is good to know where they are.

| Page                   | Where                 | What it is for                                                                   |
|----------------------------|---------------------------|--------------------------------------------------------------------------------------|
| [Live Preview](./run-and-dashboard.md#live-preview) | Main sidebar              | Watch up to 4 camera feeds at once.                                                  |
| [Footage](./analytics-and-footage.md#footage) | Overview > Footage       | Photos and clips the system has captured.                                            |
| [Database](./database-and-dataset.md) | Data > Database          | Every row the workflow has saved can also be exported to CSV.                        |
| [Dataset](./database-and-dataset.md#dataset-ai-preparation) | AI Preparation > Dataset | Capture photos and clips to train your own AI model.                                 |
| [Performance](./performance.md) | Main sidebar              | CPU, memory, temperature and AI speed (FPS) of the device.                           |
| Events Logs / Systems Logs | Diagnostics               | What happened and when (useful when something goes wrong).                           |
| [Settings](./settings/accounts.md) | Main sidebar              | Accounts, networks, data retention, board I/O, front panel, email, Telegram and MQTT |

## Conclusion

In this tutorial you set up IRIV EdgeAI Studio for the first time and built your first working AI vision system from a blank canvas. You connected your computer to the IRIV, logged in, created a system, chose an AI model, added a camera, drew a zone, built a simple workflow and saw the live people count on the Dashboard.

These are the basics behind every IRIV EdgeAI Studio project: **a model** to recognise objects, **a camera** with zones or lines, and **a workflow** that turns detections into results. With them, you are ready to build your own projects.

---

**Source:** IRIV EdgeAI Studio User Manual, Rev 1.0 (Draft), Cytron.
