"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Home() {
  const hero = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const motion = gsap.matchMedia();

      motion.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".hero-reveal", {
          opacity: 0,
          y: 28,
          duration: 0.8,
          stagger: 0.12,
          ease: "power2.out",
        });

        gsap.from(".hero-mark", {
          opacity: 0,
          scale: 0.92,
          duration: 1,
          delay: 0.2,
          ease: "power3.out",
        });
      });

      return () => motion.revert();
    },
    { scope: hero },
  );

  return (
    <main
      ref={hero}
      className="min-h-screen overflow-hidden bg-brand-dark text-brand-surface"
    >
      <section className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-16 px-6 py-16 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-16 lg:py-20">
        <div className="max-w-2xl">
          <p className="hero-reveal mb-6 text-sm font-semibold tracking-[0.2em] text-brand-accent">
            TAPAJ&Oacute;S EXTINTORES
          </p>
          <h1 className="hero-reveal max-w-2xl text-5xl font-bold leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
            Prote&ccedil;&atilde;o preparada para o que importa.
          </h1>
          <p className="hero-reveal mt-8 max-w-xl text-lg leading-8 text-brand-surface/70 sm:text-xl">
            Recarga, manuten&ccedil;&atilde;o e equipamentos contra
            inc&ecirc;ndio para empresas, embarca&ccedil;&otilde;es e
            resid&ecirc;ncias em Santar&eacute;m.
          </p>
          <div className="hero-reveal mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#servicos"
              className="inline-flex items-center justify-center bg-brand-primary px-6 py-4 font-semibold text-white transition-colors hover:bg-red-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-accent"
            >
              Conhe&ccedil;a nossos servi&ccedil;os
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center border border-brand-border px-6 py-4 font-semibold text-brand-surface transition-colors hover:bg-brand-surface hover:text-brand-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-accent"
            >
              Ver solu&ccedil;&otilde;es
            </a>
          </div>
        </div>

        <div className="hero-mark relative mx-auto flex aspect-square w-full max-w-md items-center justify-center border border-brand-border/60 bg-brand-surface p-8 text-brand-dark sm:p-12">
          <div className="absolute inset-5 border border-brand-accent/70 sm:inset-8" />
          <div className="relative flex h-56 w-40 items-center justify-center border-8 border-brand-primary bg-brand-accent shadow-[18px_18px_0_#81030C] sm:h-64 sm:w-48">
            <div className="absolute -top-8 h-8 w-16 border-8 border-b-0 border-brand-primary bg-brand-dark" />
            <div className="absolute -right-10 top-8 h-3 w-10 bg-brand-dark" />
            <div className="h-24 w-5 bg-brand-primary" />
          </div>
          <p className="absolute bottom-6 left-6 text-xs font-bold tracking-[0.18em] sm:bottom-10 sm:left-10">
            25 ANOS DE CONFIAN&Ccedil;A
          </p>
        </div>
      </section>

      <section
        id="servicos"
        className="grid border-t border-brand-border/50 bg-brand-surface text-brand-dark sm:grid-cols-3"
      >
        <div className="hero-reveal border-b border-brand-border/50 px-6 py-8 sm:border-b-0 sm:border-r sm:px-10">
          <strong className="block text-3xl text-brand-primary">25+</strong>
          <span className="mt-2 block text-sm text-brand-text">
            anos no setor
          </span>
        </div>
        <div className="hero-reveal border-b border-brand-border/50 px-6 py-8 sm:border-b-0 sm:border-r sm:px-10">
          <strong className="block text-3xl text-brand-primary">ABC</strong>
          <span className="mt-2 block text-sm text-brand-text">
            solu&ccedil;&otilde;es certificadas
          </span>
        </div>
        <div className="hero-reveal px-6 py-8 sm:px-10">
          <strong className="block text-3xl text-brand-primary">PA</strong>
          <span className="mt-2 block text-sm text-brand-text">
            atendimento regional
          </span>
        </div>
      </section>
    </main>
  );
}
