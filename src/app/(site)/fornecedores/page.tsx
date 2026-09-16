import type { Metadata } from "next";
import PageTemplate from "@/components/sections/page-template";

export const metadata: Metadata = {
  title: "Fornecedores | Tapajós Extintores",
  description:
    "Parcerias e fornecimento de soluções para prevenção contra incêndio.",
};

export default function FornecedoresPage() {
  return (
    <PageTemplate
      eyebrow="Para fornecedores"
      title="Parcerias que mantêm a proteção em movimento."
      description="Buscamos relações consistentes com marcas e profissionais que compartilham nosso compromisso com a segurança."
      image="/tapajos_extintores_vendedora.jpg"
      imageAlt="Profissional atendendo cliente na loja"
      intro="Se você fornece produtos ou serviços para prevenção contra incêndio, queremos conhecer sua proposta."
      ctaLabel="Seja um fornecedor"
      ctaHref="/contato"
      highlights={[
        {
          title: "Relações duradouras",
          text: "Valorizamos comunicação transparente e parceria construída no longo prazo.",
        },
        {
          title: "Qualidade",
          text: "Priorizamos produtos e serviços alinhados às necessidades dos nossos clientes.",
        },
        {
          title: "Agilidade",
          text: "Organizamos nosso processo para responder com clareza e manter o abastecimento.",
        },
        {
          title: "Proximidade regional",
          text: "Atuamos conectando bons parceiros às demandas da nossa região.",
        },
      ]}
    />
  );
}
