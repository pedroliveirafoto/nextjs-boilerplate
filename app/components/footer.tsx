"use client";

import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  const isFrench = pathname.startsWith("/fr");

  return (
    <footer className="border-t border-neutral-200 py-10">

      <div className="mx-auto max-w-7xl px-6 text-center">

        <p className="text-xs text-neutral-400">
          © 2026 Pedro Oliveira.{" "}
          {isFrench
            ? "Tous droits réservés."
            : "Todos os direitos reservados."}
        </p>

      </div>

    </footer>
  );
}
