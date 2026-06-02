# Project Context: Anglictina s prehledem

Saved on: 2026-06-02

Repository:
- `https://github.com/iiikillikiii-tech/Anglictina-web.git`
- Current branch: `main`
- Latest saved commit: `beb7d7a Polish homepage with professional UI patterns`

Public URLs:
- Website: `https://iiikillikiii-tech.github.io/Anglictina-web/`
- E-shop: `https://iiikillikiii-tech.github.io/Anglictina-web/store/`

Local URLs:
- `http://localhost:3000/`
- `http://localhost:3000/store`

Current product state:
- Homepage has an AuthKit-inspired dark professional layout.
- Additional polish was inspired by `nextlevelbuilder/ui-ux-pro-max-skill`.
- Hero contains chip row, command/status block, six stat cards and a glass learning-console preview.
- Homepage includes a three-step bento process section: goal diagnosis, regular rhythm and visible progress.
- Main homepage links use bento-style cards with lucide icons.
- `/store` and `/eshop` render the e-shop with products, category filters, search, sorting and product detail pages.
- Legacy URLs are supported: `/store`, `/contact-us`, `/about`, `/produkt/...`, `/kategoria-produktu/...`.
- Cart opens from product buttons, tracks quantity and subtotal, supports removal/clear, and can route to contact.
- Contact form includes a dropdown for what the visitor needs and includes cart context in the prepared email.
- Critical shop/contact content is not hidden behind reveal animations before hydration.
- Navigation dropdown is layered above the cart panel so it stays clickable.
- Static GitHub Pages export works with `GITHUB_PAGES=true`.
- `next.config.ts` sets `basePath: "/Anglictina-web"` for GitHub Pages export and allows `127.0.0.1` as a dev origin.

Verified most recently:
- `npm run lint`
- `npm run build`
- `GITHUB_PAGES=true npm run build`
- GitHub Pages deploy passed.
- Public homepage returns `200` and contains the professional hero/process sections.
- Public e-shop returns `200` and contains shop controls/products.

Important rollback points:
- `checkpoint-working-eshop-cart`: stable e-shop/cart version before visual redesign.
- Latest visual version before switching projects: `beb7d7a`.

Ignored/unrelated local folders:
- `ai-chief-of-staff-org-map/`
- `pptx-media-v4/`
- `pptx-preview/`

Notes for resuming:
- Keep `ai-chief-of-staff-org-map/` separate; it is another project.
- Before major future design changes, create a branch or tag from current `main`.
- If GitHub Pages deploy fails from a non-main branch, merge or push to `main`; Pages environment currently allows deployment from `main`.
