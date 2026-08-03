import Link from 'next/link'

export default function Contacto() {
  return (
    <main>

      {/* HERO */}
      <section className="bg-black px-6 py-32 text-center text-white md:px-16 lg:px-32">

        <p className="mb-6 text-sm uppercase tracking-[0.3em] text-white/60">
          Contacto
        </p>

        <h1 className="text-5xl font-light md:text-7xl">
          Vamos contar a
          <br />
          vossa história?
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg text-white/80">
          Se gostam do meu trabalho, será um prazer conhecer a vossa história e
          criar fotografias e filmes que vos permitam reviver cada emoção do
          vosso dia especial.
        </p>

      </section>

      {/* CONTACTOS */}
      <section className="bg-white px-6 py-24 md:px-16 lg:px-32">

        <div className="mx-auto max-w-3xl text-center">

          <h2 className="text-4xl font-light">
            Entrem em contacto
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-neutral-600">
            Responderei com todo o gosto o mais rapidamente possível.
          </p>

          <div className="mt-16 space-y-10">

            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
                Email
              </p>

              <a
                href="mailto:pedro.oliveira.fotografia.video@gmail.com"
                className="mt-2 inline-block text-xl md:text-2xl hover:underline"
              >
                pedro.oliveira.fotografia.video@gmail.com
              </a>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
                Instagram
              </p>

              <a
                href="#"
                className="mt-2 inline-block text-xl md:text-2xl hover:underline"
              >
                @pedrooliveira.fotografia
              </a>
            </div>

          </div>

          <Link
            href="/portfolio"
            className="mt-16 inline-block border border-black px-8 py-3 text-sm uppercase tracking-[0.3em] transition-all duration-300 hover:bg-black hover:text-white"
          >
            Ver Portfólio
          </Link>

        </div>

      </section>

    </main>
  )
}
