"use client";

import Image from "next/image";
import Link from "next/link";
import type { FormEvent } from "react";
import { ArrowRight, MapPin, Phone } from "lucide-react";

export function ContactCta() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const message = [
      `Bonjour, je m'appelle ${formData.get("name")}.`,
      `Téléphone : ${formData.get("phone")}.`,
      `Lieu : ${formData.get("location")}.`,
      `Besoin : ${formData.get("problem")}.`,
    ].join("\n");

    window.open(
      `https://wa.me/33752212362?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <section
      aria-labelledby="contact-cta-title"
      className="contact-section bg-[#f5f5f3] px-[max(5.4vw,24px)] py-14 md:py-20"
      id="contact"
    >
      <div className="mx-auto grid max-w-[1320px] overflow-hidden bg-white shadow-[0_24px_70px_-45px_rgba(0,0,0,0.35)] lg:grid-cols-[1fr_0.9fr]">
        <div className="flex flex-col justify-center px-7 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-16">
          <p className="pneu-sans mb-5 flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#555]">
            <span aria-hidden="true" className="h-[2px] w-9 bg-[#e61d2a]" />
            Contact · Île-de-France
          </p>
          <h2
            className="pneu-sans mb-5 max-w-[540px] text-[clamp(34px,4.4vw,56px)] font-bold leading-[1.02] tracking-[-0.05em] text-[#111]"
            id="contact-cta-title"
          >
            Une crevaison ? On vous aide à repartir.
          </h2>
          <p className="pneu-sans mb-6 max-w-[470px] text-[14px] leading-6 text-[#555]">
            Décrivez votre besoin et votre localisation. Votre demande sera
            préparée dans WhatsApp pour que vous puissiez nous l’envoyer.
          </p>
          <form className="grid gap-3 sm:grid-cols-2" onSubmit={handleSubmit}>
            <label className="pneu-sans grid gap-1.5 text-[12px] font-semibold text-[#333]">
              Votre nom
              <input className="min-h-11 border border-black/15 bg-white px-3 text-[14px] font-normal outline-none transition-colors placeholder:text-[#999] focus:border-[#777] focus:outline-none focus:ring-0" name="name" placeholder="Nom" required />
            </label>
            <label className="pneu-sans grid gap-1.5 text-[12px] font-semibold text-[#333]">
              Téléphone
              <input className="min-h-11 border border-black/15 bg-white px-3 text-[14px] font-normal outline-none transition-colors placeholder:text-[#999] focus:border-[#777] focus:outline-none focus:ring-0" name="phone" placeholder="Votre numéro" required type="tel" />
            </label>
            <label className="pneu-sans grid gap-1.5 text-[12px] font-semibold text-[#333]">
              Où se trouve le véhicule ?
              <input className="min-h-11 border border-black/15 bg-white px-3 text-[14px] font-normal outline-none transition-colors placeholder:text-[#999] focus:border-[#777] focus:outline-none focus:ring-0" name="location" placeholder="Ville ou adresse" required />
            </label>
            <label className="pneu-sans grid gap-1.5 text-[12px] font-semibold text-[#333]">
              Votre besoin
              <input className="min-h-11 border border-black/15 bg-white px-3 text-[14px] font-normal outline-none transition-colors placeholder:text-[#999] focus:border-[#777] focus:outline-none focus:ring-0" name="problem" placeholder="Crevaison, changement…" required />
            </label>
            <button className="pneu-sans group mt-1 inline-flex min-h-[50px] items-center justify-center gap-3 bg-[#e61d2a] px-5 text-[14px] font-semibold text-white transition-colors hover:bg-[#c81521] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e61d2a] sm:col-span-2 sm:justify-self-start" type="submit">
              Envoyer la demande sur WhatsApp
              <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" />
            </button>
          </form>
          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
            <a className="pneu-sans inline-flex items-center gap-2 text-[13px] font-semibold text-[#333] underline decoration-black/20 underline-offset-4 transition-colors hover:text-[#e61d2a]" href="tel:+33752212362">
              <Phone aria-hidden="true" className="size-4 text-[#e61d2a]" />
              07 52 21 23 62
            </a>
            <span className="pneu-sans inline-flex items-center gap-2 text-[12px] text-[#666]">
              <MapPin aria-hidden="true" className="size-4 text-[#e61d2a]" />
              Île-de-France
            </span>
          </div>
        </div>

        <div className="relative min-h-[280px] bg-[#151515] sm:min-h-[340px] lg:min-h-[440px]">
          <Image
            alt="Un technicien resserre une roue dans un atelier automobile"
            className="object-cover object-center"
            fill
            sizes="(max-width: 1023px) 100vw, 45vw"
            src="/images/pneu-contact-service.png"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          <p className="pneu-sans absolute bottom-6 left-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/90 sm:bottom-8 sm:left-8">
            Assistance et atelier pneus
          </p>
        </div>
      </div>
    </section>
  );
}
