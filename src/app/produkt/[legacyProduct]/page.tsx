import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, FileText } from "lucide-react";
import { ProductPurchase } from "../../components/ProductPurchase";
import { RevealSection } from "../../components/RevealSection";
import { productCategories, products } from "../../data";

const legacyProductMap: Record<string, string> = {
  "maturita-a-cambridge-zkousky-pisemna-cast": "maturita-cambridge-pisemna-cast",
};

export function generateStaticParams() {
  return [
    ...products.map((product) => ({ legacyProduct: product.slug })),
    ...Object.keys(legacyProductMap).map((legacyProduct) => ({ legacyProduct })),
  ];
}

export default async function LegacyProductPage({
  params,
}: {
  params: Promise<{ legacyProduct: string }>;
}) {
  const { legacyProduct } = await params;
  const productSlug = legacyProductMap[legacyProduct] ?? legacyProduct;
  const product = products.find((item) => item.slug === productSlug);

  if (!product) {
    notFound();
  }

  const category = productCategories.find((item) => item.slug === product.categorySlug);

  return (
    <>
      <section className="page-hero compact-hero product-hero">
        <div className="hero-copy">
          <Link className="back-link" href={category ? `/eshop/${category.slug}` : "/eshop"}>
            <ArrowLeft aria-hidden="true" size={17} strokeWidth={2.4} />
            Zpět do e-shopu
          </Link>
          <p className="eyebrow">E-shop / {product.category}</p>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
        </div>
        <div className={`product-detail-visual product-visual-${product.categorySlug}`}>
          <span>
            <FileText aria-hidden="true" size={18} strokeWidth={2.5} />
            {product.category === "Kurzy" ? "Online kurz" : "PDF materiál"}
          </span>
        </div>
      </section>

      <RevealSection className="section product-detail-grid">
        <article className="product-detail-card">
          <p className="eyebrow">Co položka obsahuje</p>
          <h2>{product.status}</h2>
          <ul>
            {product.includes.map((item) => (
              <li key={item}>
                <Check aria-hidden="true" size={17} strokeWidth={2.6} />
                {item}
              </li>
            ))}
          </ul>
        </article>
        <ProductPurchase product={product} />
      </RevealSection>
    </>
  );
}
