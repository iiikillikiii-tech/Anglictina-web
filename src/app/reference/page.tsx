import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import { RevealSection } from "../components/RevealSection";
import { referenceGuides, reviews } from "../data";

export default function ReferencePage() {
  return (
    <>
      <section className="page-hero compact-hero">
        <div className="hero-copy">
          <p className="eyebrow">Reference</p>
          <h1>Reference studentů a prostor pro skutečné zkušenosti.</h1>
          <p>
            Nejlépe fungují krátké konkrétní reference, které ukážou problém,
            průběh výuky a výsledek. Níže je připravený layout i struktura.
          </p>
        </div>
        <div className="hero-note accent-amber">
          <span>Vhodné doplnit</span>
          <strong>3-6 reálných referencí</strong>
        </div>
      </section>

      <RevealSection className="section review-section">
        <div className="newsletter-band cinematic-review-band">
          <div>
            <p className="eyebrow">Aktuální ukázky</p>
            <h2>Krátké reference, které mohou být nahrazené reálnými citacemi.</h2>
          </div>
          <div className="review-grid">
            {reviews.map((review) => (
              <figure key={review.name} className="review-card">
                <Quote aria-hidden="true" size={20} strokeWidth={2.4} />
                <blockquote>{review.text}</blockquote>
                <figcaption>{review.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </RevealSection>

      <RevealSection className="section reference-guide-section depth-section">
        <div className="section-heading section-heading-wide">
          <p className="eyebrow">Co má dobrá reference ukázat?</p>
          <h2>Nejde o obecnou pochvalu, ale o konkrétní posun.</h2>
        </div>
        <div className="reference-guide-grid">
          {referenceGuides.map((guide) => (
            <article key={guide.type} className="depth-card">
              <h3>{guide.type}</h3>
              <p>{guide.text}</p>
            </article>
          ))}
        </div>
      </RevealSection>

      <RevealSection className="section final-cta-section">
        <p className="eyebrow">Chcete se také posunout?</p>
        <h2>Napište mi, s čím potřebujete pomoct, a najdeme vhodný způsob výuky.</h2>
        <Link className="button button-primary" href="/kontakt">
          Chci se domluvit na lekci
          <ArrowRight aria-hidden="true" size={18} strokeWidth={2.5} />
        </Link>
      </RevealSection>
    </>
  );
}
