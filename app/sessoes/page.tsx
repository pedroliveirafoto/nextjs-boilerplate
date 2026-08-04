import Image from "next/image";
import Link from "next/link";

const sessions = [
  {
    image: "/Session1.jpg",
    title: "Sessão 01",
    href: "/sessoes/1",
  },
  {
    image: "/Session2.jpg",
    title: "Sessão 02",
    href: "/sessoes/2",
  },
  {
    image: "/Session3.jpg",
    title: "Sessão 03",
    href: "/sessoes/3",
  },
 
];

export default function Sessoes() {
  return (
    <main>

      {/* HERO */}

      <section className="bg-black px-6 py-32 text-center text-white md:px-16 lg:px-32">

        <p className="mb-6 text-sm uppercase tracking-[0.35em] text-white/60">
          Sessões
        </p>

        <h1 className="text-5xl font-light md:text-7xl">
          Porque cada história
          <br />
          merece ser recordada.
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg text-white/80 leading-relaxed">
          Cada casal tem uma história única.
          Estas sessões são feitas para eternizar momentos,
          emoções e cumplicidade de forma natural e intemporal.
        </p>

      </section>

      {/* GALERIAS */}

      <section className="bg-white px-6 py-24 md:px-16 lg:px-32">

        <div className="mx-auto max-w-7xl space-y-28">

          {sessions.map((session) => (

            <div
              key={session.title}
              className="grid items-center gap-16 lg:grid-cols-2"
            >

              <div className="overflow-hidden">

                <Image
                  src={session.image}
                  alt={session.title}
                  width={1200}
                  height={800}
                  className="h-[550px] w-full object-cover transition duration-700 hover:scale-105"
                />

              </div>

              <div>

                <p className="text-sm uppercase tracking-[0.3em] text-neutral-700">
                  {session.title}
                </p>

                <h2 className="mt-6 text-5xl font-light">
                  Sessão de Casal
                </h2>

                <p className="mt-8 text-lg leading-9 text-neutral-700">
                  Um momento pensado para vocês.
                  Sem pressas, sem poses forçadas.
                  Apenas a vossa ligação, registada de forma autêntica e elegante.
                </p>

                <Link
                  href={session.href}
                  className="mt-10 inline-block border border-black px-8 py-3 text-sm uppercase tracking-[0.3em] transition duration-300 hover:bg-black hover:text-white"
                >
                  Ver sessão
                </Link>

              </div>

            </div>

          ))}

        </div>

      </section>

    </main>
  );
}
