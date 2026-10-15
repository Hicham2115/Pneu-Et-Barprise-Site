import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { departmentPages, servicePages, type DepartmentPageContent } from "@/lib/landing-pages";
import { Partners } from "@/components/partners";
import { Footer } from "@/components/footer";

export function DepartmentLandingPage({ department }: { department: DepartmentPageContent }) {
  return (
    <main>
      <section className="relative isolate overflow-hidden bg-[#101010] px-[max(5.4vw,24px)] py-16 text-white md:py-24">
        <div aria-hidden="true" className="absolute -right-10 -top-20 -z-10 select-none font-black leading-none tracking-[-0.1em] text-white/[0.035] [font-size:clamp(240px,42vw,620px)]">
          {department.code}
        </div>
        <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <nav aria-label="Fil d’Ariane" className="pneu-sans mb-8 text-[12px] text-white/55">
              <Link className="transition-colors hover:text-white" href="/">Accueil</Link>
              <span aria-hidden="true" className="px-2">/</span>
              <span>Île-de-France</span>
              <span aria-hidden="true" className="px-2">/</span>
              <span className="text-white">{department.name}</span>
            </nav>
            <p className="pneu-sans mb-5 flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/65">
              <span aria-hidden="true" className="h-[2px] w-9 bg-[#e51d2a]" />
              Dépannage pneus · Île-de-France
            </p>
            <h1 className="pneu-sans mb-6 max-w-[850px] text-[clamp(42px,6vw,76px)] font-extrabold leading-[0.98] tracking-[-0.055em]">
              {department.title} <span className="text-[#e51d2a]">({department.code})</span>
            </h1>
            <p className="pneu-sans max-w-[700px] text-[16px] leading-7 text-white/70">
              {department.intro}
            </p>
            <Link
              className="pneu-sans group mt-8 inline-flex min-h-[50px] items-center gap-4 bg-[#e51d2a] px-6 text-[14px] font-semibold !text-white transition-colors hover:bg-[#c81521] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e51d2a]"
              href="/#contact"
            >
              Demander une assistance
              <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <aside className="border border-white/15 bg-white/[0.04] p-6 sm:p-8">
            <p className="pneu-sans mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/55">
              <MapPin aria-hidden="true" className="size-4 text-[#e51d2a]" />
              Votre intervention
            </p>
            <p className="pneu-sans mb-6 text-[23px] font-semibold leading-tight tracking-[-0.03em]">
              Au bon endroit, avec la bonne solution.
            </p>
            <ul className="space-y-3 border-t border-white/15 pt-5">
              {[
                "À domicile ou sur votre lieu de travail",
                "Sur le lieu de panne selon votre situation",
                "À l’atelier, sans rendez-vous",
              ].map((item) => (
                <li className="pneu-sans flex items-start gap-3 text-[13px] leading-6 text-white/70" key={item}>
                  <span aria-hidden="true" className="mt-[10px] size-1.5 shrink-0 rounded-full bg-[#ef5b27]" />
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="px-[max(5.4vw,24px)] py-16 md:py-24">
        <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
          <div>
            <p className="pneu-sans mb-5 flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#555]">
              <span aria-hidden="true" className="h-[2px] w-9 bg-[#e51d2a]" />
              Notre intervention
            </p>
            <h2 className="pneu-sans text-[clamp(32px,4vw,50px)] font-bold leading-[1.03] tracking-[-0.045em] text-[#090909]">
              Dépannage et réparation de pneus dans le {department.name}.
            </h2>
          </div>
          <div className="space-y-10">
            <article className="border-b border-black/10 pb-8">
              <h3 className="pneu-sans mb-4 text-[23px] font-bold leading-tight tracking-[-0.03em] text-[#111]">
                Réparation sur place ou à domicile
              </h3>
              <p className="pneu-sans max-w-[760px] text-[15px] leading-7 text-[#555]">
                En cas de crevaison sur la route, à domicile ou au travail, l’intervention commence par l’examen du pneu et de la situation. Selon le diagnostic, une réparation peut être réalisée sur place ; si le pneu ne peut pas être réparé, son remplacement peut être envisagé dans le {department.name}.
              </p>
            </article>
            <article className="border-b border-black/10 pb-8">
              <h3 className="pneu-sans mb-4 text-[23px] font-bold leading-tight tracking-[-0.03em] text-[#111]">
                Montage et remplacement selon l’état du pneu
              </h3>
              <p className="pneu-sans max-w-[760px] text-[15px] leading-7 text-[#555]">
                Les services couvrent le montage et le remplacement des pneus, en plus de la réparation. Le montage peut inclure la vérification de l’équilibrage, du parallélisme et de la pression, selon l’intervention et le véhicule.
              </p>
            </article>
            <article>
              <h3 className="pneu-sans mb-4 text-[23px] font-bold leading-tight tracking-[-0.03em] text-[#111]">
                Voitures, utilitaires, motos et autres véhicules
              </h3>
              <ul className="grid gap-3 sm:grid-cols-2">
                {[
                  "Voitures et véhicules utilitaires",
                  "Motos et scooters",
                  "Camions et poids lourds selon le service",
                  "Pneu à réparer, monter ou remplacer",
                ].map((item) => (
                  <li className="pneu-sans flex items-start gap-3 text-[14px] leading-6 text-[#444]" key={item}>
                    <span aria-hidden="true" className="mt-[10px] size-1.5 shrink-0 rounded-full bg-[#ef5b27]" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f5f3] px-[max(5.4vw,24px)] py-16 md:py-20">
        <div className="mx-auto max-w-[1320px]">
          <div className="mb-9 flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="pneu-sans mb-4 flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#555]">
                <span aria-hidden="true" className="h-[2px] w-9 bg-[#e51d2a]" />
                Nos services
              </p>
              <h2 className="pneu-sans text-[clamp(30px,4vw,44px)] font-bold leading-[1.04] tracking-[-0.04em] text-[#090909]">
                Une aide adaptée à votre besoin
              </h2>
            </div>
            <Link className="pneu-sans inline-flex items-center gap-2 text-[13px] font-semibold text-[#191919] transition-colors hover:text-[#d71920]" href="/#services">
              Découvrir l’ensemble des services <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {servicePages.map((service, index) => (
              <Link className="group flex min-h-[340px] flex-col overflow-hidden border border-black/10 bg-white transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-black/20 hover:shadow-[0_18px_45px_-25px_rgba(0,0,0,0.35)]" href={`/services/${service.slug}`} key={service.slug}>
                <div className="relative h-[210px] overflow-hidden bg-[#e8e8e6] sm:h-[230px]">
                  <Image
                    alt={service.imageAlt}
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                    fill
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    src={service.image}
                  />
                  <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10 opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="pneu-sans absolute left-5 top-5 bg-white px-3 py-1.5 text-[10px] font-bold tracking-[0.18em] text-[#171717]">0{index + 1} / 06</span>
                  <span aria-hidden="true" className="absolute bottom-5 right-5 grid size-10 place-items-center rounded-full bg-white text-[#e61d2a] transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowRight className="size-4" />
                  </span>
                </div>
                <div className="flex flex-1 items-center justify-between gap-4 px-5 py-5 sm:px-6">
                  <span className="pneu-sans max-w-[280px] text-[17px] font-bold leading-6 tracking-[-0.02em] text-[#111]">{service.label}</span>
                  <span aria-hidden="true" className="h-px flex-1 bg-black/10 transition-colors group-hover:bg-[#e61d2a]/50" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#e61d2a] px-[max(5.4vw,24px)] py-8 text-white md:py-10">
        <div className="mx-auto flex max-w-[1320px] flex-wrap items-center justify-between gap-6">
          <div>
            <p className="pneu-sans mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/75">Pneu · {department.name} ({department.code})</p>
            <h2 className="pneu-sans max-w-[900px] text-[clamp(28px,4vw,42px)] font-bold leading-[1.05] tracking-[-0.04em]">
              Besoin d’une solution pour votre pneu ?
            </h2>
          </div>
          <Link className="pneu-sans inline-flex min-h-[50px] items-center gap-4 border border-white/70 px-6 text-[14px] font-semibold text-white transition-colors hover:border-white hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white" href="/#contact">
            Nous contacter <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </section>

      <Partners />
      <Footer />
    </main>
  );
}
