"use client";

import { useTranslations } from "next-intl";
import { Calendar, ArrowRight, Newspaper } from "lucide-react";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";

interface NewsItem {
  date: string;
  category: string;
  title: string;
  excerpt: string;
}

export default function NewsPage() {
  const t = useTranslations("news");
  const items: NewsItem[] = t.raw("news_items");
  const featured = items[0];
  const rest = items.slice(1);

  return (
    <>
      <PageHero title={t("hero_title")} subtitle={t("hero_subtitle")} />

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-6 sm:px-8">
          {/* Featured article */}
          <ScrollReveal direction="up">
            <article className="group bg-navy p-8 sm:p-10 relative overflow-hidden mb-8">
              <div className="absolute inset-0 opacity-[0.05]">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="news-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#news-grid)" />
                </svg>
              </div>
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gold-warm" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-gold-warm text-navy text-xs font-bold uppercase tracking-wider">
                    {t(featured.category)}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-white/60 uppercase tracking-wider">
                    <Calendar className="w-3 h-3" />
                    {featured.date}
                  </span>
                  <span className="px-2 py-0.5 border border-gold-warm/50 text-gold-warm text-[10px] font-bold uppercase tracking-wider">
                    {t("featured")}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 tracking-tight">
                  {featured.title}
                </h2>
                <p className="text-white/75 text-base leading-relaxed mb-6 max-w-2xl">
                  {featured.excerpt}
                </p>
                <button className="flex items-center gap-2 text-sm font-bold text-gold-warm hover:text-gold-warm-light transition-colors uppercase tracking-wider">
                  {t("read_more")} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          </ScrollReveal>

          {/* Rest */}
          <div className="space-y-4">
            {rest.map((item, i) => (
              <ScrollReveal key={item.title} direction="up" delay={(i + 1) * 100}>
                <article className="group bg-cream p-6 sm:p-8 border border-gray-light hover:border-gold/30 transition-all duration-500 hover:shadow-lg relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-0 h-[3px] bg-gold group-hover:w-full transition-all duration-500" />
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-gold text-white text-xs font-bold uppercase tracking-wider">
                      {t(item.category)}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-charcoal/40 uppercase tracking-wider">
                      <Calendar className="w-3 h-3" />
                      {item.date}
                    </span>
                  </div>
                  <h2 className="text-xl font-extrabold text-charcoal mb-2 tracking-tight group-hover:text-gold transition-colors duration-300">
                    {item.title}
                  </h2>
                  <p className="text-charcoal/70 text-sm leading-relaxed mb-5">
                    {item.excerpt}
                  </p>
                  <button className="flex items-center gap-2 text-sm font-bold text-navy hover:text-gold transition-colors uppercase tracking-wider">
                    {t("read_more")} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </article>
              </ScrollReveal>
            ))}
          </div>

          {/* Newsletter CTA */}
          <ScrollReveal direction="up" delay={300}>
            <div className="mt-12 bg-gradient-to-r from-navy to-[#1a1040] p-8 sm:p-10 relative overflow-hidden">
              <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden sm:block">
                <Newspaper className="w-24 h-24 text-white/5" />
              </div>
              <div className="relative">
                <h3 className="text-xl font-extrabold text-white tracking-tight mb-2">{t("newsletter_title")}</h3>
                <p className="text-white/40 text-sm mb-6">{t("newsletter_text")}</p>
                <div className="flex flex-col sm:flex-row gap-3 max-w-md">
                  <input
                    type="email"
                    placeholder={t("newsletter_placeholder")}
                    className="flex-1 px-4 py-3 bg-white/10 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-gold transition-colors text-sm"
                  />
                  <button className="px-6 py-3 bg-gold text-white font-bold tracking-wider uppercase text-xs hover:bg-gold-light transition-all duration-300">
                    {t("newsletter_button")}
                  </button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
