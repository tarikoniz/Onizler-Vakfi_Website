import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import {
  GraduationCap, Award, Palette, HandHeart, Globe,
  Monitor, BookOpen, HeartHandshake, Building2, ArrowRight,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";

const areas = [
  { key: "education", icon: GraduationCap },
  { key: "scholarship", icon: Award },
  { key: "culture", icon: Palette },
  { key: "solidarity", icon: HandHeart },
  { key: "international", icon: Globe },
  { key: "digital", icon: Monitor },
  { key: "research", icon: BookOpen },
  { key: "social_services", icon: HeartHandshake },
  { key: "construction", icon: Building2 },
] as const;

export default function AreasPage() {
  const t = useTranslations("focus_areas");

  return (
    <>
      <PageHero title={t("title")} subtitle={t("subtitle")} />

      {/* Stats strip */}
      <section className="bg-gold py-6">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-16 text-white">
            {[
              { value: 9, label: t("stats_areas") },
              { value: 24, label: t("stats_founders") },
              { value: 2, suffix: "M₺", label: t("stats_capital") },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <span className="text-2xl font-extrabold"><AnimatedCounter value={s.value} suffix={s.suffix || ""} /></span>
                <span className="text-white/80 text-xs uppercase tracking-wider font-bold ml-2">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-6 sm:px-8 space-y-6">
          {areas.map(({ key, icon: Icon }, i) => (
            <ScrollReveal key={key} direction={i % 2 === 0 ? "left" : "right"} delay={i * 60}>
              <div className="group bg-cream p-6 sm:p-8 border border-gray-light hover:border-gold/30 transition-all duration-500 hover:shadow-lg flex flex-col sm:flex-row gap-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-0 h-[3px] bg-gold group-hover:w-full transition-all duration-500" />
                {/* Large background number */}
                <div className="absolute -right-4 -top-6 text-[100px] font-extrabold text-charcoal/[0.03] leading-none select-none">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="flex-shrink-0 relative">
                  <div className="w-16 h-16 bg-white flex items-center justify-center group-hover:bg-gold/10 transition-colors border border-gray-light">
                    <Icon className="w-7 h-7 text-charcoal/60 group-hover:text-gold transition-colors duration-300" />
                  </div>
                </div>
                <div className="relative">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[10px] font-bold text-gold uppercase tracking-widest bg-gold/10 px-2 py-1">
                      Alan {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-charcoal tracking-tight group-hover:text-gold transition-colors duration-300">
                    {t(`areas.${key}.title`)}
                  </h2>
                  <p className="text-charcoal/60 leading-relaxed mt-3">
                    {t(`areas.${key}.description`)}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gold via-gold-light to-gold" />
        <div className="absolute inset-0 opacity-[0.06]">
          <Image src="/logo.png" alt="" width={400} height={400} className="absolute right-10 top-1/2 -translate-y-1/2 brightness-0 invert object-contain h-full w-auto" />
        </div>
        <div className="relative mx-auto max-w-3xl px-6 sm:px-8 text-center">
          <ScrollReveal direction="up">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">{t("cta_title")}</h2>
            <p className="text-white/80 mb-10 text-lg">{t("cta_text")}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/gonullu-ol" className="group px-10 py-4 bg-white text-gold font-bold tracking-wider uppercase text-sm hover:bg-cream transition-all duration-300 flex items-center gap-2">
                {t("cta_volunteer")} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/burs" className="px-10 py-4 border-2 border-white text-white font-bold tracking-wider uppercase text-sm hover:bg-white/10 transition-all duration-300">
                {t("cta_scholarship")}
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
