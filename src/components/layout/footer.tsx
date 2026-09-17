import Link from "next/link";
import { navigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="bg-brand-primary text-white">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-14 sm:px-10 lg:grid-cols-[minmax(240px,1fr)_minmax(420px,1.5fr)] lg:px-16">
        <section aria-labelledby="footer-contact-title">
          <h2
            id="footer-contact-title"
            className="text-sm font-bold uppercase tracking-[0.08em] text-white"
          >
            Nossos contatos
          </h2>
          <address className="mt-6 flex flex-col gap-4 text-sm not-italic leading-6 text-white/85">
            <span>{siteConfig.contactAddress}</span>
            <span>
              <a
                href={`tel:${siteConfig.contactPhone.replace(/\D/g, "")}`}
                className="inline-flex min-h-11 items-center transition-colors hover:text-brand-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-accent"
              >
                {siteConfig.contactPhone}
              </a>{" "}
              /{" "}
              <a
                href={`https://wa.me/55${siteConfig.contactWhatsapp.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center transition-colors hover:text-brand-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-accent"
              >
                {siteConfig.contactWhatsapp} WhatsApp
              </a>
            </span>
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="inline-flex min-h-11 items-center transition-colors hover:text-brand-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-accent"
            >
              {siteConfig.contactEmail}
            </a>
          </address>
        </section>

        <nav aria-labelledby="footer-navigation-title">
          <h2
            id="footer-navigation-title"
            className="text-sm font-bold uppercase tracking-[0.08em] text-white"
          >
            Mapa do site
          </h2>
          <div className="mt-4 grid grid-cols-2 gap-x-8 gap-y-1 sm:grid-cols-3">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="min-h-11 py-3 text-sm text-white/85 transition-colors hover:text-brand-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-accent"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/fornecedores"
              className="min-h-11 py-3 text-sm text-white/85 transition-colors hover:text-brand-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-accent"
            >
              Fornecedores
            </Link>
          </div>
        </nav>
      </div>

      <div className="border-t border-white/15">
        <div className="mx-auto grid w-full max-w-7xl gap-6 px-6 py-6 text-xs text-white/80 sm:px-10 lg:grid-cols-3 lg:items-center lg:px-16">
          <p>© {siteConfig.name} - Todos os direitos reservados</p>
          <a
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${siteConfig.githubLabel} no GitHub`}
            className="inline-flex min-h-11 items-center gap-2 font-semibold text-white transition-colors hover:text-brand-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-accent lg:justify-center"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-5 w-5 fill-current"
            >
              <path d="M12 .7a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.4.7-4.1-1.6-4.1-1.6-.5-1.4-1.3-1.7-1.3-1.7-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.4-5.5-6a4.7 4.7 0 0 1 1.2-3.2c-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.9.1 3.2a4.7 4.7 0 0 1 1.2 3.2c0 4.6-2.8 5.7-5.5 6 .4.3.8 1 .8 2v3c0 .3.2.7.8.6A12 12 0 0 0 12 .7Z" />
            </svg>
            {siteConfig.githubLabel}
          </a>
          <span className="lg:text-right">
            Administração Remota - Caixa de E-mail
          </span>
        </div>
      </div>
    </footer>
  );
}
