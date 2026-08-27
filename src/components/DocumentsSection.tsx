"use client";

import { useTranslations } from "next-intl";
import { siteConfig } from "@/config/site";
import { FileText, Download, Clock } from "lucide-react";

export default function DocumentsSection() {
  const t = useTranslations("documents");
  const docs = siteConfig.documents;

  return (
    <div className="bg-cream p-8 sm:p-10 border border-gray-light">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-10 h-[2px] bg-gold" />
        <h2 className="text-xl font-extrabold text-charcoal tracking-tight">{t("title")}</h2>
      </div>

      {docs.length === 0 ? (
        <div className="flex items-center gap-3 text-charcoal/50 text-sm py-4">
          <Clock className="w-5 h-5 text-gold/60 shrink-0" />
          <span>{t("empty")}</span>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {docs.map((doc) => (
            <a
              key={doc.file}
              href={doc.file}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 bg-white p-4 border border-gray-light hover:border-gold/40 hover:shadow-md transition-all"
            >
              <div className="w-11 h-11 bg-navy/[0.06] flex items-center justify-center shrink-0 group-hover:bg-navy/10 transition-colors">
                <FileText className="w-5 h-5 text-navy" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-charcoal truncate">{doc.title}</p>
                <p className="text-xs text-charcoal/40 mt-0.5">{doc.date}</p>
              </div>
              <Download className="w-4 h-4 text-charcoal/30 group-hover:text-gold transition-colors shrink-0" />
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
