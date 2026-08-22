"use client";

import { useState } from "react";
import Link from "next/link";

const navItems = [
  { href: "/fr", label: "Accueil" },
  { href: "/fr/portfolio", label: "Portfolio" },
  { href: "/fr/films", label: "Films" },
  { href: "/fr/seances", label: "Séances" },
  { href: "/fr/a-propos", label: "À propos" },
  { href: "/fr/contact", label: "Contact" },
];

export default function NavbarFr() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 z-50 w-full">

      <div className="mx-auto flex max-w-7xl items-center justify-end px-8 py-8">

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex items-center gap-10">

          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="
                relative
                text-white
                text-sm
                uppercase
                tracking-[0.25em]
                font-light
                pb-1
                after:absolute
                after:left-0
                after:bottom-0
                after:h-[1px]
                after:w-0
                after:bg-white
                after:transition-all
                after:duration-300
                hover:after:w-full
              "
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/"
            className="ml-2 text-xs uppercase tracking-[0.2em] text-white/70 transition hover:text-white"
          >
            PT
          </Link>

          <span className="text-white/40">|</span>

          <span className="text-xs uppercase tracking-[0.2em] text-white">
            FR
          </span>

        </nav>

        {/* MOBILE */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-3xl"
          aria-label="Menu"
        >
          {open ? "✕" : "☰"}
        </button>

      </div>

      {open && (
        <div className="md:hidden bg-black/95 backdrop-blur-md">

          <nav className="flex flex-col items-center gap-8 py-10">

            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-lg uppercase tracking-[0.25em] text-white transition hover:opacity-70"
              >
                {item.label}
              </Link>
            ))}

            <div className="mt-4 flex items-center gap-5">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-[0.2em] text-white/60"
              >
                PT
              </Link>

              <span className="text-white/40">|</span>

              <span className="text-sm uppercase tracking-[0.2em] text-white">
                FR
              </span>
            </div>

          </nav>

        </div>
      )}

    </header>
  );
}
