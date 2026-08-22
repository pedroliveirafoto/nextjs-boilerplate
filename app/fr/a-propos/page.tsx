import Image from "next/image";
import Link from "next/link";
import NavbarFr from "../../components/nav-fr";

export default function AProposPage() {
  return (
    <main>

      <NavbarFr />

      {/* À PROPOS */}
      <section className="bg-white px-6 py-32 md:px-16 lg:px-32">

        <div className="mx-auto max-w-7xl">

          {/* FOTOS */}
          <div className="grid w-full grid-cols-1 items-center gap-6 md:grid-cols-3 animate-fade-left">

            <Image
              src="/about.jpg"
              alt="Pedro Oliveira"
              width={500}
              height={750}
              className="h-[500px] w-full object-cover shadow-2xl md:h-[580px]"
            />

            <Image
              src="/about2.jpg"
              alt="Pedro Oliveira"
              width={500}
              height={750}
              className="h-[500px] w-full object-cover shadow-2xl md:h-[650px]"
            />

            <Image
              src="/about3.jpg"
              alt="Pedro Oliveira"
              width={500}
              height={750}
              className="h-[500px] w-full object-cover shadow-2xl md:h-[580px]"
            />

          </div>

          {/* TEXTO */}
          <div className="mx-auto mt-24 max-w-4xl">

            <p className="mb-6 text-sm uppercase tracking-[0.3em] text-neutral-700">
              À propos
            </p>

            <h1 className="text-4xl font-light leading-tight md:text-6xl">
              Plus que des photographies.
              <br />
              Des histoires à préserver.
            </h1>

            <p className="mt-10 text-lg leading-8 text-neutral-700">
              Bonjour, je suis Pedro Oliveira.
            </p>

            <p className="mt-6 text-lg leading-8 text-neutral-700">
              Je crois que les plus belles photographies ne se créent pas.
              Elles arrivent naturellement.
            </p>

            <p className="mt-6 text-lg leading-8 text-neutral-700">
              Un regard inattendu, une étreinte, une larme de bonheur ou un
              sourire spontané sont des instants qui ne se répètent jamais.
              C&apos;est précisément dans ces moments que je trouve la véritable
              essence d&apos;un mariage.
            </p>

            <p className="mt-6 text-lg leading-8 text-neutral-700">
              Au fil des années, j&apos;ai appris que chaque personne possède une
              histoire unique et que les petits détails sont souvent les plus
              importants. Cette façon de regarder les personnes
              m&apos;accompagne dans chaque mariage que je photographie.
            </p>

            <p className="mt-6 text-lg leading-8 text-neutral-700">
              Je travaille au Portugal et en France, auprès de couples qui
              accordent de l&apos;importance à l&apos;authenticité, à la simplicité
              et aux émotions.
            </p>

          </div>

        </div>

      </section>


      {/* CE QUE VOUS POUVEZ ATTENDRE */}
      <section className="bg-neutral-100 px-6 py-24 md:px-16 lg:px-32">

        <div className="mx-auto max-w-4xl">

          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-neutral-700">
            Ce que vous pouvez attendre de moi
          </p>

          <ul className="space-y-6 text-lg leading-8 text-neutral-700">

            <li>
              • Une présence discrète tout au long de votre journée.
            </li>

            <li>
              • Une attention particulière aux petits détails et aux émotions
              sincères.
            </li>

            <li>
              • Un accompagnement personnalisé, du premier contact jusqu&apos;à
              la livraison finale.
            </li>

          </ul>

          <p className="mt-12 text-lg leading-8 text-neutral-700">
            Chaque mariage est différent. Chaque couple possède sa
            personnalité, ses proches et sa propre histoire.
          </p>

          <p className="mt-6 text-lg leading-8 text-neutral-700">
            C&apos;est exactement ce que je cherche à préserver.
          </p>

          <p className="mt-6 text-lg leading-8 text-neutral-700">
            Si cette manière de raconter les histoires vous ressemble,
            ce sera un véritable privilège de vous rencontrer et de faire
            partie de ce moment si important.
          </p>

          <Link
            href="/fr/contact"
            className="mt-12 inline-block border border-black px-8 py-3 text-sm uppercase tracking-[0.3em] transition-all duration-300 hover:bg-black hover:text-white"
          >
            Parlons de votre mariage
          </Link>

        </div>

      </section>

    </main>
  );
}
