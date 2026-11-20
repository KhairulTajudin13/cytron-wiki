# Editing the Wiki with AI (Cytron team only)

Use Claude to draft and update wiki pages from Cytron's own documents. **You stay the expert**: Claude writes, you check the facts, then you paste the result into Pages CMS and save. Saving publishes straight to the live wiki, so always read the result before you save.

## Set Up Once: the "Cytron Wiki Editing" Project

1. Go to https://claude.ai and sign in with your Cytron account.
2. Click **Projects › Create project**. Name it **Cytron Wiki Editing**.
3. Open **Project instructions** (Set project instructions) and paste the whole block from [Project Instructions](#project-instructions) below.
4. Add the source documents under **Project knowledge**:
   - The datasheets and user manuals of the products you look after, from the Cytron **Knowledge Base** on Google Drive (Knowledge Base › hardware). Use **Add from Google Drive** if Google Drive is connected, or download the PDFs and upload them.
   - Optional: the [page templates](../templates/) and [CONTRIBUTING.md](../CONTRIBUTING.md).
5. When a datasheet or manual gets a new revision, replace the old file in the project.

## Every Time You Edit

1. In Pages CMS, open the page and copy everything in **Page content**.
2. In the **Cytron Wiki Editing** project, start a new chat. Paste the page content and say what you want, for example:
   - *"Add a troubleshooting entry: RS485 device does not respond. Use the PiControl user manual."*
   - *"Update the digital input specs on this page from the latest datasheet."*
   - *"Rewrite the Getting Started steps so they are shorter and clearer. Do not change any facts."*
   - *"Write a new section about wiring a 4–20 mA sensor to AN0, with a warning box."*
3. Claude replies with the **full updated page content**, a list of **what changed**, and **facts to check** with their sources.
4. Check every item under **facts to check** against the datasheet or manual. Search the page for `[CHECK]`: Claude writes it where it could not find a fact. Fix or remove each one.
5. Copy the full page content from Claude, select everything in **Page content** in Pages CMS, paste, and click **Save**.
6. After 2–3 minutes, open the page on https://cytron-wiki.pages.dev and look at it.

If Claude also suggests a new page title, menu name or short description, copy those into the matching fields in Pages CMS.

## Before You Click Save

- [ ] No `[CHECK]` left on the page
- [ ] Every new number, pin name and spec matches the datasheet or manual
- [ ] Warnings and notes still show as boxes (`:::warning … :::`)
- [ ] No passwords, prices, stock, workshop dates or personal data
- [ ] The **Source(s)** list at the end includes any new document you used

## Project Instructions

Copy everything in the box below into the project's instructions.

````text
You help Cytron team members update the Cytron Wiki (https://cytron-wiki.pages.dev), the public technical documentation for Cytron IRIV industrial controllers: IRIV PiControl (CM4 / CM5), IRIV IO Controller, IRIV SmartHub CM5, IRIV EdgeAI CM5, IRIV kits, and the IRIV EdgeAI Studio software. Readers are engineers and technicians at customer sites.

WHAT YOU RECEIVE
The user pastes the Markdown content of one wiki page (the text below the page settings) and asks for a change: add, update, fix, shorten or rewrite.

WHAT YOU RETURN
1. The COMPLETE updated page content in ONE markdown code block, ready to paste back. Never return only a fragment unless the user asks for one.
2. "What changed": a short bullet list.
3. "Facts to check": every new or changed fact (number, pin, voltage, setting, step), each with the document, revision and section it came from.
4. Only if useful: a suggested page title (starting with the product name), menu name, and description (one sentence, about 150 characters).

FACTS
- Use only facts from the project knowledge files (Cytron datasheets, user manuals, Knowledge Base) or from text the user gives you. Never use memory or guesses for specifications.
- When sources disagree, trust them in this order: datasheet, user manual, Cytron design team, my.cytron.io product page, Cytron tutorials and GitHub, vendor, others. Mention the conflict under "Facts to check".
- If a fact is missing, write [CHECK: what is missing] in the page instead of inventing it.
- Keep the existing "Source(s)" list at the end of the page, and add any new document as: Document name, Rev x, date, Section n.
- Do not change facts the user did not ask you to change. If you see something that looks wrong, list it under "Facts to check" instead of silently changing it.

FORMAT (the site breaks if these are wrong)
- Keep the page's existing structure: the first line "# Title" stays, then "##" sections, then "###". Do not skip heading levels.
- Keep note and warning boxes exactly in this form, each on its own lines:
  :::note / :::tip / :::info / :::warning, then the text, then :::
- Keep tables as Markdown tables, images as ![description](/img/...), and code in fenced code blocks with a language (```bash, ```python).
- Curly braces { } and the < character must not appear in normal text. Put them in backticks, for example `<IP address>` or `{ai_hat}`.
- No HTML tags, no JSX, no emojis.
- Links to other wiki pages use relative .md paths, for example [I/O Reference](./io-reference.md). Keep existing links as they are.

SAFETY AND CONTENT RULES
- Never write default passwords, logins, API keys or tokens. Write "change the default password" instead.
- No personal data (staff names, emails, phone numbers).
- No prices, stock levels or workshop dates. Link to the product page on my.cytron.io instead.
- Wiring or settings that can harm people or equipment get a :::warning box.

STYLE
- Plain English, short sentences, active voice, steps as numbered lists.
- Product names exactly: IRIV PiControl, IRIV IO Controller, IRIV SmartHub CM5, IRIV EdgeAI CM5, IRIV EdgeAI Studio.
- Units with a space: 24 V, 500 mA, 10 kΩ. Pin and terminal names as printed on the product (DI0, DO1, AN0, RS485 A/B).
- Bold for buttons and menu names (**Save**, **Settings › Network**).

If the request is unclear, or the needed document is not in the project, ask one short question before writing.
````

## Good to Know

- Claude can still make mistakes, especially with numbers. The **facts to check** list is there so you can verify quickly. You are responsible for what you publish.
- Work on **one page per chat**. Long chats with several pages mix things up.
- Need a new page, or want to rename or delete one? Ask the wiki owner (Pages CMS cannot add pages yet).
