"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { navItems, productCategories } from "../data";

type CartContextValue = {
  items: string[];
  addItem: (title: string) => void;
  clearCart: () => void;
};

const CART_KEY = "anglictina-cart-v1";
const CartContext = createContext<CartContextValue | null>(null);

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside SiteChrome.");
  }

  return context;
}

export function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [items, setItems] = useState<string[]>(() => {
    if (typeof window === "undefined") {
      return [];
    }

    const saved = window.localStorage.getItem(CART_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          return parsed.filter((item) => typeof item === "string");
        }
      } catch {
        window.localStorage.removeItem(CART_KEY);
      }
    }

    return [];
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(CART_KEY, JSON.stringify(items));
    }
  }, [items]);

  const value = useMemo<CartContextValue>(
    () => ({
      items,
      addItem: (title) => setItems((current) => [...current, title]),
      clearCart: () => setItems([]),
    }),
    [items],
  );

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <CartContext.Provider value={value}>
      <div className="site-shell">
        <header className="site-nav">
          <Link className="brand" href="/" aria-label="Angličtina s přehledem domů">
            <span className="brand-mark" aria-hidden="true">
              <svg viewBox="0 0 256 256" focusable="false">
                <rect width="256" height="256" rx="72" />
                <path d="M54 155C54 106.399 93.3989 67 142 67H202V105H142C114.386 105 92 127.386 92 155C92 182.614 114.386 205 142 205H159V243H142C93.3989 243 54 203.601 54 155Z" />
                <path d="M111 41H154L214 214H171L160 178H102L91 214H49L111 41ZM112 143H149L131 85L112 143Z" />
              </svg>
            </span>
            <span className="brand-text">Angličtina s přehledem</span>
          </Link>

          <nav className="nav-links" aria-label="Hlavní navigace">
            {navItems.map((item) =>
              item.href === "/eshop" ? (
                <div className="nav-dropdown" key={item.href}>
                  <Link
                    className={`nav-link ${isActive(item.href) ? "is-active" : ""}`}
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                  <div className="nav-dropdown-menu" aria-label="Kategorie e-shopu">
                    {productCategories.map((category) => (
                      <Link key={category.slug} href={`/eshop/${category.slug}`}>
                        {category.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  className={`nav-link ${isActive(item.href) ? "is-active" : ""}`}
                  key={item.href}
                  href={item.href}
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <a className="cart-pill" href="#kosik" aria-label={`Košík: ${items.length} položek`}>
            Košík <strong>{items.length}</strong>
          </a>
        </header>

        <main className="site-main">{children}</main>

        <aside className="floating-cart" id="kosik" aria-live="polite">
          <div className="floating-cart-top">
            <span>Košík</span>
            <strong>{items.length} položek</strong>
          </div>
          {items.length ? (
            <>
              <ul>
                {items.slice(-3).map((item, index) => (
                  <li key={`${item}-${index}`}>{item}</li>
                ))}
              </ul>
              <div className="floating-cart-actions">
                <Link className="button button-small button-primary" href="/kontakt">
                  Dokončit domluvou
                </Link>
                <button className="text-button" type="button" onClick={value.clearCart}>
                  Vyprázdnit
                </button>
              </div>
            </>
          ) : (
            <p>Košík je zatím prázdný.</p>
          )}
        </aside>

        <footer className="site-footer">
          <div>
            <strong>Angličtina s přehledem</strong>
            <span>Copyright © 2026</span>
          </div>
          <nav aria-label="Patička">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
            <Link href="/pravidla">Pravidla</Link>
          </nav>
        </footer>
      </div>
    </CartContext.Provider>
  );
}
