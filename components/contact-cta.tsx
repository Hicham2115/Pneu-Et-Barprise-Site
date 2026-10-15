import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export function ContactCta() {
  return (
    <section
      aria-labelledby="contact-cta-title"
      className="grid overflow-hidden bg-[#090909] text-white lg:grid-cols-[0.9fr_1.1fr]"
      id="contact"
    >
      <div className="flex items-center justify-center px-[max(5.4vw,24px)] py-16 lg:justify-end lg:py-20">
        <div className="w-full max-w-[560px]">
          <p className="pneu-sans mb-5 flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/75">
            <span aria-hidden="true" className="h-[2px] w-9 bg-[#e51d2a]" />
            Contact
          </p>
          <h2
            className="pneu-sans mb-5 text-[clamp(32px,4vw,48px)] font-bold leading-[1.05] tracking-[-0.04em] text-white"
            id="contact-cta-title"
          >
            Besoin d’un changement de pneu sans rendez-vous ?
          </h2>
          <p className="pneu-sans mb-7 max-w-[460px] text-[15px] leading-6 text-white/70">
            Contactez notre équipe pour une assistance rapide et un
            accompagnement adapté à votre situation.
          </p>
          <Link
            className="pneu-sans group inline-flex min-h-[50px] items-center gap-4 bg-[#e51d2a] px-6 text-[14px] font-semibold !text-white transition-colors hover:bg-[#c81521] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e51d2a]"
            href="#contact"
          >
            <Phone aria-hidden="true" className="size-4 !text-white" />
            Nous contacter
            <ArrowRight
              aria-hidden="true"
              className="size-4 !text-white transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>

      <div className="relative min-h-[280px] bg-[#151515] sm:min-h-[360px] lg:min-h-[440px]">
        <Image
          alt="Un technicien resserre une roue dans un atelier automobile"
          className="object-cover object-center lg:[clip-path:polygon(13%_0,100%_0,100%_100%,0_100%)]"
          fill
          sizes="(max-width: 1023px) 100vw, 55vw"
          src="/images/pneu-contact-service.png"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/10 lg:from-black/35"
        />
      </div>
    </section>
  );
}
