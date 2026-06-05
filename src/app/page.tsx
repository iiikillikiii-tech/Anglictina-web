import Link from "next/link";
import {
  ArrowRight,
  BookOpenCheck,
  CalendarCheck,
  CheckCircle2,
  Clock3,
  FileText,
  Headphones,
  Layers3,
  MessageCircle,
  PlayCircle,
  ShoppingBag,
  Sparkles,
  Target,
  Video,
} from "lucide-react";
import { CourseCards } from "./components/CourseCards";
import { LearningStudioScene } from "./components/LearningStudioScene";
import { RevealSection } from "./components/RevealSection";
import { audienceGroups, faqItems, onlineBenefits, productCategories, reviews } from "./data";

const heroStats = [
  ["1:1", "individuální vedení"],
  ["36 h", "intenzivní kurz"],
  ["PDF", "materiály po lekci"],
  ["30 min", "úvodní sladění"],
];

const tickerItems = [
  "Grammar without panic",
  "Speaking practice",
  "Maturita",
  "Cambridge",
  "Business English",
  "PDF workbooks",
  "Microsoft Teams",
  "Confidence",
];

const systemSteps = [
  {
    icon: Target,
    label: "01",
    title: "Cíl a úroveň",
    text: "Na začátku se určí, jestli řešíte mluvení, zkoušku, práci, cestování nebo srovnání základů.",
  },
  {
    icon: CalendarCheck,
    label: "02",
    title: "Rytmus lekcí",
    text: "Balíček nastaví tempo, termíny a konkrétní domácí práci mezi online setkáními.",
  },
  {
    icon: BookOpenCheck,
    label: "03",
    title: "Výstupy po hodině",
    text: "Student odchází s poznámkami, slovíčky, opravami chyb a dalším krokem v PDF.",
  },
];

const studioFeatures = [
  {
    icon: Video,
    title: "Online výuka",
    text: "Microsoft Teams lekce bez dojíždění, s materiály připravenými před hodinou.",
  },
  {
    icon: FileText,
    title: "Digitální materiály",
    text: "Gramatika, cvičení, slovíčka, maturita, Cambridge i business témata.",
  },
  {
    icon: Headphones,
    title: "Mluvení v praxi",
    text: "Konverzace, telefonické fráze a reálné situace podle cíle studenta.",
  },
];

export default function Home() {
  return (
    <>
      <section className="cinematic-hero" aria-labelledby="hero-title">
        <div className="cinematic-hero-scene">
          <LearningStudioScene />
        </div>
        <div className="cinematic-hero-copy">
          <p className="hello-line">Online lektor angličtiny</p>
          <h1 id="hero-title">Angličtina, která konečně dává smysl.</h1>
          <p>
            Přátelský přístup, jasný plán a lekce přes Microsoft Teams. Gramatiku
            rozmotáme jednoduše a mluvení dostane pravidelný trénink bez stresu.
          </p>
          <div className="hero-chip-row" aria-label="Oblasti výuky">
            <span>Maturita</span>
            <span>Cambridge</span>
            <span>Konverzace</span>
            <span>Gramatika</span>
            <span>Business</span>
          </div>
          <div className="hero-actions">
            <Link className="button button-primary" href="/kurzy">
              Vybrat kurz
              <ArrowRight aria-hidden="true" size={18} strokeWidth={2.5} />
            </Link>
            <Link className="button button-secondary" href="/kontakt">
              <MessageCircle aria-hidden="true" size={18} strokeWidth={2.4} />
              Domluvit lekci
            </Link>
          </div>
        </div>
        <div className="cinematic-hero-panel" aria-label="Souhrn výukového systému">
          <div className="mentor-cue-card">
            <span>Hey, I&apos;m Filip.</span>
            <strong>Ne memorování. Přehled, praxe a klid v hlavě.</strong>
          </div>
          <div className="hero-command">
            <span>student-plan</span>
            <strong>cíl · úroveň · kurz · materiály · další krok</strong>
          </div>
          <div className="hero-metrics">
            {heroStats.map(([value, label]) => (
              <div key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-ticker" aria-label="Oblasti výuky a témata">
          <div>
            {[...tickerItems, ...tickerItems].map((item, index) => (
              <span key={`${item}-${index}`}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <RevealSection className="section product-suite-section">
        <div className="section-heading section-heading-wide">
          <p className="eyebrow">Learning product</p>
          <h2>Všechno, co už projekt nabízí, zabalené do jednoho prémiového studijního toku.</h2>
        </div>
        <div className="suite-grid">
          <Link className="suite-item suite-item-large" href="/kurzy">
            <span>
              <Layers3 aria-hidden="true" size={20} />
            </span>
            <h3>Online kurzové balíčky</h3>
            <p>Intenzita 3x týdně, pravidelný režim 2x týdně i menší startovací balíčky.</p>
            <strong>
              Porovnat kurzy
              <ArrowRight aria-hidden="true" size={17} />
            </strong>
          </Link>
          <Link className="suite-item" href="/eshop">
            <span>
              <ShoppingBag aria-hidden="true" size={20} />
            </span>
            <h3>E-shop materiálů</h3>
            <p>Gramatika, slovíčka, zkoušky, cestování a pracovní angličtina.</p>
            <strong>
              Otevřít e-shop
              <ArrowRight aria-hidden="true" size={17} />
            </strong>
          </Link>
          <Link className="suite-item" href="/kontakt">
            <span>
              <PlayCircle aria-hidden="true" size={20} />
            </span>
            <h3>Úvodní sladění</h3>
            <p>30 minut na cíl, úroveň a doporučený režim bez zbytečné teorie.</p>
            <strong>
              Poslat poptávku
              <ArrowRight aria-hidden="true" size={17} />
            </strong>
          </Link>
        </div>
      </RevealSection>

      <RevealSection className="section audience-section depth-section">
        <div className="section-heading section-heading-wide">
          <p className="eyebrow">Pro koho</p>
          <h2>Začátečníci, studenti i dospělí mají jiný cíl. Lekce tomu odpovídají.</h2>
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

      <RevealSection className="section studio-section">
        <div className="studio-copy">
          <p className="eyebrow">Výukový systém</p>
          <h2>Vypadá to lehce. Uvnitř je přesný systém.</h2>
          <p>
            Výuka probíhá online přes Microsoft Teams. Před lekcí dostanete materiály
            v digitální podobě, během hodiny procvičujeme gramatiku, slovní zásobu,
            čtení, poslech i mluvení a po lekci víte, co se učit dál.
          </p>
          <Link className="button button-secondary" href="/o-mne">
            O přístupu k výuce
          </Link>
        </div>
        <div className="studio-feature-list">
          {studioFeatures.map((feature) => {
            const Icon = feature.icon;
            return (
              <article key={feature.title}>
                <Icon aria-hidden="true" size={21} strokeWidth={2.4} />
                <div>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </RevealSection>

      <RevealSection className="section lesson-flow-section">
        <div className="lesson-flow-card">
          <span>01</span>
          <h3>Před lekcí</h3>
          <p>Materiály, cíl a konkrétní téma, aby se hodina nerozjela do chaosu.</p>
        </div>
        <div className="lesson-flow-card lesson-flow-card-hot">
          <span>02</span>
          <h3>Během lekce</h3>
          <p>Krátké vysvětlení, hodně použití, opravy chyb a mluvení v reálných situacích.</p>
        </div>
        <div className="lesson-flow-card">
          <span>03</span>
          <h3>Po lekci</h3>
          <p>PDF shrnutí, slovíčka, domácí miniúkol a další krok bez hádání.</p>
        </div>
      </RevealSection>

      <RevealSection className="section process-section cinematic-process">
        <div className="section-heading section-heading-wide">
          <p className="eyebrow">Od chaosu k plánu</p>
          <h2>Student vždy ví, proč dělá další krok.</h2>
        </div>
        <div className="process-grid">
          {systemSteps.map((step) => {
            const Icon = step.icon;
            return (
              <article key={step.title}>
                <Icon aria-hidden="true" size={22} strokeWidth={2.4} />
                <span>{step.label}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            );
          })}
        </div>
      </RevealSection>

      <RevealSection className="section">
        <div className="section-heading section-heading-wide">
          <p className="eyebrow">Doporučený start</p>
          <h2>Nejčastěji vybírané balíčky pro rychlý posun.</h2>
        </div>
        <CourseCards compact />
      </RevealSection>

      <RevealSection className="section material-showcase">
        <div>
          <p className="eyebrow">E-shop materiálů</p>
          <h2>Materiály rozdělené podle cíle, ne podle složité školní teorie.</h2>
          <p>
            Kategorie v e-shopu pomáhají vybrat správný podklad pro domácí práci, zkoušku,
            cestování nebo pracovní situace.
          </p>
          <Link className="button button-primary" href="/eshop">
            Prohlédnout materiály
            <ArrowRight aria-hidden="true" size={18} strokeWidth={2.5} />
          </Link>
        </div>
        <div className="material-orbit" aria-label="Kategorie e-shopu">
          {productCategories.map((category, index) => (
            <Link
              className={`material-pill material-pill-${index + 1}`}
              href={`/eshop/${category.slug}`}
              key={category.slug}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{category.label}</strong>
            </Link>
          ))}
        </div>
      </RevealSection>

      <RevealSection className="section benefits-section premium-benefits">
        <div className="section-heading section-heading-wide">
          <p className="eyebrow">Online forma</p>
          <h2>Výuka přes Microsoft Teams drží osobní přístup a šetří čas.</h2>
        </div>
        <div className="benefit-grid">
          {onlineBenefits.slice(0, 3).map((benefit) => (
            <article key={benefit}>
              <span aria-hidden="true">
                <CheckCircle2 size={18} strokeWidth={2.7} />
              </span>
              <h3>{benefit}</h3>
            </article>
          ))}
        </div>
      </RevealSection>

      <RevealSection className="section faq-preview-section depth-section">
        <div className="section-heading section-heading-wide">
          <p className="eyebrow">FAQ</p>
          <h2>Nejčastější otázky před první lekcí.</h2>
        </div>
        <div className="faq-list faq-list-compact">
          {faqItems.slice(0, 4).map((item) => (
            <article key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
        <Link className="button button-secondary" href="/faq">
          Zobrazit všechny otázky
        </Link>
      </RevealSection>

      <RevealSection className="section review-section">
        <div className="newsletter-band cinematic-review-band">
          <div>
            <p className="eyebrow">Recenze</p>
            <h2>Praktická angličtina má být použitelná hned po lekci.</h2>
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
      </RevealSection>

      <RevealSection className="section final-cta-section">
        <Sparkles aria-hidden="true" size={22} strokeWidth={2.4} />
        <p className="eyebrow">Začněte přehledně</p>
        <h2>Domluvte si směr výuky a nechte angličtinu konečně zapadnout do týdne.</h2>
        <div className="hero-actions">
          <Link className="button button-primary" href="/kontakt">
            Domluvit lekci
            <ArrowRight aria-hidden="true" size={18} strokeWidth={2.5} />
          </Link>
          <Link className="button button-secondary" href="/kurzy">
            Zobrazit kurzy
            <Clock3 aria-hidden="true" size={18} strokeWidth={2.4} />
          </Link>
        </div>
      </RevealSection>
    </>
  );
}
