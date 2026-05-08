#!/usr/bin/env python3
"""Small dependency-free validator for the literature-gallery skill package."""

from __future__ import annotations

from pathlib import Path
import re
import sys


REQUIRED_FILES = [
    "SKILL.md",
    "agents/openai.yaml",
    "scripts/create_gallery.py",
    "assets/frontend-template/index.html",
    "assets/frontend-template/src/app.js",
    "assets/frontend-template/src/styles.css",
    "assets/frontend-template/data/papers.js",
]


def parse_frontmatter(text: str) -> dict[str, str]:
    if not text.startswith("---\n"):
        raise ValueError("SKILL.md must start with YAML frontmatter")
    end = text.find("\n---\n", 4)
    if end == -1:
        raise ValueError("SKILL.md frontmatter must be closed with ---")
    frontmatter = text[4:end]
    fields: dict[str, str] = {}
    for line in frontmatter.splitlines():
        if not line.strip():
            continue
        if ":" not in line:
            raise ValueError(f"Invalid frontmatter line: {line}")
        key, value = line.split(":", 1)
        fields[key.strip()] = value.strip()
    return fields


def validate(skill_dir: Path) -> None:
    if not skill_dir.is_dir():
        raise ValueError(f"Skill directory not found: {skill_dir}")

    for rel in REQUIRED_FILES:
        path = skill_dir / rel
        if not path.is_file():
            raise ValueError(f"Missing required file: {rel}")

    skill_md = (skill_dir / "SKILL.md").read_text(encoding="utf-8")
    fields = parse_frontmatter(skill_md)
    name = fields.get("name", "")
    description = fields.get("description", "")
    if name != "literature-gallery":
        raise ValueError("Skill name must be literature-gallery")
    if not re.fullmatch(r"[a-z0-9-]{1,63}", name):
        raise ValueError("Skill name must use lowercase letters, digits, and hyphens")
    if len(description) < 80:
        raise ValueError("Description should clearly explain triggers and use cases")


def main() -> int:
    skill_dir = Path(sys.argv[1] if len(sys.argv) > 1 else "literature-gallery")
    try:
        validate(skill_dir)
    except ValueError as exc:
        print(f"invalid: {exc}", file=sys.stderr)
        return 1
    print("Skill package is valid.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
