#!/usr/bin/env python3
"""Create a static literature gallery from the bundled frontend template."""

from __future__ import annotations

import argparse
from pathlib import Path
import shutil
import sys


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Copy the literature gallery template.")
    parser.add_argument("destination", help="Directory to create or update")
    parser.add_argument("--force", action="store_true", help="Overwrite existing files")
    return parser.parse_args()


def copy_template(template: Path, destination: Path, force: bool) -> None:
    if not template.is_dir():
        raise SystemExit(f"Template not found: {template}")

    destination.mkdir(parents=True, exist_ok=True)
    for src in template.rglob("*"):
        rel = src.relative_to(template)
        dest = destination / rel
        if src.is_dir():
            dest.mkdir(parents=True, exist_ok=True)
            continue
        if dest.exists() and not force:
            print(f"skip existing: {dest}")
            continue
        dest.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(src, dest)
        print(f"wrote: {dest}")


def main() -> int:
    args = parse_args()
    skill_root = Path(__file__).resolve().parents[1]
    template = skill_root / "assets" / "frontend-template"
    copy_template(template, Path(args.destination).expanduser().resolve(), args.force)
    return 0


if __name__ == "__main__":
    sys.exit(main())
