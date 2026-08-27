import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Home, ArrowRight } from "lucide-react";

export default function NotFound() {
  const t = useTranslations("notFound");

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#143D4B] via-[#1E5566] to-[#0F2E38] pt-24">
      <div className="absolute inset-0 opacity-[0.06]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="nf-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#nf-grid)" />
        </svg>
      </div>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo-white.svg"
        alt=""
        className="absolute right-8 top-1/2 -translate-y-1/2 w-52 h-52 opacity-10 hidden lg:block pointer-events-none"
      />

      <div className="relative z-10 text-center px-6">
        <p className="text-gold-warm text-sm font-bold tracking-[0.3em] uppercase mb-4">
          {t("eyebrow")}
        </p>
        <h1 className="text-7xl sm:text-9xl font-extrabold text-white tracking-tight leading-none">404</h1>
        <p className="mt-6 text-lg text-white/70 max-w-md mx-auto leading-relaxed">
          {t("text")}
        </p>
        <Link
          href="/"
          className="group mt-10 inline-flex items-center gap-3 px-8 py-4 bg-white text-navy font-bold tracking-wider uppercase text-sm hover:bg-cream-warm transition-all duration-300"
        >
          <Home className="w-4 h-4" />
          {t("cta")}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}
