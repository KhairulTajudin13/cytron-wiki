---
title: "IRIV EdgeAI Studio Database and Dataset"
sidebar_label: "Database and Dataset"
sidebar_position: 9
description: "Browse and export the data your IRIV EdgeAI Studio workflow saves, run read-only SQL queries, and capture photos and clips to train your own model."
---

# Database and Dataset

Every row your workflow saves can be browsed, queried and exported. The Dataset pages capture raw pictures for training your own model.

## Database

Go to **Data > Database** to browse, search and export the rows your workflow saves.

![Database page](/img/products/iriv-edgeai-cm5/edgeai-studio/image4.webp)

The Database page consists of several sections that you should be familiar with.

1. **Database and Tables** - Shows the database size, a search box and the list of tables with their rows and size; click a table to open it.

2. **Saved Queries** - Queries you save in the SQL Playground appear here so you can run them again.

3. **Open SQL Playground** - Opens the SQL Playground to write and run read-only queries.

4. **Table Tabs** - Switch between the open table (e.g. Demo) and the SQL Playground.

5. **Table Toolbar**

    1. **New Table / Add Row** - create a table, or add a row by hand.

    2. **Refresh** - reloads the latest rows.

    3. **Export CSV / Export DB** - download the open table, or the whole database.

    4. **Search rows** - find values in the open table.

    ![Table toolbar buttons](/img/products/iriv-edgeai-cm5/edgeai-studio/image201.webp)

6. **Edit / Delete Table** - Change or remove the open table.
7. **Summary** - Total Rows, Columns, Table Size and Last updated for the open table.
8. **Rows** - The columns come from what the Database node writes, plus a Datetime column; click a column name to sort.
9. **Pages** - Choose rows per page (e.g. 50) and move between pages with Prev and Next.

### SQL Playground

Open the **SQL Playground** tab, type a read-only query and click **Run query**.

![SQL Playground](/img/products/iriv-edgeai-cm5/edgeai-studio/image93.webp)

1. **Editor / History / Saved** - Write a query in Editor, or reopen earlier and saved queries.

2. **Save Query / Run Query**

    - **Run query** - runs the query in the editor.

    - **Save query** - keeps the query under Saved Queries.

3. **Query Limits and Period** - Queries are read-only, for this system only, and return up to 500 rows. Pick a **Period** and add `ts >= %(from)s AND ts < %(to)s` to your WHERE clause to use it.

4. **Query Editor** - Type your query here, e.g. `SELECT * FROM demo ORDER BY ts DESC`.

5. **SQL Snippets** - Use the Basic, Numbers, Dates, Text and Advanced tabs, then click a button to insert SQL for you.

    ![SQL snippet buttons](/img/products/iriv-edgeai-cm5/edgeai-studio/image56.webp)

6. **Tables** - The tables you can query (e.g. events, dataset_rows, demo).

7. **Format SQL** - Tidies the layout of the query in the editor.

8. **Results / Messages** - The rows returned by the query appear here; Messages shows any errors.

:::tip

Clear the query box before typing a new query. Leftover lines from an earlier query will be run together with the new one and cause a syntax error.

:::

## Dataset (AI Preparation)

Go to **AI Preparation > Dataset** to capture raw photos and clips for training your own model. Detection must be running, because capture uses the live camera stream.

![Dataset page](/img/products/iriv-edgeai-cm5/edgeai-studio/image77.webp)

1. **NVMe Status and Dataset Library**

    - **NVMe ready** - shows that the NVMe drive is ready to store captures.

    - **Dataset Library** - opens the Dataset Library page.

2. **Camera** - The live feed. Captures are taken from the raw stream, without the detection boxes.

3. **Capture**

    - **Name** - give the session a name (e.g. forklift_bay3).
    - **Start / stop or Fixed length** - record until you press Stop, or for a fixed length.
    - **Take photo / Start recording** - take a single picture or record a clip.

    ![Capture controls](/img/products/iriv-edgeai-cm5/edgeai-studio/image130.webp)

4. **Where It Goes** - Photos are saved to `/mnt/nvme/dataset_image` and clips to `/mnt/nvme/dataset_rec`.
5. **Latest Photos / Latest Clips** - What you have captured so far, with the total count.

### Dataset Library

Open **Dataset Library** to review, download or delete captured sessions.

![Dataset Library](/img/products/iriv-edgeai-cm5/edgeai-studio/image123.webp)

1. **Capture** - Returns to the Dataset page to capture more.

2. **Photos / Clips** - Switch between photos and clips; Select all selects every item.

3. **Download / Delete** - Download or delete the selected items.

4. **Library** - Your captured items appear here. If there are none yet, click Capture on the Dataset page.

After labelling and training, convert the model to a Hailo `.hef` with its `.json` file and add it as a [custom model](./ai-models.md#custom-models).

---

**Source:** IRIV EdgeAI Studio User Manual, Rev 1.0 (Draft), Cytron.
