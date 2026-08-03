import Image from 'next/image'
import Link from 'next/link'
import Navbar from './components/nav'

export default function Page() {
  const portfolioImages = [
    'Portfolio1.jpg',
    'Portfolio4.jpg',
    'Portfolio2.jpg',
    'Portfolio5.jpg',
    'Portfolio3.jpg',
    'Portfolio6.jpg',
  ]

  return (
    <main>

    <Navbar />

      {/* HERO */}
      <section className="relative h-screen w-full overflow-hidden">

        <Image
  src="/hero.jpg"
  alt="Fotografia de casamento"
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
              Fotografia & Filmes de Casamento
            </p>

            <p className="mx-auto mt-6 max-w-xl text-base text-white/80 md:text-lg">
              Histórias reais, emoções eternas. Captando momentos únicos
              através de uma abordagem natural e cinematográfica.
            </p>

            <Link
              href="/portfolio"
              className="mt-10 inline-block border border-white px-8 py-3 text-sm uppercase tracking-[0.3em] transition-all duration-300 hover:bg-white hover:text-black"
            >
              Ver Portfólio
            </Link>

          </div>

        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white">
          <div className="animate-bounce text-2xl">
            ↓
          </div>
        </div>

      </section>



      {/* SOBRE MIM */}
      <section className="bg-white px-6 py-24 md:px-16 lg:px-32">

        <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">

          <div className="overflow-hidden animate-fade-left">

            <Image
              src="/about.jpg"
              alt="Pedro Oliveira a fotografar um casamento"
              width={800}
              height={1000}
              className="h-[600px] w-full object-cover"
            />

          </div>


          <div className="animate-fade-right">

            <p className="mb-6 text-sm uppercase tracking-[0.3em] text-neutral-500">
              A minha abordagem
            </p>

            <h2 className="text-4xl font-light leading-tight md:text-5xl">
              Mais do que fotografias,
              <br />
              memórias para toda a vida.
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-neutral-600">
              Acredito que os melhores momentos acontecem de forma natural.
              O meu objetivo é contar a vossa história através de imagens
              autênticas, emocionais e intemporais.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-neutral-600">
              Durante o vosso casamento procuro captar todos os pequenos
              detalhes, os olhares, os sorrisos e aquelas emoções que tornam
              cada história única.
            </p>

            <Link
              href="/sobre"
              className="mt-10 inline-block border border-black px-8 py-3 text-sm uppercase tracking-[0.3em] transition-all duration-300 hover:bg-black hover:text-white"
            >
              Conhecer mais
            </Link>

          </div>

        </div>

      </section>




      {/* PORTFÓLIO */}
      <section className="bg-black px-6 py-24 text-white md:px-16 lg:px-32">

        <div className="mx-auto max-w-7xl">

          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-white/50">
            Portfólio
          </p>

          <h2 className="text-4xl font-light leading-tight md:text-6xl">
            Histórias contadas
            <br />
            através de imagens.
          </h2>


          <div className="mt-16 grid gap-8 md:grid-cols-3">

            {portfolioImages.map((image) => (

              <div
                key={image}
                className="group relative overflow-hidden"
              >

                <Image
                  src={`/${image}`}
                  alt="Fotografia de casamento"
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




      {/* FILMES */}
      <section className="relative overflow-hidden bg-black px-6 py-24 text-white md:px-16 lg:px-32">

        <div className="mx-auto max-w-7xl">

          <div className="relative h-[600px] overflow-hidden">

            <Image
              src="/film.jpg"
              alt="Filme de casamento"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/50" />


            <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">

              <p className="mb-6 text-sm uppercase tracking-[0.3em] text-white/70">
                Filmes
              </p>

              <h2 className="text-4xl font-light md:text-6xl">
                Histórias que ganham vida.
              </h2>

              <p className="mt-6 max-w-xl text-lg text-white/80">
                Cada casamento é uma história única. Através do vídeo,
                transformo momentos, emoções e pequenos detalhes em
                memórias que podem ser revividas para sempre.
              </p>

              <Link
                href="/filmes"
                className="mt-10 border border-white px-8 py-3 text-sm uppercase tracking-[0.3em] transition-all duration-300 hover:bg-white hover:text-black"
              >
                Ver filmes
              </Link>

            </div>

          </div>

        </div>

      </section>




      {/* CONTACTO */}
      <section className="bg-white px-6 py-32 text-center md:px-16 lg:px-32">

        <div className="mx-auto max-w-4xl">

          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-neutral-500">
            Contacto
          </p>


          <h2 className="text-4xl font-light leading-tight md:text-6xl">
            Vamos criar algo
            <br />
            inesquecível juntos.
          </h2>


          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-neutral-600">
            Cada casamento tem uma história única.
            Conta-me os vossos planos e vamos criar imagens
            e filmes que vão guardar para sempre as emoções
            desse dia especial.
          </p>


          <Link
            href="/contacto"
            className="mt-12 inline-block border border-black px-10 py-4 text-sm uppercase tracking-[0.3em] transition-all duration-300 hover:bg-black hover:text-white"
          >
            Pedir orçamento
          </Link>


          <div className="mt-12 flex justify-center gap-8 text-sm uppercase tracking-widest text-neutral-500">

  <a
    href="https://www.instagram.com/pedroliveirafotografiaevideo"
    target="_blank"
    rel="noopener noreferrer"
    className="transition hover:text-black"
  >
    Instagram
  </a>

  <a
    href="mailto:Pedro.oliveira.fotografia.video@gmail.com"
    className="transition hover:text-black"
  >
    Email
  </a>

</div>
