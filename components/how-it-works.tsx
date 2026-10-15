import Image from "next/image";

const steps = [
  {
    title: "Vous nous contactez",
    description: "Expliquez-nous votre situation et vos besoins.",
  },
  {
    title: "Nous intervenons",
    description: "En atelier ou sur place, selon votre besoin.",
  },
  {
    title: "Vous reprenez la route",
    description: "Votre véhicule repart dans les meilleures conditions.",
  },
];

export function HowItWorks() {
  return (
    <section
      aria-labelledby="how-it-works-title"
      className="relative isolate overflow-hidden bg-[#101010] px-[max(5.4vw,24px)] py-16 text-white md:py-20"
      id="comment-ca-marche"
    >
      <Image
        alt=""
        aria-hidden="true"
        className="-z-20 !h-full !w-[74%] object-contain object-left"
        fill
        sizes="100vw"
        src="/images/pneu-process-banner.png"
      />
      <div
        aria-hidden="true"
        className="-z-10 absolute inset-0 bg-gradient-to-r from-black/45 via-black/65 to-black"
      />

      <div className="relative mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[0.9fr_1.5fr] lg:items-center lg:gap-16">
        <div className="max-w-[430px]">
          <p className="pneu-sans mb-5 flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/75">
            <span aria-hidden="true" className="h-[2px] w-9 bg-[#e51d2a]" />
            Comment ça marche ?
          </p>
          <h2
            className="pneu-sans text-[clamp(32px,4vw,48px)] font-bold leading-[1.05] tracking-[-0.04em] text-white"
            id="how-it-works-title"
          >
            Vous appelez,
            <br />
            on s’occupe du reste
          </h2>
        </div>

        <ol className="grid gap-8 md:grid-cols-3 md:gap-6">
          {steps.map((step, index) => (
            <li className="min-w-0" key={step.title}>
              <div className="flex gap-4 md:mb-4 md:block">
                <div className="flex shrink-0 items-center gap-5 md:mb-4 md:w-full">
                  <span className="grid size-11 place-items-center rounded-full bg-[#e51d2a] pneu-sans text-[18px] font-bold text-white">
                    {index + 1}
                  </span>
                  {index < steps.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="hidden h-px flex-1 bg-white/30 md:block"
                    />
                  )}
                </div>
                <div>
                  <h3 className="pneu-sans mb-2 text-[16px] font-semibold leading-6 text-white">
                    {step.title}
                  </h3>
                  <p className="pneu-sans max-w-[230px] text-[14px] leading-6 text-white/70">
                    {step.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
