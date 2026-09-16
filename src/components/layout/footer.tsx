import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="border-t border-brand-border/40 bg-brand-dark text-brand-surface">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-6 py-8 text-sm sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-16">
        <p>
          {siteConfig.name} · {siteConfig.location}
        </p>
        <div className="flex gap-5">
          <Link
            href="/termos"
            className="text-white/70 transition-colors hover:text-brand-accent"
          >
            Privacidade e termos
          </Link>
          <a
            href={`mailto:${siteConfig.contactEmail}`}
            className="text-white/70 transition-colors hover:text-brand-accent"
          >
            E-mail
          </a>
        </div>
      </div>
    </footer>
  );
}
