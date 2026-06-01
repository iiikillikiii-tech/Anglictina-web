"use client";

import { Plus, ShoppingBag } from "lucide-react";
import type { Product } from "../data";
import { useCart } from "./SiteChrome";

export function ProductPurchase({ product }: { product: Product }) {
  const { addItem, openCart } = useCart();

  return (
    <div className="purchase-panel">
      <div>
        <p className="eyebrow">Cena</p>
        <strong>{product.price ?? "Cena bude doplněna"}</strong>
      </div>
      <button
        className="button button-primary"
        type="button"
        onClick={() =>
          addItem({
            id: `product-${product.slug}`,
            title: product.title,
            category: product.category,
            price: product.price,
            priceCzk: product.priceCzk,
          })
        }
      >
        <Plus aria-hidden="true" size={18} strokeWidth={2.5} />
        Přidat do košíku
      </button>
      <button className="button button-secondary" type="button" onClick={openCart}>
        <ShoppingBag aria-hidden="true" size={18} strokeWidth={2.4} />
        Zobrazit košík
      </button>
    </div>
  );
}
