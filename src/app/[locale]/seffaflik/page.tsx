import { useTranslations } from "next-intl";
import Image from "next/image";
import { FileText, BarChart3, PieChart, Target, Quote, Clock, CheckCircle2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";

export default function TransparencyPage() {
  const t = useTranslations("transparency");

  const sections = [
    { key: "reports_title", icon: FileText, desc: "reports_desc" },
    { key: "financial_title", icon: BarChart3, desc: "financial_desc" },
    { key: "donation_title", icon: PieChart, desc: "donation_desc" },
    { key: "strategy_title", icon: Target, desc: "strategy_desc" },
  ] as const;

  const principles: string[] = t.raw("principles");

  return (
    <>
      <PageHero title={t("hero_title")} subtitle={t("hero_subtitle")} />

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-6 sm:px-8">
          <ScrollReveal direction="up">
            <p className="text-center text-lg text-charcoal/60 mb-16 max-w-2xl mx-auto font-light">
              {t("intro")}
            </p>
          </ScrollReveal>

          {/* Principles */}
          <ScrollReveal direction="up" delay={50}>
            <div className="bg-cream p-8 sm:p-10 border border-gray-light mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-[2px] bg-gold" />
                <h2 className="text-xl font-extrabold text-charcoal tracking-tight">
                  {t("principles_title")}
                </h2>
              </div>
              <ul className="space-y-3">
                {principles.map((p: string, i: number) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-charcoal/60">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {sections.map(({ key, icon: Icon, desc }, i) => (
              <ScrollReveal key={key} direction="up" delay={i * 100}>
                <div className="group bg-cream p-8 border border-gray-light hover:border-gold/30 transition-all duration-500 hover:shadow-lg relative overflow-hidden h-full">
                  <div className="absolute top-0 left-0 w-0 h-[3px] bg-gold group-hover:w-full transition-all duration-500" />
                  <div className="w-12 h-12 bg-white flex items-center justify-center mb-4 group-hover:bg-gold/10 transition-colors">
                    <Icon className="w-6 h-6 text-charcoal/60 group-hover:text-gold transition-colors duration-300" />
                  </div>
                  <h2 className="text-lg font-extrabold text-charcoal tracking-tight group-hover:text-gold transition-colors duration-300 mb-2">
                    {t(key)}
                  </h2>
                  <p className="text-sm text-charcoal/50 leading-relaxed mb-4">
                    {t(desc)}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-gold/70 font-bold uppercase tracking-wider">
                    <Clock className="w-3.5 h-3.5" />
                    {t("coming_soon")}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Visual divider */}
          <ScrollReveal direction="fade">
            <div className="relative h-24 bg-gradient-to-r from-gold to-gold-light overflow-hidden flex items-center justify-center mb-8">
              <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-[0.08]">
                <Image src="/logo.png" alt="" width={150} height={150} className="brightness-0 invert" />
              </div>
              <p className="text-white font-bold text-sm tracking-[0.3em] uppercase relative z-10">
                {t("banner_text")}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={400}>
            <div className="bg-cream p-8 sm:p-10 relative overflow-hidden border border-gray-light border-l-4 border-l-gold">
              <div className="flex items-start gap-4">
                <Quote className="w-8 h-8 text-gold flex-shrink-0" />
                <p className="text-charcoal/60 italic leading-relaxed">
                  {t("legal_quote")}
                </p>
              </div>
              <p className="text-right text-sm text-charcoal/30 mt-4 font-bold">
                — Vakıf Senedi, Madde 21
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
