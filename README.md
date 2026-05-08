# Literature Gallery Skill

Create polished, deployable literature-management gallery websites from paper metadata.

This Codex skill turns a research topic or a list of papers into a static paper gallery with:

- paper cards with covers or teaser screenshots
- search, sort, and filters for year, venue, area, and keywords
- detail views with abstracts, notes, links, and status
- a minimalist light UI
- Vercel-ready static deployment
- a reusable frontend template bundled inside the skill

Demo built with this skill: [paperscodex.vercel.app](https://paperscodex.vercel.app)

## Why This Exists

Research notes usually end up scattered across Zotero, Notion, Markdown files, browser tabs, and half-finished spreadsheets. This skill gives Codex a repeatable workflow for making a clean public-facing literature gallery from that mess.

It is especially useful for fast-moving research areas such as:

- interactive video generation
- world models
- human-computer interaction
- XR and embodied interaction
- multimodal AI
- paper-reading lists for labs, courses, and projects

## Install

Install with Codex's skill installer:

```bash
python3 ~/.codex/skills/.system/skill-installer/scripts/install-skill-from-github.py \
  --repo YOUR_GITHUB_USERNAME/literature-gallery-skill \
  --path literature-gallery
```

Then restart Codex so it can discover the new skill.

If you cloned this repository locally, you can also copy the skill folder directly:

```bash
cp -R literature-gallery ~/.codex/skills/literature-gallery
```

## Example Prompts

```text
Use literature-gallery to create a paper gallery about interactive video generation and world models.
```

```text
Use literature-gallery to add 10 recent HCI papers to this gallery, use teaser screenshots as covers, and deploy it to Vercel.
```

```text
Use literature-gallery to turn this bibliography into a searchable static website with tags for venue, year, area, and keywords.
```

## What The Skill Provides

```text
literature-gallery/
├── SKILL.md
├── agents/
│   └── openai.yaml
├── scripts/
│   └── create_gallery.py
└── assets/
    └── frontend-template/
        ├── index.html
        ├── data/papers.js
        ├── src/app.js
        ├── src/styles.css
        ├── package.json
        └── vercel.json
```

The bundled template is plain HTML/CSS/JS. No framework lock-in, no build step, easy to deploy anywhere.

## Quick Start After Installing

Ask Codex:

```text
Use literature-gallery to create a new literature gallery in ./papers, seeded with papers about world models and HCI.
```

Codex will copy the template, populate `data/papers.js`, generate local covers when possible, validate the JavaScript, and prepare the project for Vercel.

## Repository Layout

The actual Codex skill is in [`literature-gallery/`](./literature-gallery). The repository root is only for GitHub presentation, installation instructions, and validation.

## Validation

The workflow in `.github/workflows/validate.yml` checks that the skill has the expected structure and frontmatter.

Locally:

```bash
python3 scripts/validate_skill.py literature-gallery
```

## License

MIT
