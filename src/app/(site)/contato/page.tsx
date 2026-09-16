import type { Metadata } from "next";
import PageTemplate from "@/components/sections/page-template";

export const metadata: Metadata = {
  title: "Contato | Tapajós Extintores",
  description:
    "Entre em contato com a Tapajós Extintores para solicitar uma avaliação.",
};

export default function ContatoPage() {
  return (
    <PageTemplate
      eyebrow="Vamos conversar"
      title="Sua proteção começa com uma boa orientação."
      description="Conte o que você precisa e nossa equipe ajudará a encontrar o próximo passo para proteger seu ambiente."
      image="/tapajos_extintores_celualar.jpg"
      imageAlt="Atendimento da Tapajós Extintores por telefone"
      intro="Solicite um orçamento, tire dúvidas sobre produtos ou agende uma avaliação técnica."
      ctaLabel="Enviar uma mensagem"
      ctaHref="mailto:contato@tapajosextintores.com.br"
      highlights={[
        {
          title: "Orçamentos",
          text: "Descreva seu ambiente e receba uma recomendação adequada à sua necessidade.",
        },
        {
          title: "Atendimento regional",
          text: "Estamos em Santarém e atendemos clientes em toda a região.",
        },
        {
          title: "Dúvidas técnicas",
          text: "Nossa equipe orienta sobre escolha, instalação e manutenção.",
        },
        {
          title: "Resposta próxima",
          text: "Você fala com pessoas que entendem o contexto do seu negócio.",
        },
      ]}
    />
  );
}
