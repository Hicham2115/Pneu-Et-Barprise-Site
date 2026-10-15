import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { departmentPages, servicePages, type ServicePageContent } from "@/lib/landing-pages";
import { Partners } from "@/components/partners";
import { Footer } from "@/components/footer";

export function ServiceLandingPage({ service }: { service: ServicePageContent }) {
  return (
    <main>
      <section className="grid min-h-[620px] overflow-hidden bg-[#f5f5f3] lg:grid-cols-[1.05fr_0.95fr]">
        <div className="flex items-center px-[max(5.4vw,24px)] py-16 lg:py-24">
          <div className="mx-auto w-full max-w-[620px]">
            <p className="pneu-sans mb-6 flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#626262]">
              <span aria-hidden="true" className="h-[2px] w-9 bg-[#e51d2a]" />
              Services · Pneu
            </p>
            <nav aria-label="Fil d’Ariane" className="pneu-sans mb-6 text-[12px] text-[#6a6a6a]">
              <Link className="transition-colors hover:text-[#d71920]" href="/">
                Accueil
              </Link>
              <span aria-hidden="true" className="px-2">/</span>
              <span className="text-[#191919]">{service.label}</span>
            </nav>
            <h1 className="pneu-sans mb-6 text-[clamp(42px,6vw,76px)] font-extrabold leading-[0.98] tracking-[-0.055em] text-[#090909]">
              {service.title}
            </h1>
            <p className="pneu-sans mb-5 max-w-[540px] text-[20px] font-semibold leading-7 text-[#252525]">
              {service.lead}
            </p>
            <p className="pneu-sans mb-8 max-w-[520px] text-[15px] leading-7 text-[#555]">
              {service.intro}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                className="pneu-sans group inline-flex min-h-[50px] items-center gap-4 bg-[#e51d2a] px-6 text-[14px] font-semibold !text-white transition-colors hover:bg-[#c81521] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e51d2a]"
                href="/#contact"
              >
                Nous contacter
                <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                className="pneu-sans inline-flex min-h-[50px] items-center border border-black/20 px-6 text-[14px] font-semibold text-[#191919] transition-colors hover:border-[#e51d2a] hover:text-[#d71920]"
                href="/#services"
              >
                Tous les services
              </Link>
            </div>
          </div>
        </div>

        <div className="relative min-h-[360px] bg-[#151515] lg:min-h-[620px]">
          <Image
            alt={service.imageAlt}
            className="object-cover"
            fill
            priority
            sizes="(max-width: 1023px) 100vw, 48vw"
            src={service.image}
          />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/5" />
          <p className="pneu-sans absolute bottom-7 left-7 max-w-[250px] text-[11px] font-semibold uppercase tracking-[0.2em] text-white/85 sm:bottom-10 sm:left-10">
            Assistance et atelier pneus
          </p>
        </div>
      </section>

      <section className="border-b border-black/10 bg-white px-[max(5.4vw,24px)] py-8">
        <ul className="mx-auto grid max-w-[1320px] gap-5 sm:grid-cols-3">
          {[
            "Sans rendez-vous à l’atelier",
            "Diagnostic avant intervention",
            "Conseils adaptés à votre véhicule",
          ].map((item) => (
            <li className="pneu-sans flex items-center gap-3 text-[13px] font-semibold text-[#252525]" key={item}>
              <span className="grid size-7 shrink-0 place-items-center rounded-full bg-[#fff0f0] text-[#d71920]">
                <Check aria-hidden="true" className="size-4" />
              </span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <div className="px-[max(5.4vw,24px)] py-16 md:py-24">
        <div className="mx-auto grid max-w-[1320px] gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="pneu-sans mb-5 flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#555]">
              <span aria-hidden="true" className="h-[2px] w-9 bg-[#e51d2a]" />
              Notre approche
            </p>
            <h2 className="pneu-sans max-w-[450px] text-[clamp(32px,4vw,50px)] font-bold leading-[1.03] tracking-[-0.045em] text-[#090909]">
              La bonne solution commence par un bon diagnostic.
            </h2>
          </div>

          <div className="space-y-12">
            {service.sections.map((section, index) => (
              <article className="border-b border-black/10 pb-10 last:border-0" key={section.title}>
                <p className="pneu-sans mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#d71920]">
                  {String(index + 1).padStart(2, "0")} / {service.label}
                </p>
                <h3 className="pneu-sans mb-4 text-[24px] font-bold leading-tight tracking-[-0.03em] text-[#111]">
                  {section.title}
                </h3>
                {section.paragraphs.map((paragraph) => (
                  <p className="pneu-sans mb-4 max-w-[760px] text-[15px] leading-7 text-[#555] last:mb-0" key={paragraph}>
                    {paragraph}
                  </p>
                ))}
                {section.points && (
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {section.points.map((point) => (
                      <li className="pneu-sans flex items-start gap-3 text-[14px] leading-6 text-[#333]" key={point}>
                        <span aria-hidden="true" className="mt-[10px] size-1.5 shrink-0 rounded-full bg-[#ef5b27]" />
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>

      <section className="bg-[#101010] px-[max(5.4vw,24px)] py-16 text-white md:py-20">
        <div className="mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="pneu-sans mb-5 flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70">
              <span aria-hidden="true" className="h-[2px] w-9 bg-[#e51d2a]" />
              Île-de-France
            </p>
            <h2 className="pneu-sans max-w-[520px] text-[clamp(30px,4vw,46px)] font-bold leading-[1.04] tracking-[-0.04em]">
              Retrouvez nos pages par département
            </h2>
          </div>
          <ul className="grid gap-x-8 sm:grid-cols-2">
            {departmentPages.map((department) => (
              <li className="border-b border-white/15" key={department.slug}>
                <Link className="pneu-sans group flex items-center justify-between gap-4 py-4 text-[14px] font-medium text-white/75 transition-colors hover:text-white" href={`/ile-de-france/${department.slug}`}>
                  {department.name} ({department.code})
                  <ArrowRight aria-hidden="true" className="size-4 shrink-0 text-[#e51d2a] transition-transform group-hover:translate-x-1" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Partners />
      <Footer />
    </main>
  );
}
