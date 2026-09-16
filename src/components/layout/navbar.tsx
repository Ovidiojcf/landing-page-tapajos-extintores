"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/config/navigation";
import { cn } from "@/lib/utils";
import MobileMenu from "./mobile-menu";

function isCurrentRoute(pathname: string, href: string) {
  return href === "/" ? pathname === href : pathname.startsWith(href);
}

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-dark text-white shadow-lg shadow-black/10">
      <div className="mx-auto flex min-h-20 w-full max-w-7xl items-center justify-between gap-6 px-6 sm:px-10 lg:px-16">
        <Link
          href="/"
          className="shrink-0 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-accent"
          aria-label="Tapajós Extintores - página inicial"
        >
          <Image
            src="/logo_tapajos.png"
            alt="Tapajós Extintores"
            width={92}
            height={92}
            priority
            className="h-14 w-14 object-contain sm:h-16 sm:w-16"
          />
        </Link>

        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-1 lg:flex"
        >
          {navigation.map((item) => {
            const isCurrent = isCurrentRoute(pathname, item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isCurrent ? "page" : undefined}
                className={cn(
                  "relative px-3 py-3 text-sm font-semibold transition-colors hover:text-brand-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent",
                  isCurrent ? "text-brand-accent" : "text-white/80",
                )}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute inset-x-3 bottom-1 h-0.5 origin-center bg-brand-accent transition-transform",
                    isCurrent ? "scale-x-100" : "scale-x-0",
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contato"
          className="hidden shrink-0 bg-brand-primary px-5 py-3 text-sm font-bold text-white transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-accent lg:inline-flex"
        >
          Fale conosco
        </Link>
        <MobileMenu />
      </div>
    </header>
  );
}
