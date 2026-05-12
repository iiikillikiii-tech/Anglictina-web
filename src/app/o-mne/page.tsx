import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <section className="page-hero compact-hero">
        <div className="hero-copy">
          <p className="eyebrow">O mně</p>
          <h1>Jsem Filip a angličtinu učím tak, aby dávala smysl v praxi.</h1>
          <p>
            Lekce vedu individuálně. Cílem není biflovat poučky, ale najít způsob,
            jak jazyk přirozeně vstřebat a používat ho v běžných situacích.
          </p>
        </div>
        <div className="portrait-panel portrait-panel-small" aria-label="Lektor angličtiny" />
      </section>

      <section className="section story-grid">
        <article>
          <p className="eyebrow">Přístup</p>
          <h2>Výuka vychází z reálné angličtiny a konkrétních potřeb studenta.</h2>
          <p>
            Angličtině se věnuji dlouhodobě a učím studenty různých věkových kategorií.
            Vycházím z osobní zkušenosti: klasická školní výuka nemusí sedět každému,
            proto dávám důraz na srozumitelné vysvětlení, konverzaci a materiály,
            které student opravdu použije.
          </p>
        </article>
        <article className="story-card accent-amber">
          <h3>Co v lekcích řešíme</h3>
          <ul>
            <li>mluvení a porozumění v běžných situacích,</li>
            <li>gramatiku vysvětlenou na konkrétních příkladech,</li>
            <li>slovní zásobu podle cíle studenta,</li>
            <li>materiály a poznámky pro domácí práci.</li>
          </ul>
        </article>
      </section>

      <section className="section split-section">
        <div className="image-strip image-strip-teacher" aria-label="Individuální výuka angličtiny" />
        <div>
          <p className="eyebrow">Online forma</p>
          <h2>Stačí počítač, tablet nebo telefon a klid na lekci.</h2>
          <p>
            Výuka probíhá přes Skype. Předem je jasné, co se bude probírat,
            po lekci student ví, co opakovat a jak pokračovat.
          </p>
          <Link className="button button-primary" href="/kontakt">
            Domluvit lekci
          </Link>
        </div>
      </section>
    </>
  );
}
