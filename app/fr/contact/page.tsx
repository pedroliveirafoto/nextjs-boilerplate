import NavbarFr from "../../components/nav-fr";

export default function ContactPage() {
  return (
    <main>

      <NavbarFr />

      {/* HERO */}
      <section className="bg-black px-6 py-32 text-center text-white md:px-16 lg:px-32">

        <p className="mb-6 text-sm uppercase tracking-[0.3em] text-white/70">
          Contact
        </p>

        <h1 className="text-5xl font-light md:text-7xl">
          Parlons de
          <br />
          votre histoire.
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/80">
          Si vous aimez mon travail, ce sera un plaisir de découvrir votre
          histoire et de créer des photographies et des films qui vous
          permettront de revivre chaque émotion de votre journée.
        </p>

      </section>


      {/* CONTACTS */}
      <section className="bg-white px-6 py-24 md:px-16 lg:px-32">

        <div className="mx-auto max-w-3xl text-center">

          <h2 className="text-4xl font-light">
            Contactez-moi
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-neutral-700">
            Je vous répondrai avec plaisir dans les meilleurs délais.
          </p>

          <div className="mt-16 flex flex-wrap items-center justify-center gap-6 text-xl font-light text-neutral-700">

            <a
              href="https://wa.me/351916814516?text=Bonjour%20Pedro!%20J%27ai%20vu%20votre%20site%20et%20j%27aimerais%20avoir%20des%20informations%20sur%20vos%20services%20de%20photographie%20et%20vid%C3%A9o%20de%20mariage."
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 hover:opacity-50"
            >
              WhatsApp
            </a>

            <div className="h-5 w-px bg-neutral-300" />

            <a
              href="mailto:pedro.oliveira.fotografia.video@gmail.com"
              className="transition duration-300 hover:opacity-50"
            >
              Email
            </a>

            <div className="h-5 w-px bg-neutral-300" />

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

            <p className="text-sm uppercase tracking-[0.3em] text-neutral-700">
              Disponible
            </p>

            <p className="mt-4 text-lg font-light text-neutral-700">
              Portugal · France
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}
