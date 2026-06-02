# Project Context: Anglictina s prehledem

Last updated: 2026-06-02

## Repository

GitHub:

```text
https://github.com/iiikillikiii-tech/Anglictina-web
```

Local path:

```text
C:\Users\killik\anglictina s prehledem pro brachu
```

This repository is separate from the AI Chief of Staff project. Do not put Chief of Staff files, docs, org maps, transcript automation, SharePoint provisioning, or VTT processing scripts into this repository.

## Purpose

This is the Next.js redesign/demo web for `anglictinasprehledem.cz`.

The goal is a professional, modern, multi-page presentation and simple demo e-shop for English learning services and PDF materials.

## Current State

Current app version in `package.json`: `0.7.0`

Implemented surface:

- home page
- courses/pricing page
- e-shop category pages
- product detail pages
- cart UI shared across pages
- contact page
- about page
- rules/cooperation page
- Czech content adapted from the original site
- visual redesign with modern layout, motion, icons and product/category previews

Important existing context:

```text
CHECKPOINT_CONTEXT.md
```

## Main Routes

```text
/
/kurzy
/eshop
/eshop/gramatika-cviceni
/eshop/slovicka
/eshop/maturita-cambridge
/eshop/cestovani
/eshop/business
/o-mne
/kontakt
/pravidla
```

Legacy compatibility routes also exist for original/source-site URLs.

## Stack

```text
Next.js 16.2.6
React 19.2.4
TypeScript
Tailwind CSS 4
Framer Motion
Lucide React
```

Important rule from `AGENTS.md`:

Before changing Next.js code, read the relevant local docs in:

```text
node_modules/next/dist/docs/
```

This Next.js version may have breaking changes versus older assumptions.

## Commands

Local dev:

```powershell
$env:Path = "C:\Program Files\nodejs;$env:Path"
npm run dev
```

Checks:

```powershell
& "C:\Program Files\nodejs\node.exe" .\node_modules\typescript\bin\tsc --noEmit
& "C:\Program Files\nodejs\node.exe" .\node_modules\eslint\bin\eslint.js .
$env:Path = "C:\Program Files\nodejs;$env:Path"; & "C:\Program Files\nodejs\npm.cmd" run build
```

## Deployment / Public Link

Known public demo link:

```text
https://iiikillikiii-tech.github.io/Anglictina-web/
```

## Project Boundaries

Keep this repo focused on the English learning website only.

Do not mix in:

- `ai-chief-of-staff-org-map`
- Microsoft 365 / SharePoint automation for Chief of Staff
- transcript `.vtt` processing
- org/person/initiative schemas
- Teams assignment queue logic

Those belong to:

```text
C:\Users\killik\ai-chief-of-staff-org-map
https://github.com/kyndryiiii-art/ai-chief-of-staff-org-map
```

## Useful Checkpoints

Previously saved checkpoint:

```text
checkpoint-before-switching-projects-2026-06-02
```

Use git commits/tags before larger visual redesign changes so the working version can be restored.

