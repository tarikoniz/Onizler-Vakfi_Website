"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import {
  GraduationCap, CalendarDays, MapPin, Monitor, Briefcase,
  CheckCircle2, Send, Heart,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";

const areaConfigs = [
  { key: "education", icon: GraduationCap },
  { key: "event", icon: CalendarDays },
  { key: "field", icon: MapPin },
  { key: "digital", icon: Monitor },
  { key: "professional", icon: Briefcase },
] as const;

export default function VolunteerPage() {
  const t = useTranslations("volunteer");
  const reasons: string[] = t.raw("reasons");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero title={t("hero_title")} subtitle={t("hero_subtitle")} />

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-6 sm:px-8">
          <ScrollReveal direction="up">
            <p className="text-center text-lg text-charcoal/60 mb-16 max-w-2xl mx-auto font-light">
              {t("intro")}
            </p>
          </ScrollReveal>

          {/* Why */}
          <ScrollReveal direction="up" delay={100}>
            <div className="bg-cream p-8 sm:p-10 border border-gray-light mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-[2px] bg-gold" />
                <h2 className="text-2xl font-extrabold text-charcoal tracking-tight">
                  {t("why_title")}
                </h2>
              </div>
              <ul className="space-y-3">
                {reasons.map((reason: string, i: number) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-charcoal/60">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Areas */}
          <ScrollReveal direction="up">
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-12 h-[2px] bg-gold" />
                <span className="text-gold text-xs font-bold tracking-[0.3em] uppercase">{t("areas_label")}</span>
                <div className="w-12 h-[2px] bg-gold" />
              </div>
              <h2 className="text-2xl font-extrabold text-charcoal tracking-tight">
                {t("areas_title")}
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {areaConfigs.map(({ key, icon: Icon }, i) => (
              <ScrollReveal key={key} direction="up" delay={i * 100}>
                <div className="group bg-cream p-6 border border-gray-light hover:border-gold/30 transition-all duration-500 hover:shadow-lg text-center relative overflow-hidden h-full">
                  <div className="absolute top-0 left-0 w-0 h-[3px] bg-gold group-hover:w-full transition-all duration-500" />
                  <div className="w-12 h-12 bg-white flex items-center justify-center mx-auto mb-3 group-hover:bg-gold/10 transition-colors">
                    <Icon className="w-6 h-6 text-charcoal/60 group-hover:text-gold transition-colors duration-300" />
                  </div>
                  <h3 className="font-bold text-charcoal mb-1 group-hover:text-gold transition-colors duration-300">
                    {t(`areas.${key}.title`)}
                  </h3>
                  <p className="text-sm text-charcoal/50">{t(`areas.${key}.text`)}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Visual divider */}
          <ScrollReveal direction="fade">
            <div className="relative h-32 bg-gradient-to-r from-gold to-gold-light mb-12 overflow-hidden flex items-center justify-center">
              <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-[0.08]">
                <Image src="/logo-mark-white.png" alt="" width={200} height={200} className="" />
              </div>
              <p className="text-white font-bold text-lg tracking-wider uppercase relative z-10">{t("banner_text")}</p>
            </div>
          </ScrollReveal>

          {/* Form */}
          <ScrollReveal direction="up">
            <div className="bg-cream p-8 sm:p-10 border border-gray-light">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mb-6">
                    <Heart className="w-10 h-10 text-gold" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-charcoal mb-3">{t("success_title")}</h3>
                  <p className="text-charcoal/50 max-w-md">{t("success_text")}</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 px-8 py-3 border border-gray-light text-charcoal/60 font-bold tracking-wider uppercase text-sm hover:border-gold hover:text-gold transition-all"
                  >
                    {t("new_application")}
                  </button>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-10 h-[2px] bg-gold" />
                    <h2 className="text-2xl font-extrabold text-charcoal tracking-tight">
                      {t("form_title")}
                    </h2>
                  </div>
                  <form className="space-y-5" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-charcoal/50 uppercase tracking-wider mb-2">
                          {t("form_name")}
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 border border-gray-light bg-white text-charcoal focus:outline-none focus:border-gold transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-charcoal/50 uppercase tracking-wider mb-2">
                          {t("form_email")}
                        </label>
                        <input
                          type="email"
                          required
                          className="w-full px-4 py-3 border border-gray-light bg-white text-charcoal focus:outline-none focus:border-gold transition-colors"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-charcoal/50 uppercase tracking-wider mb-2">
                          {t("form_phone")}
                        </label>
                        <input
                          type="tel"
                          className="w-full px-4 py-3 border border-gray-light bg-white text-charcoal focus:outline-none focus:border-gold transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-charcoal/50 uppercase tracking-wider mb-2">
                          {t("form_city")}
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-gray-light bg-white text-charcoal focus:outline-none focus:border-gold transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-charcoal/50 uppercase tracking-wider mb-2">
                        {t("form_profession")}
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-light bg-white text-charcoal focus:outline-none focus:border-gold transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-charcoal/50 uppercase tracking-wider mb-2">
                        {t("form_motivation")}
                      </label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-light bg-white text-charcoal focus:outline-none focus:border-gold transition-colors resize-none"
                      />
                    </div>
                    <label className="flex items-start gap-2 text-sm text-charcoal/50">
                      <input type="checkbox" required className="mt-1" />
                      {t("form_kvkk")}
                    </label>
                    <button
                      type="submit"
                      className="group px-10 py-4 bg-gold text-white font-bold tracking-wider uppercase text-sm hover:bg-gold-light transition-all duration-300 flex items-center gap-3"
                    >
                      {t("form_submit")}
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                </>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
