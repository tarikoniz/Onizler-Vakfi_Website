"use client";

/* eslint-disable @next/next/no-img-element */
import { useTranslations } from "next-intl";
import { siteConfig } from "@/config/site";
import ScrollReveal from "@/components/ScrollReveal";

export default function PartnersBand() {
  const t = useTranslations("partners");
  const partners = siteConfig.partners;

  // No partners configured yet → render nothing.
  if (!partners.length) return null;

  return (
    <section className="bg-white py-16 sm:py-20 border-t border-gray-light">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <ScrollReveal direction="up">
          <div className="text-center mb-12">
            <span className="text-gold text-xs font-bold tracking-[0.3em] uppercase">{t("label")}</span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-charcoal tracking-tight">
              {t("title")}
            </h2>
          </div>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={120}>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
            {partners.map((p) => {
              const logo = (
                <img
                  src={p.logo}
                  alt={p.name}
                  className="h-12 sm:h-14 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              );
              return p.url ? (
                <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" title={p.name}>
                  {logo}
                </a>
              ) : (
                <div key={p.name} title={p.name}>{logo}</div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
