import { Plus } from "lucide-react";

const questions = [
  {
    question: "Peut-on réparer tous les types de crevaison ?",
    answer:
      "Cela dépend de l’emplacement et de l’importance du dommage. Un professionnel vérifie d’abord le pneu et vous conseille une réparation ou un remplacement adapté.",
  },
  {
    question: "Quand faut-il remplacer un pneu ?",
    answer:
      "Un pneu doit être remplacé lorsque sa bande de roulement est trop usée, s’il présente une déformation ou une craquelure, ou si une crevaison ne peut pas être réparée en sécurité.",
  },
  {
    question: "Intervenez-vous à domicile ou sur la route ?",
    answer:
      "Oui, nous pouvons intervenir sur le lieu où votre véhicule est immobilisé. Appelez-nous pour nous expliquer la situation et confirmer les modalités d’intervention.",
  },
  {
    question: "Prenez-vous en charge les pneus d’engins de chantier ?",
    answer:
      "Oui, nous prenons en charge les pneus d’engins de chantier et de véhicules professionnels. Contactez-nous avec le type d’engin et votre besoin.",
  },
];

export function Faq() {
  return (
    <section
      aria-labelledby="faq-title"
      className="bg-white px-[max(5.4vw,24px)] py-20 md:py-24"
      id="faq"
    >
      <div className="mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <p className="pneu-sans mb-5 flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#161616]">
            <span aria-hidden="true" className="h-[2px] w-9 bg-[#e51d2a]" />
            Questions fréquentes
          </p>
          <h2
            className="pneu-sans max-w-[440px] text-[clamp(32px,4vw,52px)] font-bold leading-[1.04] tracking-[-0.04em] text-[#090909]"
            id="faq-title"
          >
            Vos questions,
            <br />
            nos réponses
          </h2>
        </div>

        <div className="border-b border-[#dededb]">
          {questions.map(({ question, answer }) => (
            <details className="group border-t border-[#dededb]" key={question}>
              <summary className="pneu-sans flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-[15px] font-semibold text-[#171717] transition-colors hover:text-[#d71920] [&::-webkit-details-marker]:hidden md:gap-6 md:text-[16px]">
                {question}
                <Plus
                  aria-hidden="true"
                  className="size-5 shrink-0 text-[#e51d2a] transition-transform duration-200 group-open:rotate-45"
                  strokeWidth={1.8}
                />
              </summary>
              <p className="pneu-sans max-w-[680px] pb-5 pr-10 text-[14px] leading-6 text-[#555]">
                {answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
