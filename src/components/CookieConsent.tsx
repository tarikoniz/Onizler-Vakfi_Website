"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Cookie } from "lucide-react";

const STORAGE_KEY = "onizler-cookie-consent";

export default function CookieConsent() {
  const t = useTranslations("cookie");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        // small delay so it doesn't fight the entrance animations
        const id = setTimeout(() => setVisible(true), 800);
        return () => clearTimeout(id);
      }
    } catch {
      /* localStorage unavailable — stay hidden */
    }
  }, []);

  const decide = (value: "accepted" | "declined") => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] p-4 sm:p-6">
      <div className="mx-auto max-w-4xl bg-navy text-white shadow-2xl border border-white/10 p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
          <Cookie className="w-5 h-5 text-gold-warm" />
        </div>
        <p className="text-sm text-white/80 leading-relaxed flex-1">
          {t("text")}{" "}
          <Link href="/yasal" className="text-gold-warm underline hover:text-white transition-colors">
            {t("link")}
          </Link>
        </p>
        <div className="flex gap-3 shrink-0 w-full sm:w-auto">
          <button
            onClick={() => decide("declined")}
            className="flex-1 sm:flex-none px-5 py-2.5 text-xs font-bold tracking-wider uppercase border border-white/25 text-white/70 hover:text-white hover:border-white/50 transition-colors"
          >
            {t("decline")}
          </button>
          <button
            onClick={() => decide("accepted")}
            className="flex-1 sm:flex-none px-5 py-2.5 text-xs font-bold tracking-wider uppercase bg-gold text-white hover:bg-gold-light transition-colors"
          >
            {t("accept")}
          </button>
        </div>
      </div>
    </div>
  );
}
