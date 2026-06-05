import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { RevealSection } from "../components/RevealSection";
import { faqItems } from "../data";

export default function FaqPage() {
  return (
    <>
      <section className="page-hero compact-hero">
        <div className="hero-copy">
          <p className="eyebrow">FAQ</p>
          <h1>Nejčastější otázky před první lekcí.</h1>
          <p>
            Rychlé odpovědi na to, jak lekce probíhají, co k nim potřebujete,
            jak vybrat balíček a co dělat, když si nejste jistí.
          </p>
        </div>
        <div className="hero-note accent-mint">
          <span>Online lekce</span>
          <strong>Microsoft Teams</strong>
        </div>
      </section>

      <RevealSection className="section faq-page-section depth-section">
        <div className="faq-list">
          {faqItems.map((item) => (
            <article key={item.question}>
              <h2>{item.question}</h2>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </RevealSection>

      <RevealSection className="section final-cta-section">
        <MessageCircle aria-hidden="true" size={22} strokeWidth={2.4} />
        <p className="eyebrow">Máte další otázku?</p>
        <h2>Napište mi, s čím si nejste jistí, a společně vybereme nejlepší další krok.</h2>
        <Link className="button button-primary" href="/kontakt">
          Mám další otázku
        </Link>
      </RevealSection>
    </>
  );
}
