import {
  CarFront,
  ShieldCheck,
  ThumbsUp,
  UsersRound,
  type LucideIcon,
} from "lucide-react";

const reasons: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Savoir-faire professionnel",
    description: "Des techniciens expérimentés et un travail soigné.",
    icon: ShieldCheck,
  },
  {
    title: "Intervention sur place",
    description: "Nous venons à vous, en cas de besoin.",
    icon: ThumbsUp,
  },
  {
    title: "Tous types de véhicules",
    description: "Voitures, utilitaires et engins professionnels.",
    icon: CarFront,
  },
  {
    title: "Un accompagnement personnalisé",
    description: "Des conseils adaptés à votre situation.",
    icon: UsersRound,
  },
];

export function WhyPneu() {
  return (
    <section
      aria-labelledby="why-pneu-title"
      className="bg-[#f5f5f3] px-[max(5.4vw,24px)] py-20 md:py-24"
      id="pourquoi-pneu"
    >
      <div className="mx-auto max-w-[1320px]">
        <div className="mb-12 grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-end md:gap-12">
          <div>
            <p className="pneu-sans mb-5 flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#161616]">
              <span aria-hidden="true" className="h-[2px] w-9 bg-[#e51d2a]" />
              Pourquoi choisir Pneu ?
            </p>
            <h2
              className="pneu-sans max-w-[620px] text-[clamp(32px,4vw,52px)] font-bold leading-[1.04] tracking-[-0.04em] text-[#090909]"
              id="why-pneu-title"
            >
              Un service de confiance, à vos côtés
            </h2>
          </div>
          <p className="pneu-sans mb-1 max-w-[420px] text-[16px] leading-7 text-[#4a4a4a] md:justify-self-end">
            Une équipe de professionnels, un matériel adapté et une approche
            centrée sur votre sécurité et votre tranquillité.
          </p>
        </div>

        <div className="grid border-l border-t border-[#dededb] sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map(({ title, description, icon: Icon }) => (
            <article
              className="min-h-[220px] border-b border-r border-[#dededb] bg-white/60 p-6 md:p-7"
              key={title}
            >
              <Icon
                aria-hidden="true"
                className="mb-5 size-9 text-[#e51d2a]"
                strokeWidth={1.8}
              />
              <h3 className="pneu-sans mb-3 text-[17px] font-bold leading-6 text-[#111]">
                {title}
              </h3>
              <p className="pneu-sans max-w-[250px] text-[14px] leading-6 text-[#555]">
                {description}
              </p>
              <span
                aria-hidden="true"
                className="mt-5 block h-[2px] w-8 bg-[#e51d2a]"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
