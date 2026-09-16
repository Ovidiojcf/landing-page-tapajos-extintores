import type { Metadata } from "next";
import PageTemplate from "@/components/sections/page-template";

export const metadata: Metadata = {
  title: "Qualidade | Tapajós Extintores",
  description:
    "Manutenção, recarga e equipamentos com foco em qualidade e conformidade.",
};

export default function QualidadePage() {
  return (
    <PageTemplate
      eyebrow="Qualidade e conformidade"
      title="Prevenção precisa de cuidado contínuo."
      description="Unimos processos responsáveis, equipamentos confiáveis e orientação técnica para manter sua proteção pronta."
      image="/tapajos_extintores_instalador.jpg"
      imageAlt="Profissional instalando um equipamento de segurança"
      intro="Cada serviço é realizado com atenção aos detalhes que fazem diferença quando a segurança não pode esperar."
      ctaLabel="Solicite uma avaliação"
      ctaHref="/contato"
      highlights={[
        {
          title: "Inspeção técnica",
          text: "Avaliamos as condições dos equipamentos e identificamos necessidades de manutenção.",
        },
        {
          title: "Recarga responsável",
          text: "Executamos recargas e testes com rastreabilidade e atenção às especificações.",
        },
        {
          title: "Orientação clara",
          text: "Explicamos o que precisa ser feito para sua equipe tomar decisões com segurança.",
        },
        {
          title: "Prontidão",
          text: "Acompanhamos os ciclos de manutenção para reduzir riscos e evitar imprevistos.",
        },
      ]}
    />
  );
}
