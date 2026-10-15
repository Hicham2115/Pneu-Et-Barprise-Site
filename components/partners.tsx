import Image from "next/image";

const partners = [
  { name: "Bridgestone", src: "/images/bridgestone.svg", width: 160, height: 24 },
  { name: "Continental", src: "/images/continental.svg", width: 145, height: 28 },
  { name: "Goodyear", src: "/images/goodyear-clean.png", width: 140, height: 26 },
  { name: "Hankook", src: "/images/hankook.svg", width: 135, height: 32 },
  { name: "Michelin", src: "/images/michelin.webp", width: 145, height: 34 },
  { name: "Pirelli", src: "/images/pirelli.svg", width: 100, height: 28 },
  { name: "Dunlop", src: "/images/dunlop.svg", width: 110, height: 28 },
  { name: "Uniroyal", src: "/images/uniroyal.svg", width: 120, height: 28 },
];

export function Partners() {
  return (
    <section
      aria-labelledby="partners-title"
      className="bg-[#ff5122] px-6 py-6 text-white sm:px-[5.4vw] sm:py-7"
    >
      <div className="mx-auto flex max-w-[1600px] flex-wrap items-center justify-between gap-x-10 gap-y-5">
        <h2
          className="pneu-sans shrink-0 text-[26px] font-normal tracking-[-0.04em] sm:text-[34px]"
          id="partners-title"
        >
          Nos partenaires
        </h2>
        <ul
          aria-label="Marques partenaires"
          className="flex w-full flex-1 flex-wrap items-center justify-around gap-x-6 gap-y-5 sm:w-auto sm:gap-x-5"
        >
          {partners.map((partner) => (
            <li className="flex h-12 items-center justify-center" key={partner.name}>
              <div
                className={partner.name === "Goodyear" ? "bg-[#17489b] px-2 py-2" : ""}
              >
                <Image
                  alt={partner.name}
                  className="h-auto max-h-10 w-auto max-w-[140px] object-contain"
                  height={partner.height}
                  src={partner.src}
                  width={partner.width}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
