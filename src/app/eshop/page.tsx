import { ProductGrid } from "../components/ProductGrid";
import { RevealSection } from "../components/RevealSection";

export default function ShopPage() {
  return (
    <>
      <section className="page-hero compact-hero">
        <div className="hero-copy">
          <p className="eyebrow">E-shop</p>
          <h1>Materiály pro gramatiku, slovíčka, zkoušky i praktické fráze.</h1>
          <p>
            Kategorie jsou rozdělené do samostatných podstránek, takže student rychle
            najde přesně tu oblast, kterou chce procvičit.
          </p>
        </div>
        <div className="hero-note accent-violet">
          <span>Materiály v PDF</span>
          <strong>přehledně podle témat</strong>
        </div>
      </section>

      <RevealSection className="section shop-section">
        <ProductGrid />
      </RevealSection>
    </>
  );
}
