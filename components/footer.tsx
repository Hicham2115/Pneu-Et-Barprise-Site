import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { servicePages } from "@/lib/landing-pages";

const exploreLinks = [
  { href: "/#comment-ca-marche", label: "Comment ça marche ?" },
  { href: "/#conseils", label: "Conseils" },
  { href: "/#pourquoi-pneu", label: "Pourquoi choisir Pneu ?" },
  { href: "/#faq", label: "Questions fréquentes" },
];

export function Footer() {
  return (
    <footer className="bg-[#101010] px-[max(5.4vw,24px)] text-white">
      <div className="mx-auto max-w-[1320px]">
        <div className="border-b border-white/10 py-16 text-center md:py-20">
          <h2 className="pneu-sans mx-auto max-w-[820px] text-[clamp(30px,4vw,48px)] font-bold leading-[1.08] tracking-[-0.04em] text-white">
            Besoin d’un changement de pneu
            <span className="block text-[#e51d2a]">sans rendez-vous ?</span>
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              className="pneu-sans group inline-flex min-h-[48px] items-center gap-3 bg-[#e51d2a] px-6 text-[14px] font-semibold !text-white transition-colors hover:bg-[#c81521] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e51d2a]"
              href="/#services"
            >
              Voir nos services
              <ArrowRight
                aria-hidden="true"
                className="size-4 !text-white transition-transform group-hover:translate-x-1"
              />
            </Link>
            <Link
              className="pneu-sans inline-flex min-h-[48px] items-center border border-white/35 px-6 text-[14px] font-semibold text-white transition-colors hover:border-white hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              href="/#contact"
            >
              Nous contacter
            </Link>
          </div>
        </div>

        <div className="grid gap-12 py-12 md:grid-cols-[1.35fr_1fr_1fr] md:gap-10 md:py-14">
          <div>
            <Link
              aria-label="Pneu, retour à l’accueil"
              className="group inline-flex flex-col items-start"
              href="/"
            >
              <span className="pneu-sans text-[34px] font-black leading-[0.85] tracking-[-0.075em] text-white">
                PNEU
              </span>
              <span
                aria-hidden="true"
                className="mt-[7px] h-[5px] w-[58px] -skew-x-[28deg] bg-[#e51d2a]"
              />
            </Link>
            <p className="pneu-sans mt-6 max-w-[370px] text-[14px] leading-6 text-white/60">
              Assistance et atelier pneus. Réparation, montage et changement de
              pneu sans rendez-vous.
            </p>
          </div>

          <nav aria-label="Services" className="grid content-start gap-3">
            <h3 className="pneu-sans mb-1 text-[15px] font-semibold text-white">
              Nos services
            </h3>
            {servicePages.map((link) => (
              <Link
                className="pneu-sans relative inline-block w-fit text-[13px] leading-5 text-white/60 transition-colors duration-300 ease-out hover:text-white focus-visible:text-white after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-[#e51d2a] after:content-[''] after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 focus-visible:after:scale-x-100"
                href={`/services/${link.slug}`}
                key={link.slug}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <nav aria-label="Informations" className="grid content-start gap-3">
            <h3 className="pneu-sans mb-1 text-[15px] font-semibold text-white">
              À découvrir
            </h3>
            {exploreLinks.map((link) => (
              <Link
                className="pneu-sans relative inline-block w-fit text-[13px] leading-5 text-white/60 transition-colors duration-300 ease-out hover:text-white focus-visible:text-white after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-[#e51d2a] after:content-[''] after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 focus-visible:after:scale-x-100"
                href={link.href}
                key={link.href}
              >
                {link.label}
              </Link>
            ))}
            <Link
              className="pneu-sans relative mt-1 inline-block w-fit text-[13px] leading-5 text-white/60 transition-colors duration-300 ease-out hover:text-white focus-visible:text-white after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-[#e51d2a] after:content-[''] after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 focus-visible:after:scale-x-100"
              href="/#contact"
            >
              Contact — Île-de-France
            </Link>
          </nav>
        </div>

        <div className="flex flex-col gap-2 border-t border-white/10 py-5 text-[12px] text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p className="pneu-sans">© 2026 Pneu. Tous droits réservés.</p>
          <p className="pneu-sans">Changement de pneu sans rendez-vous</p>
        </div>

        <p className="mx-auto max-w-[1440px] px-6 py-4 text-center text-[12px] text-white/70 sm:px-8 lg:px-12">
          Designed &amp; developed by{" "}
          <a
            href="https://www.stallionadvertising.ma/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block underline decoration-white/30 underline-offset-4 transition-colors duration-300 ease-out hover:text-white focus-visible:text-white after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-[#e51d2a] after:content-[''] after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 focus-visible:after:scale-x-100"
          >
            Stallion Advertising
          </a>
        </p>
      </div>
    </footer>
  );
}
