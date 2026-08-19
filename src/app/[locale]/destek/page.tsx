"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import {
  Heart, RefreshCw, Building2, Package, Landmark, Receipt, ArrowRight,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";

const donationAmounts = ["100", "250", "500", "1000"] as const;

export default function SupportPage() {
  const t = useTranslations("support");

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

          {/* Donation Types Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Individual */}
            <ScrollReveal direction="left">
              <div className="group bg-cream p-8 border border-gray-light hover:border-gold/30 transition-all duration-500 hover:shadow-lg relative overflow-hidden h-full">
                <div className="absolute top-0 left-0 w-0 h-[3px] bg-gold group-hover:w-full transition-all duration-500" />
                <div className="w-12 h-12 bg-white flex items-center justify-center mb-4 group-hover:bg-gold/10 transition-colors">
                  <Heart className="w-6 h-6 text-charcoal/60 group-hover:text-gold transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-extrabold text-charcoal mb-2 tracking-tight group-hover:text-gold transition-colors duration-300">
                  {t("individual_title")}
                </h3>
                <p className="text-sm text-charcoal/50">{t("individual_text")}</p>
              </div>
            </ScrollReveal>

            {/* Regular */}
            <ScrollReveal direction="right">
              <div className="group bg-cream p-8 border border-gray-light hover:border-gold/30 transition-all duration-500 hover:shadow-lg relative overflow-hidden h-full">
                <div className="absolute top-0 left-0 w-0 h-[3px] bg-gold group-hover:w-full transition-all duration-500" />
                <div className="w-12 h-12 bg-white flex items-center justify-center mb-4 group-hover:bg-gold/10 transition-colors">
                  <RefreshCw className="w-6 h-6 text-charcoal/60 group-hover:text-gold transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-extrabold text-charcoal mb-2 tracking-tight group-hover:text-gold transition-colors duration-300">
                  {t("regular_title")}
                </h3>
                <p className="text-sm text-charcoal/50">{t("regular_text")}</p>
              </div>
            </ScrollReveal>

            {/* Corporate */}
            <ScrollReveal direction="left" delay={100}>
              <div className="group bg-cream p-8 border border-gray-light hover:border-gold/30 transition-all duration-500 hover:shadow-lg relative overflow-hidden h-full">
                <div className="absolute top-0 left-0 w-0 h-[3px] bg-gold group-hover:w-full transition-all duration-500" />
                <div className="w-12 h-12 bg-white flex items-center justify-center mb-4 group-hover:bg-gold/10 transition-colors">
                  <Building2 className="w-6 h-6 text-charcoal/60 group-hover:text-gold transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-extrabold text-charcoal mb-2 tracking-tight group-hover:text-gold transition-colors duration-300">
                  {t("corporate_title")}
                </h3>
                <p className="text-sm text-charcoal/50">{t("corporate_text")}</p>
              </div>
            </ScrollReveal>

            {/* In-Kind */}
            <ScrollReveal direction="right" delay={100}>
              <div className="group bg-cream p-8 border border-gray-light hover:border-gold/30 transition-all duration-500 hover:shadow-lg relative overflow-hidden h-full">
                <div className="absolute top-0 left-0 w-0 h-[3px] bg-gold group-hover:w-full transition-all duration-500" />
                <div className="w-12 h-12 bg-white flex items-center justify-center mb-4 group-hover:bg-gold/10 transition-colors">
                  <Package className="w-6 h-6 text-charcoal/60 group-hover:text-gold transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-extrabold text-charcoal mb-2 tracking-tight group-hover:text-gold transition-colors duration-300">
                  {t("inkind_title")}
                </h3>
                <p className="text-sm text-charcoal/50">{t("inkind_text")}</p>
              </div>
            </ScrollReveal>
          </div>

          {/* Donation Amounts */}
          <ScrollReveal direction="up">
            <div className="bg-cream p-8 sm:p-10 border border-gray-light mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-[2px] bg-gold" />
                <h2 className="text-xl font-extrabold text-charcoal tracking-tight">
                  {t("individual_title")}
                </h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {donationAmounts.map((amount) => (
                  <div key={amount} className="group bg-white p-5 border border-gray-light hover:border-gold transition-all duration-300 text-center cursor-pointer">
                    <p className="text-2xl font-extrabold text-gold mb-1">₺{amount}</p>
                    <p className="text-xs text-charcoal/40">{t(`amounts.${amount}`)}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Bank Info + Tax */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <ScrollReveal direction="left">
              <div className="bg-navy p-8 relative overflow-hidden h-full">
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gold-warm" />
                <div className="w-12 h-12 bg-white/10 flex items-center justify-center mb-4">
                  <Landmark className="w-6 h-6 text-gold-warm" />
                </div>
                <h3 className="text-lg font-extrabold text-white mb-3 tracking-tight">
                  {t("bank_title")}
                </h3>
                <p className="text-white/60 text-sm font-bold mb-4">{t("bank_name")}</p>
                <div className="space-y-2 text-sm text-white/40">
                  <p>Ziraat Bankası — TR00 0000 0000 0000 0000 00</p>
                  <p>Vakıfbank — TR00 0000 0000 0000 0000 00</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="bg-cream p-8 border border-gray-light h-full">
                <div className="w-12 h-12 bg-white flex items-center justify-center mb-4">
                  <Receipt className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-lg font-extrabold text-charcoal mb-3 tracking-tight">
                  {t("tax_title")}
                </h3>
                <p className="text-sm text-charcoal/70 leading-relaxed">{t("tax_text")}</p>
              </div>
            </ScrollReveal>
          </div>

          {/* CTA Banner */}
          <ScrollReveal direction="fade">
            <div className="relative bg-gradient-to-r from-gold to-gold-light p-8 sm:p-10 overflow-hidden flex items-center justify-between">
              <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-[0.08]">
                <Image src="/logo-mark-white.png" alt="" width={200} height={200} className="" />
              </div>
              <div className="relative">
                <h3 className="text-xl font-extrabold text-white tracking-tight mb-2">
                  {t("corporate_title")}
                </h3>
                <p className="text-white/70 text-sm">{t("corporate_text")}</p>
              </div>
              <Link
                href="/iletisim"
                className="relative flex items-center gap-2 px-8 py-3 bg-white text-gold font-bold tracking-wider uppercase text-sm hover:bg-cream transition-all duration-300 flex-shrink-0"
              >
                {t("contact_cta")}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
