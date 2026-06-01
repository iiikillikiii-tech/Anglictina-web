import Link from "next/link";
import {
  ArrowRight,
  BookOpenCheck,
  CalendarCheck,
  CheckCircle2,
  Clock3,
  FileText,
  GraduationCap,
  Headphones,
  Layers3,
  ListChecks,
  MessageCircle,
  ShoppingBag,
  Target,
  Video,
} from "lucide-react";
import { CourseCards } from "./components/CourseCards";
import { RevealSection } from "./components/RevealSection";
import { productCategories, reviews, skypeBenefits } from "./data";

export default function Home() {
  return (
    <>
      <section className="page-hero home-hero">
        <div className="hero-copy">
          <p className="hello-line">Online angličtina s jasným plánem</p>
          <h1>Angličtina, která má systém, rytmus a další krok.</h1>
          <p>
            Lekce, PDF materiály a e-shop podklady v jednom přehledném směru pro
            studenty, kteří chtějí mluvit přirozeněji, připravit se na zkoušky
            nebo si konečně srovnat gramatiku.
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
          <div className="hero-command" aria-label="Struktura spolupráce">
            <span>student-plan</span>
            <strong>cíl · úroveň · kurz · materiály</strong>
          </div>
          <div className="hero-metrics" aria-label="Výhody výuky">
            <div>
              <strong>1:1</strong>
              <span>individuální tempo</span>
            </div>
            <div>
              <strong>6</strong>
              <span>kurzových balíčků</span>
            </div>
            <div>
              <strong>PDF</strong>
              <span>materiály po lekci</span>
            </div>
            <div>
              <strong>6</strong>
              <span>kategorií e-shopu</span>
            </div>
            <div>
              <strong>30 min</strong>
              <span>úvodní sladění</span>
            </div>
            <div>
              <strong>3</strong>
              <span>cíl, úroveň, plán</span>
            </div>
          </div>
        </div>

        <aside className="subscribe-panel authkit-preview" aria-label="Náhled systému výuky">
          <div className="preview-shell">
            <div className="preview-card preview-card-main">
              <div className="preview-card-top">
                <span className="preview-logo" aria-hidden="true">
                  A
                </span>
                <strong>Angličtina s přehledem</strong>
              </div>
              <h2>Najděte svůj plán výuky</h2>
              <div className="preview-field">
                <span>Cíl studenta</span>
                <strong>mluvit jistěji do 3 měsíců</strong>
              </div>
              <div className="preview-field">
                <span>Doporučený režim</span>
                <strong>2-3 lekce týdně + PDF materiály</strong>
              </div>
              <Link className="button button-primary" href="/kontakt">
                Poslat poptávku
                <ArrowRight aria-hidden="true" size={18} strokeWidth={2.5} />
              </Link>
              <div className="preview-status">
                <CheckCircle2 aria-hidden="true" size={17} />
                <span>Zkušební sladění cíle zdarma</span>
              </div>
            </div>

            <div className="preview-stack">
              <article className="preview-card preview-card-small">
                <Video aria-hidden="true" size={19} />
                <div>
                  <strong>Online lekce</strong>
                  <span>Skype, poznámky, nahrávání dle domluvy</span>
                </div>
              </article>
              <article className="preview-card preview-card-small">
                <FileText aria-hidden="true" size={19} />
                <div>
                  <strong>PDF materiály</strong>
                  <span>gramatika, slovíčka, zkouškové podklady</span>
                </div>
              </article>
              <article className="preview-card preview-card-small preview-card-accent">
                <GraduationCap aria-hidden="true" size={19} />
                <div>
                  <strong>Plán pokroku</strong>
                  <span>cíl, úroveň, kurz, další krok</span>
                </div>
              </article>
            </div>
          </div>

          <div className="preview-rail" aria-label="Součásti výuky">
            <span>
              <BookOpenCheck aria-hidden="true" size={16} />
              vysvětlení
            </span>
            <span>
              <Headphones aria-hidden="true" size={16} />
              mluvení
            </span>
            <span>
              <CalendarCheck aria-hidden="true" size={16} />
              pravidelnost
            </span>
          </div>
        </aside>
      </section>

      <RevealSection className="section promo-band">
        <div>
          <p className="eyebrow">Limitovaná kapacita</p>
          <h2>Nejrychlejší posun mají studenti s pravidelným režimem.</h2>
          <p>
            Původní nabídka staví hlavně na balíčcích 3x týdně a 2x týdně. Jsou
            určené pro studenty, kteří chtějí angličtinu řešit systematicky z pohodlí domova.
          </p>
        </div>
        <div className="promo-options">
          <article>
            <Clock3 aria-hidden="true" size={20} />
            <strong>3x týdně</strong>
            <span>36 hodin / 3 měsíce</span>
          </article>
          <article>
            <Clock3 aria-hidden="true" size={20} />
            <strong>2x týdně</strong>
            <span>24 hodin / 3 měsíce</span>
          </article>
        </div>
      </RevealSection>

      <RevealSection className="section process-section">
        <div className="section-heading section-heading-wide">
          <p className="eyebrow">Učební systém</p>
          <h2>Profesionální proces místo nahodilých lekcí.</h2>
        </div>
        <div className="process-grid">
          <article>
            <Target aria-hidden="true" size={22} strokeWidth={2.4} />
            <span>01</span>
            <h3>Diagnostika cíle</h3>
            <p>Nejdřív se sladí úroveň, časové možnosti a důvod, proč angličtinu řešit.</p>
          </article>
          <article>
            <CalendarCheck aria-hidden="true" size={22} strokeWidth={2.4} />
            <span>02</span>
            <h3>Pravidelný režim</h3>
            <p>Student má jasný rytmus lekcí, materiálů a opakování mezi hodinami.</p>
          </article>
          <article>
            <ListChecks aria-hidden="true" size={22} strokeWidth={2.4} />
            <span>03</span>
            <h3>Viditelný posun</h3>
            <p>Po každé lekci zůstává konkrétní výstup: chyby, slovíčka a další úkol.</p>
          </article>
        </div>
      </RevealSection>

      <RevealSection className="section help-section">
        <div className="ali-heading">
          <p className="eyebrow">Jak vám můžu pomoct?</p>
          <h2>
            <span>Vyberte si</span>
            <span>správnou cestu.</span>
          </h2>
        </div>
        <div className="link-grid">
          <Link className="feature-link" href="/kurzy">
            <span>
              <Layers3 aria-hidden="true" size={18} />
            </span>
            <h3>Online kurzy</h3>
            <p>Balíčky podle tempa studenta, včetně PDF materiálů a poznámek po lekci.</p>
            <strong>
              Vybrat kurz
              <ArrowRight aria-hidden="true" size={17} />
            </strong>
          </Link>
          <Link className="feature-link" href="/eshop">
            <span>
              <ShoppingBag aria-hidden="true" size={18} />
            </span>
            <h3>E-shop materiálů</h3>
            <p>Gramatika, slovíčka, zkoušky, cestování i business angličtina podle kategorií.</p>
            <strong>
              Prohlédnout materiály
              <ArrowRight aria-hidden="true" size={17} />
            </strong>
          </Link>
          <Link className="feature-link" href="/o-mne">
            <span>
              <GraduationCap aria-hidden="true" size={18} />
            </span>
            <h3>Individuální přístup</h3>
            <p>Výuka stojí na srozumitelném vysvětlení, praxi a cílech konkrétního studenta.</p>
            <strong>
              O výuce
              <ArrowRight aria-hidden="true" size={17} />
            </strong>
          </Link>
          <Link className="feature-link" href="/kontakt">
            <span>
              <MessageCircle aria-hidden="true" size={18} />
            </span>
            <h3>Domluva lekce</h3>
            <p>Krátké sladění cíle, úrovně a nejvhodnějšího balíčku pro další práci.</p>
            <strong>
              Kontaktovat
              <ArrowRight aria-hidden="true" size={17} />
            </strong>
          </Link>
        </div>
      </RevealSection>

      <RevealSection className="section spotlight-section">
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
      </RevealSection>

      <RevealSection className="section benefits-section">
        <div className="section-heading section-heading-wide">
          <p className="eyebrow">Výuka pomocí Skypu</p>
          <h2>Online forma zachovává osobní přístup a šetří čas.</h2>
        </div>
        <div className="benefit-grid">
          {skypeBenefits.slice(0, 3).map((benefit) => (
            <article key={benefit}>
              <span aria-hidden="true">✓</span>
              <h3>{benefit}</h3>
            </article>
          ))}
        </div>
      </RevealSection>

      <RevealSection className="section">
        <div className="section-heading section-heading-wide">
          <p className="eyebrow">Doporučený start</p>
          <h2>Nejčastěji vybírané balíčky.</h2>
        </div>
        <CourseCards compact />
      </RevealSection>

      <RevealSection className="section creator-section">
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
      </RevealSection>

      <RevealSection className="section resource-section">
        <div className="section-heading section-heading-wide">
          <p className="eyebrow">Materiály</p>
          <h2>Populární kategorie v e-shopu.</h2>
        </div>
        <div className="category-card-grid">
          {productCategories.map((category, index) => (
            <Link className="category-card" href={`/eshop/${category.slug}`} key={category.slug}>
              <span className={`resource-thumb resource-thumb-${category.slug}`} aria-hidden="true">
                <span className="resource-tab">{String(index + 1).padStart(2, "0")}</span>
              </span>
              <strong>{category.label}</strong>
              <span>{category.description}</span>
              <em>Zobrazit</em>
            </Link>
          ))}
        </div>
      </RevealSection>

      <RevealSection className="section review-section">
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
      </RevealSection>
    </>
  );
}
