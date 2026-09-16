import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageTemplate from "@/components/sections/page-template";
import { services } from "@/config/catalog";

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}
export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services[slug as keyof typeof services];
  return service
    ? {
        title: `${service.name} | Tapajós Extintores`,
        description: service.summary,
      }
    : {};
}

export default async function ServicoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services[slug as keyof typeof services];
  if (!service) notFound();
  return (
    <PageTemplate
      eyebrow="Serviço"
      title={service.name}
      description={service.description}
      image={service.image}
      imageAlt={service.name}
      intro="Um serviço realizado com atenção técnica para manter sua proteção pronta."
      ctaLabel="Agendar atendimento"
      ctaHref="/contato"
      highlights={[
        {
          title: "Avaliação",
          text: "Analisamos as condições do equipamento antes de recomendar o serviço.",
        },
        {
          title: "Processo responsável",
          text: "Seguimos uma rotina organizada e transparente em cada etapa.",
        },
        {
          title: "Orientação",
          text: "Você recebe informações claras sobre o cuidado necessário.",
        },
        {
          title: "Prontidão",
          text: "O objetivo é devolver confiança para sua operação.",
        },
      ]}
    />
  );
}
