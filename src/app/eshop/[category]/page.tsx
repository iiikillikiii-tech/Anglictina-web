import { notFound } from "next/navigation";
import { ProductGrid } from "../../components/ProductGrid";
import { productCategories } from "../../data";

export function generateStaticParams() {
  return productCategories.map((category) => ({
    category: category.slug,
  }));
}

export default async function ShopCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: categorySlug } = await params;
  const category = productCategories.find((item) => item.slug === categorySlug);

  if (!category) {
    notFound();
  }

  return (
    <>
      <section className="page-hero compact-hero">
        <div className="hero-copy">
          <p className="eyebrow">E-shop / {category.label}</p>
          <h1>{category.label}</h1>
          <p>{category.description}</p>
        </div>
        <div className="hero-note accent-blue">
          <span>Kategorie</span>
          <strong>{category.label}</strong>
        </div>
      </section>

      <section className="section shop-section">
        <ProductGrid activeCategorySlug={category.slug} />
      </section>
    </>
  );
}
