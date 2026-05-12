import Link from "next/link";
import { CourseCards } from "../components/CourseCards";
import { rules } from "../data";

export default function CoursesPage() {
  return (
    <>
      <section className="page-hero compact-hero">
        <div className="hero-copy">
          <p className="eyebrow">Kurzy angličtiny</p>
          <h1>Balíčky pro pravidelnou online výuku i kratší bloky.</h1>
          <p>
            Každý kurz je vedený individuálně. Společně nastavíte tempo, materiály,
            slovní zásobu i praktickou konverzaci podle cíle studenta.
          </p>
        </div>
        <div className="hero-note accent-mint">
          <span>Výuka probíhá přes Skype</span>
          <strong>z pohodlí domova</strong>
        </div>
      </section>

      <section className="section">
        <div className="section-heading section-heading-wide">
          <p className="eyebrow">Ceník</p>
          <h2>Vyberte balíček podle intenzity výuky.</h2>
        </div>
        <CourseCards />
      </section>

      <section className="section split-section">
        <div className="image-strip image-strip-notes" aria-label="Poznámky z angličtiny" />
        <div>
          <p className="eyebrow">Co je v ceně</p>
          <h2>Materiály, poznámky, slovíčka a plán dalšího učení.</h2>
          <p>
            Součástí výuky jsou PDF materiály, zápis nových slovíček, oprava chyb
            a doporučení, jak s angličtinou pracovat mezi lekcemi.
          </p>
          <Link className="button button-secondary" href="/kontakt">
            Domluvit kurz
          </Link>
        </div>
      </section>

      <section className="section rules-preview">
        <div className="section-heading">
          <p className="eyebrow">Pravidla</p>
          <h2>Jednoduché podmínky, aby výuka fungovala.</h2>
        </div>
        <div className="rule-grid">
          {rules.map((rule, index) => (
            <article key={rule.title}>
              <span>{index + 1}</span>
              <h3>{rule.title}</h3>
              <p>{rule.text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
