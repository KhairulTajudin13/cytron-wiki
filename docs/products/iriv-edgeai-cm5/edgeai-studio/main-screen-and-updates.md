---
title: "IRIV EdgeAI Studio Main Screen and Updates"
sidebar_label: "Main Screen and Updates"
sidebar_position: 2
description: "The IRIV EdgeAI Studio main screen: sidebar, system buttons, notifications, capacity monitor, system cards, power menu, and how to update or roll back the software."
---

# Main Screen and Updates

## Main Interface

After logging in to IRIV EdgeAI Studio, you will be directed to the main interface.

![IRIV EdgeAI Studio Main Interface](/img/products/iriv-edgeai-cm5/edgeai-studio/image223.webp)

*IRIV EdgeAI Studio Main Interface*

The main interface contains several sections that help you navigate the software, manage systems, monitor device status, and access configuration options.

### Sidebar

The sidebar provides quick access to the system's main navigation features.

![Sidebar Navigation and Toggle Controls](/img/products/iriv-edgeai-cm5/edgeai-studio/image215.webp)

*Sidebar Navigation and Toggle Controls*


1. **Home Logo** - Click the home icon to return to the main page.

2. **Sidebar Toggle:** Click the sidebar toggle icon to expand or collapse the sidebar, allowing you to adjust the workspace according to your needs.

3. **Systems** - Create, open, start, or stop systems.

4. **System Control** - Start or stop a system and switch between Detection, Snap, Record, and Autostart modes.

5. **Performance** - View device and Hailo health information.

6. **Live Preview** - View up to four live camera feeds simultaneously.

7. **Logs** - Access the device-wide Log Hub for system logs.

8. **Settings** - Manage accounts, network settings, and other device settings.

### System Management Buttons

The System page provides three buttons for managing system configurations.

1. **Select** - Select a system to delete.

2. **Import system** - Import an exported system into the application.

3. **+ New System** - Create a new system.

![System Management Buttons](/img/products/iriv-edgeai-cm5/edgeai-studio/image217.webp)

*System Management Buttons*

### Notification Panel

Click the Bell icon to open the notification panel. The panel contains two tabs: Inbox and System.

**Inbox** - The **Inbox** tab displays recent activity notifications, including information about the latest system updates.

![Inbox Notification Panel](/img/products/iriv-edgeai-cm5/edgeai-studio/image164.webp)

*Inbox Notification Panel*

**System** - The **System** tab displays the software version currently running on the device, the last time the system checked for updates, and the previous version available for rollback.

1. **Check Now** - Check immediately for available updates. The result appears below the controls, indicating whether the system is up to date or an update is available.

2. **Update Manually** - Update the system using an update file downloaded to your computer. Click this button and select the update file.

3. **Roll Back** - Restore the previous version if an update causes problems.

4. **Check for Updates Automatically** - Enable this option to check for updates automatically. When disabled, the system checks for updates only when you click Check Now.

![System Update and Version Management](/img/products/iriv-edgeai-cm5/edgeai-studio/image129.webp)

*System Update and Version Management*

### System Capacity Monitor

The **System Capacity Monitor** displays the number of systems created, AI processes running, and cameras running. Each category has a maximum capacity of four, as shown in the interface.

1. **Systems Created** - Displays the number of systems created.

2. **AI Running** - Displays the number of active AI processes.

3. **Cameras Running** - Displays the number of active cameras.

For example, the counters may display **2/4 Systems Created**, **1/4 AI Running**, and **1/4 Cameras Running**.

:::info

IRIV EdgeAI Studio supports up to four systems, four running AI processes, and four running cameras simultaneously when using IP cameras, subject to the device's available resources. When using USB or GigE cameras, AI processing may place additional demands on the CPU, which can limit the number of cameras or systems that can run simultaneously. Actual performance depends on the workload and available CPU resources. When a category reaches its maximum supported capacity, the corresponding counter displays **MAX**.

:::

![System Capacity Monitor](/img/products/iriv-edgeai-cm5/edgeai-studio/image6.webp)

*System Capacity Monitor*

### System Space

The **System Space** displays the systems available in IRIV EdgeAI Studio. Each system is represented by a card showing its name, status, and owner. Use the search bar to find a specific system.

Each system card may include the following elements:

1. **System Name** - Displays the name of the system.

2. **System Status** - Indicates whether the system is running, online or offline.

3. **Owner** - Displays the system owner.

4. **Open System** - Click the play icon to open or launch the system, depending on its current state.

5. **Open in New View** - Click the arrow icon to navigate to the system's detailed view.

If no systems have been created, the System Space displays a message prompting you to create your first system.

![Empty System Space](/img/products/iriv-edgeai-cm5/edgeai-studio/image144.webp)

![System Space and System Cards](/img/products/iriv-edgeai-cm5/edgeai-studio/image205.webp)

*System Space and System Cards*

### Account and Device Power Menu

Click the account menu at the bottom of the sidebar to display the available account and device options.

The menu contains the following options:

1. **Sign Out** - Sign out of the current account and return to the sign-in page.

2. **Reboot** - Restart the IRIV device.

3. **Shut Down** - Power off the IRIV device.

The currently signed-in account name is displayed at the bottom of the menu.

![Account and Device Power Menu](/img/products/iriv-edgeai-cm5/edgeai-studio/image31.webp)

*Account and Device Power Menu*

## Update the Software

1. On the main page, click the **Bell** icon to open the notifications panel.

![Checking the Current Software Version](/img/products/iriv-edgeai-cm5/edgeai-studio/image97.webp)

*Checking the Current Software Version*

2. Click **Check Now** to check for the latest software version. If an update is available, the new version will be displayed.

![Available Software Update](/img/products/iriv-edgeai-cm5/edgeai-studio/image232.webp)

*Available Software Update*

3. Click **Update**. A confirmation pop-up will appear.

![Update Confirmation](/img/products/iriv-edgeai-cm5/edgeai-studio/image152.webp)

*Update Confirmation*

4. Wait for the update to finish. Do not navigate away from the page or interrupt the update process.

![Software Update Progress](/img/products/iriv-edgeai-cm5/edgeai-studio/image156.webp)

*Software Update Progress*

5. Once the update is complete, a prompt will ask you to restart the device. Click **Restart Now**.

![Restart Prompt After Updating](/img/products/iriv-edgeai-cm5/edgeai-studio/image85.webp)

*Restart Prompt After Updating*

6. Wait for the device to restart, then refresh the browser page after a few seconds. Check the update status to confirm that the latest version has been installed successfully.

![Verifying the Installed Version](/img/products/iriv-edgeai-cm5/edgeai-studio/image13.webp)

*Verifying the Installed Version*

:::note

Enable **Check for updates automatically** if you want to be notified when new updates are available.

:::

7. Click **Inbox** to see the updated version details.

![Updated Version Notification](/img/products/iriv-edgeai-cm5/edgeai-studio/image131.webp)

*Updated Version Notification*

8. Click the **Read more** link to see what changed.

![Software Update Details](/img/products/iriv-edgeai-cm5/edgeai-studio/image106.webp)

*Software Update Details*

---

**Source:** IRIV EdgeAI Studio User Manual, Rev 1.0 (Draft), Cytron.
