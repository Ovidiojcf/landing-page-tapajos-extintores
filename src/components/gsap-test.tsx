"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export function GsapTest() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".gsap-test-item", {
        opacity: 0,
        y: 24,
        duration: 0.8,
        stagger: 0.12,
        ease: "power2.out",
      });
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="bg-brand-surface px-6 py-12 text-brand-dark"
      aria-labelledby="gsap-test-title"
    >
      <div className="mx-auto max-w-xl space-y-4">
        <p className="gsap-test-item text-sm font-semibold text-brand-primary">
          GSAP ativo
        </p>
        <h2 id="gsap-test-title" className="gsap-test-item text-3xl font-bold">
          Seguran&ccedil;a come&ccedil;a na preven&ccedil;&atilde;o.
        </h2>
        <p className="gsap-test-item text-brand-text">
          Componente de verifica&ccedil;&atilde;o da anima&ccedil;&atilde;o e da
          paleta da Tapaj&oacute;s Extintores.
        </p>
        <button
          type="button"
          className="gsap-test-item bg-brand-primary px-5 py-3 font-semibold text-white"
        >
          Solicitar or&ccedil;amento
        </button>
      </div>
    </section>
  );
}
