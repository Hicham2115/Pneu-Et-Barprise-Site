import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative grid min-h-[calc(100svh-80px)] grid-cols-1 overflow-hidden bg-white lg:grid-cols-[0.62fr_1.38fr] max-[760px]:min-h-0"
      id="accueil"
    >
      <div className="relative row-start-1 h-[42vh] min-h-[280px] overflow-hidden lg:col-start-2 lg:h-auto lg:min-h-[calc(100svh-80px)] lg:[clip-path:polygon(17%_0,100%_0,100%_100%,0_100%)] max-[760px]:h-[38svh] max-[760px]:min-h-[250px]">
        <Image
          alt="Pneu et jante en cours de montage dans un atelier automobile"
          className="object-cover object-[58%_center]"
          fill
          priority
          sizes="(max-width: 760px) 100vw, 58vw"
          src="/images/pneu-tire-service.png"
        />
      </div>

      <div className="relative z-10 row-start-2 flex items-center bg-white px-[max(5.4vw,24px)] py-12 lg:col-start-1 lg:row-start-1 lg:py-16 max-[760px]:px-6 max-[760px]:py-10">
        <div className="pneu-hero-copy w-full max-w-[620px] pb-4 lg:pb-0">
          <p className="pneu-sans mb-7 flex items-center gap-4 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#161616] max-[760px]:mb-4 max-[760px]:text-[10px]">
            Assistance et atelier pneus
            <span aria-hidden="true" className="h-[2px] w-9 bg-[#e51d2a]" />
          </p>
          <h1
            className="pneu-hero-title pneu-sans m-0 max-w-[640px] text-[clamp(54px,6vw,88px)] font-extrabold leading-[0.94] tracking-[-0.04em] text-[#090909] max-[760px]:text-[clamp(50px,14vw,72px)]"
            id="hero-title"
          >
            <span className="block">Changement</span>
            <span className="block">
              de pneu <span className="text-[#e51d2a]">sans</span>
            </span>
            <span className="block text-[#e51d2a]">rendez-vous</span>
          </h1>
          <p className="pneu-sans mb-7 mt-6 max-w-[450px] text-[17px] leading-[1.5] text-[#343434] max-[760px]:mt-5 max-[760px]:text-[15px]">
            Réparation, montage ou remplacement. Pneu vous accompagne aussi pour
            les pièces auto et la fixation de pare-brises.
          </p>
          <Link
            className="pneu-sans group inline-flex min-h-[50px] items-center justify-center gap-5 bg-[#e51d2a] px-8 text-[14px] font-semibold !text-white transition-colors hover:bg-[#c81521] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e51d2a] max-[760px]:min-h-[54px] max-[760px]:px-6"
            href="#services"
          >
            Nos services
            <ArrowRight
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-1"
              size={20}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
