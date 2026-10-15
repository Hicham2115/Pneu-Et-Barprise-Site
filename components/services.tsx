import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Réparation de pneu",
    href: "/services/reparation-pneu-dimanche",
    image: "/images/pneu-service-dimanche.png",
    imageAlt: "Technicien examinant un pneu crevé dans un atelier",
  },
  {
    title: "Montage et changement",
    href: "/services/montage-changement-pneu-sur-place",
    image: "/images/pneu-service-montage-mobile.png",
    imageAlt: "Technicien montant un pneu au bord de la route",
  },
  {
    title: "Dépannage à domicile",
    href: "/services/depannage-pneu-domicile",
    image: "/images/pneu-service-domicile.png",
    imageAlt: "Technicien dépannant un pneu dans une allée résidentielle",
  },
  {
    title: "Pneus d’engins de chantier",
    href: "/services/reparation-pneus-engin-chantier",
    image: "/images/pneu-service-chantier.png",
    imageAlt: "Technicien examinant le pneu d’un engin de chantier",
  },
  {
    title: "Pièce auto",
    href: "/services/piece-auto",
    image: "/images/pneu-service-piece-auto.png",
    imageAlt: "Pièces automobiles préparées sur un établi d’atelier",
  },
  {
    title: "Fixation des pare-brises",
    href: "/services/fixation-pare-brise",
    image: "/images/pneu-service-pare-brise.png",
    imageAlt: "Technicien fixant un pare-brise dans un atelier automobile",
  },
];

export function Services() {
  return (
    <section
      aria-labelledby="services-title"
      className="bg-[#f5f5f3] px-[max(5.4vw,24px)] py-14 sm:py-20 md:py-24"
      id="services"
    >
      <div className="mx-auto max-w-[1320px]">
        <div className="mb-12 grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-end md:gap-12">
          <div>
            <p className="pneu-sans mb-5 flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#161616]">
              <span aria-hidden="true" className="h-[2px] w-9 bg-[#e51d2a]" />
              Nos services
            </p>
            <h2
              className="pneu-sans max-w-[620px] text-[clamp(32px,4vw,52px)] font-bold leading-[1.04] tracking-[-0.04em] text-[#090909]"
              id="services-title"
            >
              Un service complet pour tous vos pneus
            </h2>
          </div>
          <p className="pneu-sans mb-1 max-w-[420px] text-[16px] leading-7 text-[#4a4a4a] md:justify-self-end">
            Une prise en charge professionnelle pour les particuliers et les
            professionnels, en atelier ou à votre domicile.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, href, image, imageAlt }, index) => (
            <Link
              className="group flex min-h-[280px] flex-col overflow-hidden border border-black/10 bg-white transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-black/20 hover:shadow-[0_18px_45px_-25px_rgba(0,0,0,0.35)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e51d2a] sm:min-h-[340px]"
              href={href}
              key={href}
            >
              <div className="relative h-[180px] overflow-hidden bg-[#e8e8e6] sm:h-[230px]">
                <Image
                  alt={imageAlt}
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                  fill
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  src={image}
                />
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10 opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="pneu-sans absolute left-5 top-5 bg-white px-3 py-1.5 text-[10px] font-bold tracking-[0.18em] text-[#171717]">0{index + 1} / 06</span>
                <span aria-hidden="true" className="absolute bottom-5 right-5 grid size-10 place-items-center rounded-full bg-white text-[#e61d2a] transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight className="size-4" />
                </span>
              </div>
              <div className="flex flex-1 items-center justify-between gap-4 px-5 py-5 sm:px-6">
                <h3 className="pneu-sans max-w-[280px] text-[17px] font-bold leading-6 tracking-[-0.02em] text-[#111]">
                  {title}
                </h3>
                <span aria-hidden="true" className="h-px flex-1 bg-black/10 transition-colors group-hover:bg-[#e61d2a]/50" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
