# How to Edit the Cytron Wiki (Cytron team only)

This guide is for Cytron team members. Customers do not see it: the public wiki at https://cytron-wiki.pages.dev only shows product documentation, plus a **"Found a mistake? Tell us"** link that emails support@cytron.io.

You can fix pages and add pictures from a web browser. You do not need to install anything or know Git. There are two ways: **Pages CMS** (easiest, saves straight to the live wiki) and **GitHub** (changes are reviewed before they go live).

**Bookmark this:** https://app.pagescms.org (the editor). The wiki files are at https://github.com/KhairulTajudin13/cytron-wiki.

## The Easy Way: Pages CMS (no GitHub account needed)

Pages CMS is a simple editing page for the wiki. **Saving publishes straight to the live wiki**: the change is online 2–3 minutes later.

### First time
1. You receive an invitation email from Pages CMS. (Ask the wiki owner to invite you.)
2. Open https://app.pagescms.org, click **Continue with email** and enter the same email address. Follow the sign-in link sent to you.
3. Open the **cytron-wiki** repository.

### Edit a page
1. In the left menu, choose the section: **Products › IRIV PiControl**, **Kits & Solutions** or **Software › IRIV EdgeAI Studio**.
2. Click the page you want to change.
3. Edit the fields:
   - **Page title**: shown in the browser tab and search results. Start with the product name.
   - **Name in the left menu**: the short name in the wiki's side menu.
   - **Order in the left menu**: 1 is the top.
   - **Short description**: one sentence for search engines.
   - **Page content**: the page text in Markdown (see the cheat sheet below).
4. Click **Save**. Open the page on https://cytron-wiki.pages.dev after 2–3 minutes to check it.

### Add a picture
1. Prepare the image: **WebP or PNG, at most 1200 px wide**, and blur any passwords, emails or names.
2. Open **Media**, go into the product's folder (for example `products/iriv-picontrol`) and upload the image.
3. In the page content, add it with alt text that says what it shows:

```md
![Terminal 1 pinout](/img/products/iriv-picontrol/terminal-1-pinout.webp)
```

### What Pages CMS cannot do (ask the wiki owner)
- **Add, rename or delete pages.** A new page also needs a place in the wiki menu, and renaming breaks links people already use.
- Change the **Products**, **Kits & Solutions** and **Software** overview pages (they contain the product cards), the menus or the site settings.

### Made a mistake?
Fix it the same way and save again. Every save is kept in the wiki history, so the wiki owner can also restore an earlier version.

## Markdown Cheat Sheet

| You type | You get |
|---|---|
| `## Heading` / `### Smaller heading` | Section headings (do not skip a level) |
| `**bold**` | **bold** (use for buttons and key words) |
| `- item` | Bullet list |
| `1. step` | Numbered list |
| `[text](https://…)` | Link |
| `![what it shows](/img/…/file.webp)` | Picture |
| `` `code` `` | `code` (commands, pin names, file names) |
| (copy a table from an existing page and change the text) | Table |

Note and warning boxes:

```md
:::note
Normal note.
:::

:::warning
Wiring or settings that can harm people or equipment.
:::
```

Also `:::tip` and `:::info`. Keep `{ }` and `<` out of normal text, or put them in backticks (`` `<IP address>` ``), otherwise the page does not build.

## The Advanced Way: GitHub

Use this if you have a GitHub account and want a change reviewed before it goes live, or need to add a new page.

### Before you start (once)

1. Create a free account at [github.com](https://github.com/signup) if you do not have one. Use your Cytron email.
2. Ask the wiki owner to add you as an editor of the [wiki repository](https://github.com/KhairulTajudin13/cytron-wiki). You will get an invitation email; click **Accept**.

### Find the File for a Wiki Page

The address of a wiki page tells you where its file is. Take the part after `cytron-wiki.pages.dev/` and add `.md`:

| Wiki page address | File on GitHub |
|---|---|
| `…/docs/products/iriv-picontrol/terminal-1` | `docs/products/iriv-picontrol/terminal-1.md` |
| `…/docs/software/iriv-edgeai-studio/ai-models` | `docs/software/iriv-edgeai-studio/ai-models.md` |
| `…/docs/products/iriv-picontrol/` (ends with `/`) | `docs/products/iriv-picontrol/index.md` |
| `…/docs/kits/`, `…/docs/products/`, `…/docs/software/` | `index.mdx` in that folder |

The quickest way to open it: on the repository page, press **`t`** (Go to file), type part of the name (for example `terminal-1`) and press Enter.

### Fix or Update a Page

1. Open the file on GitHub (see above) and click the **pencil** icon (Edit this file).
2. Make your change. The text is **Markdown**:
   - `**bold**` for buttons and important words
   - `- item` for a bullet list, `1. step` for numbered steps
   - `[link text](https://…)` for a link
   - Use the **Preview** tab to see how it looks.
3. Click **Commit changes…** (top right).
4. Write a short message, for example *Fix RS485 baud rate on PiControl Troubleshooting*.
5. Choose **Create a new branch for this commit and start a pull request**, then click **Propose changes**.
6. On the next screen, fill in the short checklist and click **Create pull request**.

That's it. A reviewer is notified automatically.

### Check Your Change Before It Goes Live

- After 2–3 minutes, **Cloudflare adds a preview link** to your pull request (for example `https://your-branch.cytron-wiki.pages.dev`). Open it to see the site with your change.
- If a check shows a red cross, it usually means a broken link or a formatting error. Open the check's details, or ask the reviewer.
- To change something, open the **Files changed** tab of the pull request, click the **…** menu on the file and choose **Edit file**. Commit again to the same branch.

When the reviewer approves and merges, the live site updates in 2–3 minutes.

### Add a Picture

1. Prepare the image: **WebP or PNG, at most 1200 px wide**, and blur any passwords, emails or names.
2. On GitHub, open the image folder, for example `static/img/products/iriv-picontrol/`.
3. Click **Add file › Upload files**, drop the image in, choose **Create a new branch … and start a pull request**, and click **Propose changes**.
4. On the page, add the image with alt text that says what it shows:

```md
![Terminal 1 pinout](/img/products/iriv-picontrol/terminal-1-pinout.webp)
```

You can put the image and the page edit in the same pull request: after uploading, switch to your new branch, open the page and edit it there.

### Add a New Page

1. Copy one of the [page templates](../templates/): product page, tutorial or troubleshooting entry.
2. Open the right folder (for example `docs/products/iriv-picontrol/`), click **Add file › Create new file**, name it in lowercase with hyphens (`modbus-setup.md`) and paste the template.
3. Fill in the parts in `<...>`.
4. Ask the reviewer to add the page to the sidebar, or add it yourself in `sidebars.js`.
5. Open a pull request the same way as above.

## Customer Feedback

Customers report problems with the **"Found a mistake? Tell us"** link at the bottom of every page. It opens an email to support@cytron.io with the page title and address already filled in. Support forwards anything that needs a wiki change to the page's owner (see `.github/CODEOWNERS`).

## The Rules in Short

| Do | Don't |
|---|---|
| Take facts from the datasheet, user manual or Cytron design team, and list the source at the end of the page | Copy facts from memory or a competitor's site |
| Say "change the default password" | Publish default passwords, keys or tokens, even in screenshots |
| Blur staff emails, names and chat IDs in screenshots | Include personal data |
| Link to the product page on my.cytron.io for prices | Write prices, stock or workshop dates |
| Mark facts you could not verify | Guess |
| Keep team-only notes in this `team/` folder | Put internal processes on the public wiki |

The full rules are in [CONTRIBUTING.md](../CONTRIBUTING.md).

## Need Help?

Ask the wiki owner, or describe the change in a pull request comment and a reviewer will help you finish it.
