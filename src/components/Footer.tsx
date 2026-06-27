"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { MapPin, Mail, Phone, Send, Check } from "lucide-react";
import Logo from "./Logo";

const IG_PATH = "M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.3 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.8-.3-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2-.1-1.3-.1-1.6-.1-4.8s0-3.6.1-4.8c.1-1.2.3-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4 1.2-.1 1.6-.1 4.8-.1ZM12 0C8.7 0 8.3 0 7.1.1 5.8.1 5 .3 4.2.6c-.8.3-1.5.7-2.2 1.4C1.3 2.7.9 3.4.6 4.2.3 5 .1 5.8.1 7.1 0 8.3 0 8.7 0 12s0 3.7.1 4.9c.1 1.3.3 2.1.5 2.9.3.8.7 1.5 1.4 2.2.7.7 1.4 1.1 2.2 1.4.8.3 1.6.5 2.9.5C8.3 24 8.7 24 12 24s3.7 0 4.9-.1c1.3-.1 2.1-.3 2.9-.5.8-.3 1.5-.7 2.2-1.4.7-.7 1.1-1.4 1.4-2.2.3-.8.5-1.6.5-2.9.1-1.2.1-1.6.1-4.9s0-3.7-.1-4.9c-.1-1.3-.3-2.1-.5-2.9-.3-.8-.7-1.5-1.4-2.2-.7-.7-1.4-1.1-2.2-1.4-.8-.3-1.6-.5-2.9-.5C15.7 0 15.3 0 12 0Zm0 5.8c-3.4 0-6.2 2.8-6.2 6.2s2.8 6.2 6.2 6.2 6.2-2.8 6.2-6.2S15.4 5.8 12 5.8Zm0 10.3c-2.2 0-4-1.8-4-4.1s1.8-4.1 4-4.1 4 1.8 4 4.1-1.8 4.1-4 4.1Zm6.4-12c-.8 0-1.4.7-1.4 1.4 0 .8.7 1.4 1.4 1.4.8 0 1.4-.7 1.4-1.4 0-.8-.6-1.4-1.4-1.4Z";
const LI_PATH = "M20.4 20.4h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6h.1c.5-.9 1.6-1.8 3.3-1.8 3.6 0 4.3 2.4 4.3 5.4v6.2ZM5.3 7.4c-1.2 0-2.1-.9-2.1-2.1 0-1.1.9-2.1 2.1-2.1 1.2 0 2.1.9 2.1 2.1 0 1.2-.9 2.1-2.1 2.1Zm1.7 13H3.5V9H7v11.4ZM22.2 0H1.8C.8 0 0 .8 0 1.7v20.6c0 1 .8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V1.7C24 .8 23.2 0 22.2 0Z";
const YT_PATH = "M23.5 6.2c-.3-1-1.1-1.9-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.5c-1 .3-1.9 1.1-2.1 2.1C0 8.1 0 12 0 12s0 3.9.5 5.8c.3 1 1.1 1.9 2.1 2.1C4.5 20.5 12 20.5 12 20.5s7.5 0 9.4-.5c1-.3 1.9-1.1 2.1-2.1.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.9ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z";
const X_PATH = "M18.9 1.2h3.7l-8 9.2 9.4 12.4h-7.4l-5.8-7.5L4.3 22.8H.7l8.6-9.8L.2 1.2h7.5l5.2 6.9 6-6.9Zm-1.3 19.4h2L6.5 3.3H4.4l13.2 17.3Z";
const FB_PATH = "M24 12c0-6.6-5.4-12-12-12S0 5.4 0 12c0 6 4.4 11 10.1 11.9V15.5H7.1V12h3v-2.6c0-3 1.8-4.6 4.5-4.6 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 .9-2 1.9V12h3.3l-.5 3.5h-2.8v8.4C19.6 23 24 18 24 12Z";

const SocialSvg = ({ d }: { d: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
    <path d={d} />
  </svg>
);

const socials = [
  { d: IG_PATH, name: "Instagram", href: "https://instagram.com/onizlervakfi" },
  { d: LI_PATH, name: "LinkedIn", href: "https://linkedin.com/company/onizlervakfi" },
  { d: YT_PATH, name: "YouTube", href: "https://youtube.com/@onizlervakfi" },
  { d: X_PATH, name: "X", href: "https://x.com/onizlervakfi" },
  { d: FB_PATH, name: "Facebook", href: "https://facebook.com/onizlervakfi" },
];

export default function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 4000);
  };

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
              {socials.map(({ d, name, href }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="w-9 h-9 border border-gray-light bg-white flex items-center justify-center hover:bg-gold hover:border-gold hover:text-white transition-all duration-300 text-charcoal/40"
                >
                  <SocialSvg d={d} />
                </a>
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
                { key: "news", href: "/haberler" },
                { key: "transparency", href: "/seffaflik" },
                { key: "donate", href: "/destek" },
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

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-charcoal/10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-[11px] font-bold text-gold uppercase tracking-[0.3em] mb-1">
                {t("newsletter_title")}
              </h3>
              <p className="text-sm text-charcoal/40">{t("newsletter_text")}</p>
            </div>
            <form onSubmit={handleSubscribe} className="flex gap-2 w-full sm:w-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t("newsletter_placeholder")}
                required
                disabled={subscribed}
                className="flex-1 sm:w-56 px-4 py-2.5 border border-gray-light bg-white text-charcoal text-sm focus:outline-none focus:border-gold transition-colors disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={subscribed}
                className="px-5 py-2.5 bg-gold text-white font-bold tracking-wider uppercase text-xs hover:bg-gold-light transition-all duration-300 flex items-center gap-2 disabled:bg-green-600 disabled:hover:bg-green-600"
              >
                {subscribed ? (
                  <>
                    {t("newsletter_success")}
                    <Check className="w-3 h-3" />
                  </>
                ) : (
                  <>
                    {t("newsletter_button")}
                    <Send className="w-3 h-3" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-charcoal/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-charcoal/30 tracking-wider uppercase">
          <p>&copy; 2025 Önizler Vakfı — {t("rights")}</p>
          <p>{t("notary")}</p>
        </div>
      </div>
    </footer>
  );
}
