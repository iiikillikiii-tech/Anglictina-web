"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, ShoppingBag, Sparkles, Trash2, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
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
  items: CartItem[];
  addItem: (item: CartItemInput) => void;
  removeItem: (id: string) => void;
  openCart: () => void;
  clearCart: () => void;
};

export type CartItemInput = {
  id: string;
  title: string;
  price?: string;
  priceCzk?: number;
  category?: string;
};

type CartItem = CartItemInput & {
  quantity: number;
};

const CART_KEY = "anglictina-cart-v1";
const CartContext = createContext<CartContextValue | null>(null);

const formatCzk = (value: number) =>
  new Intl.NumberFormat("cs-CZ", {
    maximumFractionDigits: 0,
    style: "currency",
    currency: "CZK",
  }).format(value);

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside SiteChrome.");
  }

  return context;
}

export function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [items, setItems] = useState<CartItem[]>(() => {
    if (typeof window === "undefined") {
      return [];
    }

    const saved = window.localStorage.getItem(CART_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          return parsed
            .map((item): CartItem | null => {
              if (typeof item === "string") {
                return {
                  id: item,
                  title: item,
                  quantity: 1,
                };
              }

              if (
                item &&
                typeof item === "object" &&
                "id" in item &&
                "title" in item &&
                typeof item.id === "string" &&
                typeof item.title === "string"
              ) {
                return {
                  id: item.id,
                  title: item.title,
                  category:
                    "category" in item && typeof item.category === "string"
                      ? item.category
                      : undefined,
                  price: "price" in item && typeof item.price === "string" ? item.price : undefined,
                  priceCzk:
                    "priceCzk" in item && typeof item.priceCzk === "number"
                      ? item.priceCzk
                      : undefined,
                  quantity:
                    "quantity" in item && typeof item.quantity === "number"
                      ? Math.max(1, item.quantity)
                      : 1,
                };
              }

              return null;
            })
            .filter((item): item is CartItem => Boolean(item));
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
      addItem: (item) => {
        setItems((current) => {
          const existing = current.find((cartItem) => cartItem.id === item.id);

          if (existing) {
            return current.map((cartItem) =>
              cartItem.id === item.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem,
            );
          }

          return [...current, { ...item, quantity: 1 }];
        });
        setIsCartOpen(true);
      },
      removeItem: (id) => {
        setItems((current) =>
          current
            .map((item) => (item.id === id ? { ...item, quantity: item.quantity - 1 } : item))
            .filter((item) => item.quantity > 0),
        );
      },
      openCart: () => setIsCartOpen(true),
      clearCart: () => setItems([]),
    }),
    [items],
  );

  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + (item.priceCzk ?? 0) * item.quantity, 0);

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

          <nav className="nav-links nav-links-desktop" aria-label="Hlavní navigace">
            {navItems.map((item) =>
              item.href === "/eshop" ? (
                <div className="nav-dropdown" key={item.href}>
                  <Link
                    className={`nav-link ${isActive(item.href) ? "is-active" : ""}`}
                    href={item.href}
                  >
                    {item.label}
                    <ChevronDown aria-hidden="true" size={15} strokeWidth={2.4} />
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

          <div className="nav-actions">
            <button
              className="cart-pill"
              type="button"
              aria-label={`Otevřít košík: ${cartCount} položek`}
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingBag aria-hidden="true" size={17} strokeWidth={2.4} />
              <span>Košík</span>
              <strong>{cartCount}</strong>
            </button>
            <button
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Zavřít menu" : "Otevřít menu"}
              className="menu-toggle"
              type="button"
              onClick={() => setIsMenuOpen((current) => !current)}
            >
              {isMenuOpen ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
            </button>
          </div>

          <AnimatePresence>
            {isMenuOpen ? (
              <motion.nav
                animate={{ opacity: 1, y: 0 }}
                aria-label="Mobilní navigace"
                className="mobile-menu"
                exit={{ opacity: 0, y: -8 }}
                initial={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.18 }}
              >
                {navItems.map((item) => (
                  <div className="mobile-menu-group" key={item.href}>
                    <Link
                      className={`mobile-menu-link ${isActive(item.href) ? "is-active" : ""}`}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                    {item.href === "/eshop" ? (
                      <div className="mobile-submenu">
                        {productCategories.map((category) => (
                          <Link
                            href={`/eshop/${category.slug}`}
                            key={category.slug}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {category.label}
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </div>
                ))}
              </motion.nav>
            ) : null}
          </AnimatePresence>
        </header>

        <div className="site-announcement">
          <Sparkles aria-hidden="true" size={16} />
          <span>Online lekce, PDF materiály a přehledný plán učení bez zbytečné teorie.</span>
        </div>

        <nav className="shop-shortcuts" aria-label="Rychlé odkazy e-shopu">
          <Link href="/eshop">E-shop</Link>
          {productCategories.map((category) => (
            <Link key={category.slug} href={`/eshop/${category.slug}`}>
              {category.label}
            </Link>
          ))}
        </nav>

        <main className="site-main">{children}</main>

        <AnimatePresence>
          {isCartOpen ? (
            <motion.aside
              animate={{ opacity: 1, x: 0 }}
              className="floating-cart"
              id="kosik"
              initial={{ opacity: 0, x: 28 }}
              exit={{ opacity: 0, x: 28 }}
              transition={{ duration: 0.24, ease: "easeOut" }}
              aria-live="polite"
              role="dialog"
            >
                <div className="floating-cart-top">
                  <span>
                    <ShoppingBag aria-hidden="true" size={16} />
                    Košík
                  </span>
                  <button
                    aria-label="Zavřít košík"
                    className="icon-button"
                    type="button"
                    onClick={() => setIsCartOpen(false)}
                  >
                    <X aria-hidden="true" size={18} />
                  </button>
                </div>
                <strong className="cart-count-line">{cartCount} položek</strong>
                {items.length ? (
                  <>
                    <ul>
                      {items.map((item) => (
                        <li key={item.id}>
                          <div>
                            <strong>{item.title}</strong>
                            <span>
                              {item.quantity}x
                              {item.price ? ` · ${item.price}` : ""}
                            </span>
                          </div>
                          <button
                            aria-label={`Odebrat ${item.title}`}
                            className="icon-button"
                            type="button"
                            onClick={() => value.removeItem(item.id)}
                          >
                            <Trash2 aria-hidden="true" size={15} strokeWidth={2.4} />
                          </button>
                        </li>
                      ))}
                    </ul>
                    <div className="cart-summary">
                      <span>Mezisoučet</span>
                      <strong>{subtotal ? formatCzk(subtotal) : "Domluvou"}</strong>
                    </div>
                    <div className="floating-cart-actions">
                      <Link
                        className="button button-small button-primary"
                        href="/kontakt"
                        onClick={() => setIsCartOpen(false)}
                      >
                        Dokončit domluvou
                      </Link>
                      <button className="text-button" type="button" onClick={value.clearCart}>
                        <Trash2 aria-hidden="true" size={15} strokeWidth={2.4} />
                        Vyprázdnit
                      </button>
                    </div>
                  </>
                ) : (
                  <p>Košík je zatím prázdný. Přidejte kurz nebo e-shop materiál.</p>
                )}
            </motion.aside>
          ) : null}
        </AnimatePresence>

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
