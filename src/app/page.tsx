"use client";

import { useMemo, useState } from "react";

type Course = {
  title: string;
  eyebrow: string;
  hours: string;
  price: string;
  description: string;
  features: string[];
  accent: string;
};

type Product = {
  title: string;
  category: string;
  status: string;
  description: string;
  accent: string;
};

const navItems = [
  { label: "Domů", href: "#domu" },
  { label: "Kurzy", href: "#kurzy" },
  { label: "E-shop", href: "#eshop" },
  { label: "O mně", href: "#omne" },
  { label: "Kontakt", href: "#kontakt" },
];

const courseFeatures = [
  "online výuka přes Skype",
  "digitální materiály v PDF",
  "nahrávání hodin podle domluvy",
  "slovíčka a poznámky po každé lekci",
  "postup, jak se učit angličtinu efektivně",
];

const courses: Course[] = [
  {
    title: "3x týdně",
    eyebrow: "Nejintenzivnější balíček",
    hours: "36 hodin / 3 měsíce",
    price: "18 000 Kč / 710 €",
    description:
      "Tři online hodiny týdně pro studenty, kteří chtějí udělat rychlý a pravidelný posun.",
    features: [
      ...courseFeatures,
      "konverzace po telefonu 2-3x týdně",
      "fráze ze seriálu Přátelé",
    ],
    accent: "coral",
  },
  {
    title: "2x týdně",
    eyebrow: "Pravidelný režim",
    hours: "24 hodin / 3 měsíce",
    price: "12 000 Kč / 473 €",
    description:
      "Dvě lekce týdně z pohodlí domova, ideální pro stabilní zlepšení bez dojíždění.",
    features: [
      ...courseFeatures,
      "knížky v angličtině podle úrovně",
      "fráze ze seriálu Přátelé",
    ],
    accent: "mint",
  },
  {
    title: "Malý balíček",
    eyebrow: "Krátký start",
    hours: "8 hodin",
    price: "4 000 Kč / 165 €",
    description:
      "Rychlý vstup do výuky, nastavení směru a první praktické materiály pro samostatné učení.",
    features: [
      "online lekce",
      "materiály v PDF",
      "knížky podle úrovně",
      "poznámky s chybami a novými slovíčky",
    ],
    accent: "violet",
  },
  {
    title: "Střední balíček",
    eyebrow: "Vyvážená varianta",
    hours: "12 hodin",
    price: "6 000 Kč / 247 €",
    description:
      "Dost prostoru na gramatiku, slovní zásobu i mluvení bez velkého závazku.",
    features: [
      "online lekce",
      "slovíčka na mobil",
      "materiály v PDF",
      "návod, jak se učit efektivně",
    ],
    accent: "amber",
  },
  {
    title: "Velký balíček",
    eyebrow: "Kompletní blok",
    hours: "24 hodin",
    price: "12 000 Kč / 494 €",
    description:
      "Dlouhodobější spolupráce s jasným plánem, pravidelnou zpětnou vazbou a konverzací.",
    features: [
      ...courseFeatures,
      "konverzace po telefonu 2-3x týdně",
      "fráze ze seriálu Přátelé",
    ],
    accent: "blue",
  },
];

const products: Product[] = [
  {
    title: "Gramatika a cvičení",
    category: "Gramatika/Cvičení",
    status: "Materiály pro procvičování",
    description:
      "Přehledná cvičení pro začátečníky i pokročilé, zaměřená na praktické používání gramatiky.",
    accent: "violet",
  },
  {
    title: "Slovíčka",
    category: "Slovíčka",
    status: "Slovní zásoba",
    description:
      "Tematická slovíčka, fráze a opakovací podklady pro rychlejší zapamatování.",
    accent: "mint",
  },
  {
    title: "Maturita a Cambridge",
    category: "Maturita&Cambridge",
    status: "Příprava ke zkouškám",
    description:
      "Podklady pro studenty, kteří se připravují na maturitu nebo cambridgeské zkoušky.",
    accent: "coral",
  },
  {
    title: "Cestování",
    category: "Cestování",
    status: "V přípravě",
    description:
      "Praktické fráze a situace pro letiště, hotel, restauraci, dopravu a běžnou komunikaci.",
    accent: "amber",
  },
  {
    title: "Business angličtina",
    category: "Business",
    status: "V přípravě",
    description:
      "Slovní zásoba a modelové situace pro meetingy, e-maily, prezentace a pracovní hovory.",
    accent: "blue",
  },
];

const categoryFilters = ["Vše", ...Array.from(new Set(products.map((item) => item.category)))];

const reviews = [
  {
    name: "Student kurzu",
    text: "Lekce mají jasný řád, materiály chodí včas a po každé hodině vím, na čem pracovat dál.",
  },
  {
    name: "Online výuka",
    text: "Nejvíc mi vyhovuje, že nemusím nikam jezdit a můžu se učit z domova ve vlastním tempu.",
  },
  {
    name: "Konverzace",
    text: "Výuka je přirozená, hodně se mluví a gramatika se vysvětluje na konkrétních příkladech.",
  },
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("Vše");
  const [cart, setCart] = useState<string[]>([]);

  const visibleProducts = useMemo(() => {
    if (selectedCategory === "Vše") return products;
    return products.filter((product) => product.category === selectedCategory);
  }, [selectedCategory]);

  const addToCart = (title: string) => {
    setCart((current) => [...current, title]);
  };

  return (
    <main className="site-shell">
      <header className="site-nav">
        <a className="brand" href="#domu" aria-label="Angličtina s přehledem domů">
          <span className="brand-mark">A</span>
          <span>Angličtina s přehledem</span>
        </a>
        <nav className="nav-links" aria-label="Hlavní navigace">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="cart-pill" href="#kosik">
          Košík <strong>{cart.length}</strong>
        </a>
      </header>

      <section className="hero" id="domu">
        <div className="hero-content">
          <p className="eyebrow">Online výuka z pohodlí domova</p>
          <h1>Angličtina s přehledem</h1>
          <p className="hero-copy">
            Kurzy, materiály a individuální výuka pro studenty, kteří chtějí mluvit
            přirozeněji, učit se efektivně a mít jasný plán bez zbytečného biflování.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#kurzy">
              Vybrat kurz
            </a>
            <a className="button button-secondary" href="#kontakt">
              Domluvit lekci
            </a>
          </div>
        </div>
      </section>

      <section className="section intro-band" aria-label="Přehled služby">
        <div className="section-heading">
          <p className="eyebrow">Jak vám pomůžu?</p>
          <h2>Výuka, kurzy a materiály na jednom místě.</h2>
        </div>
        <div className="help-grid">
          <article className="help-card accent-mint">
            <span>01</span>
            <h3>Výuka přes Skype</h3>
            <p>
              Stačí mobil, tablet nebo počítač. Materiály dostanete digitálně před výukou.
            </p>
          </article>
          <article className="help-card accent-violet">
            <span>02</span>
            <h3>Kurzy pro angličtinu</h3>
            <p>
              Vyberete si balíček podle počtu hodin a tempa, které vám sedí.
            </p>
          </article>
          <article className="help-card accent-amber">
            <span>03</span>
            <h3>E-shop materiálů</h3>
            <p>
              Gramatika, slovíčka, příprava na zkoušky, cestování i business angličtina.
            </p>
          </article>
        </div>
      </section>

      <section className="section courses-section" id="kurzy">
        <div className="section-heading section-heading-wide">
          <p className="eyebrow">Limitovaná akce</p>
          <h2>Balíčky kurzů pro pravidelné zlepšení angličtiny.</h2>
          <p>
            Všechno probíhá online z pohodlí domova. Lekce se domlouvají individuálně
            podle času a cíle studenta.
          </p>
        </div>
        <div className="course-grid">
          {courses.map((course) => (
            <article key={course.title} className={`course-card accent-${course.accent}`}>
              <div>
                <p className="card-eyebrow">{course.eyebrow}</p>
                <h3>{course.title}</h3>
                <p>{course.description}</p>
              </div>
              <div className="course-meta">
                <span>{course.hours}</span>
                <strong>{course.price}</strong>
              </div>
              <ul>
                {course.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <button className="button button-card" type="button" onClick={() => addToCart(course.title)}>
                Přidat do košíku
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="section benefits-section">
        <div className="image-panel image-panel-study" aria-label="Online studium angličtiny" />
        <div className="benefits-copy">
          <p className="eyebrow">Výhody online výuky</p>
          <h2>Bez dojíždění, s jasným plánem a materiály po ruce.</h2>
          <div className="benefit-list">
            <div>
              <strong>Žádné dojíždění</strong>
              <p>Učíte se odkudkoliv, kde máte internet a klid na lekci.</p>
            </div>
            <div>
              <strong>Flexibilita obou stran</strong>
              <p>Termíny lekcí se nastavují podle domluvy a aktuálních možností.</p>
            </div>
            <div>
              <strong>Zkušební lekce</strong>
              <p>První krátké setkání pomůže nastavit cíle a vhodnou úroveň.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section shop-section" id="eshop">
        <div className="section-heading section-heading-wide">
          <p className="eyebrow">E-shop pro angličtinu</p>
          <h2>Podklady pro gramatiku, slovíčka, zkoušky i praktické fráze.</h2>
          <p>
            Materiály jsou rozdělené podle témat, aby šlo rychle najít přesně to,
            co student zrovna potřebuje procvičit.
          </p>
        </div>
        <div className="category-bar" aria-label="Filtr kategorií">
          {categoryFilters.map((category) => (
            <button
              key={category}
              className={selectedCategory === category ? "is-active" : ""}
              type="button"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="product-grid">
          {visibleProducts.map((product) => (
            <article key={product.title} className={`product-card accent-${product.accent}`}>
              <p className="card-eyebrow">{product.category}</p>
              <h3>{product.title}</h3>
              <span>{product.status}</span>
              <p>{product.description}</p>
              <button className="button button-card" type="button" onClick={() => addToCart(product.title)}>
                Přidat do košíku
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="section rules-section">
        <div className="section-heading">
          <p className="eyebrow">Pravidla spolupráce</p>
          <h2>Jednoduché podmínky, aby výuka fungovala.</h2>
        </div>
        <div className="rule-grid">
          <article>
            <span>1</span>
            <h3>Hodiny čerpat průběžně</h3>
            <p>Výukové hodiny je nejlepší vyčerpat v daném měsíci. Nemoc se řeší individuálně.</p>
          </article>
          <article>
            <span>2</span>
            <h3>Ukončení výuky</h3>
            <p>Při předčasném ukončení se uhrazené prostředky nevrací.</p>
          </article>
          <article>
            <span>3</span>
            <h3>Zrušení lekce</h3>
            <p>Lekci je potřeba zrušit alespoň 24 hodin předem, jinak propadá.</p>
          </article>
        </div>
      </section>

      <section className="section reviews-section">
        <div className="section-heading section-heading-wide">
          <p className="eyebrow">Recenze</p>
          <h2>Výuka má být praktická, přirozená a použitelná.</h2>
        </div>
        <div className="review-grid">
          {reviews.map((review) => (
            <figure key={review.name} className="review-card">
              <blockquote>{review.text}</blockquote>
              <figcaption>{review.name}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="section about-section" id="omne">
        <div className="about-copy">
          <p className="eyebrow">O mně</p>
          <h2>Jsem Filip a angličtinu učím tak, aby dávala smysl v praxi.</h2>
          <p>
            Angličtině se věnuji dlouhodobě a učím studenty různých věkových kategorií.
            Vycházím z osobní zkušenosti: školní výuka mi dlouho neseděla, proto jsem si
            hledal vlastní cestu přes reálnou angličtinu, jazykové kurzy a soukromou online výuku.
          </p>
          <p>
            Lekce vedu individuálně. Cílem není biflovat poučky, ale najít způsob, jak jazyk
            přirozeně vstřebat a používat ho v běžných situacích.
          </p>
        </div>
        <div className="image-panel image-panel-teacher" aria-label="Lektor angličtiny a online lekce" />
      </section>

      <section className="section contact-section" id="kontakt">
        <div className="contact-card">
          <p className="eyebrow">Kontakt</p>
          <h2>Domluvte si kurz nebo zkušební lekci.</h2>
          <div className="contact-actions">
            <a className="button button-primary" href="tel:+420602515652">
              +420 602 515 652
            </a>
            <a className="button button-secondary" href="mailto:filip.trubelik@seznam.cz">
              filip.trubelik@seznam.cz
            </a>
          </div>
          <address>
            Filip Trubelík<br />
            Naskové 1318/1g<br />
            15000 Praha-Košíře<br />
            IČO: 09550321
          </address>
        </div>
      </section>

      <aside className="cart-summary" id="kosik" aria-live="polite">
        <div>
          <span>Košík</span>
          <strong>{cart.length} položek</strong>
        </div>
        {cart.length ? (
          <ul>
            {cart.slice(-3).map((item, index) => (
              <li key={`${item}-${index}`}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>Košík je zatím prázdný.</p>
        )}
        <a className="button button-card" href="#kontakt">
          Dokončit domluvou
        </a>
      </aside>

      <footer className="site-footer">
        <span>Copyright © 2026 Angličtina s přehledem</span>
        <div>
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
      </footer>
    </main>
  );
}
