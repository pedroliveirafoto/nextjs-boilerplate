import Image from "next/image";
import Link from "next/link";
import NavbarFr from "../components/nav-fr";

export default function Page() {
  const portfolioImages = [
    "Portfolio1.jpg",
    "Portfolio4.jpg",
    "Portfolio2.jpg",
    "Portfolio5.jpg",
    "Portfolio3.jpg",
    "Portfolio6.jpg",
  ];

  return (
    <main>

      <NavbarFr />

      {/* HERO */}
      <section className="relative h-screen w-full overflow-hidden">

        <Image
          src="/hero.jpg"
          alt="Photographie de mariage"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 flex flex-col items-center justify-end px-6 pb-32 text-center text-white">

          <div className="animate-fade-up">

            <h1 className="text-5xl font-light tracking-wide md:text-7xl">
              Pedro Oliveira
            </h1>

            <p className="mt-6 text-xl font-light tracking-widest uppercase md:text-2xl">
              Photographie & Films de Mariage
            </p>

            <p className="mx-auto mt-6 max-w-xl text-base text-white/80 md:text-lg">
              Des histoires vraies, des émotions éternelles. Je capture
              des moments uniques à travers une approche naturelle et
              cinématographique.
            </p>

            <Link
              href="/fr/portfolio"
              className="mt-10 inline-block border border-white px-8 py-3 text-sm uppercase tracking-[0.3em] transition-all duration-300 hover:bg-white hover:text-black"
            >
              Voir le portfolio
            </Link>

          </div>

        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white">
          <div className="animate-bounce text-2xl">
            ↓
          </div>
        </div>

      </section>


      {/* À PROPOS */}
      <section className="bg-white px-6 py-24 md:px-16 lg:px-32">

        <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-[1.2fr_1fr]">

          <div className="overflow-hidden animate-fade-left">

            <Image
              src="/about.jpg"
              alt="Pedro Oliveira"
              width={900}
              height={900}
              className="h-[700px] w-full object-cover shadow-2xl"
            />

          </div>

          <div className="animate-fade-right">

            <p className="mb-6 text-sm uppercase tracking-[0.3em] text-neutral-700">
              Mon approche
            </p>

            <h2 className="text-4xl font-light leading-tight md:text-5xl">
              Plus que des photographies,
              <br />
              des souvenirs pour toute une vie.
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-neutral-600">
              Je crois que les plus beaux moments arrivent naturellement.
              Mon objectif est de raconter votre histoire à travers des images
              authentiques, émouvantes et intemporelles.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-neutral-600">
              Le jour de votre mariage, je cherche à capturer tous ces petits
              détails, les regards, les sourires et les émotions qui rendent
              chaque histoire unique.
            </p>

            <Link
              href="/fr/a-propos"
              className="mt-10 inline-block border border-black px-8 py-3 text-sm uppercase tracking-[0.3em] transition-all duration-300 hover:bg-black hover:text-white"
            >
              En savoir plus
            </Link>

          </div>

        </div>

      </section>


      {/* PORTFOLIO */}
      <section className="bg-black px-6 py-24 text-white md:px-16 lg:px-32">

        <div className="mx-auto max-w-7xl">

          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-white/50">
            Portfolio
          </p>

          <h2 className="text-4xl font-light leading-tight md:text-6xl">
            Des histoires racontées
            <br />
            à travers les images.
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-3">

            {portfolioImages.map((image) => (

              <div
                key={image}
                className="group relative overflow-hidden"
              >

                <Image
                  src={`/${image}`}
                  alt="Photographie de mariage"
                  width={800}
                  height={1200}
                  className="h-auto w-full object-contain transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/20" />

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* FILMS */}
      <section className="relative overflow-hidden bg-black px-6 py-24 text-white md:px-16 lg:px-32">

        <div className="mx-auto max-w-7xl">

          <div className="relative h-[600px] overflow-hidden">

            <Image
              src="/film.jpg"
              alt="Film de mariage"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/50" />

            <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">

              <p className="mb-6 text-sm uppercase tracking-[0.3em] text-white/70">
                Films
              </p>

              <h2 className="text-4xl font-light md:text-6xl">
                Des histoires qui prennent vie.
              </h2>

              <p className="mt-6 max-w-xl text-lg text-white/80">
                Chaque mariage raconte une histoire unique. À travers la vidéo,
                je transforme les moments, les émotions et les petits détails
                en souvenirs que vous pourrez revivre encore et encore.
              </p>

              <div className="mt-10 flex flex-col items-center gap-4">

                <Link
                  href="/fr/films"
                  className="border border-white px-8 py-3 text-sm uppercase tracking-[0.3em] transition-all duration-300 hover:bg-white hover:text-black"
                >
                  Voir les films
                </Link>

                <a
                  href="https://www.youtube.com/@pedroliveirafotografiaevideo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white/40 px-8 py-3 text-sm uppercase tracking-[0.3em] text-white/80 transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
                >
                  YouTube
                </a>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* CONTACT */}
      <section className="bg-white px-6 py-32 text-center md:px-16 lg:px-32">

        <div className="mx-auto max-w-4xl">

          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-neutral-700">
            Contact
          </p>

          <h2 className="text-4xl font-light leading-tight md:text-6xl">
            Créons ensemble quelque chose
            <br />
            d'inoubliable.
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-neutral-600">
            Chaque mariage possède une histoire unique.
            Parlez-moi de votre journée et créons ensemble des images
            et des films qui préserveront pour toujours les émotions
            de ce moment si particulier.
          </p>

          <Link
            href="/fr/contact"
            className="mt-12 inline-block border border-black px-10 py-4 text-sm uppercase tracking-[0.3em] transition-all duration-300 hover:bg-black hover:text-white"
          >
            Demander un devis
          </Link>

        </div>

      </section>

    </main>
  );
}
