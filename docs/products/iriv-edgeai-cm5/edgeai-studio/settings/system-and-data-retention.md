---
title: "IRIV EdgeAI Studio System and Data Retention"
sidebar_label: "System and Data Retention"
sidebar_position: 2
description: "IRIV EdgeAI Studio auto logout and email switches, data retention periods on the NVMe drive, deleting a system's data and the Trash."
---

# System and Data Retention

Account-wide switches, how long data is kept, and how to clear a system's data.

## System

Go to **Settings > System**.

![System tab](/img/products/iriv-edgeai-cm5/edgeai-studio/image192.webp)

The System tab has two switches that apply to every account on the device.

1. **Auto Logout** - Turn on Sign out automatically when idle to log out inactive sessions; when off, sessions stay signed in for up to 30 days. The change only affects new sign-ins; existing sessions keep their current expiry.

2. **Email** - Switch email on or off. When off, the Forgot screen does not ask for an address, and accounts cannot be given one. Without email, a forgotten master password is reset at the device by holding the USER button for 5 seconds.

## Data Retention

Go to **Settings > Data Retention**.

![Data Retention tab](/img/products/iriv-edgeai-cm5/edgeai-studio/image162.webp)

The Data Retention page consists of several sections that you should be familiar with. One policy applies to every system on the device.

1. **Storage** - All system data is stored on the NVMe drive and can be kept for up to 12 months. Use Set up storage to configure it.

2. **In effect since** - Retention is counted from this date; set it earlier to apply the policy to data you already have.

3. **Data Type**

    - **Event archives** - all event recordings and metadata.

    - **Snapshots** - evidence photos from zone actions and workflows.

    - **Video clips** - recorded MP4 clips.

    - **Analytics history** - the time series behind every chart.

    - **Event database** - the searchable event store.

4. **Retention Period** - Enter how long each data type is kept, in days or months (up to 12 months).

5. **Next Deletion On** - When the next automatic deletion for each data type will happen.

6. **Scheduled deletion** - Deletion runs automatically every few hours; the note shows the next pass and how many files the last one removed.

7. **Save Policy** - Click to save your periods; saving also runs a deletion pass straight away.

## Delete a System's Data and Trash

Scroll further down the Data Retention page.

![Delete a system's data, and the Trash](/img/products/iriv-edgeai-cm5/edgeai-studio/image1.webp)

1. **Never removed** - Accounts, the audit log, configuration, templates and workflows are never deleted by the policy.

2. **Data Types** - Each system has its own row with four data types: Events, Footage, Database and Logs.

3. **Selected deletion** - Choose which data types to clear from the drop-down, then delete only those.

4. **Delete All** - Clears every data type of that system at once; the system itself is kept.

5. **Hold to confirm** - Every deletion asks you to press and hold for 3 seconds; let go before then and nothing happens.

6. **Trash** - Holds files left by deleted systems (layout, workflow, database rows and data folder). Removing an item deletes it for good.

7. **Refresh** - Updates the Trash list.

:::warning

Deleting is permanent; hold the button for 3 seconds to confirm.

:::

---

**Source:** IRIV EdgeAI Studio User Manual, Rev 1.0 (Draft), Cytron.
