import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/config/catalog";

export const metadata: Metadata = {
  title: "Produtos | Tapajós Extintores",
  description:
    "Extintores, acessórios e soluções de prevenção contra incêndio.",
};

export default function ProdutosPage() {
  return (
    <main className="min-h-screen bg-brand-surface px-6 py-20 text-brand-dark sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-primary">
          Produtos e soluções
        </p>
        <h1 className="mt-5 max-w-3xl text-5xl font-bold leading-[.95] tracking-[-0.04em] sm:text-6xl">
          O equipamento certo para cada risco.
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-brand-text">
          Encontre soluções para proteger ambientes residenciais, comerciais,
          industriais e embarcações.
        </p>
        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {Object.entries(products).map(([slug, product]) => (
            <Link
              key={slug}
              href={`/produtos/${slug}`}
              className="border border-brand-border/40 bg-white p-8 transition-transform hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-primary"
            >
              <h2 className="text-2xl font-bold text-brand-primary">
                {product.name}
              </h2>
              <p className="mt-3 leading-7 text-brand-text">
                {product.summary}
              </p>
              <span className="mt-6 inline-block text-sm font-bold">
                Ver detalhes →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
