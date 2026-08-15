import { useTranslations } from "next-intl";
import Image from "next/image";
import {
  Eye, Users, Leaf, Heart, Lightbulb, Handshake, Quote,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";

const valueIcons = [Eye, Users, Leaf, Heart, Lightbulb, Handshake];
const valueKeys = [
  "transparency", "inclusivity", "sustainability",
  "heritage", "innovation", "collaboration",
] as const;

const boardMembers = [
  { name: "Merdan Öniz", role: "Mütevelli Heyeti Başkanı" },
  { name: "Mustafa Öniz", role: "Başkan Yardımcısı" },
  { name: "Ömer Faruk Öniz", role: "Başkan Yardımcısı" },
  { name: "Abdulaziz Öniz", role: "Katip" },
  { name: "Badem Öniz", role: "Üye" },
  { name: "Elif Öniz", role: "Üye" },
  { name: "Hava Öniz", role: "Üye" },
  { name: "Sevgi Öniz", role: "Üye" },
  { name: "Enes Öniz", role: "Üye" },
  { name: "Bilal Öniz", role: "Üye" },
  { name: "Emine Öniz", role: "Üye" },
  { name: "Gülay Öniz", role: "Üye" },
  { name: "Ruhset Öniz", role: "Üye" },
  { name: "Şenol Öniz", role: "Üye" },
  { name: "Nurcan Öniz", role: "Üye — YK Başkanı" },
  { name: "Rüveyde Öniz", role: "Üye" },
  { name: "İbrahim Öniz", role: "Üye — YK Üyesi" },
  { name: "Ravza Öniz", role: "Üye — YK Genel Sekreter" },
  { name: "Sümeyye Öniz", role: "Üye" },
  { name: "Büşra Öniz", role: "Üye — Denetim Kurulu" },
  { name: "Tarık Öniz", role: "Üye — Denetim Kurulu" },
  { name: "Emrah Öniz", role: "Üye — YK Üyesi" },
  { name: "Sercan Öniz", role: "Üye — YK Başkan Yrd." },
  { name: "Ercan Öniz", role: "Üye" },
];

const management = [
  { name: "Nurcan Öniz", role: "Başkan" },
  { name: "Sercan Öniz", role: "Başkan Yardımcısı" },
  { name: "Ravza Öniz", role: "Genel Sekreter" },
  { name: "İbrahim Öniz", role: "Üye" },
  { name: "Emrah Öniz", role: "Üye" },
];

const audit = [
  { name: "Büşra Öniz", role: "Üye" },
  { name: "Tarık Öniz", role: "Üye" },
];

export default function AboutPage() {
  const t = useTranslations("about");

  return (
    <>
      <PageHero title={t("hero_title")} subtitle={t("hero_subtitle")} />

      {/* Story with visual side */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal direction="left">
              <div className="space-y-6">
                {["story_p1", "story_p2", "story_p3", "story_p4", "story_p5"].map(
                  (key) => (
                    <p key={key} className="text-charcoal/70 leading-relaxed text-base sm:text-lg">
                      {t(key)}
                    </p>
                  )
                )}
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="sticky top-28 space-y-6">
                {/* Visual card */}
                <div className="aspect-[4/3] bg-gradient-to-br from-cream via-white to-cream relative overflow-hidden border border-gray-light">
                  <div className="absolute inset-0 opacity-[0.04]">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <pattern id="story-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0C1220" strokeWidth="0.5" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#story-grid)" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <Image src="/logo.png" alt="Önizler Vakfı" width={280} height={280} className="object-contain opacity-80" />
                  </div>
                  <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-gold" />
                  <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-gold" />
                  <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-3 border border-gray-light">
                    <p className="text-charcoal/50 text-xs uppercase tracking-[0.3em] text-center font-bold">{t("label_est")}</p>
                  </div>
                </div>

                {/* Quick stats */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { value: 24, label: t("label_founders") },
                    { value: 9, label: t("label_areas") },
                    { value: 2, label: t("label_capital") },
                  ].map((s) => (
                    <div key={s.label} className="bg-cream p-4 text-center border border-gray-light">
                      <div className="text-2xl font-extrabold text-gold"><AnimatedCounter value={s.value} /></div>
                      <div className="text-[10px] text-charcoal/40 uppercase tracking-wider font-bold mt-1">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision with visual divider */}
      <section className="relative">
        {/* Visual banner divider */}
        <div className="h-24 bg-gradient-to-r from-gold via-gold-light to-gold relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="mv-lines" width="80" height="80" patternUnits="userSpaceOnUse">
                  <line x1="0" y1="0" x2="80" y2="80" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#mv-lines)" />
            </svg>
          </div>
          <div className="h-full flex items-center justify-center">
            <p className="text-white font-bold text-sm tracking-[0.3em] uppercase">{t("label_mission_vision")}</p>
          </div>
        </div>
        <div className="bg-cream py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ScrollReveal direction="left">
                <div className="bg-white p-8 sm:p-10 border border-gray-light hover:shadow-lg transition-shadow duration-500 h-full relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-gold" />
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-[2px] bg-gold" />
                    <span className="text-gold text-xs font-bold tracking-[0.3em] uppercase">{t("label_mission")}</span>
                  </div>
                  <h2 className="text-2xl font-extrabold text-charcoal mb-4 tracking-tight">
                    {t("mission_title")}
                  </h2>
                  <p className="text-charcoal/75 leading-relaxed">{t("mission_text")}</p>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right">
                <div className="bg-white p-8 sm:p-10 border border-gray-light hover:shadow-lg transition-shadow duration-500 h-full relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-navy" />
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-[2px] bg-navy" />
                    <span className="text-navy text-xs font-bold tracking-[0.3em] uppercase">{t("label_vision")}</span>
                  </div>
                  <h2 className="text-2xl font-extrabold text-charcoal mb-4 tracking-tight">
                    {t("vision_title")}
                  </h2>
                  <p className="text-charcoal/75 leading-relaxed">{t("vision_text")}</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-12 h-[2px] bg-gold" />
                <span className="text-gold text-xs font-bold tracking-[0.3em] uppercase">{t("label_values")}</span>
                <div className="w-12 h-[2px] bg-gold" />
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-charcoal tracking-tight">
                {t("values_title")}
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {valueKeys.map((key, i) => {
              const Icon = valueIcons[i];
              return (
                <ScrollReveal key={key} direction="up" delay={i * 100}>
                  <div className="group bg-cream p-7 border border-gray-light hover:border-gold/30 transition-all duration-500 hover:shadow-lg overflow-hidden relative h-full">
                    <div className="absolute top-0 left-0 w-0 h-[3px] bg-gold group-hover:w-full transition-all duration-500" />
                    <div className="absolute -right-2 -top-4 text-[60px] font-extrabold text-charcoal/[0.03] leading-none select-none">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="relative flex items-start gap-4">
                      <div className="w-11 h-11 bg-white flex items-center justify-center flex-shrink-0 group-hover:bg-gold/10 transition-colors">
                        <Icon className="w-5 h-5 text-charcoal/70 group-hover:text-gold transition-colors duration-300" />
                      </div>
                      <div>
                        <h3 className="font-bold text-charcoal group-hover:text-gold transition-colors duration-300">
                          {t(`values.${key}.title`)}
                        </h3>
                        <p className="text-sm text-charcoal/70 leading-relaxed mt-2">
                          {t(`values.${key}.text`)}
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quote banner */}
      <section className="bg-cream py-16 relative overflow-hidden">
        <div className="relative mx-auto max-w-3xl px-6 sm:px-8 text-center">
          <Quote className="w-10 h-10 text-gold/30 mx-auto mb-6" />
          <p className="text-xl sm:text-2xl text-charcoal/70 italic leading-relaxed font-light">
            &ldquo;{t("quote_text")}&rdquo;
          </p>
          <p className="text-charcoal/30 text-sm mt-4 uppercase tracking-wider font-bold">{t("quote_attribution")}</p>
        </div>
      </section>

      {/* Founder */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div className="aspect-square max-w-md mx-auto bg-gradient-to-br from-cream via-white to-cream relative overflow-hidden border border-gray-light">
                <div className="absolute inset-0 opacity-[0.04]">
                  <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="founder-grid" width="30" height="30" patternUnits="userSpaceOnUse">
                        <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#0C1220" strokeWidth="0.5" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#founder-grid)" />
                  </svg>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 border-2 border-gold rounded-full flex items-center justify-center bg-white shadow-lg">
                    <span className="text-5xl font-extrabold text-gold">MÖ</span>
                  </div>
                </div>
                <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-gold" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-gold" />
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 border border-gray-light">
                  <p className="text-charcoal font-bold">{t("founder_name")}</p>
                  <p className="text-charcoal/40 text-xs uppercase tracking-wider">{t("founder_role")}</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-[2px] bg-gold" />
                  <span className="text-gold text-xs font-bold tracking-[0.3em] uppercase">{t("label_founder")}</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal tracking-tight mb-6">
                  {t("founder_title")}
                </h2>
                <p className="text-charcoal/75 leading-relaxed mb-4">
                  {t("founder_desc_p1")}
                </p>
                <p className="text-charcoal/75 leading-relaxed">
                  {t("founder_desc_p2")}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Board of Trustees */}
      <section className="bg-cream py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-12 h-[2px] bg-gold" />
                <span className="text-gold text-xs font-bold tracking-[0.3em] uppercase">{t("label_board")}</span>
                <div className="w-12 h-[2px] bg-gold" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal tracking-tight">
                {t("board_title")}
              </h2>
              <p className="text-charcoal/50 mt-4 max-w-2xl mx-auto">{t("board_subtitle")}</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {boardMembers.map((member, i) => (
              <ScrollReveal key={member.name} direction="up" delay={Math.min(i * 40, 400)}>
                <div className="group bg-white p-4 text-center border border-gray-light hover:border-gold/30 transition-all duration-300 hover:shadow-md relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-0 h-[2px] bg-gold group-hover:w-full transition-all duration-300" />
                  <div className="w-12 h-12 bg-gradient-to-br from-navy to-navy-light mx-auto mb-2 flex items-center justify-center group-hover:from-gold group-hover:to-gold-light transition-all">
                    <span className="text-xs font-bold text-white">
                      {member.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                  <p className="text-xs font-bold text-charcoal truncate">{member.name}</p>
                  <p className="text-[10px] text-charcoal/40 mt-0.5 truncate">{member.role}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Management */}
      <section className="bg-white py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-gold to-transparent opacity-30" />

        <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-12 h-[2px] bg-gold" />
                <span className="text-gold text-xs font-bold tracking-[0.3em] uppercase">{t("label_management")}</span>
                <div className="w-12 h-[2px] bg-gold" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal tracking-tight">
                {t("management_title")}
              </h2>
              <p className="text-charcoal/50 mt-4 max-w-2xl mx-auto">{t("management_subtitle")}</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {management.map((member, i) => (
              <ScrollReveal key={member.name} direction="up" delay={i * 100}>
                <div className="group bg-cream p-6 text-center border border-gray-light hover:border-gold/30 transition-all duration-500 hover:shadow-lg relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-0 h-[3px] bg-gold group-hover:w-full transition-all duration-500" />
                  <div className="w-16 h-16 bg-gold/10 mx-auto mb-3 flex items-center justify-center group-hover:bg-gold/20 transition-colors rounded-full">
                    <span className="text-lg font-bold text-gold">
                      {member.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                  <p className="text-sm font-bold text-charcoal">{member.name}</p>
                  <p className="text-xs text-charcoal/40 mt-1 uppercase tracking-wider">{member.role}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Audit Committee */}
      <section className="bg-cream py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-12 h-[2px] bg-gold" />
                <span className="text-gold text-xs font-bold tracking-[0.3em] uppercase">{t("label_audit")}</span>
                <div className="w-12 h-[2px] bg-gold" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal tracking-tight">
                {t("audit_title")}
              </h2>
              <p className="text-charcoal/50 mt-4 max-w-2xl mx-auto">{t("audit_subtitle")}</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
            {audit.map((member, i) => (
              <ScrollReveal key={member.name} direction="up" delay={i * 100}>
                <div className="group bg-white p-6 text-center border border-gray-light hover:border-gold/30 transition-all duration-500 hover:shadow-lg relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-0 h-[3px] bg-gold group-hover:w-full transition-all duration-500" />
                  <div className="w-16 h-16 bg-gold/10 mx-auto mb-3 flex items-center justify-center group-hover:bg-gold/20 transition-colors rounded-full">
                    <span className="text-lg font-bold text-gold">
                      {member.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                  <p className="text-sm font-bold text-charcoal">{member.name}</p>
                  <p className="text-xs text-charcoal/40 mt-1 uppercase tracking-wider">{member.role}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
