import Image from "next/image";
import Link from "next/link";
import type { SectionPageData } from "@/types";

export default function PageTemplate({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  intro,
  highlights,
  ctaLabel,
  ctaHref,
}: SectionPageData) {
  return (
    <main className="min-h-screen bg-brand-surface text-brand-dark">
      <section className="relative isolate overflow-hidden bg-brand-dark text-white">
        <div className="absolute inset-0 -z-10">
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-45"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,8,7,.98)_0%,rgba(8,8,7,.78)_50%,rgba(8,8,7,.45)_100%)]" />
        </div>
        <div className="mx-auto grid min-h-[min(600px,calc(100vh-5rem))] w-full max-w-7xl items-end gap-12 px-6 pb-16 pt-24 sm:px-10 sm:pb-20 lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:px-16 lg:py-24">
          <div className="max-w-3xl">
            <p className="mb-5 flex items-center gap-3 text-sm font-semibold tracking-[0.16em] text-brand-accent">
              <span className="h-px w-10 bg-brand-accent" />
              {eyebrow}
            </p>
            <h1 className="max-w-3xl text-5xl font-bold leading-[.95] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
              {title}
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-brand-surface/80 sm:text-lg">
              {description}
            </p>
          </div>
          <div className="hidden border-l border-brand-accent/60 pl-8 lg:block">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-accent">
              Tapajós Extintores
            </p>
            <p className="mt-4 max-w-xs text-lg leading-8 text-white/80">
              Proteção preparada para pessoas, patrimônios e operações.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-primary">
              Uma escolha segura
            </p>
            <p className="mt-5 text-2xl font-semibold leading-tight text-brand-text sm:text-3xl">
              {intro}
            </p>
            <Link
              href={ctaHref}
              className="mt-8 inline-flex bg-brand-primary px-6 py-4 font-bold text-white shadow-[5px_5px_0_#CDAC9C] transition-transform hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-primary"
            >
              {ctaLabel}
            </Link>
          </div>
          <div className="grid gap-px border border-brand-border/40 bg-brand-border/40 sm:grid-cols-2">
            {highlights.map((highlight) => (
              <article
                key={highlight.title}
                className="bg-brand-surface p-7 sm:p-8"
              >
                <h2 className="text-xl font-bold text-brand-primary">
                  {highlight.title}
                </h2>
                <p className="mt-3 leading-7 text-brand-text">
                  {highlight.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
