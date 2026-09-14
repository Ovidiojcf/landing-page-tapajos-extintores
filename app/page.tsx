"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Wuzhi89VQ3Vy0a90utbAC78WsViH7A.png",
    alt: "Interior da loja Tapajós Extintores com equipamentos de segurança",
    eyebrow: "Pronta resposta",
    title: "Proteção preparada para o que importa.",
    description:
      "Extintores, recargas e soluções contra incêndio para empresas, embarcações e residências em Santarém.",
  },
  {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Wuzhi89VQ3Vy0a90utbAC78WsViH7A.png",
    alt: "Interior da loja Tapajós Extintores com equipamentos de segurança",
    eyebrow: "Segurança local",
    title: "Equipamentos certos para cada risco.",
    description:
      "Conte com orientação especializada para proteger pessoas, patrimônios e operações todos os dias.",
  },
  {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Wuzhi89VQ3Vy0a90utbAC78WsViH7A.png",
    alt: "Interior da loja Tapajós Extintores com equipamentos de segurança",
    eyebrow: "Confiança que permanece",
    title: "Sua empresa segura para seguir em frente.",
    description:
      "Cuidamos da manutenção e conformidade dos seus equipamentos com agilidade e atenção.",
  },
];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slide = slides[activeSlide];

  useEffect(() => {
    if (isPaused) return;
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 5500);
    return () => window.clearInterval(timer);
  }, [isPaused]);

  return (
    <main className="min-h-screen overflow-hidden bg-brand-dark text-brand-surface">
      <section
        className="relative isolate flex min-h-[min(760px,calc(100vh-2rem))] items-end overflow-hidden"
        aria-roledescription="carrossel"
        aria-label="Destaques da Tapajós Extintores"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
      >
        {slides.map((item, index) => (
          <div
            key={`${item.title}-${index}`}
            className={`absolute inset-0 transition-opacity duration-1000 motion-reduce:transition-none ${
              index === activeSlide ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
            aria-hidden={index !== activeSlide}
          >
            <img
              src={item.image}
              alt={item.alt}
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,8,7,.96)_0%,rgba(8,8,7,.72)_38%,rgba(8,8,7,.18)_75%,rgba(8,8,7,.42)_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(8,8,7,.8),transparent_55%)]" />
          </div>
        ))}

        <div className="relative z-10 mx-auto flex w-full max-w-7xl items-end px-6 pb-16 pt-32 sm:px-10 sm:pb-20 lg:px-16 lg:pb-24">
          <div className="max-w-2xl">
            <p className="mb-5 flex items-center gap-3 text-sm font-semibold tracking-[0.16em] text-brand-accent">
              <span className="h-px w-10 bg-brand-accent" />
              {slide.eyebrow}
            </p>
            <h1 className="max-w-xl text-5xl font-bold leading-[.95] tracking-[-0.04em] text-white sm:text-6xl lg:text-8xl">
              {slide.title}
            </h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-brand-surface/80 sm:text-lg">
              {slide.description}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contato"
                className="inline-flex items-center justify-center bg-brand-primary px-7 py-4 font-bold text-white shadow-[5px_5px_0_#CDAC9C] transition-transform hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-accent"
              >
                Solicite um orçamento
              </a>
              <a
                href="#servicos"
                className="inline-flex items-center justify-center border border-white/45 px-7 py-4 font-semibold text-white transition-colors hover:bg-white hover:text-brand-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-accent"
              >
                Conheça nossas soluções
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-7 right-6 z-10 flex items-center gap-3 sm:right-10 lg:right-16">
          <span className="mr-2 text-xs font-semibold text-white/70">{String(activeSlide + 1).padStart(2, "0")} / 03</span>
          {slides.map((item, index) => (
            <button
              key={item.title}
              type="button"
              aria-label={`Ir para o destaque ${index + 1}`}
              aria-current={index === activeSlide}
              onClick={() => setActiveSlide(index)}
              className={`h-1.5 transition-all focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-accent ${index === activeSlide ? "w-12 bg-brand-accent" : "w-6 bg-white/45 hover:bg-white"}`}
            />
          ))}
        </div>
      </section>

      <section id="servicos" className="grid border-t border-brand-border/50 bg-brand-surface text-brand-dark sm:grid-cols-3">
        <div className="border-b border-brand-border/50 px-6 py-8 sm:border-b-0 sm:border-r sm:px-10">
          <strong className="block text-3xl text-brand-primary">25+</strong>
          <span className="mt-2 block text-sm text-brand-text">anos no setor</span>
        </div>
        <div className="border-b border-brand-border/50 px-6 py-8 sm:border-b-0 sm:border-r sm:px-10">
          <strong className="block text-3xl text-brand-primary">ABC</strong>
          <span className="mt-2 block text-sm text-brand-text">soluções certificadas</span>
        </div>
        <div id="contato" className="px-6 py-8 sm:px-10">
          <strong className="block text-3xl text-brand-primary">PA</strong>
          <span className="mt-2 block text-sm text-brand-text">atendimento regional</span>
        </div>
      </section>
    </main>
  );
}
