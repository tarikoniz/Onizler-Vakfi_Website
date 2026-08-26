"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const navItems = [
  { key: "home", href: "/" },
  { key: "about", href: "/hakkimizda" },
  { key: "areas", href: "/calisma-alanlari" },
  { key: "volunteer", href: "/gonullu-ol" },
  { key: "scholarship", href: "/burs" },
  { key: "news", href: "/haberler" },
  { key: "transparency", href: "/seffaflik" },
  { key: "contact", href: "/iletisim" },
];

const DONATE_HREF = "/destek";

export default function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  const switchLocale = () => {
    const next = locale === "tr" ? "en" : "tr";
    router.replace(pathname, { locale: next });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-light shadow-sm">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="flex h-24 items-center justify-between gap-4">
          <Link href="/" className="flex items-center shrink-0">
            <Logo size="small" variant="dark" />
          </Link>

          <nav className="hidden lg:flex items-center gap-0">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={`px-2.5 py-2 text-[13px] font-bold tracking-wide uppercase whitespace-nowrap transition-colors ${
                  pathname === item.href
                    ? "text-gold"
                    : "text-charcoal/60 hover:text-charcoal"
                }`}
              >
                {t(item.key)}
              </Link>
            ))}

            <div className="w-px h-5 bg-charcoal/10 mx-3" />

            <button
              onClick={switchLocale}
              className="px-2 py-1 text-[11px] font-bold tracking-wider text-charcoal/40 hover:text-charcoal transition-colors uppercase"
            >
              {locale === "tr" ? "EN" : "TR"}
            </button>

            <Link
              href={DONATE_HREF}
              className="ml-3 px-4 py-2.5 bg-gold text-white text-[12px] font-bold tracking-wider uppercase hover:bg-gold-light transition-all duration-300"
            >
              {t("donate")}
            </Link>
          </nav>

          <button
            className="lg:hidden p-2 text-charcoal/60"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="lg:hidden border-t border-gray-light bg-white/95 backdrop-blur-md pb-4">
          <div className="px-6 pt-2 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-3 py-2.5 text-sm font-bold tracking-wide uppercase ${
                  pathname === item.href
                    ? "text-gold"
                    : "text-charcoal/60 hover:text-charcoal"
                }`}
              >
                {t(item.key)}
              </Link>
            ))}
            <Link
              href={DONATE_HREF}
              onClick={() => setMobileOpen(false)}
              className="block mx-3 mt-3 px-4 py-3 bg-gold text-white text-sm font-bold tracking-wider uppercase text-center hover:bg-gold-light transition-colors"
            >
              {t("donate")}
            </Link>
            <div className="flex gap-3 pt-3 px-3">
              <button
                onClick={switchLocale}
                className="px-4 py-2 text-sm border border-gray-light text-charcoal/50 font-bold tracking-wider uppercase"
              >
                {locale === "tr" ? "English" : "Türkçe"}
              </button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
