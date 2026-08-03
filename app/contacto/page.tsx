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

          <div className="mt-16 flex flex-wrap justify-center gap-12 text-lg uppercase tracking-[0.3em] text-neutral-700">

  <a
    href="mailto:pedro.oliveira.fotografia.video@gmail.com"
    className="transition duration-300 hover:opacity-50"
  >
    Email
  </a>

  <a
    href="https://wa.me/351916814516?text=Olá%20Pedro!%20Vi%20o%20teu%20website%20e%20gostava%20de%20pedir%20informações%20sobre%20fotografia%20e%20vídeo%20de%20casamento."
    target="_blank"
    rel="noopener noreferrer"
    className="transition duration-300 hover:opacity-50"
  >
    WhatsApp
  </a>

  <a
    href="https://www.instagram.com/pedroliveirafotografiaevideo"
    target="_blank"
    rel="noopener noreferrer"
    className="transition duration-300 hover:opacity-50"
  >
    Instagram
  </a>

</div>

<div className="mt-20 text-center">

  <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
    Disponível
  </p>

  <p className="mt-4 text-lg font-light text-neutral-700">
    Portugal 🇵🇹 · França 🇫🇷
  </p>

</div>
