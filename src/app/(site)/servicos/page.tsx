import type { Metadata } from "next";
import ServicesGrid from "@/components/sections/services/services-grid";
import { services } from "@/config/catalog";

export const metadata: Metadata = {
  title: "Serviços | Tapajós Extintores",
  description:
    "Recarga, manutenção e testes para equipamentos contra incêndio.",
};

export default function ServicosPage() {
  return (
    <main className="min-h-screen bg-brand-surface px-6 py-20 text-brand-dark sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-primary">
          Serviços
        </p>
        <h1 className="mt-5 max-w-3xl text-5xl font-bold leading-[.95] tracking-[-0.04em] sm:text-6xl">
          Proteção precisa de cuidado contínuo.
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-brand-text">
          Conte com uma equipe preparada para manter seus equipamentos prontos
          quando você mais precisar.
        </p>
        <div className="mt-14">
          <ServicesGrid
            services={Object.entries(services).map(([slug, service]) => ({
              slug,
              ...service,
            }))}
          />
        </div>
      </div>
    </main>
  );
}
