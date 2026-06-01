import Link from "next/link";
import { RevealSection } from "../components/RevealSection";
import { rules } from "../data";

export default function RulesPage() {
  return (
    <>
      <section className="page-hero compact-hero">
        <div className="hero-copy">
          <p className="eyebrow">Pravidla spolupráce</p>
          <h1>Jednoduché podmínky, aby výuka fungovala pro obě strany.</h1>
          <p>
            Pravidla drží termíny, platby i čerpání hodin přehledné. V nestandardních
            situacích je nejdůležitější rychlá domluva.
          </p>
        </div>
        <div className="hero-note accent-amber">
          <span>Domluva</span>
          <strong>alespoň 24 hodin předem</strong>
        </div>
      </section>

      <RevealSection className="section rules-preview">
        <div className="rule-grid rule-grid-large">
          {rules.map((rule, index) => (
            <article key={rule.title}>
              <span>{index + 1}</span>
              <h3>{rule.title}</h3>
              <p>{rule.text}</p>
            </article>
          ))}
        </div>
      </RevealSection>

      <RevealSection className="section cta-band">
        <p className="eyebrow">Další krok</p>
        <h2>Vyberte kurz a domluvte si první termín.</h2>
        <div className="hero-actions">
          <Link className="button button-primary" href="/kurzy">
            Kurzy
          </Link>
          <Link className="button button-secondary" href="/kontakt">
            Kontakt
          </Link>
        </div>
      </RevealSection>
    </>
  );
}
