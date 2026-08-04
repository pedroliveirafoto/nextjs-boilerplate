import Image from "next/image";

const images = [
  "/Session1-1.jpg",
  "/Session1-4.jpg",
  "/Session1-3.jpg",
  "/Session1-2.jpg",
  "/Session1-5.jpg",
  "/Session1-6.jpg",
];

export default function Sessao1() {
  return (
    <main>

      <section className="bg-black px-6 py-28 text-center text-white">

        <p className="uppercase tracking-[0.35em] text-white/60">
          Sessão
        </p>

        <h1 className="mt-6 text-5xl font-light md:text-7xl">
          Sessão de Casal
        </h1>

      </section>

      <section className="bg-white px-6 py-20 md:px-16 lg:px-32">

        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">

          {images.map((image) => (

            <Image
              key={image}
              src={image}
              alt="Sessão de Casal"
              width={1200}
              height={1600}
              className="w-full object-cover"
            />

          ))}

        </div>

      </section>

    </main>
  );
}
