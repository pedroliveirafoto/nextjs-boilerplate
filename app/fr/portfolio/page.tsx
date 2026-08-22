import Image from "next/image";
import NavbarFr from "../../components/nav-fr";

export default function PortfolioPage() {
  return (
    <main>

      <NavbarFr />

      <section className="bg-white px-6 py-32 md:px-16 lg:px-32">

        <div className="mx-auto max-w-7xl">

          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-neutral-700">
            Portfolio
          </p>

          <h1 className="text-5xl font-light leading-tight md:text-6xl">
            Des histoires racontées
            <br />
            à travers les images.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-600">
            Chaque mariage est unique. Voici quelques-uns des moments
            que j&apos;ai eu le privilège de raconter à travers mon objectif.
          </p>


          {/* HORIZONTAL 1 */}
          <div className="mt-20 group overflow-hidden">

            <Image
              src="/Portfolio7.jpg"
              alt="Photographie de mariage"
              width={1600}
              height={1000}
              className="h-auto w-full object-cover transition duration-700 group-hover:scale-[1.02]"
            />

          </div>


          {/* VERTICALES 1 + 2 */}
          <div className="mt-8 grid gap-8 md:grid-cols-2">

            <div className="group overflow-hidden">
              <Image
                src="/Portfolio1.jpg"
                alt="Photographie de mariage"
                width={800}
                height={1200}
                className="h-auto w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </div>

            <div className="group overflow-hidden">
              <Image
                src="/Portfolio4.jpg"
                alt="Photographie de mariage"
                width={800}
                height={1200}
                className="h-auto w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </div>

          </div>


          {/* HORIZONTAL 2 */}
          <div className="mt-8 group overflow-hidden">

            <Image
              src="/Portfolio8.jpg"
              alt="Photographie de mariage"
              width={1600}
              height={1000}
              className="h-auto w-full object-cover transition duration-700 group-hover:scale-[1.02]"
            />

          </div>


          {/* VERTICALES 3 + 4 */}
          <div className="mt-8 grid gap-8 md:grid-cols-2">

            <div className="group overflow-hidden">
              <Image
                src="/Portfolio2.jpg"
                alt="Photographie de mariage"
                width={800}
                height={1200}
                className="h-auto w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </div>

            <div className="group overflow-hidden">
              <Image
                src="/Portfolio5.jpg"
                alt="Photographie de mariage"
                width={800}
                height={1200}
                className="h-auto w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </div>

          </div>


          {/* HORIZONTAL 3 */}
          <div className="mt-8 group overflow-hidden">

            <Image
              src="/Portfolio9.jpg"
              alt="Photographie de mariage"
              width={1600}
              height={1000}
              className="h-auto w-full object-cover transition duration-700 group-hover:scale-[1.02]"
            />

          </div>


          {/* VERTICALES 5 + 6 */}
          <div className="mt-8 grid gap-8 md:grid-cols-2">

            <div className="group overflow-hidden">
              <Image
                src="/Portfolio3.jpg"
                alt="Photographie de mariage"
                width={800}
                height={1200}
                className="h-auto w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </div>

            <div className="group overflow-hidden">
              <Image
                src="/Portfolio6.jpg"
                alt="Photographie de mariage"
                width={800}
                height={1200}
                className="h-auto w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </div>

          </div>


          {/* HORIZONTAL 4 */}
          <div className="mt-8 group overflow-hidden">

            <Image
              src="/Portfolio10.jpg"
              alt="Photographie de mariage"
              width={1600}
              height={1000}
              className="h-auto w-full object-cover transition duration-700 group-hover:scale-[1.02]"
            />

          </div>


          {/* HORIZONTAL 5 */}
          <div className="mt-8 group overflow-hidden">

            <Image
              src="/Portfolio11.jpg"
              alt="Photographie de mariage"
              width={1600}
              height={1000}
              className="h-auto w-full object-cover transition duration-700 group-hover:scale-[1.02]"
            />

          </div>


          {/* HORIZONTAL 6 */}
          <div className="mt-8 group overflow-hidden">

            <Image
              src="/Portfolio12.jpg"
              alt="Photographie de mariage"
              width={1600}
              height={1000}
              className="h-auto w-full object-cover transition duration-700 group-hover:scale-[1.02]"
            />

          </div>

        </div>

      </section>

    </main>
  );
}
