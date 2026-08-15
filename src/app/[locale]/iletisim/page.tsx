"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { MapPin, Phone, Mail, CheckCircle2, Send } from "lucide-react";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";

const socials = [
  { label: "IG", name: "Instagram", href: "https://www.instagram.com/onizlervakfi/" },
  { label: "in", name: "LinkedIn", href: "https://linkedin.com/company/onizlervakfi" },
  { label: "YT", name: "YouTube", href: "https://youtube.com/@onizlervakfi" },
  { label: "X", name: "X", href: "https://x.com/onizlervakfi" },
];

const departments = [
  { label: "Genel Bilgi", email: "info@onizlervakfi.org" },
  { label: "Burs", email: "burs@onizlervakfi.org" },
  { label: "Gönüllü", email: "gonullu@onizlervakfi.org" },
  { label: "Basın", email: "basin@onizlervakfi.org" },
  { label: "Sponsorluk", email: "sponsorluk@onizlervakfi.org" },
];

export default function ContactPage() {
  const t = useTranslations("contact");
  const subjects: string[] = t.raw("form_subjects");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero title={t("hero_title")} subtitle={t("hero_subtitle")} />

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <ScrollReveal direction="left">
                <div className="bg-cream p-6 border border-gray-light">
                  <div className="space-y-5">
                    <a href="https://share.google/WrF5phwe1HFljRvst" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 group">
                      <div className="w-10 h-10 bg-white flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-gold" />
                      </div>
                      <div>
                        <h3 className="font-bold text-charcoal text-sm uppercase tracking-wider group-hover:text-gold transition-colors">
                          {t("address_title")}
                        </h3>
                        <p className="text-sm text-charcoal/50 mt-1 group-hover:text-charcoal transition-colors">{t("address")}</p>
                      </div>
                    </a>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-gold" />
                      </div>
                      <div>
                        <h3 className="font-bold text-charcoal text-sm uppercase tracking-wider">
                          {t("phone")}
                        </h3>
                        <p className="text-sm text-charcoal/50">+90 (312) 000 00 00</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-gold" />
                      </div>
                      <div>
                        <h3 className="font-bold text-charcoal text-sm uppercase tracking-wider">
                          {t("email")}
                        </h3>
                        <p className="text-sm text-charcoal/50">info@onizlervakfi.org</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Departments */}
              <ScrollReveal direction="left" delay={100}>
                <div className="bg-cream p-6 border border-gray-light">
                  <h3 className="font-bold text-charcoal mb-4 uppercase tracking-wider text-xs">
                    {t("departments_title")}
                  </h3>
                  <div className="space-y-3">
                    {departments.map((d) => (
                      <div key={d.email} className="flex justify-between items-center text-sm border-b border-gray-light pb-2 last:border-0 last:pb-0">
                        <span className="text-charcoal/50">{d.label}</span>
                        <span className="text-charcoal font-medium text-xs">{d.email}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Social */}
              <ScrollReveal direction="left" delay={200}>
                <div className="bg-cream p-6 border border-gray-light">
                  <h3 className="font-bold text-charcoal mb-4 uppercase tracking-wider text-xs">
                    {t("social_title")}
                  </h3>
                  <div className="flex gap-2">
                    {socials.map(({ label, name, href }) => (
                      <a
                        key={name}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={name}
                        className="w-10 h-10 border border-gray-light bg-white flex items-center justify-center hover:bg-gold hover:border-gold hover:text-white transition-all duration-300 text-xs font-bold text-charcoal/40"
                      >
                        {label}
                      </a>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Form */}
            <ScrollReveal direction="right" className="lg:col-span-3">
              <div className="bg-cream p-8 sm:p-10 border border-gray-light h-full">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                    <div className="w-20 h-20 bg-green/10 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-10 h-10 text-green" />
                    </div>
                    <h3 className="text-2xl font-extrabold text-charcoal mb-3">{t("success_title")}</h3>
                    <p className="text-charcoal/50 max-w-md">{t("success_text")}</p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-8 px-8 py-3 border border-gray-light text-charcoal/60 font-bold tracking-wider uppercase text-sm hover:border-gold hover:text-gold transition-all"
                    >
                      {t("new_message")}
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
                            {t("form_subject")}
                          </label>
                          <select className="w-full px-4 py-3 border border-gray-light bg-white text-charcoal focus:outline-none focus:border-gold transition-colors">
                            {subjects.map((s: string) => (
                              <option key={s}>{s}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-charcoal/50 uppercase tracking-wider mb-2">
                          {t("form_message")}
                        </label>
                        <textarea
                          rows={5}
                          required
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
        </div>
      </section>
    </>
  );
}
