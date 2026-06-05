import Link from "next/link";
import { CourseCards } from "../components/CourseCards";
import { RevealSection } from "../components/RevealSection";
import { audienceGroups, onlineBenefits, rules } from "../data";

export default function CoursesPage() {
  return (
    <>
      <section className="page-hero compact-hero">
        <div className="hero-copy">
          <p className="eyebrow">Kurzy angličtiny</p>
          <h1>Balíčky pro pravidelnou online výuku i kratší bloky.</h1>
          <p>
            Kurzy jsou vhodné pro začátečníky, studenty i dospělé, kteří chtějí
            pochopit gramatiku, rozšířit slovní zásobu a cítit se jistěji při mluvení.
          </p>
        </div>
        <div className="hero-note accent-mint">
          <span>Výuka probíhá přes Microsoft Teams</span>
          <strong>z pohodlí domova</strong>
        </div>
      </section>

      <RevealSection className="section audience-section depth-section">
        <div className="section-heading section-heading-wide">
          <p className="eyebrow">Pro koho jsou kurzy vhodné?</p>
          <h2>Každá úroveň potřebuje trochu jiný plán.</h2>
        </div>
        <div className="audience-grid">
          {audienceGroups.map((group, index) => (
            <article key={group.title} className="depth-card">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{group.title}</h3>
              <p>{group.text}</p>
            </article>
          ))}
        </div>
      </RevealSection>

      <RevealSection className="section">
        <div className="section-heading section-heading-wide">
          <p className="eyebrow">Ceník</p>
          <h2>Vyberte balíček podle intenzity výuky včetně letního rozmluvení.</h2>
        </div>
        <CourseCards />
      </RevealSection>

      <RevealSection className="section summer-course-band depth-section">
        <div>
          <p className="eyebrow">Letní intenzivní kurz</p>
          <h2>Týden zaměřený hlavně na mluvení a praktické fráze.</h2>
          <p>
            Letní kurz je časově omezená nabídka na rozmluvení. Hodí se, pokud se
            chcete během krátké doby častěji potkat s angličtinou a odstranit strach z komunikace.
          </p>
        </div>
        <div className="summer-options">
          <article>
            <strong>10 h / týden</strong>
            <span>4 000 Kč</span>
            <p>Pro rychlé rozmluvení a větší jistotu.</p>
          </article>
          <article>
            <strong>15 h / týden</strong>
            <span>6 000 Kč</span>
            <p>Intenzivnější varianta pro výraznější posun.</p>
          </article>
        </div>
      </RevealSection>

      <RevealSection className="section split-section">
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
      </RevealSection>

      <RevealSection className="section benefits-section">
        <div className="section-heading">
          <p className="eyebrow">Výuka přes Microsoft Teams</p>
          <h2>Z pohodlí domova, bez učebnic a bez dojíždění.</h2>
        </div>
        <div className="benefit-grid">
          {onlineBenefits.map((benefit) => (
            <article key={benefit}>
              <span aria-hidden="true">✓</span>
              <h3>{benefit}</h3>
            </article>
          ))}
        </div>
      </RevealSection>

      <RevealSection className="section rules-preview">
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
      </RevealSection>
    </>
  );
}
