# Contributing to the Cytron Wiki

Thank you for helping keep the wiki correct. Every change goes through a **pull request** and needs **one approval** before it goes live on https://cytron-wiki.pages.dev.

This is for the **Cytron team**. A step-by-step guide with no Git knowledge needed is in [`team/how-to-edit.md`](team/how-to-edit.md). The public wiki is for customers and does not show editing instructions; customers report mistakes with the **"Found a mistake? Tell us"** link on every page, which emails support@cytron.io.

## The quick way: edit in the browser

1. Find the page's file on GitHub: the wiki address `/docs/products/iriv-picontrol/terminal-1` is the file `docs/products/iriv-picontrol/terminal-1.md` (press `t` on the repo page to search). Click the **pencil** icon.
2. Make your change in GitHub's editor.
3. Click **Commit changes…**. Write a short message, choose **Create a new branch … and start a pull request**, then click **Propose changes** and **Create pull request**.
4. Cloudflare posts a **preview link** on the pull request after a couple of minutes. Check your page there.
5. A reviewer approves and merges it. The live site updates 2–3 minutes later.

To add a new page or image, use **Add file › Create new file** or **Upload files** in the right folder on GitHub (see *Where things go* below), then open a pull request the same way.

## Rules for content

### Facts
- **Facts come from Cytron sources**, in this order: datasheet / user manual > Cytron design team > my.cytron.io product page > Cytron tutorials / GitHub > vendor > third party.
- If a fact only comes from a tutorial, or is not verified, **say so on the page**.
- Every page ends with a **Source(s)** list (document name, revision and section where possible).
- **No prices, stock or workshop dates.** Link to the product page on my.cytron.io instead.

### Safety and privacy
- **Never publish default passwords, logins, keys or tokens**, in text or in screenshots. Write "change the default password" instead.
- **Blur personal data** in screenshots: staff emails, names, phone numbers, chat IDs. Private IP addresses (192.168.x.x, 10.x.x.x) are fine.
- Wiring that can harm people or equipment gets a `:::warning` box.

### Page format
Every page starts with front matter:

```yaml
---
title: "IRIV PiControl Troubleshooting"    # starts with the product or software name
sidebar_label: "Troubleshooting"           # short name for the sidebar
sidebar_position: 8                        # order in the sidebar
description: "One sentence, about 150 characters, saying what the page covers."
---
```

- One `# Heading` per page (the page title), then `##`, then `###`. Do not skip levels.
- Use the templates in [`templates/`](templates/): product page, tutorial and troubleshooting.
- Notes and warnings use admonitions: `:::note`, `:::tip`, `:::info`, `:::warning`, each closed with `:::`.
- Links between wiki pages use relative `.md` paths, e.g. `[I/O Reference](./io-reference.md)`.
- `{` `}` and `<` in normal text break the build. Put them in backticks: `` `{ai_hat}` ``, `` `<IP address>` ``.

### Images
- Use **WebP** (or PNG for small diagrams), **at most 1200 px wide**, and ideally under 300 KB each.
- File names in lowercase with hyphens: `terminal-1-pinout.webp`.
- Every image needs alt text that says what it shows: `![Terminal 1 pinout](/img/products/iriv-picontrol/terminal-1-pinout.webp)`.

## Where things go

| What | Folder |
|---|---|
| Product pages | `docs/products/<product>/` |
| Kits and solutions | `docs/kits/` |
| Software (e.g. IRIV EdgeAI Studio) | `docs/software/<software>/` |
| Images | `static/img/products/<product>/` or `static/img/software/<software>/` |
| Sidebar order and new pages | `sidebars.js` (a new page must be added here to appear in the sidebar) |
| Homepage cards | `src/components/ProductCards/index.js` |
| Moved pages (old URL to new URL) | `static/_redirects` |
| Team-only guides and notes (not published) | `team/` |
| "Found a mistake? Tell us" link under every page | `src/theme/DocItem/Footer/` |

## Before you open a pull request

- [ ] Facts checked against a Cytron source, and the source listed
- [ ] No passwords, keys or personal data in text or screenshots
- [ ] Title, sidebar_label and description set
- [ ] Images are WebP/PNG, at most 1200 px wide, with alt text
- [ ] The Cloudflare preview looks right

## For reviewers

- Check facts against the Knowledge Base, not memory.
- Open the Cloudflare preview link and look at the changed page.
- Wait for the **Build** check to pass before merging. It fails on broken links.
- If a page moves, add the old URL to `static/_redirects` so existing links keep working.

## Working on your own computer (optional)

```bash
git clone https://github.com/KhairulTajudin13/cytron-wiki.git
cd cytron-wiki
npm ci
npm start        # live preview at http://localhost:3000
npm run build    # the same check the pull request runs
```

Create a branch, commit, push and open a pull request. Do not push straight to `main`.
