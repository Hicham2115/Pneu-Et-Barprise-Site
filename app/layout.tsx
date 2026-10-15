import type { Metadata } from "next";
import Header from "@/components/comp-577";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SmoothScroll } from "@/components/smooth-scroll";
import "lenis/dist/lenis.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pneu — Changement de pneu sans rendez-vous",
  description:
    "Réparation, montage et changement de pneus sans rendez-vous. Découvrez aussi les pièces auto et la fixation de pare-brises chez Pneu.",
  keywords: ["changement de pneu sans rendez-vous", "réparation pneus", "pièces auto", "pare-brise"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr-MA">
      <body>
        <SmoothScroll>
          <Header />
          <ScrollReveal />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
