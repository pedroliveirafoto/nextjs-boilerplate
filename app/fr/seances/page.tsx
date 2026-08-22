import Image from "next/image";
import Link from "next/link";
import NavbarFr from "../../components/nav-fr";

const sessions = [
  {
    image: "/Session1.jpg",
    title: "Séance 01",
    href: "/fr/seances/1",
  },
  {
    image: "/Session2.jpg",
    title: "Séance 02",
    href: "/fr/seances/2",
  },
  {
    image: "/Session3.jpg",
    title: "Séance 03",
    href: "/fr/seances/3",
  },
];

export default function SeancesPage() {
  return (
    <main>

      <NavbarFr />

      {/* HERO */}
      <section className="bg-black px-6 py-32 text-center text-white md:px-16 lg:px-32">

        <p className="mb-6 text-sm uppercase tracking-[0.35em] text-white/70">
          Séances
        </p>

        <h1 className="text-5xl font-light md:text-7xl">
          Parce que chaque histoire
          <br />
          mérite d&apos;être préservée.
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/80">
          Chaque couple possède sa propre histoire.
          Ces séances sont pensées pour préserver vos moments,
          vos émotions et votre complicité de façon naturelle
          et intemporelle.
        </p>

      </section>


      {/* SÉANCES */}
      <section className="bg-white px-6 py-24 md:px-16 lg:px-32">

        <div className="mx-auto max-w-7xl space-y-28">

          {sessions.map((session) => (

            <div
              key={session.title}
              className="grid items-center gap-16 lg:grid-cols-2"
            >

              {/* PHOTO */}
              <div className="overflow-hidden">

                <Image
                  src={session.image}
                  alt="Séance couple"
                  width={1200}
                  height={800}
                  className="h-[550px] w-full object-cover transition duration-700 hover:scale-105"
                />

              </div>


              {/* TEXTE */}
              <div>

                <p className="text-sm uppercase tracking-[0.3em] text-neutral-700">
                  {session.title}
                </p>

                <h2 className="mt-6 text-5xl font-light">
                  Séance Couple
                </h2>

                <p className="mt-8 text-lg leading-9 text-neutral-700">
                  Un moment pensé pour vous deux.
                  Sans précipitation, sans poses forcées.
                  Simplement votre complicité, photographiée de manière
                  authentique et élégante.
                </p>

                <Link
                  href={session.href}
                  className="mt-10 inline-block border border-black px-8 py-3 text-sm uppercase tracking-[0.3em] transition duration-300 hover:bg-black hover:text-white"
                >
                  Voir la séance
                </Link>

              </div>

            </div>

          ))}

        </div>

      </section>

    </main>
  );
}
