"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    image: "/tapajos_extintores_equipe-v2.jpg",
    secondaryImage: "/tapajos_extintores_instalador.jpg",
    alt: "Equipe Tapajós Extintores reunida durante treinamento prático",
    secondaryAlt: "Profissional Tapajós realizando manutenção em extintor",
    eyebrow: "Prevenção na prática",
    title: (
      <>
        Proteção{" "}
        <span className="relative inline-block text-brand-primary">
          preparada
          <svg
            aria-hidden="true"
            className="absolute -bottom-2 left-0 h-2.5 w-full"
            viewBox="0 0 140 10"
            fill="none"
          >
            <path
              d="M2 7C38 2 92 2 138 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </span>{" "}
        para o que importa.
      </>
    ),
    description:
      "Extintores, recargas e soluções contra incêndio para empresas, embarcações e residências em Santarém.",
  },
  {
    image: "/tapajos_extintores_hero_img.jpg",
    secondaryImage: "/tapajos_extintores_vendedora.jpg",
    alt: "Fachada da loja Tapajós Extintores em Santarém",
    secondaryAlt: "Atendimento especializado na loja Tapajós Extintores",
    eyebrow: "Segurança local",
    title: (
      <>
        Equipamentos{" "}
        <span className="relative inline-block text-brand-accent">
          certos
          <svg
            aria-hidden="true"
            className="absolute -bottom-2 left-0 h-2.5 w-full"
            viewBox="0 0 100 10"
            fill="none"
          >
            <path
              d="M2 7C28 2 65 2 98 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </span>{" "}
        para cada risco.
      </>
    ),
    description:
      "Conte com orientação especializada para proteger pessoas, patrimônios e operações todos os dias.",
  },
  {
    image: "/tapajos_extintores_equipe-v2.jpg",
    secondaryImage: "/tapajos_extintores_quantidade_ideal_para_empresa.jpg",
    alt: "Equipe Tapajós Extintores reunida durante treinamento prático",
    secondaryAlt: "Equipamentos de proteção contra incêndio organizados",
    eyebrow: "Confiança que permanece",
    title: (
      <>
        Sua empresa{" "}
        <span className="relative inline-block text-brand-primary">
          segura
          <svg
            aria-hidden="true"
            className="absolute -bottom-2 left-0 h-2.5 w-full"
            viewBox="0 0 100 10"
            fill="none"
          >
            <path
              d="M2 7C28 2 65 2 98 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </span>{" "}
        para seguir em frente.
      </>
    ),
    description:
      "Cuidamos da manutenção e conformidade dos seus equipamentos com agilidade e atenção.",
  },
];

export default function HomeHero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slide = slides[activeSlide];

  useEffect(() => {
    if (isPaused) return;
    const timer = window.setInterval(
      () => setActiveSlide((current) => (current + 1) % slides.length),
      5500,
    );
    return () => window.clearInterval(timer);
  }, [isPaused]);

  return (
    <main className="min-h-screen overflow-hidden bg-brand-surface text-brand-dark">
      <section
        className="relative isolate flex min-h-[calc(100svh-5rem)] w-full flex-col justify-end overflow-hidden bg-brand-dark p-6 text-white lg:grid lg:h-[min(760px,calc(100vh-2rem))] lg:min-h-150 lg:grid-cols-2 lg:items-center lg:gap-12 lg:bg-brand-surface lg:p-0 lg:text-brand-dark"
        aria-roledescription="carrossel"
        aria-label="Destaques da Tapajós Extintores"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
      >
        {slides.map((item, index) => (
          <div
            key={`${item.eyebrow}-${index}`}
            className={`absolute inset-0 grid h-full grid-cols-1 items-center gap-12 transition-opacity duration-1000 motion-reduce:transition-none lg:grid-cols-2 ${index === activeSlide ? "opacity-100" : "pointer-events-none opacity-0"}`}
            aria-hidden={index !== activeSlide}
          >
            <div className="absolute inset-0 lg:relative lg:col-start-2 lg:row-start-1 lg:h-full">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="100vw"
                className="object-cover object-[center_35%] lg:hidden"
                priority={index === 0}
                loading={index === 0 ? "eager" : "lazy"}
              />
              <div className="absolute bottom-0 left-0 right-0 z-0 h-[40%] w-full bg-linear-to-t from-black/85 via-black/45 to-transparent backdrop-blur-md lg:hidden" />
              <div className="absolute inset-x-0 bottom-0 top-0 bg-[radial-gradient(circle_at_55%_40%,rgba(205,172,156,.7),rgba(241,240,240,0)_65%)] blur-2xl lg:inset-8" />
              <svg
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-0 hidden h-full w-full lg:block"
                viewBox="0 0 640 600"
                fill="none"
              >
                <path
                  d="M32 180C160 82 240 490 370 340S500 100 618 190"
                  stroke="#906B6D"
                  strokeDasharray="5 9"
                  strokeLinecap="round"
                  strokeOpacity=".7"
                />
                <circle cx="370" cy="340" r="4" fill="#81030C" />
                <circle cx="500" cy="100" r="4" fill="#81030C" />
              </svg>
              <div className="absolute inset-0 hidden items-center justify-center p-5 sm:p-10 lg:flex lg:p-12">
                <div className="relative h-full w-full overflow-hidden shadow-[0_28px_70px_rgba(75,63,61,.24)] lg:h-[80%] lg:w-[80%] lg:rounded-3xl">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1024px) 38vw, 120vw"
                    className="object-cover object-center"
                    priority={index === 0}
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </div>
                <div className="absolute bottom-[14%] left-[9%] hidden h-32 w-40 overflow-hidden rounded-3xl shadow-[0_20px_45px_rgba(75,63,61,.25)] sm:h-40 sm:w-52 lg:block">
                  <Image
                    src={item.secondaryImage}
                    alt={item.secondaryAlt}
                    fill
                    sizes="(min-width: 1024px) 16vw, 45vw"
                    className="object-cover object-center"
                  />
                </div>
              </div>
              <div className="absolute right-[9%] top-[17%] z-20 hidden rounded-2xl bg-white/90 p-3 shadow-lg backdrop-blur-md lg:block">
                <p className="text-xs font-bold text-brand-primary">
                  Atendimento Técnico
                </p>
                <p className="mt-1 text-[11px] text-brand-text">
                  Santarém e região
                </p>
              </div>
              <div className="absolute bottom-[9%] right-[8%] z-20 hidden rounded-2xl bg-white/90 p-3 shadow-lg backdrop-blur-md lg:block">
                <p className="text-lg font-bold text-brand-primary">25+</p>
                <p className="text-[11px] text-brand-text">
                  Anos de Experiência
                </p>
              </div>
            </div>
            <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 sm:p-10 lg:relative lg:col-start-1 lg:row-start-1 lg:block lg:bg-transparent lg:px-16 lg:py-20 xl:px-24">
              <div className="relative z-10 flex w-full flex-col gap-3 lg:mt-0 lg:max-w-xl">
                <p className="flex items-center gap-3 text-sm font-medium tracking-wide text-gray-200 lg:mb-5 lg:font-semibold lg:tracking-[0.16em] lg:text-brand-accent">
                  <span className="h-px w-10 bg-brand-accent" />
                  {slide.eyebrow}
                </p>
                <h1 className="max-w-xl text-pretty text-3xl font-bold leading-tight text-white drop-shadow-md lg:text-6xl lg:leading-[.98] lg:tracking-[-0.04em] lg:text-brand-dark lg:drop-shadow-none">
                  {slide.title}
                </h1>
                <p className="max-w-sm text-sm text-gray-200 lg:mt-6 lg:max-w-lg lg:text-base lg:leading-7 lg:text-brand-text sm:text-lg">
                  {slide.description}
                </p>
                <div className="mt-2 flex w-full flex-col gap-2.5 sm:flex-row sm:gap-4 lg:mt-8">
                  <Link
                    href="/contato"
                    className="inline-flex w-full items-center justify-center rounded-full bg-brand-primary px-8 py-3.5 font-bold text-white shadow-none transition-[transform,box-shadow] hover:-translate-y-1 hover:shadow-[4px_4px_0_#CDAC9C] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-primary sm:w-auto lg:whitespace-nowrap lg:px-6"
                  >
                    Solicite um orçamento
                  </Link>
                  <Link
                    href="/servicos"
                    className="inline-flex w-full items-center justify-center rounded-full border border-white/60 px-8 py-3.5 font-semibold text-white transition-[background-color,color,box-shadow] hover:bg-white hover:text-brand-dark hover:shadow-[4px_4px_0_#CDAC9C] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-primary sm:w-auto lg:whitespace-nowrap lg:border-brand-text/35 lg:px-6 lg:text-brand-dark"
                  >
                    Conheça nossas soluções
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="absolute right-6 top-6 z-10 flex items-center gap-3 sm:right-10 lg:bottom-7 lg:top-auto lg:right-16">
          <span className="mr-2 text-xs font-semibold text-white/70">
            {String(activeSlide + 1).padStart(2, "0")} / 03
          </span>
          {slides.map((item, index) => (
            <button
              key={`slide-control-${index}`}
              type="button"
              aria-label={`Ir para o destaque ${index + 1}`}
              aria-current={index === activeSlide}
              onClick={() => setActiveSlide(index)}
              className={`h-1.5 transition-all focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-accent ${index === activeSlide ? "w-12 bg-brand-accent" : "w-6 bg-white/45 hover:bg-white"}`}
            />
          ))}
        </div>
      </section>
      <section
        id="servicos"
        className="grid border-t border-brand-border/50 bg-brand-surface text-brand-dark sm:grid-cols-3"
      >
        <div className="border-b border-brand-border/50 px-6 py-8 sm:border-b-0 sm:border-r sm:px-10">
          <strong className="block text-3xl text-brand-primary">25+</strong>
          <span className="mt-2 block text-sm text-brand-text">
            anos no setor
          </span>
        </div>
        <div className="border-b border-brand-border/50 px-6 py-8 sm:border-b-0 sm:border-r sm:px-10">
          <strong className="block text-3xl text-brand-primary">ABC</strong>
          <span className="mt-2 block text-sm text-brand-text">
            soluções certificadas
          </span>
        </div>
        <div id="contato" className="px-6 py-8 sm:px-10">
          <strong className="block text-3xl text-brand-primary">PA</strong>
          <span className="mt-2 block text-sm text-brand-text">
            atendimento regional
          </span>
        </div>
      </section>
    </main>
  );
}
