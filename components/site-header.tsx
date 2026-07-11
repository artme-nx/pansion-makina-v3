"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";

const LINKS = [
  { href: "#sobe", label: "Sobe" },
  { href: "#sadrzaji", label: "Sadržaji" },
  { href: "#dorucak", label: "Doručak" },
  { href: "#lokacija", label: "Lokacija" },
  { href: "#kontakt", label: "Kontakt" },
];

const PHONE = "+385 95 440 0155";
const PHONE_HREF = "tel:+385954400155";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the fullscreen mobile nav is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/90 backdrop-blur-md shadow-[0_1px_0_var(--surface-line)] py-3"
            : "py-5"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 md:px-8">
          <a href="#" className="font-display text-xl tracking-tight text-foreground md:text-2xl">
            Pansion <span className="text-terracotta italic">Makina</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[0.82rem] tracking-wide text-muted-foreground transition-colors hover:text-terracotta"
              >
                {l.label}
              </a>
            ))}
            <a
              href={PHONE_HREF}
              className="flex items-center gap-2 rounded-full border border-[var(--button-ghost-border)] px-4 py-2 text-[0.78rem] uppercase tracking-[0.12em] text-marina transition-all hover:border-terracotta hover:text-terracotta"
            >
              <Phone className="h-3.5 w-3.5" strokeWidth={2} />
              Rezervacija
            </a>
          </nav>

          <button
            aria-label={open ? "Zatvori izbornik" : "Otvori izbornik"}
            aria-expanded={open}
            className="relative z-50 flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={`block h-[1.5px] w-6 bg-foreground transition-transform duration-300 ${
                open ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] w-6 bg-foreground transition-transform duration-300 ${
                open ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile nav MUST be a sibling of <header>, not nested inside it —
          header gets backdrop-blur on scroll, which creates a containing
          block that would clip a `fixed` descendant to the header's box. */}
      <nav
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-background transition-opacity duration-300 md:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className="font-display text-2xl text-foreground"
          >
            {l.label}
          </a>
        ))}
        <a
          href={PHONE_HREF}
          onClick={() => setOpen(false)}
          className="mt-2 flex items-center gap-2 rounded-full bg-terracotta px-6 py-3 text-sm uppercase tracking-[0.12em] text-[var(--button-primary-fg)]"
        >
          <Phone className="h-4 w-4" strokeWidth={2} />
          {PHONE}
        </a>
      </nav>
    </>
  );
}
