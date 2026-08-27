/* eslint-disable @next/next/no-img-element */
import { useTranslations } from "next-intl";
import { Download, Check, X, Mail } from "lucide-react";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import { siteConfig } from "@/config/site";

const brandColors = [
  { name: "Lacivert / Teal", hex: "#143D4B" },
  { name: "Altın", hex: "#B08D57" },
  { name: "Krem", hex: "#FAF8F5" },
  { name: "Antrasit", hex: "#111827" },
];

export default function PressPage() {
  const t = useTranslations("press");

  const variants = [
    { key: "teal", svg: "/logo-teal.svg", png: "/logo-mark-color.png", bg: "bg-cream", label: t("variant_teal") },
    { key: "white", svg: "/logo-white.svg", png: "/logo-mark-white.png", bg: "bg-navy", label: t("variant_white") },
    { key: "gold", svg: "/logo-gold.svg", png: "/logo-mark-gold.png", bg: "bg-cream", label: t("variant_gold") },
  ];

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

          {/* Logo variants */}
          <ScrollReveal direction="up">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-10 h-[2px] bg-gold" />
              <h2 className="text-2xl font-extrabold text-charcoal tracking-tight">{t("logo_title")}</h2>
            </div>
            <p className="text-charcoal/50 text-sm mb-8 max-w-2xl">{t("logo_desc")}</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20">
            {variants.map((v, i) => (
              <ScrollReveal key={v.key} direction="up" delay={i * 100}>
                <div className="border border-gray-light overflow-hidden">
                  <div className={`${v.bg} h-44 flex items-center justify-center p-8`}>
                    <img src={v.svg} alt={v.label} className="h-full w-auto object-contain" />
                  </div>
                  <div className="p-4">
                    <p className="text-sm font-bold text-charcoal mb-3">{v.label}</p>
                    <div className="flex gap-2">
                      <a
                        href={v.svg}
                        download
                        className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-navy text-white text-xs font-bold uppercase tracking-wider hover:bg-navy-light transition-colors"
                      >
                        <Download className="w-3.5 h-3.5" /> {t("download_svg")}
                      </a>
                      <a
                        href={v.png}
                        download
                        className="flex-1 flex items-center justify-center gap-2 px-3 py-2 border border-gray-light text-charcoal/60 text-xs font-bold uppercase tracking-wider hover:border-gold hover:text-gold transition-colors"
                      >
                        <Download className="w-3.5 h-3.5" /> {t("download_png")}
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Brand colors */}
          <ScrollReveal direction="up">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-[2px] bg-gold" />
              <h2 className="text-2xl font-extrabold text-charcoal tracking-tight">{t("colors_title")}</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-20">
            {brandColors.map((c, i) => (
              <ScrollReveal key={c.hex} direction="up" delay={i * 80}>
                <div className="border border-gray-light overflow-hidden">
                  <div className="h-24" style={{ backgroundColor: c.hex }} />
                  <div className="p-3">
                    <p className="text-xs font-bold text-charcoal">{c.name}</p>
                    <p className="text-xs text-charcoal/40 font-mono mt-0.5">{c.hex}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Usage */}
          <ScrollReveal direction="up">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-[2px] bg-gold" />
              <h2 className="text-2xl font-extrabold text-charcoal tracking-tight">{t("usage_title")}</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-20">
              <div className="bg-cream border border-gray-light border-l-4 border-l-green p-6 flex items-start gap-3">
                <Check className="w-5 h-5 text-green shrink-0 mt-0.5" />
                <p className="text-sm text-charcoal/70 leading-relaxed">{t("usage_do")}</p>
              </div>
              <div className="bg-cream border border-gray-light border-l-4 border-l-gold p-6 flex items-start gap-3">
                <X className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <p className="text-sm text-charcoal/70 leading-relaxed">{t("usage_dont")}</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Press contact */}
          <ScrollReveal direction="up">
            <div className="bg-navy p-8 sm:p-10 relative overflow-hidden">
              <div className="absolute right-0 top-0 h-full w-40 opacity-[0.08]">
                <img src="/logo-white.svg" alt="" className="w-full h-full object-contain" />
              </div>
              <div className="relative">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-[2px] bg-gold-warm" />
                  <h2 className="text-xl font-extrabold text-white tracking-tight">{t("contact_title")}</h2>
                </div>
                <p className="text-white/70 text-sm mb-4">{t("contact_desc")}</p>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="inline-flex items-center gap-2 text-gold-warm font-bold hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4" /> {siteConfig.contact.email}
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
