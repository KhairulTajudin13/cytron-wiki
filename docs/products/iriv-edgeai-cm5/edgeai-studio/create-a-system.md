---
title: "IRIV EdgeAI Studio Create a System"
sidebar_label: "Create a System"
sidebar_position: 3
description: "Create an AI vision system in IRIV EdgeAI Studio from a template or a blank canvas, then start it and follow the 3-step setup guide."
---

# Create a System

A **system** is one AI vision project: a camera, an AI model, a workflow and a dashboard. One IRIV runs up to four systems.

## Start the New System Wizard

On the Systems page, click **Create Your First System** if no systems exist, or click **+ New System** or the dashed **New System** card to create one.

![Empty Systems page with the Create your first system card](/img/products/iriv-edgeai-cm5/edgeai-studio/image144.webp)

The wizard creates a system in three short steps. When it opens, it checks for updated templates first.

### Step 1: What is it detecting?

While it checks, the wizard shows **Checking for the latest templates…**

![Wizard checking for the latest templates](/img/products/iriv-edgeai-cm5/edgeai-studio/image210.webp)

When it is done, it shows **Templates are up to date** and lists the templates.

![Wizard step 1: choose a template](/img/products/iriv-edgeai-cm5/edgeai-studio/image212.webp)

1. **Choose a template** - Click a template, for example AI People Counting. The other templates are AI Object Detection, AI Restricted Zone, AI Smart Parking and Blank Canvas.

2. **Next** - Click Next to go to the next step.

:::note

Templates now update automatically together with each software update, so there is no need to update them manually. Systems you already created are not changed.

:::

### Step 2: Name the system

![Wizard step 2: name the system](/img/products/iriv-edgeai-cm5/edgeai-studio/image24.webp)

1. **System name** - Type a name, for example “People Counting”. Folder name, port and server process are handled for you.

2. **More options (optional)**

    1. **System name** - the folder name and the system's ID in its address; lowercase letters, digits and underscores only. Filled in from the name if left blank.

    2. **Subtitle** - shown under the name on the system card.

    3. **Icon** - 1 or 2 characters shown on the card cover. By default, the first letter of the name.

    4. **Start it now** - On: the system starts as soon as it is created. Off: it shows offline until you start it.

3. **Next** - Click Next to review.

### Step 3: Review and create

![Wizard step 3: review and create](/img/products/iriv-edgeai-cm5/edgeai-studio/image58.webp)

1. **Summary** - Check the detection format, name, slug, subtitle, address, internal port and start setting.

2. **Create system** - Creates the system. To delete it later, use **Select** on the Systems page.

## Open and Start the System

### The new system card

The new system appears on the Systems page as a card, and the Systems Created counter goes up by one.

![New system card with status, card buttons, start and open](/img/products/iriv-edgeai-cm5/edgeai-studio/image43.webp)

1. **Status** - Shows offline until the system is started.

2. **Card buttons** - Change the card picture, rename the system or export it.

3. **Start this system** - Starts the system.

4. **Open** - Click the arrow to open the system.

### The setup guide

When the new system opens, its Dashboard is still empty and a **setup guide** window appears. The guide takes you through three steps: choose an AI model, point it at a camera, and turn detections into decisions.

![New system Dashboard with the setup guide window](/img/products/iriv-edgeai-cm5/edgeai-studio/image132.webp)

Every setup guide window has the same buttons:

![Setup guide buttons: Go to, Skip, minimise and close](/img/products/iriv-edgeai-cm5/edgeai-studio/image199.webp)

1. **Go to … / Done - next: …** - opens the page for this step. Once you are on that page, the button changes to **Done - next: …** so you can move on when you finish.

2. **Skip** - skips this step and moves on to the next one.

3. **- (Minimise)** - hides the window so you can work on the page. The guide stays in the bottom-right corner as a small **Setup 1/3** button; click it to open the guide again and continue where you left off.

4. **× (Close)** - closes the setup guide.

![Minimised setup guide in the bottom-right corner](/img/products/iriv-edgeai-cm5/edgeai-studio/image187.webp)

Close-up of the minimised guide in the bottom-right corner:

![Close-up of the Setup 1/3 button](/img/products/iriv-edgeai-cm5/edgeai-studio/image147.webp)

:::tip

The guide window may cover part of the page. Minimise it, set up what is needed on the page, then click **Setup 1/3** to bring it back and carry on.

:::

#### Guide step 1 of 3: Choose an AI model

Click **Go to AI Models**. See [AI Models](./ai-models.md). Pick a built-in model or a .hef from the board. Nothing can be detected until the system knows what to look for.

![Setup guide step 1 on the AI Models page](/img/products/iriv-edgeai-cm5/edgeai-studio/image188.webp)

1. **Done - next: Camera Setup** - click it after choosing the model to go to Step 2.

2. **Setup 1 of 3 / Skip / Next: Camera Setup** - the same guide steps are also at the top of the page, so you can still move on while the window is minimised.

#### Guide step 2 of 3: Point it at a camera

On Camera Setup, connect a USB, IP (RTSP) or GigE camera, then draw your zones on the same page once the picture is up.

![Setup guide step 2 on the Camera Setup page](/img/products/iriv-edgeai-cm5/edgeai-studio/image203.webp)

1. **Add a camera** - opens the Add a camera window to choose the camera (see [Camera Setup and Zones](./camera-setup.md)). Minimise the guide first if it is in the way.

2. **Done - next: Workflow** - click it when the camera and zones are ready to go to Step 3.

#### Guide step 3 of 3: Turn detections into decisions

On the [Workflow](./workflow.md) page, wire the counts, conditions and alerts. This is where the system stops watching and starts doing something.

![Setup guide step 3 on the Workflow page](/img/products/iriv-edgeai-cm5/edgeai-studio/image170.webp)

1. **Finish** - click it in the guide window when the workflow is ready to end the setup guide.

2. **Finish** - the same button at the top of the Workflow page (next to Setup 3 of 3 and Skip).

---

**Source:** IRIV EdgeAI Studio User Manual, Rev 1.0 (Draft), Cytron.
