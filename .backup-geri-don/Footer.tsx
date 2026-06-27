"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { MapPin, Mail, Phone } from "lucide-react";
import Logo from "./Logo";

const socials = [
  { label: "IG", name: "Instagram" },
  { label: "in", name: "LinkedIn" },
  { label: "YT", name: "YouTube" },
  { label: "X", name: "X" },
  { label: "fb", name: "Facebook" },
];

export default function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");

  return (
    <footer className="bg-cream border-t border-gray-light">
      {/* Red accent line */}
      <div className="h-1 bg-gradient-to-r from-gold via-gold-light to-gold" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="mb-6">
              <Logo size="default" variant="dark" />
            </div>
            <p className="text-sm leading-relaxed text-charcoal/40">
              {t("description")}
            </p>
            <div className="flex gap-2 mt-6">
              {socials.map(({ label, name }) => (
                <button
                  key={name}
                  aria-label={name}
                  className="w-9 h-9 border border-gray-light bg-white flex items-center justify-center hover:bg-gold hover:border-gold hover:text-white transition-all duration-300 text-[10px] font-bold text-charcoal/40"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[11px] font-bold text-gold uppercase tracking-[0.3em] mb-6">
              {t("quick_links")}
            </h3>
            <ul className="space-y-3">
              {[
                { key: "about", href: "/hakkimizda" },
                { key: "areas", href: "/calisma-alanlari" },
                { key: "volunteer", href: "/gonullu-ol" },
                { key: "scholarship", href: "/burs" },
                { key: "transparency", href: "/seffaflik" },
              ].map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className="text-sm text-charcoal/50 hover:text-gold transition-colors"
                  >
                    {nav(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] font-bold text-gold uppercase tracking-[0.3em] mb-6">
              {t("contact")}
            </h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <div className="text-charcoal/50">
                  <p>Yeni Bağlıca Mah</p>
                  <p>2243 Sokak No 2 06790</p>
                  <p>Etimesgut/Ankara</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <span className="text-charcoal/50">info@onizlervakfi.org</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <span className="text-charcoal/50">+90 (312) 000 00 00</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-[11px] font-bold text-gold uppercase tracking-[0.3em] mb-6">
              {t("legal")}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/yasal" className="text-sm text-charcoal/50 hover:text-gold transition-colors">
                  {t("privacy")}
                </Link>
              </li>
              <li>
                <Link href="/yasal" className="text-sm text-charcoal/50 hover:text-gold transition-colors">
                  {t("cookies")}
                </Link>
              </li>
              <li>
                <Link href="/yasal" className="text-sm text-charcoal/50 hover:text-gold transition-colors">
                  {t("kvkk")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-charcoal/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-charcoal/30 tracking-wider uppercase">
          <p>&copy; 2025 Önizler Vakfı — {t("rights")}</p>
          <p>{t("notary")}</p>
        </div>
      </div>
    </footer>
  );
}
