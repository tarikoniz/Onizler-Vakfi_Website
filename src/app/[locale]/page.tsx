import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import {
  GraduationCap,
  Award,
  Palette,
  HandHeart,
  Globe,
  Monitor,
  BookOpen,
  HeartHandshake,
  Building2,
  ArrowRight,
  ArrowDown,
  Quote,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";

const areaIcons = [
  GraduationCap, Award, Palette, HandHeart, Globe,
  Monitor, BookOpen, HeartHandshake, Building2,
];

const areaKeys = [
  "education", "scholarship", "culture", "solidarity", "international",
  "digital", "research", "social_services", "construction",
] as const;

export default function HomePage() {
  const t = useTranslations();

  return (
    <>
      {/* Hero — Full screen */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy">
        <div className="absolute inset-0 bg-gradient-to-br from-[#143D4B] via-[#1E5566] to-[#0F2E38] animate-gradient" />

        <div className="absolute inset-0 opacity-[0.07]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Hero visual — tree logo watermark */}
        <div className="absolute right-20 top-1/2 -translate-y-1/2 w-56 h-56 xl:w-72 xl:h-72 opacity-10 hidden lg:block pointer-events-none">
          <Image src="/logo-mark-white.png" alt="" width={288} height={288} className="object-contain w-full h-full" priority />
        </div>

        <div className="absolute top-1/4 right-1/4 w-72 h-72 border border-white/8 rounded-full animate-float" />
        <div className="absolute bottom-1/3 left-[15%] w-48 h-48 border border-gold/15 rotate-45 animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/3 right-[15%] w-4 h-4 bg-gold rounded-full animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-white/40 rounded-full animate-pulse-slow" style={{ animationDelay: "1s" }} />

        <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-gold to-transparent opacity-40" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 w-full">
          <div className="max-w-4xl">
            <ScrollReveal direction="fade" delay={200}>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-[2px] bg-gold-warm" />
                <span className="text-gold-warm text-sm font-bold tracking-[0.3em] uppercase">
                  Önizler Vakfı
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={400}>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] sm:leading-[0.95] tracking-tight text-white">
                {t("hero.title")}
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={600}>
              <p className="mt-8 text-xl sm:text-2xl text-white/85 leading-relaxed max-w-3xl font-light">
                {t("hero.subtitle")}
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={800}>
              <div className="mt-12 flex flex-wrap gap-5">
                <Link
                  href="/gonullu-ol"
                  className="group px-10 py-4 bg-white text-navy font-bold tracking-wider uppercase text-sm hover:bg-cream-warm transition-all duration-300 flex items-center gap-3"
                >
                  {t("hero.cta_volunteer")}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/hakkimizda"
                  className="px-10 py-4 border border-white/20 text-white font-bold tracking-wider uppercase text-sm hover:bg-white/5 transition-all duration-300"
                >
                  {t("hero.cta_about")}
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
          <span className="text-xs tracking-[0.2em] uppercase">{t("hero.explore")}</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </div>

      </section>

      {/* Mission Strip */}
      <section className="bg-gold py-5">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <ScrollReveal direction="fade">
            <p className="text-center text-white text-sm sm:text-base font-bold tracking-wider uppercase">
              &ldquo;{t("mission_banner.text")}&rdquo;
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* About preview with "image" */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-cream via-white to-cream relative overflow-hidden border border-gray-light">
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <Image
                      src="/logo-mark-white.png"
                      alt="Önizler Vakfı"
                      width={320}
                      height={320}
                      className="object-contain opacity-90"
                    />
                  </div>
                  <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-gold" />
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-gold" />
                  <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-4 border border-gray-light">
                    <p className="text-charcoal/50 text-xs uppercase tracking-[0.3em] text-center font-bold">{t("hero.est_label")}</p>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-gold p-6 hidden sm:block">
                  <div className="text-3xl font-extrabold text-white"><AnimatedCounter value={24} /></div>
                  <div className="text-xs text-white/80 uppercase tracking-wider font-bold mt-1">{t("hero.founder_member")}</div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-[2px] bg-gold" />
                  <span className="text-gold text-xs font-bold tracking-[0.3em] uppercase">{t("hero.about_label")}</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal tracking-tight mb-6 whitespace-pre-line">
                  {t("hero.about_heading")}
                </h2>
                <p className="text-charcoal/75 leading-relaxed mb-4">
                  {t("hero.about_p1")}
                </p>
                <p className="text-charcoal/75 leading-relaxed mb-8">
                  {t("hero.about_p2")}
                </p>
                <Link
                  href="/hakkimizda"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-navy text-white font-bold tracking-wider uppercase text-sm hover:bg-navy-light transition-all duration-300"
                >
                  {t("hero.about_cta")}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats — Bold numbers with animated counters */}
      <section className="bg-cream py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-gold to-transparent opacity-30" />

        <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-12 h-[2px] bg-gold" />
                <span className="text-gold text-xs font-bold tracking-[0.3em] uppercase">{t("hero.stats_label")}</span>
                <div className="w-12 h-[2px] bg-gold" />
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-charcoal tracking-tight">
                {t("stats.title")}
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={200}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-0">
              {[
                { value: 9, suffix: "", label: t("stats.areas"), icon: "◆" },
                { value: 24, suffix: "", label: t("stats.founders"), icon: "●" },
                { value: 2, suffix: "M₺", label: t("stats.capital"), icon: "■" },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className={`text-center py-14 px-6 relative ${i < 2 ? "sm:border-r border-b sm:border-b-0 border-charcoal/10" : ""}`}
                >
                  <div className="text-gold/30 text-lg mb-4">{stat.icon}</div>
                  <div className="text-6xl sm:text-7xl font-extrabold text-navy leading-none">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="mt-4 text-xs text-charcoal/40 uppercase tracking-[0.25em] font-bold">
                    {stat.label}
                  </div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-gold" />
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Focus Areas — Grid with hover effects */}
      <section className="bg-cream py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 border border-gold/5 rounded-full" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] border border-navy/5 rounded-full" />

        <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
          <ScrollReveal direction="up">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-[2px] bg-gold" />
                  <span className="text-gold text-xs font-bold tracking-[0.3em] uppercase">{t("hero.areas_label")}</span>
                </div>
                <h2 className="text-3xl sm:text-5xl font-extrabold text-charcoal tracking-tight">
                  {t("focus_areas.title")}
                </h2>
              </div>
              <p className="mt-4 lg:mt-0 text-charcoal/70 max-w-md text-sm leading-relaxed">
                {t("focus_areas.subtitle")}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {areaKeys.map((key, i) => {
              const Icon = areaIcons[i];
              return (
                <ScrollReveal key={key} direction="up" delay={i * 80}>
                  <div className="group relative bg-white p-7 border border-gray-light hover:border-gold/30 transition-all duration-500 hover:shadow-xl overflow-hidden h-full">
                    <div className="absolute top-0 left-0 w-0 h-[3px] bg-gold group-hover:w-full transition-all duration-500" />
                    {/* Background number */}
                    <div className="absolute -right-2 -top-4 text-[80px] font-extrabold text-charcoal/[0.03] leading-none select-none">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="relative flex items-start gap-4">
                      <div className="w-11 h-11 bg-cream flex items-center justify-center flex-shrink-0 group-hover:bg-gold/10 transition-colors">
                        <Icon className="w-5 h-5 text-charcoal/70 group-hover:text-gold transition-colors duration-300" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-charcoal/20 tracking-widest">0{i + 1}</span>
                        <h3 className="text-base font-bold text-charcoal mt-0.5 group-hover:text-gold transition-colors duration-300">
                          {t(`focus_areas.areas.${key}.title`)}
                        </h3>
                        <p className="text-sm text-charcoal/70 leading-relaxed mt-2">
                          {t(`focus_areas.areas.${key}.short`)}
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          <ScrollReveal direction="fade" delay={400}>
            <div className="text-center mt-12">
              <Link
                href="/calisma-alanlari"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-navy text-white font-bold tracking-wider uppercase text-sm hover:bg-navy-light transition-all duration-300"
              >
                {t("focus_areas.learn_more")}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonial / Quote */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-6 sm:px-8">
          <ScrollReveal direction="up">
            <div className="text-center">
              <Quote className="w-12 h-12 text-gold/30 mx-auto mb-8" />
              <blockquote className="text-2xl sm:text-3xl font-extrabold text-charcoal leading-snug tracking-tight mb-8">
                &ldquo;{t("hero.quote_text")}&rdquo;
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center border border-gold/20">
                  <span className="text-sm font-bold text-gold">MÖ</span>
                </div>
                <div className="text-left">
                  <p className="font-bold text-charcoal text-sm">Merdan Öniz</p>
                  <p className="text-xs text-charcoal/40 uppercase tracking-wider">{t("hero.quote_role")}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Visual banner — full width */}
      <section className="relative h-56 sm:h-72 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gold via-gold-light to-gold" />
        <div className="absolute inset-0 opacity-[0.08]">
          <Image src="/logo-mark-white.png" alt="" width={400} height={400} className="absolute right-10 top-1/2 -translate-y-1/2 object-contain h-full w-auto" />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center">
            <p className="text-white/80 text-xs uppercase tracking-[0.4em] mb-3 font-bold">{t("hero.banner_location")}</p>
            <p className="text-white text-3xl sm:text-5xl font-extrabold tracking-tight">{t("hero.banner_text")}</p>
            <div className="w-16 h-[2px] bg-white/40 mx-auto mt-4" />
          </div>
        </div>
      </section>

      {/* CTA — Light background */}
      <section className="relative py-28 sm:py-36 overflow-hidden bg-white">
        <div className="absolute top-10 left-10 w-32 h-32 border border-gold/10 rotate-45" />
        <div className="absolute bottom-10 right-10 w-48 h-48 border border-charcoal/5 rounded-full" />

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <ScrollReveal direction="up">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-12 h-[2px] bg-gold" />
              <span className="text-gold text-xs font-bold tracking-[0.3em] uppercase">{t("hero.join_label")}</span>
              <div className="w-12 h-[2px] bg-gold" />
            </div>

            <h2 className="text-4xl sm:text-6xl font-extrabold text-charcoal tracking-tight leading-tight">
              {t("cta_section.title")}
            </h2>
            <p className="text-charcoal/50 text-lg mt-6 mb-12 font-light">
              {t("cta_section.subtitle")}
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={200}>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/gonullu-ol"
                className="group px-10 py-4 bg-gold text-white font-bold tracking-wider uppercase text-sm hover:bg-gold-light transition-all duration-300 flex items-center gap-3"
              >
                {t("cta_section.volunteer")}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/burs"
                className="px-10 py-4 border border-navy text-navy font-bold tracking-wider uppercase text-sm hover:bg-navy hover:text-white transition-all duration-300"
              >
                {t("cta_section.scholarship")}
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
