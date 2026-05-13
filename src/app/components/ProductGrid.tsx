"use client";

import Link from "next/link";
import { productCategories, products } from "../data";
import { useCart } from "./SiteChrome";

export function ProductGrid({ activeCategorySlug }: { activeCategorySlug?: string }) {
  const { addItem } = useCart();
  const visibleProducts = activeCategorySlug
    ? products.filter((product) => product.categorySlug === activeCategorySlug)
    : products;

  return (
    <>
      <div className="category-links" aria-label="Kategorie e-shopu">
        <Link className={!activeCategorySlug ? "is-active" : ""} href="/eshop">
          Vše
        </Link>
        {productCategories.map((category) => (
          <Link
            className={activeCategorySlug === category.slug ? "is-active" : ""}
            href={`/eshop/${category.slug}`}
            key={category.slug}
          >
            {category.label}
          </Link>
        ))}
      </div>

      <div className="product-grid">
        {visibleProducts.map((product) => (
          <article key={product.slug} className={`product-card accent-${product.accent}`}>
            <div className="product-preview" aria-hidden="true">
              <span className="product-sheet">
                <span className="product-sheet-kicker">PDF</span>
                <span />
                <span />
                <span />
              </span>
            </div>
            <p className="card-eyebrow">{product.category}</p>
            <h3>{product.title}</h3>
            <span>{product.status}</span>
            <p>{product.description}</p>
            <button className="button button-card" type="button" onClick={() => addItem(product.title)}>
              Přidat do košíku
            </button>
          </article>
        ))}
      </div>
    </>
  );
}
