---
title: "How to Edit This Wiki"
description: "Step-by-step guide for Cytron team members to fix or add pages on the Cytron Wiki from a web browser, with review and preview before changes go live."
---

# How to Edit This Wiki

Cytron team members can fix and add pages straight from a web browser. You do not need to install anything or know Git. Every change is **reviewed and previewed before it goes live**, so you cannot break the site by mistake.

## Before You Start (once)

1. Create a free account at [github.com](https://github.com/signup) if you do not have one. Use your Cytron email.
2. Ask the wiki owner to add you as an editor of the [wiki repository](https://github.com/KhairulTajudin13/cytron-wiki). You will get an invitation email; click **Accept**.

## Fix or Update a Page

1. Open the page on the wiki and scroll to the bottom. Click **Edit this page**.
2. Sign in to GitHub if asked. The page opens in GitHub's editor.
3. Make your change. The text is **Markdown**:
   - `**bold**` for buttons and important words
   - `- item` for a bullet list, `1. step` for numbered steps
   - `[link text](https://…)` for a link
   - Use the **Preview** tab to see how it looks.
4. Click **Commit changes…** (top right).
5. Write a short message, for example *Fix RS485 baud rate on PiControl Troubleshooting*.
6. Choose **Create a new branch for this commit and start a pull request**, then click **Propose changes**.
7. On the next screen, fill in the short checklist and click **Create pull request**.

That's it. A reviewer is notified automatically.

## Check Your Change Before It Goes Live

- After 2–3 minutes, **Cloudflare adds a preview link** to your pull request. Open it to see the site with your change.
- A **Build** check also runs. A red cross usually means a broken link or a formatting error. Open the check's details, or ask the reviewer.
- If you need to change something, open the **Files changed** tab of the pull request, click the **…** menu on the file and choose **Edit file**. Commit again to the same branch.

When the reviewer approves and merges, the live site updates in 2–3 minutes.

## Add a Picture

1. Prepare the image: **WebP or PNG, at most 1200 px wide**, and blur any passwords, emails or names.
2. On GitHub, open the product's image folder, for example `static/img/products/iriv-picontrol/`.
3. Click **Add file › Upload files**, drop the image in, choose **Create a new branch … and start a pull request**, and click **Propose changes**.
4. On the page, add the image with alt text that says what it shows:

```md
![Terminal 1 pinout](/img/products/iriv-picontrol/terminal-1-pinout.webp)
```

You can put the image and the page edit in the same pull request: after uploading, open the page from your new branch and edit it there.

## Add a New Page

1. Copy one of the [page templates](https://github.com/KhairulTajudin13/cytron-wiki/tree/main/templates): product page, tutorial or troubleshooting entry.
2. On GitHub, open the right folder (for example `docs/products/iriv-picontrol/`), click **Add file › Create new file**, name it in lowercase with hyphens (`modbus-setup.md`) and paste the template.
3. Fill in the parts in `<...>`.
4. Ask the reviewer to add the page to the sidebar, or add it yourself in `sidebars.js`.
5. Open a pull request the same way as above.

## The Rules in Short

| Do | Don't |
|---|---|
| Take facts from the datasheet, user manual or Cytron design team, and list the source at the end of the page | Copy facts from memory or a competitor's site |
| Say "change the default password" | Publish default passwords, keys or tokens, even in screenshots |
| Blur staff emails, names and chat IDs in screenshots | Include personal data |
| Link to the product page on my.cytron.io for prices | Write prices, stock or workshop dates |
| Mark facts you could not verify | Guess |

The full rules are in [CONTRIBUTING.md](https://github.com/KhairulTajudin13/cytron-wiki/blob/main/CONTRIBUTING.md).

## Need Help?

Ask the wiki owner, or describe the change in a pull request comment and a reviewer will help you finish it. For product questions, contact [support@cytron.io](mailto:support@cytron.io).
