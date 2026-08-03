
import Link from "next/link";

const navItems = [
  { href: "/", label: "Início" },
  { href: "/portfolio", label: "Portfólio" },
  { href: "/filmes", label: "Filmes" },
  { href: "/sobre", label: "Sobre Mim" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 z-50 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-8">

        {/* LOGO */}

        <Link
          href="/"
          className="text-white text-2xl font-light tracking-[0.25em]"
        >
          Pedro Oliveira
        </Link>

        {/* MENU */}

        <nav className="flex items-center gap-10">

          {navItems.map((item) => (

            <Link
              key={item.href}
              href={item.href}
              className="
                relative
                text-white
                text-sm
                uppercase
                tracking-[0.25em]
                font-light
                pb-1
                after:absolute
                after:left-0
                after:bottom-0
                after:h-[1px]
                after:w-0
                after:bg-white
                after:transition-all
                after:duration-300
                hover:after:w-full
              "
            >
              {item.label}
            </Link>

          ))}

        </nav>

      </div>
    </header>
  );
}
