import Image from "next/image";

export default function PortfolioPage() {
  const verticalImages = [
    "Portfolio1.jpg",
    "Portfolio4.jpg",
    "Portfolio2.jpg",
    "Portfolio5.jpg",
    "Portfolio3.jpg",
    "Portfolio6.jpg",
  ];

  const horizontalImages = [
    "Portfolio7.jpg",
    "Portfolio8.jpg",
    "Portfolio9.jpg",
    "Portfolio10.jpg",
    "Portfolio11.jpg",
    "Portfolio12.jpg",
  ];

  return (
    <main className="bg-white px-6 py-32 md:px-16 lg:px-32">

      <div className="mx-auto max-w-7xl">

        <p className="mb-6 text-sm uppercase tracking-[0.3em] text-neutral-500">
          Portfólio
        </p>

        <h1 className="text-5xl font-light leading-tight md:text-6xl">
          Histórias contadas
          <br />
          através de imagens.
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-600">
          Cada casamento é único.
          Aqui encontram alguns dos momentos que tive o privilégio de contar
          através da minha objetiva.
        </p>


        {/* FOTOGRAFIAS HORIZONTAIS */}

        <div className="mt-20 space-y-8">

          {horizontalImages.map((image) => (

            <div
              key={image}
              className="group overflow-hidden"
            >

              <Image
                src={`/${image}`}
                alt="Fotografia de casamento"
                width={1600}
                height={1000}
                className="
                  h-auto
                  w-full
                  object-cover
                  transition
                  duration-700
                  group-hover:scale-[1.02]
                "
              />

            </div>

          ))}

        </div>


        {/* FOTOGRAFIAS VERTICAIS */}

        <div className="mt-8 grid gap-8 md:grid-cols-2">

          {verticalImages.map((image) => (

            <div
              key={image}
              className="group overflow-hidden"
            >

              <Image
                src={`/${image}`}
                alt="Fotografia de casamento"
                width={800}
                height={1200}
                className="
                  h-auto
                  w-full
                  object-cover
                  transition
                  duration-700
                  group-hover:scale-105
                "
              />

            </div>

          ))}

        </div>

      </div>

    </main>
  );
}
