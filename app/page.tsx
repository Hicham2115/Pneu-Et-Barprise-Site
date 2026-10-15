import { Hero } from "@/components/hero";
import { Faq } from "@/components/faq";
import { HowItWorks } from "@/components/how-it-works";
import { Services } from "@/components/services";
import { TireAdvice } from "@/components/tire-advice";
import { WhyPneu } from "@/components/why-pneu";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <HowItWorks />
      <TireAdvice />
      <WhyPneu />
      <Faq />
    </main>
  );
}
