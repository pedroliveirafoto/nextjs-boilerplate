import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
  const portfolioImages = [
    'portfolio1.jpg',
    'portfolio2.jpg',
    'portfolio3.jpg',
    'portfolio4.jpg',
    'portfolio5.jpg',
    'portfolio6.jpg',
  ]

  return (
    <main>

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
              className="
                mt-10
                inline-block
                border
                border-white
                px-8
                py-3
                text-sm
                uppercase
                tracking-[0.3em]
                transition-all
                duration-300
                hover:bg-white
                hover:text-black
              "
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
              className="
                mt-10
                inline-block
                border
                border-black
                px-8
                py-3
                text-sm
                uppercase
                tracking-[0.3em]
                transition-all
                duration-300
                hover:bg-black
                hover:text-white
              "
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
                className="
                  group
                  relative
                  overflow-hidden
                "
              >

                <Image
                  src={`/${image}`}
                  alt="Fotografia de casamento"
                  width={800}
                  height={1200}
                  className="
                    w-full
                    h-auto
                    object-contain
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />


                <div
                  className="
                    absolute
                    inset-0
                    bg-black/0
                    transition-all
                    duration-500
                    group-hover:bg-black/20
                  "
                />

              </div>

            ))}


          </div>


        </div>

      </section>


    </main>
  )
}
