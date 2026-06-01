import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, FileText } from "lucide-react";
import { ProductPurchase } from "../../../components/ProductPurchase";
import { RevealSection } from "../../../components/RevealSection";
import { productCategories, products } from "../../../data";

export function generateStaticParams() {
  return products.map((product) => ({
    category: product.categorySlug,
    product: product.slug,
  }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ category: string; product: string }>;
}) {
  const { category: categorySlug, product: productSlug } = await params;
  const category = productCategories.find((item) => item.slug === categorySlug);
  const product = products.find(
    (item) => item.categorySlug === categorySlug && item.slug === productSlug,
  );

  if (!category || !product) {
    notFound();
  }

  return (
    <>
      <section className="page-hero compact-hero product-hero">
        <div className="hero-copy">
          <Link className="back-link" href={`/eshop/${category.slug}`}>
            <ArrowLeft aria-hidden="true" size={17} strokeWidth={2.4} />
            Zpět do kategorie
          </Link>
          <p className="eyebrow">E-shop / {category.label}</p>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
        </div>
        <div className={`product-detail-visual product-visual-${product.categorySlug}`}>
          <span>
            <FileText aria-hidden="true" size={18} strokeWidth={2.5} />
            PDF materiál
          </span>
        </div>
      </section>

      <RevealSection className="section product-detail-grid">
        <article className="product-detail-card">
          <p className="eyebrow">Co materiál obsahuje</p>
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
