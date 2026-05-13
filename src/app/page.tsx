import Link from "next/link";
import { CourseCards } from "./components/CourseCards";
import { productCategories, reviews } from "./data";

export default function Home() {
  return (
    <>
      <section className="page-hero home-hero">
        <div className="hero-copy">
          <p className="hello-line">Ahoj přátelé</p>
          <h1>Jsem Filip. Pomáhám studentům konečně rozumět angličtině.</h1>
          <p>
            Online lekce, PDF materiály a jasný systém pro studenty, kteří chtějí
            mluvit přirozeněji, připravit se na zkoušky nebo si udělat pořádek v
            gramatice.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/kurzy">
              Vybrat kurz
            </Link>
            <Link className="button button-secondary" href="/kontakt">
              Domluvit lekci
            </Link>
          </div>
          <div className="featured-row" aria-label="Co je součástí výuky">
            <span>Součástí výuky:</span>
            <strong>Skype</strong>
            <strong>PDF</strong>
            <strong>Slovíčka</strong>
            <strong>Poznámky</strong>
          </div>
        </div>

        <aside className="subscribe-panel" aria-label="Domluva výuky">
          <div className="subscribe-image" />
          <div className="subscribe-copy">
            <p className="panel-kicker">Domluvit výuku</p>
            <h2>Začněte krátkou zprávou.</h2>
            <p>
              Napište, s čím potřebujete pomoct. Společně vybereme balíček,
              úroveň a nejbližší vhodný termín.
            </p>
            <Link className="button button-primary" href="/kontakt">
              Přejít na kontakt
            </Link>
            <div className="mini-proof">
              <strong>3 kroky</strong>
              <span>cíl, úroveň, vhodný kurz</span>
            </div>
          </div>
        </aside>
      </section>

      <section className="section help-section">
        <div className="ali-heading">
          <p className="eyebrow">Jak vám můžu pomoct?</p>
          <h2>
            <span>Vyberte si</span>
            <span>správnou cestu.</span>
          </h2>
        </div>
        <div className="link-grid">
          <Link className="feature-link" href="/kurzy">
            <span>01</span>
            <h3>Online kurzy</h3>
            <p>Balíčky podle tempa studenta, včetně PDF materiálů a poznámek po lekci.</p>
            <strong>Vybrat kurz</strong>
          </Link>
          <Link className="feature-link" href="/eshop">
            <span>02</span>
            <h3>E-shop materiálů</h3>
            <p>Gramatika, slovíčka, zkoušky, cestování i business angličtina podle kategorií.</p>
            <strong>Prohlédnout materiály</strong>
          </Link>
          <Link className="feature-link" href="/o-mne">
            <span>03</span>
            <h3>Individuální přístup</h3>
            <p>Výuka stojí na srozumitelném vysvětlení, praxi a cílech konkrétního studenta.</p>
            <strong>O výuce</strong>
          </Link>
          <Link className="feature-link" href="/kontakt">
            <span>04</span>
            <h3>Domluva lekce</h3>
            <p>Krátké sladění cíle, úrovně a nejvhodnějšího balíčku pro další práci.</p>
            <strong>Kontaktovat</strong>
          </Link>
        </div>
      </section>

      <section className="section spotlight-section">
        <div className="spotlight-image" aria-label="Online studium angličtiny" />
        <div className="spotlight-copy">
          <p className="eyebrow">Kurzy</p>
          <h2>Výuka, která má rytmus i jasný další krok.</h2>
          <p>
            Všechny lekce probíhají online. Student dostává materiály, slovíčka,
            opravené chyby a doporučení, jak pokračovat mezi hodinami.
          </p>
          <Link className="button button-secondary" href="/kurzy">
            Všechny balíčky
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="section-heading section-heading-wide">
          <p className="eyebrow">Doporučený start</p>
          <h2>Nejčastěji vybírané balíčky.</h2>
        </div>
        <CourseCards compact />
      </section>

      <section className="section creator-section">
        <div className="creator-photo" aria-label="Lektor angličtiny" />
        <div>
          <p className="hello-line">Hey, jsem Filip Trubelík</p>
          <h2>Angličtinu učím tak, aby dávala smysl v praxi.</h2>
          <p>
            Cílem není biflovat poučky. V lekcích pracujeme s tím, co student
            reálně potřebuje: mluvení, porozumění, gramatika na příkladech,
            slovní zásoba a opakování mezi hodinami.
          </p>
          <Link className="button button-secondary" href="/o-mne">
            Přečíst příběh
          </Link>
        </div>
      </section>

      <section className="section resource-section">
        <div className="section-heading section-heading-wide">
          <p className="eyebrow">Materiály</p>
          <h2>Populární kategorie v e-shopu.</h2>
        </div>
        <div className="category-card-grid">
          {productCategories.map((category, index) => (
            <Link className="category-card" href={`/eshop/${category.slug}`} key={category.slug}>
              <span className="resource-thumb" aria-hidden="true">
                <span className="resource-sheet">
                  <span />
                  <span />
                  <span />
                  <span />
                </span>
                <span className="resource-tab">{String(index + 1).padStart(2, "0")}</span>
              </span>
              <strong>{category.label}</strong>
              <span>{category.description}</span>
              <em>Zobrazit</em>
            </Link>
          ))}
        </div>
      </section>

      <section className="section review-section">
        <div className="newsletter-band">
          <div>
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
        </div>
      </section>
    </>
  );
}
