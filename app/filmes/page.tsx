import Image from "next/image";
import Link from "next/link";

export default function FilmesPage() {
  return (
    <main>

      <section className="relative h-[80vh] overflow-hidden">

        <Image
          src="/film.jpg"
          alt="Filmes de casamento"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">

          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-white/70">
            Filmes de Casamento
          </p>

          <h1 className="text-5xl font-light md:text-7xl">
            Reviver cada emoção.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/80">
            Mais do que um vídeo, um filme que vos permite voltar a sentir
            cada sorriso, cada lágrima e cada momento vivido no vosso dia.
          </p>

        </div>

      </section>

      <section className="bg-white px-6 py-24 md:px-16 lg:px-32">

        <div className="mx-auto max-w-4xl text-center">

          <h2 className="text-4xl font-light">
            Cada casamento merece ser contado.
          </h2>

          <p className="mt-10 text-lg leading-8 text-neutral-600">
            O vídeo permite reviver aquilo que as fotografias não conseguem
            mostrar: as vozes, os movimentos, os abraços e toda a emoção
            daquele dia.
          </p>

          <p className="mt-6 text-lg leading-8 text-neutral-600">
            Cada filme é criado de forma personalizada, respeitando a
            personalidade de cada casal e preservando a autenticidade de cada
            momento.
          </p>

          <Link
            href="/contacto"
            className="mt-12 inline-block border border-black px-8 py-3 text-sm uppercase tracking-[0.3em] transition-all duration-300 hover:bg-black hover:text-white"
          >
            Pedir orçamento
          </Link>

        </div>

      </section>

    </main>
  );
}
