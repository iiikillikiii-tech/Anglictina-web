# Checkpoint Context

Checkpoint name: working e-shop/cart before visual polish.

Local URL:
- http://localhost:3000/
- http://localhost:3000/store

Current state:
- `/store` and `/eshop` render the e-shop with products, filters, search, sorting and product detail pages.
- Legacy URLs are supported: `/store`, `/contact-us`, `/about`, `/produkt/...`, `/kategoria-produktu/...`.
- Cart opens from product buttons, tracks quantity and subtotal, and can send the user to contact.
- Contact form includes a dropdown for what the visitor needs and includes cart context in the prepared email.
- Critical shop/contact content is no longer hidden behind reveal animations before hydration.
- Navigation dropdown is layered above the cart panel so it stays clickable.
- Dev config allows `127.0.0.1` as a dev origin.

Verified before checkpoint:
- `npm run lint`
- `npm run build`
- `http://localhost:3000/store` returns 200 and contains shop controls.
