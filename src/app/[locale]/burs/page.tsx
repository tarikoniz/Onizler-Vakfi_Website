"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { GraduationCap, FileText, Calendar, CheckCircle2, ChevronDown, HelpCircle } from "lucide-react";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-light bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-cream/50 transition-colors"
      >
        <span className="font-bold text-charcoal text-sm">{q}</span>
        <ChevronDown className={`w-5 h-5 text-charcoal/30 flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="px-5 pb-5 text-sm text-charcoal/75 leading-relaxed border-t border-gray-light pt-4">
          {a}
        </div>
      )}
    </div>
  );
}

export default function ScholarshipPage() {
  const t = useTranslations("scholarship");

  const types: string[] = t.raw("types");
  const conditions: string[] = t.raw("conditions");
  const docs: string[] = t.raw("docs");
  const faq: { q: string; a: string }[] = t.raw("faq");

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

          <div className="space-y-6">
            {/* Types */}
            <ScrollReveal direction="up" delay={100}>
              <div className="bg-cream p-8 border border-gray-light">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 bg-white flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-gold" />
                  </div>
                  <h2 className="text-xl font-extrabold text-charcoal tracking-tight">
                    {t("types_title")}
                  </h2>
                </div>
                <ul className="space-y-3">
                  {types.map((type: string, i: number) => (
                    <li key={i} className="flex items-center gap-3 text-charcoal/60">
                      <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
                      {type}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* Conditions */}
            <ScrollReveal direction="up" delay={200}>
              <div className="bg-cream p-8 border border-gray-light">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 bg-white flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-gold" />
                  </div>
                  <h2 className="text-xl font-extrabold text-charcoal tracking-tight">
                    {t("conditions_title")}
                  </h2>
                </div>
                <ul className="space-y-3">
                  {conditions.map((c: string, i: number) => (
                    <li key={i} className="flex items-center gap-3 text-charcoal/60">
                      <span className="w-7 h-7 bg-gold/10 flex items-center justify-center text-xs font-bold text-gold flex-shrink-0 border border-gold/20">
                        {i + 1}
                      </span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* Documents */}
            <ScrollReveal direction="up" delay={300}>
              <div className="bg-cream p-8 border border-gray-light">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 bg-white flex items-center justify-center">
                    <FileText className="w-5 h-5 text-gold" />
                  </div>
                  <h2 className="text-xl font-extrabold text-charcoal tracking-tight">
                    {t("docs_title")}
                  </h2>
                </div>
                <ul className="space-y-3">
                  {docs.map((doc: string, i: number) => (
                    <li key={i} className="flex items-center gap-3 text-charcoal/60">
                      <FileText className="w-4 h-4 text-charcoal/30 flex-shrink-0" />
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* Visual */}
            <ScrollReveal direction="fade">
              <div className="relative h-24 bg-cream overflow-hidden flex items-center justify-center border border-gray-light">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 opacity-[0.06]">
                  <Image src="/logo.png" alt="" width={120} height={120} className="object-contain" />
                </div>
                <p className="text-charcoal/30 font-bold text-sm tracking-[0.3em] uppercase relative z-10">Eğitimde Fırsat Eşitliği</p>
              </div>
            </ScrollReveal>

            {/* Calendar */}
            <ScrollReveal direction="up" delay={400}>
              <div className="bg-gradient-to-r from-gold to-gold-light p-8 relative overflow-hidden">
                <div className="absolute right-4 top-4 opacity-10">
                  <Calendar className="w-24 h-24 text-white" />
                </div>
                <div className="relative flex items-center gap-3 mb-4">
                  <Calendar className="w-6 h-6 text-white" />
                  <h2 className="text-xl font-extrabold text-white tracking-tight">
                    {t("calendar_title")}
                  </h2>
                </div>
                <p className="text-white/80 relative leading-relaxed">
                  {t("calendar_text")}
                </p>
              </div>
            </ScrollReveal>

            {/* FAQ */}
            <ScrollReveal direction="up" delay={500}>
              <div className="bg-cream p-8 border border-gray-light">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 bg-white flex items-center justify-center">
                    <HelpCircle className="w-5 h-5 text-gold" />
                  </div>
                  <h2 className="text-xl font-extrabold text-charcoal tracking-tight">
                    {t("faq_title")}
                  </h2>
                </div>
                <div className="space-y-2">
                  {faq.map((item, i) => (
                    <FaqItem key={i} q={item.q} a={item.a} />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
