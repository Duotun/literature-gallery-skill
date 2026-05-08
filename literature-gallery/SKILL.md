---
name: literature-gallery
description: Create and maintain lightweight static literature-management gallery websites for academic papers. Use when the user wants a paper library, literature gallery, research database frontend, paper cards with covers/teasers, tags such as year/venue/area/keywords, paper detail pages, real paper cover screenshots, or Vercel-ready static deployment.
---

# Literature Gallery

## Overview

Build a static paper gallery from structured paper metadata. Prefer the bundled template in `assets/frontend-template/` unless the user already has an existing app that should be modified.

## Workflow

1. Inspect the current workspace and preserve existing user files.
2. If starting a new project, run `scripts/create_gallery.py <destination>` to copy the template.
3. Store papers in `data/papers.js` as `window.PAPER_LIBRARY`.
4. Each paper should include `id`, `title`, `authors`, `year`, `venue`, `area`, `keywords`, `cover`, `description`, `abstract`, `notes`, `links`, and `status`.
5. Use real paper visuals for covers when possible:
   - Prefer an official project teaser image when it is easy to identify and save locally.
   - Otherwise use the first page of the paper PDF, cropped to the gallery card ratio.
   - Store local cover files under `assets/covers/papers/` and point `cover` to that path.
6. Keep the frontend minimalist and light by default: clear grid, narrow borders, good whitespace, searchable filters, and a modal/detail view.
7. Validate with `npm run check` when `package.json` exists, or at least `node --check src/app.js` and `node --check data/papers.js`.
8. For deployment, use Vercel for static hosting when requested. Add or keep `vercel.json` and run `vercel --prod --yes` after the user is authenticated.

## Template

Use:

```bash
python3 /path/to/literature-gallery/scripts/create_gallery.py /path/to/new-project
```

The template is static HTML/CSS/JS and has no build step. It includes:

- `index.html`
- `src/app.js`
- `src/styles.css`
- `data/papers.js`
- `package.json`
- `vercel.json`
- placeholder SVG covers

## Cover Generation

When generating covers from PDFs on macOS, Quick Look is a reliable fallback:

```bash
qlmanage -t -s 1800 -o /tmp/out paper.pdf
```

Then crop/resize the generated PNG to `1200x900` using Pillow. Keep the top of page 1 when no teaser is clear; this usually captures title/authors and often the first figure.

Do not hotlink paper images. Save covers locally so the deployed site remains stable.

## Data Quality

For newly researched papers, browse current sources before filling metadata. Prefer official project pages, arXiv pages, conference pages, and author/repository pages. Record links in `links.paper`, `links.project`, and `links.code` where available.

Keep descriptions short for cards. Put richer summaries and reading notes in `abstract` and `notes`.
