import {
  CarFront,
  Construction,
  Disc3,
  PanelsTopLeft,
  Truck,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";

const services: {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Réparation de pneu",
    description:
      "Une crevaison ? Nous évaluons votre pneu et intervenons sur place quand sa réparation est possible.",
    href: "/services/reparation-pneu-dimanche",
    icon: Wrench,
  },
  {
    title: "Montage et changement",
    description:
      "Remplacement et montage de vos pneus avec un équipement professionnel.",
    href: "/services/montage-changement-pneu-sur-place",
    icon: Disc3,
  },
  {
    title: "Dépannage à domicile",
    description:
      "Une assistance sur place, à domicile ou là où votre véhicule est immobilisé.",
    href: "/services/depannage-pneu-domicile",
    icon: Truck,
  },
  {
    title: "Pneus d’engins de chantier",
    description:
      "Un service adapté aux pneus d’engins de chantier et aux véhicules professionnels.",
    href: "/services/reparation-pneus-engin-chantier",
    icon: Construction,
  },
  {
    title: "Pièce auto",
    description:
      "Des pièces auto pour répondre à vos besoins d’entretien et de remplacement.",
    href: "/services/piece-auto",
    icon: CarFront,
  },
  {
    title: "Fixation des pare-brises",
    description:
      "Un accompagnement pour la fixation et la remise en place de pare-brises.",
    href: "/services/fixation-pare-brise",
    icon: PanelsTopLeft,
  },
];

export function Services() {
  return (
    <section
      aria-labelledby="services-title"
      className="bg-[#f5f5f3] px-[max(5.4vw,24px)] py-20 md:py-24"
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

        <div className="grid border-l border-t border-[#dededb] sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, description, href, icon: Icon }) => (
            <Link
              className="group min-h-[230px] border-b border-r border-[#dededb] bg-white/60 p-7 transition-colors duration-200 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#e51d2a] md:p-8"
              href={href}
              key={href}
            >
              <Icon
                aria-hidden="true"
                className="mb-6 size-8 text-[#e51d2a] transition-transform duration-200 group-hover:-translate-y-1"
                strokeWidth={1.8}
              />
              <h3 className="pneu-sans mb-3 text-[18px] font-bold leading-6 text-[#111]">
                {title}
              </h3>
              <p className="pneu-sans max-w-[340px] text-[14px] leading-6 text-[#555]">
                {description}
              </p>
              <span
                aria-hidden="true"
                className="mt-5 block h-[2px] w-8 bg-[#e51d2a] transition-[width] duration-200 group-hover:w-12"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
