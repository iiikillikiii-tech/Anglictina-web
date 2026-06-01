import { notFound } from "next/navigation";
import { ProductGrid } from "../../components/ProductGrid";
import { RevealSection } from "../../components/RevealSection";
import { productCategories } from "../../data";

const legacyCategoryMap: Record<string, string | undefined> = {
  "gramatika-a-cvicenia": "gramatika-cviceni",
  "gramatika-cviceni": "gramatika-cviceni",
  slovicka: "slovicka",
  maturita: "maturita-cambridge",
  "maturita-cambridge": "maturita-cambridge",
  cestovani: "cestovani",
  business: "business",
  kurzy: "kurzy",
  vsetko: undefined,
};

export function generateStaticParams() {
  return Object.keys(legacyCategoryMap).map((legacyCategory) => ({
    legacyCategory,
  }));
}

export default async function LegacyCategoryPage({
  params,
}: {
  params: Promise<{ legacyCategory: string }>;
}) {
  const { legacyCategory } = await params;

  if (!(legacyCategory in legacyCategoryMap)) {
    notFound();
  }

  const categorySlug = legacyCategoryMap[legacyCategory];
  const category = productCategories.find((item) => item.slug === categorySlug);

  return (
    <>
      <section className="page-hero compact-hero">
        <div className="hero-copy">
          <p className="eyebrow">E-shop</p>
          <h1>{category?.label ?? "Všechny položky"}</h1>
          <p>
            Kompatibilní stránka pro původní odkazy z originálního e-shopu. Produkty
            můžete filtrovat, otevřít detail nebo přidat do košíku.
          </p>
        </div>
        <div className="hero-note accent-violet">
          <span>Kategorie</span>
          <strong>{category?.label ?? "Vše"}</strong>
        </div>
      </section>

      <RevealSection className="section shop-section">
        <ProductGrid activeCategorySlug={categorySlug} />
      </RevealSection>
    </>
  );
}
