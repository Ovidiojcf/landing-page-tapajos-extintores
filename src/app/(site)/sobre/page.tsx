import type { Metadata } from "next";
import PageTemplate from "@/components/sections/page-template";

export const metadata: Metadata = {
  title: "Sobre | Tapajós Extintores",
  description:
    "Conheça a história e a atuação da Tapajós Extintores em Santarém.",
};

export default function SobrePage() {
  return (
    <PageTemplate
      eyebrow="Nossa empresa"
      title="Experiência que protege o que importa."
      description="Há mais de 25 anos, ajudamos empresas, embarcações e residências a se prepararem para situações de emergência."
      image="/tapajos_extintores_equipe-v2.jpg"
      imageAlt="Equipe Tapajós Extintores reunida durante treinamento"
      intro="Atendimento próximo, orientação clara e soluções adequadas para cada ambiente."
      ctaLabel="Fale com nossa equipe"
      ctaHref="/contato"
      highlights={[
        {
          title: "Experiência local",
          text: "Conhecemos os desafios de segurança de Santarém e da região oeste do Pará.",
        },
        {
          title: "Atendimento próximo",
          text: "Nossa equipe acompanha cada etapa, da escolha do equipamento à manutenção.",
        },
        {
          title: "Compromisso diário",
          text: "Trabalhamos para que a prevenção faça parte da rotina da sua operação.",
        },
        {
          title: "Responsabilidade",
          text: "Cuidamos de pessoas e patrimônios com seriedade, agilidade e transparência.",
        },
      ]}
    />
  );
}
