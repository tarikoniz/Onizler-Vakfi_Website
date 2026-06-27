import { useTranslations } from "next-intl";
import { Shield, Cookie, FileWarning } from "lucide-react";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";

export default function LegalPage() {
  const t = useTranslations("footer");

  return (
    <>
      <PageHero title={t("legal")} />

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-6 sm:px-8 space-y-6">
          {/* Privacy */}
          <ScrollReveal direction="up">
            <div className="bg-cream p-8 sm:p-10 border border-gray-light">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-11 h-11 bg-white flex items-center justify-center">
                  <Shield className="w-5 h-5 text-gold" />
                </div>
                <h2 className="text-2xl font-extrabold text-charcoal tracking-tight">
                  {t("privacy")}
                </h2>
              </div>
              <div className="text-charcoal/60 space-y-5 text-sm leading-relaxed">
                <p>
                  Önizler Vakfı olarak kişisel verilerinizin güvenliği konusunda büyük önem gösteriyoruz.
                  Bu politika, web sitemizi ziyaret ettiğinizde, bağış yaptığınızda, gönüllü veya burs
                  başvurusunda bulunduğunuzda kişisel verilerinizin nasıl toplandığını, kullanıldığını
                  ve korunduğunu açıklamaktadır.
                </p>
                <div>
                  <h3 className="font-bold text-charcoal text-base mb-3 uppercase tracking-wider text-xs">Toplanan Veriler</h3>
                  <ul className="space-y-2">
                    {[
                      "Kimlik bilgileri (ad, soyad)",
                      "İletişim bilgileri (e-posta, telefon, adres)",
                      "Bağış bilgileri (tutar, tarih, ödeme yöntemi)",
                      "Başvuru bilgileri (eğitim durumu, gelir durumu)",
                      "Web sitesi kullanım verileri (çerez, IP adresi)",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-gold flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-charcoal text-base mb-3 uppercase tracking-wider text-xs">Verilerin Kullanımı</h3>
                  <ul className="space-y-2">
                    {[
                      "Bağış işlemlerinin gerçekleştirilmesi",
                      "Burs ve gönüllü başvurularının değerlendirilmesi",
                      "Vakıf faaliyetleri hakkında bilgilendirme",
                      "Yasal yükümlülüklerin yerine getirilmesi",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-gold flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <p>
                  Kişisel verileriniz, yasal zorunluluklar dışında üçüncü taraflarla paylaşılmaz.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Cookies */}
          <ScrollReveal direction="up" delay={100}>
            <div className="bg-cream p-8 sm:p-10 border border-gray-light">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-11 h-11 bg-white flex items-center justify-center">
                  <Cookie className="w-5 h-5 text-gold" />
                </div>
                <h2 className="text-2xl font-extrabold text-charcoal tracking-tight">
                  {t("cookies")}
                </h2>
              </div>
              <div className="text-charcoal/60 space-y-5 text-sm leading-relaxed">
                <p>
                  Web sitemiz, deneyiminizi iyileştirmek amacıyla çerezler kullanmaktadır.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse border border-gray-light">
                    <thead>
                      <tr className="bg-navy text-white">
                        <th className="text-left p-3 font-bold text-xs uppercase tracking-wider">Çerez Türü</th>
                        <th className="text-left p-3 font-bold text-xs uppercase tracking-wider">Amaç</th>
                        <th className="text-left p-3 font-bold text-xs uppercase tracking-wider">Süre</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { type: "Zorunlu", purpose: "Temel işlevler", duration: "Oturum" },
                        { type: "Analitik", purpose: "Ziyaretçi istatistikleri", duration: "2 yıl" },
                        { type: "İşlevsel", purpose: "Dil tercihi", duration: "1 yıl" },
                      ].map((row) => (
                        <tr key={row.type} className="border-t border-gray-light">
                          <td className="p-3 font-medium text-charcoal">{row.type}</td>
                          <td className="p-3">{row.purpose}</td>
                          <td className="p-3">{row.duration}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* KVKK */}
          <ScrollReveal direction="up" delay={200}>
            <div className="bg-cream p-8 sm:p-10 border border-gray-light">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-11 h-11 bg-white flex items-center justify-center">
                  <FileWarning className="w-5 h-5 text-gold" />
                </div>
                <h2 className="text-2xl font-extrabold text-charcoal tracking-tight">
                  {t("kvkk")}
                </h2>
              </div>
              <div className="text-charcoal/60 space-y-5 text-sm leading-relaxed">
                <p>
                  6698 sayılı Kişisel Verilerin Korunması Kanunu uyarınca, Önizler Vakfı olarak
                  veri sorumlusu sıfatıyla kişisel verileriniz aşağıda açıklanan çerçevede işlenmektedir.
                </p>
                <div className="bg-navy/5 p-4 border border-navy/10">
                  <p className="font-bold text-charcoal text-sm">
                    Veri Sorumlusu: ÖNİZLER VAKFI
                  </p>
                  <p className="text-charcoal/50 mt-1">
                    Yeni Bağlıca Mah 2243 Sokak No 2 06790 Etimesgut/Ankara
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-charcoal text-base mb-3 uppercase tracking-wider text-xs">Haklarınız (KVKK m.11)</h3>
                  <ul className="space-y-2">
                    {[
                      "Kişisel verilerinizin işlenip işlenmediğini öğrenme",
                      "İşlenmişse bilgi talep etme",
                      "İşlenme amacını öğrenme",
                      "Eksik veya yanlış işlenmiş olması hâlinde düzeltilmesini isteme",
                      "Silinmesini veya yok edilmesini isteme",
                      "İtiraz etme hakkı",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-gold flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <p>
                  Başvuru: <span className="font-bold text-charcoal">kvkk@onizlervakfi.org</span>
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
