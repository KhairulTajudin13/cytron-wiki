# Cytron Wiki

Technical documentation for the Cytron IRIV industrial controller series, built with [Docusaurus](https://docusaurus.io/).

**Live site:** https://cytron-wiki.pages.dev (Cloudflare Pages, deploys automatically from `main`)

## Contents

- `docs/products/` — IRIV PiControl (CM4 / CM5), IRIV IO Controller (+ IOC MQTT Gateway), IRIV SmartHub CM5, IRIV EdgeAI CM5
- `docs/kits/` — kits, solutions and training bundles built on the IRIV controllers
- `docs/software/` — software that runs on the IRIV controllers (IRIV EdgeAI Studio)
- `src/` — homepage and the shared `ProductCards` component (product and kit cards)
- `static/img/` — diagrams and product images (prefer WebP for large images)
- `sources/manuals/` — archived copies of the manuals the pages were written from. The live manuals are the Google Docs linked on each product's **Downloads** page

## Contributing

Team members edit in the browser and open a pull request: see [CONTRIBUTING.md](CONTRIBUTING.md) and the wiki page [How to Edit This Wiki](https://cytron-wiki.pages.dev/docs/contribute). Page templates are in [`templates/`](templates/).

## Editing rules

- **Facts come from Cytron sources**, in this order: datasheet / user manual > Cytron design team > my.cytron.io product page > Cytron tutorials / GitHub. If a fact only comes from a tutorial, say so on the page.
- Every product page ends with a **Source(s)** list.
- Page `title` starts with the product name (e.g. `IRIV PiControl Troubleshooting`); use `sidebar_label` for the short sidebar name.
- Don't publish prices or workshop dates — link to the product page instead.

## Run locally

```bash
npm ci
npm start        # dev server at http://localhost:3000
npm run build    # production build; fails on broken links
```
