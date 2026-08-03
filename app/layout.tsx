import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pedro Oliveira | Fotografia & Filmes de Casamento",
  description:
    "Fotografia e filmes de casamento em Portugal e França. Histórias reais, emoções eternas e momentos únicos contados de forma natural e cinematográfica.",

  alternates: {
    languages: {
      "pt-PT": "/",
      "fr-FR": "/fr",
    },
  },

  keywords: [
    "fotógrafo de casamento",
    "photographe mariage",
    "fotografia casamento Portugal",
    "photographe mariage France",
    "filmes de casamento",
    "film mariage",
    "Pedro Oliveira Fotografia",
  ],

  authors: [
    {
      name: "Pedro Oliveira",
    },
  ],

  creator: "Pedro Oliveira",

  openGraph: {
    title: "Pedro Oliveira | Fotografia & Filmes de Casamento",
    description:
      "Fotografia e filmes de casamento em Portugal e França com uma abordagem natural, elegante e cinematográfica.",
    type: "website",
    locale: "pt_PT",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">

        <main className="flex-1">
          {children}
        </main>

        <footer className="border-t border-neutral-200 py-10">

          <div className="mx-auto max-w-7xl px-6 text-center">

            <p className="text-sm uppercase tracking-[0.25em] text-neutral-400">
              Pedro Oliveira
            </p>

            <p className="mt-2 text-sm text-neutral-500">
              Fotografia & Filmes de Casamento
            </p>

            <p className="mt-6 text-xs text-neutral-400">
              © 2026 Pedro Oliveira. Todos os direitos reservados.
            </p>

          </div>

        </footer>

      </body>
    </html>
  );
}
