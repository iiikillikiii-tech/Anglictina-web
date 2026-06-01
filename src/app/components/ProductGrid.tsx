"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, FileText, Layers3, Plus, Search } from "lucide-react";
import { categoryEmptyStates, productCategories, products } from "../data";
import { useCart } from "./SiteChrome";

export function ProductGrid({ activeCategorySlug }: { activeCategorySlug?: string }) {
  const router = useRouter();
  const { addItem } = useCart();
  const selectedCategory = activeCategorySlug ?? "all";
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("default");

  const visibleProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return products
      .filter((product) => selectedCategory === "all" || product.categorySlug === selectedCategory)
      .filter((product) => {
        if (!normalizedQuery) {
          return true;
        }

        return [product.title, product.category, product.status, product.description]
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery);
      })
      .sort((a, b) => {
        if (sort === "price-asc") {
          return (a.priceCzk ?? 0) - (b.priceCzk ?? 0);
        }

        if (sort === "price-desc") {
          return (b.priceCzk ?? 0) - (a.priceCzk ?? 0);
        }

        if (sort === "name") {
          return a.title.localeCompare(b.title, "cs");
        }

        return 0;
      });
  }, [query, selectedCategory, sort]);

  const selectedEmptyState =
    selectedCategory === "all"
      ? "Vašemu výběru neodpovídají žádné produkty."
      : categoryEmptyStates[selectedCategory] ?? "Materiály pro tuto kategorii připravujeme.";

  return (
    <>
      <div className="shop-controls" aria-label="Ovládání e-shopu">
        <label className="shop-search">
          <Search aria-hidden="true" size={17} strokeWidth={2.4} />
          <span className="sr-only">Hledat produkty</span>
          <input
            type="search"
            placeholder="Hledat produkty..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>
        <label className="shop-select">
          <span>Kategorie</span>
          <select
            value={selectedCategory}
            onChange={(event) => {
              const nextCategory = event.target.value;
              router.push(nextCategory === "all" ? "/eshop" : `/eshop/${nextCategory}`);
            }}
          >
            <option value="all">Vše</option>
            {productCategories.map((category) => (
              <option value={category.slug} key={category.slug}>
                {category.label}
              </option>
            ))}
          </select>
        </label>
        <label className="shop-select">
          <span>Řazení</span>
          <select value={sort} onChange={(event) => setSort(event.target.value)}>
            <option value="default">Doporučené</option>
            <option value="price-asc">Cena od nejnižší</option>
            <option value="price-desc">Cena od nejvyšší</option>
            <option value="name">Název A-Z</option>
          </select>
        </label>
      </div>

      <div className="category-links" aria-label="Kategorie e-shopu">
        <Link
          className={selectedCategory === "all" ? "is-active" : ""}
          href="/eshop"
        >
          <Layers3 aria-hidden="true" size={16} strokeWidth={2.4} />
          Vše
        </Link>
        {productCategories.map((category) => (
          <Link
            className={selectedCategory === category.slug ? "is-active" : ""}
            href={`/eshop/${category.slug}`}
            key={category.slug}
          >
            {category.label}
          </Link>
        ))}
      </div>

      {visibleProducts.length ? (
        <div className="product-grid">
          {visibleProducts.map((product) => (
            <article key={product.slug} className={`product-card accent-${product.accent}`}>
              <Link className="product-card-link" href={`/eshop/${product.categorySlug}/${product.slug}`}>
                <div
                  className={`product-preview product-visual-${product.categorySlug}`}
                  aria-hidden="true"
                >
                  <span className="preview-badge">
                    <FileText size={15} strokeWidth={2.5} />
                    PDF
                  </span>
                </div>
                <div className="card-topline">
                  <p className="card-eyebrow">{product.category}</p>
                  <span className="card-icon" aria-hidden="true">
                    <FileText size={18} strokeWidth={2.4} />
                  </span>
                </div>
                <h3>{product.title}</h3>
                <div className="product-meta">
                  <span>{product.status}</span>
                  {product.price ? <strong>{product.price}</strong> : null}
                </div>
                <p>{product.description}</p>
                <strong className="inline-link">
                  Detail materiálu
                  <ArrowRight aria-hidden="true" size={17} strokeWidth={2.5} />
                </strong>
              </Link>
              <button
                className="button button-card"
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
                <Plus aria-hidden="true" size={17} strokeWidth={2.5} />
                Přidat do košíku
              </button>
            </article>
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <p className="eyebrow">V přípravě</p>
          <h2>{selectedEmptyState}</h2>
          <p>
            Zkuste jinou kategorii, upravit hledání nebo zobrazit všechny dostupné položky.
          </p>
          <button
            className="button button-secondary"
            type="button"
            onClick={() => {
              setQuery("");
              router.push("/eshop");
            }}
          >
            Zobrazit všechny položky
          </button>
        </div>
      )}
    </>
  );
}
