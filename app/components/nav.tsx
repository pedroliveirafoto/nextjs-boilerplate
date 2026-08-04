
"use client";

import { useState } from "react";
import Link from "next/link";

const navItems = [
  { href: "/", label: "Início" },
  { href: "/portfolio", label: "Portfólio" },
  { href: "/filmes", label: "Filmes" },
  { href: "/sessoes", label: "Sessões" },
  { href: "/sobre", label: "Sobre Mim" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
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

        </nav>

        {/* BOTÃO MOBILE */}

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-3xl"
        >
          {open ? "✕" : "☰"}
        </button>

      </div>

      {/* MENU MOBILE */}

      {open && (
        <div className="md:hidden bg-black/95 backdrop-blur-md">

          <nav className="flex flex-col items-center py-10 gap-8">

            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="
                  text-white
                  uppercase
                  tracking-[0.25em]
                  text-lg
                  transition
                  hover:opacity-70
                "
              >
                {item.label}
              </Link>
            ))}

          </nav>

        </div>
      )}

    </header>
  );
}
