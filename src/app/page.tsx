import Link from "next/link";
import { CourseCards } from "./components/CourseCards";
import { productCategories, reviews } from "./data";

export default function Home() {
  return (
    <>
      <section className="page-hero home-hero">
        <div className="hero-copy">
          <p className="eyebrow">Online výuka z pohodlí domova</p>
          <h1>Ahoj, jsem Filip. Pomáhám studentům mít v angličtině přehled.</h1>
          <p>
            Kurzy, materiály a individuální výuka pro studenty, kteří chtějí mluvit
            přirozeněji, učit se efektivně a mít jasný plán bez zbytečného biflování.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/kurzy">
              Vybrat kurz
            </Link>
            <Link className="button button-secondary" href="/eshop">
              Projít materiály
            </Link>
          </div>
        </div>

        <div className="portrait-panel" aria-label="Online lekce angličtiny">
          <div>
            <span>Skype výuka</span>
            <strong>materiály + poznámky po lekci</strong>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading section-heading-wide">
          <p className="eyebrow">Jak vám pomůžu?</p>
          <h2>Výuka, e-shop a praktické materiály jsou rozdělené do jasných částí.</h2>
        </div>
        <div className="link-grid">
          <Link className="feature-link accent-mint" href="/kurzy">
            <span>01</span>
            <h3>Online kurzy</h3>
            <p>Balíčky podle tempa studenta, včetně PDF materiálů a poznámek po lekci.</p>
          </Link>
          <Link className="feature-link accent-violet" href="/eshop">
            <span>02</span>
            <h3>E-shop materiálů</h3>
            <p>Gramatika, slovíčka, zkoušky, cestování i business angličtina podle kategorií.</p>
          </Link>
          <Link className="feature-link accent-coral" href="/kontakt">
            <span>03</span>
            <h3>Domluva výuky</h3>
            <p>Krátké sladění cíle, úrovně a nejvhodnějšího balíčku pro další práci.</p>
          </Link>
        </div>
      </section>

      <section className="section split-section">
        <div>
          <p className="eyebrow">Kurzy</p>
          <h2>Vyberte si tempo výuky podle toho, kolik času chcete angličtině dát.</h2>
          <p>
            Všechny lekce probíhají online. Student dostává digitální materiály,
            slovíčka, opravené chyby a doporučení, jak pokračovat mezi hodinami.
          </p>
          <Link className="button button-secondary" href="/kurzy">
            Všechny balíčky
          </Link>
        </div>
        <div className="image-strip image-strip-study" aria-label="Studenti při online výuce" />
      </section>

      <section className="section">
        <div className="section-heading section-heading-wide">
          <p className="eyebrow">Doporučený start</p>
          <h2>Nejčastěji vybírané balíčky.</h2>
        </div>
        <CourseCards compact />
      </section>

      <section className="section">
        <div className="section-heading section-heading-wide">
          <p className="eyebrow">E-shop</p>
          <h2>Kategorie materiálů mají vlastní podstránky.</h2>
        </div>
        <div className="category-card-grid">
          {productCategories.map((category) => (
            <Link className="category-card" href={`/eshop/${category.slug}`} key={category.slug}>
              <strong>{category.label}</strong>
              <span>{category.description}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section review-section">
        <div className="section-heading">
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
    </>
  );
}
