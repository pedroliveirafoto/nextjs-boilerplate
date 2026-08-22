"use client";

import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  const isFrench = pathname.startsWith("/fr");

  return (
    <footer className="border-t border-neutral-200 py-10">

      <div className="mx-auto max-w-7xl px-6 text-center">

        <p className="text-sm uppercase tracking-[0.25em] text-neutral-400">
          Pedro Oliveira
        </p>

        <p className="mt-2 text-sm text-neutral-500">
          {isFrench
            ? "Photographie & Films de Mariage"
            : "Fotografia & Filmes de Casamento"}
        </p>

        <p className="mt-6 text-xs text-neutral-400">
          © 2026 Pedro Oliveira.{" "}
          {isFrench
            ? "Tous droits réservés."
            : "Todos os direitos reservados."}
        </p>

      </div>

    </footer>
  );
}
