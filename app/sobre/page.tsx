import Image from "next/image";
import Link from "next/link";

export default function SobrePage() {
  return (
    <main>

    <section className="bg-white px-6 py-32 md:px-16 lg:px-32">

  <div className="mx-auto flex max-w-7xl flex-col items-center gap-20 lg:flex-row lg:items-center">

   {/* FOTOS */}
<div className="relative lg:w-2/5 animate-fade-left">

  {/* FOTO PRINCIPAL */}
  <Image
    src="/about.jpg"
    alt="Pedro Oliveira"
    width={600}
    height={800}
    className="
      h-[620px]
      w-[430px]
      object-cover
      shadow-2xl
    "
  />

  {/* FOTO PEQUENA 1 */}
  <Image
    src="/about2.jpg"
    alt="Pedro Oliveira"
    width={400}
    height={500}
    className="
      absolute
      -bottom-10
      -right-8
      h-[280px]
      w-[210px]
      object-cover
      shadow-2xl
    "
  />

  {/* FOTO PEQUENA 2 */}
  <Image
    src="/about3.jpg"
    alt="Pedro Oliveira"
    width={400}
    height={500}
    className="
      absolute
      bottom-24
      -right-32
      h-[220px]
      w-[170px]
      object-cover
      shadow-2xl
    "
  />

</div>

    </div>

          <div>

            <p className="mb-6 text-sm uppercase tracking-[0.3em] text-neutral-500">
              Sobre Mim
            </p>

            <h1 className="text-5xl font-light leading-tight">
              Mais do que fotografias.
              <br />
              Histórias para recordar.
            </h1>

            <p className="mt-8 text-lg leading-8 text-neutral-600">
              Olá, sou o Pedro Oliveira.
            </p>

            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Acredito que as melhores fotografias não são criadas.
              Acontecem.
            </p>

            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Um olhar inesperado, um abraço apertado, uma lágrima de
              felicidade ou um sorriso espontâneo são momentos que nunca se
              repetem. É precisamente aí que encontro a verdadeira essência de
              um casamento.
            </p>

            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Ao longo da minha vida aprendi que cada pessoa tem uma história
              única e que os pequenos detalhes são, muitas vezes, os mais
              importantes. Essa forma de olhar para as pessoas acompanha-me em
              todos os casamentos que fotografo.
            </p>

            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Trabalho em Portugal e em França, acompanhando casais que
              valorizam autenticidade, simplicidade e emoção.
            </p>

          </div>

        </div>

      </section>

      <section className="bg-neutral-100 px-6 py-24 md:px-16 lg:px-32">

        <div className="mx-auto max-w-4xl">

          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-neutral-500">
            O que podem esperar de mim
          </p>

          <ul className="space-y-6 text-lg leading-8 text-neutral-700">

            <li>• Uma presença discreta durante todo o dia.</li>


            <li>• Atenção aos pequenos detalhes e às emoções genuínas.</li>

            <li>
              • Um acompanhamento próximo desde o primeiro contacto até à
              entrega final.
            </li>

          </ul>

          <p className="mt-12 text-lg leading-8 text-neutral-700">
            Cada casamento é diferente. Cada casal tem a sua personalidade,
            as suas pessoas e a sua história.
          </p>

          <p className="mt-6 text-lg leading-8 text-neutral-700">
            É exatamente isso que procuro preservar.
          </p>

          <p className="mt-6 text-lg leading-8 text-neutral-700">
            Se sentem que esta forma de contar histórias faz sentido para
            vocês, será um privilégio conhecer-vos e fazer parte desse momento
            tão especial.
          </p>

          <Link
            href="/contacto"
            className="mt-12 inline-block border border-black px-8 py-3 text-sm uppercase tracking-[0.3em] transition-all duration-300 hover:bg-black hover:text-white"
          >
            Vamos conversar
          </Link>

        </div>

      </section>

    </main>
  );
}
