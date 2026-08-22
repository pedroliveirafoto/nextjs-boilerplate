import Image from "next/image";
import NavbarFr from "../../components/nav-fr";

export default function FilmsPage() {
  return (
    <main>

      <NavbarFr />

      {/* HERO */}
      <section className="relative h-[80vh] overflow-hidden">

        <Image
          src="/film.jpg"
          alt="Films de mariage"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">

          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-white/70">
            Films de mariage
          </p>

          <h1 className="text-5xl font-light md:text-7xl">
            Revivre chaque émotion.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/80">
            Plus qu&apos;une vidéo, un film qui vous permet de ressentir
            à nouveau chaque sourire, chaque larme et chaque instant vécu
            pendant votre journée.
          </p>

          <a
            href="https://www.youtube.com/@pedroliveirafotografiaevideo"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 inline-block border border-white px-8 py-3 text-sm uppercase tracking-[0.3em] transition-all duration-300 hover:bg-white hover:text-black"
          >
            Voir les films
          </a>

        </div>

      </section>


      {/* TEXTO */}
      <section className="bg-white px-6 py-24 md:px-16 lg:px-32">

        <div className="mx-auto max-w-4xl text-center">

          <h2 className="text-4xl font-light">
            Chaque mariage mérite d&apos;être raconté.
          </h2>

          <p className="mt-10 text-lg leading-8 text-neutral-600">
            La vidéo permet de revivre ce que les photographies ne peuvent
            pas toujours montrer : les voix, les mouvements, les étreintes
            et toute l&apos;émotion de cette journée.
          </p>

          <p className="mt-6 text-lg leading-8 text-neutral-600">
            Chaque film est créé de manière personnalisée, en respectant
            la personnalité de chaque couple et en préservant
            l&apos;authenticité de chaque moment.
          </p>

        </div>

      </section>

    </main>
  );
}
