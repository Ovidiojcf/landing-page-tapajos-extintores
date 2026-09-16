"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navigation } from "@/config/navigation";
import { cn } from "@/lib/utils";

function isCurrentRoute(pathname: string, href: string) {
  return href === "/" ? pathname === href : pathname.startsWith(href);
}

export default function MobileMenu() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 border border-white/30 text-white transition-colors hover:border-brand-accent hover:text-brand-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-accent"
        onClick={() => setIsOpen((open) => !open)}
      >
        <span
          className={cn(
            "h-0.5 w-5 bg-current transition-transform",
            isOpen && "translate-y-2 rotate-45",
          )}
        />
        <span
          className={cn(
            "h-0.5 w-5 bg-current transition-opacity",
            isOpen && "opacity-0",
          )}
        />
        <span
          className={cn(
            "h-0.5 w-5 bg-current transition-transform",
            isOpen && "-translate-y-2 -rotate-45",
          )}
        />
      </button>

      <nav
        id="mobile-navigation"
        aria-label="Navegação mobile"
        className={cn(
          "absolute inset-x-0 top-full border-t border-white/10 bg-brand-dark px-6 py-4",
          !isOpen && "hidden",
        )}
      >
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-1 sm:px-4">
          {navigation.map((item) => {
            const isCurrent = isCurrentRoute(pathname, item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isCurrent ? "page" : undefined}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "border-l-2 px-4 py-3 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent",
                  isCurrent
                    ? "border-brand-accent bg-white/5 text-brand-accent"
                    : "border-transparent text-white/80 hover:border-brand-accent hover:text-brand-accent",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
