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
    "Fotografia e filmes de casamento com uma abordagem natural e cinematográfica.",
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
      <body className="min-h-screen flex flex-col bg-white text-black">
        <main className="flex-1">
          {children}
        </main>

        <footer className="border-t border-neutral-200 py-8">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <p className="text-sm text-neutral-500">
              © {new Date().getFullYear()} Pedro Oliveira. Todos os direitos reservados.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
