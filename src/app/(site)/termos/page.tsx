import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacidade e termos | Tapajós Extintores",
  description:
    "Informações sobre privacidade e uso do site Tapajós Extintores.",
};

export default function TermosPage() {
  return (
    <main className="min-h-screen bg-brand-surface px-6 py-20 text-brand-dark sm:px-10 lg:px-16">
      <article className="mx-auto max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-primary">
          Transparência
        </p>
        <h1 className="mt-5 text-5xl font-bold leading-[.95] tracking-[-0.04em]">
          Privacidade e termos
        </h1>
        <p className="mt-8 text-lg leading-8 text-brand-text">
          Esta área será atualizada com a política de privacidade, os termos de
          uso e as informações de tratamento de dados conforme os canais
          digitais forem publicados.
        </p>
        <h2 className="mt-12 text-2xl font-bold text-brand-primary">
          Compromisso com seus dados
        </h2>
        <p className="mt-4 leading-8 text-brand-text">
          Usamos as informações enviadas pelos canais de contato apenas para
          responder às solicitações e prestar o atendimento necessário.
        </p>
      </article>
    </main>
  );
}
