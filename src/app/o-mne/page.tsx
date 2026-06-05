import Link from "next/link";
import { RevealSection } from "../components/RevealSection";
import { aboutStory } from "../data";

export default function AboutPage() {
  return (
    <>
      <section className="page-hero compact-hero">
        <div className="hero-copy">
          <p className="eyebrow">O mně</p>
          <h1>Pomáhám studentům pochopit angličtinu bez zbytečného stresu.</h1>
          <p>{aboutStory.intro}</p>
        </div>
        <div className="portrait-panel portrait-panel-small" aria-label="Lektor angličtiny" />
      </section>

      <RevealSection className="section story-grid">
        <article>
          <p className="eyebrow">Přístup</p>
          <h2>Angličtina nemusí být složitá, chaotická ani nudná.</h2>
          <p>{aboutStory.background}</p>
          <p>{aboutStory.approach}</p>
        </article>
        <article className="story-card accent-amber">
          <h3>Co v lekcích řešíme</h3>
          <ul>
            <li>mluvení a porozumění v běžných situacích,</li>
            <li>gramatiku vysvětlenou na konkrétních příkladech,</li>
            <li>slovní zásobu podle cíle studenta,</li>
            <li>přípravu na testy, maturitu a Cambridge zkoušky,</li>
            <li>praktickou angličtinu na cestování a běžný život,</li>
            <li>materiály a poznámky pro domácí práci.</li>
          </ul>
        </article>
      </RevealSection>

      <RevealSection className="section profile-section">
        <div className="section-heading section-heading-wide">
          <p className="eyebrow">Kdo jsem?</p>
          <h2>Učím studenty od školní přípravy až po praktickou dospělou komunikaci.</h2>
        </div>
        <div className="profile-facts">
          <article>
            <strong>7 let</strong>
            <span>praxe s výukou angličtiny</span>
          </article>
          <article>
            <strong>15-100</strong>
            <span>věkové rozpětí studentů</span>
          </article>
          <article>
            <strong>online</strong>
            <span>výuka přes Microsoft Teams z pohodlí domova</span>
          </article>
        </div>
      </RevealSection>

      <RevealSection className="section split-section">
        <div className="image-strip image-strip-teacher" aria-label="Individuální výuka angličtiny" />
        <div>
          <p className="eyebrow">Online forma</p>
          <h2>Stačí počítač, tablet nebo telefon a klid na lekci.</h2>
          <p>
            Výuka probíhá přes Microsoft Teams. Předem je jasné, co se bude probírat,
            a po lekci student ví, kde dělá chyby, co si zopakovat a jak pokračovat.
          </p>
          <Link className="button button-primary" href="/kontakt">
            Domluvit lekci
          </Link>
        </div>
      </RevealSection>
    </>
  );
}
