import Image from "next/image";
import NavbarFr from "../../../components/nav-fr";

const images = [
  "/Session1-1.jpg",
  "/Session1-4.jpg",
  "/Session1-3.jpg",
  "/Session1-2.jpg",
  "/Session1-5.jpg",
  "/Session1-6.jpg",
];

export default function Seance1Page() {
  return (
    <main>

      <NavbarFr />

      <section className="bg-black px-6 py-28 text-center text-white">

        <p className="text-sm uppercase tracking-[0.35em] text-white/70">
          Séance
        </p>

        <h1 className="mt-6 text-5xl font-light md:text-7xl">
          Séance Couple
        </h1>

      </section>

      <section className="bg-white px-6 py-20 md:px-16 lg:px-32">

        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">

          {images.map((image) => (
            <Image
              key={image}
              src={image}
              alt="Séance couple"
              width={1200}
              height={1600}
              className="h-auto w-full object-cover"
            />
          ))}

        </div>

      </section>

    </main>
  );
}
