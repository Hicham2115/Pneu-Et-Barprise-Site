import Image from "next/image";
import { Check } from "lucide-react";

const replacementSigns = [
  "Usure importante de la bande de roulement",
  "Craquelures ou déformations visibles",
  "Pneu endommagé après un choc",
  "Perte régulière de pression",
  "Avant un long trajet, pour plus de sécurité",
];

export function TireAdvice() {
  return (
    <section
      aria-labelledby="tire-advice-title"
      className="grid bg-white lg:min-h-[540px] lg:grid-cols-2"
      id="conseils"
    >
      <div className="relative min-h-[300px] overflow-hidden bg-[#111] sm:min-h-[380px] lg:min-h-[540px]">
        <Image
          alt="Pneu de voiture en cours de montage dans un atelier"
          className="object-cover object-[68%_center] grayscale lg:[clip-path:polygon(0_0,100%_0,83%_100%,0_100%)]"
          fill
          sizes="(max-width: 1023px) 100vw, 50vw"
          src="/images/pneu-tire-service.png"
        />
      </div>

      <div className="flex items-center px-[max(5.4vw,24px)] py-16 lg:py-20 lg:pl-12 lg:pr-[max(5.4vw,24px)]">
        <div className="mx-auto w-full max-w-[560px]">
          <p className="pneu-sans mb-5 flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#161616]">
            <span aria-hidden="true" className="h-[2px] w-9 bg-[#e51d2a]" />
            Quand changer vos pneus ?
          </p>
          <h2
            className="pneu-sans mb-5 text-[clamp(32px,4vw,48px)] font-bold leading-[1.05] tracking-[-0.04em] text-[#090909]"
            id="tire-advice-title"
          >
            Des pneus en bon état pour votre sécurité
          </h2>
          <p className="pneu-sans mb-6 max-w-[520px] text-[15px] leading-6 text-[#4a4a4a]">
            Des pneus usés ou endommagés réduisent l’adhérence et augmentent les
            risques sur la route. Leur remplacement est conseillé dans les cas
            suivants :
          </p>

          <ul className="grid gap-3">
            {replacementSigns.map((sign) => (
              <li
                className="flex items-center gap-3 pneu-sans text-[14px] leading-6 text-[#343434]"
                key={sign}
              >
                <span className="grid size-6 shrink-0 place-items-center rounded-full bg-[#e51d2a] text-white">
                  <Check aria-hidden="true" size={14} strokeWidth={3} />
                </span>
                {sign}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
