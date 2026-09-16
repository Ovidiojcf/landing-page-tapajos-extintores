import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/config/catalog";

export function generateStaticParams() {
  return Object.keys(products).map((slug) => ({ slug }));
}
export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = products[slug as keyof typeof products];
  return product
    ? {
        title: `${product.name} | Tapajós Extintores`,
        description: product.summary,
      }
    : {};
}

export default async function ProdutoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products[slug as keyof typeof products];
  if (!product) notFound();
  return (
    <main className="min-h-screen bg-brand-surface text-brand-dark">
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:px-10 lg:grid-cols-2 lg:items-center lg:px-16 lg:py-24">
        <div className="relative aspect-4/3 overflow-hidden bg-brand-dark">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-primary">
            Produto
          </p>
          <h1 className="mt-5 text-5xl font-bold leading-[.95] tracking-[-0.04em]">
            {product.name}
          </h1>
          <p className="mt-7 text-lg leading-8 text-brand-text">
            {product.description}
          </p>
          <Link
            href="/contato"
            className="mt-8 inline-flex bg-brand-primary px-6 py-4 font-bold text-white"
          >
            Solicitar orientação
          </Link>
        </div>
      </section>
    </main>
  );
}
