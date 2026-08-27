/**
 * ÖNİZLER VAKFI — Merkezi Site Yapılandırması
 * ------------------------------------------------------------------
 * Buradaki değerleri güncellemen yeterli; ilgili bölümler otomatik
 * görünür/güncellenir. Boş bırakılan bölümler sitede gizlenir.
 */

export const siteConfig = {
  /** Vakıf resmi iletişim bilgileri */
  contact: {
    email: "info@onizlervakfi.org",
    // Telefonu gerçek numarayla değiştir (uluslararası biçim önerilir)
    phone: "+90 (312) 000 00 00",
    address: "Yeni Bağlıca Mah. 2243 Sok. No: 2 Öniz Kale, Etimesgut / ANKARA",
    mapUrl: "https://share.google/WrF5phwe1HFljRvst",
  },

  /**
   * WhatsApp hızlı iletişim.
   * `number` doldurulunca sağ altta yeşil WhatsApp butonu otomatik belirir.
   * Sadece rakam (ülke kodu dahil, + veya boşluk olmadan). Örn: "905321234567"
   * Boş bırakırsan buton gizli kalır.
   */
  whatsapp: {
    number: "", // örn: "905321234567"
    defaultMessage: "Merhaba, Önizler Vakfı hakkında bilgi almak istiyorum.",
  },

  /**
   * Sosyal medya. Boş bırakılan hesap footer/iletişimde gizlenir.
   */
  social: {
    instagram: "https://www.instagram.com/onizlervakfi/",
    linkedin: "https://linkedin.com/company/onizlervakfi",
    youtube: "https://youtube.com/@onizlervakfi",
    x: "https://x.com/onizlervakfi",
    facebook: "https://facebook.com/onizlervakfi",
  },

  /**
   * İş birlikçiler / Destekçiler.
   * Logo dosyalarını public/partners/ klasörüne koy, buraya ekle.
   * Liste boşsa anasayfadaki "Destekçilerimiz" bandı gizlenir.
   * Örn: { name: "Kurum Adı", logo: "/partners/kurum.png", url: "https://..." }
   */
  partners: [] as { name: string; logo: string; url?: string }[],

  /**
   * Analitik — ziyaretçi trafiği ve davranış takibi.
   * Yalnızca kullanıcı çerez onayı verdikten sonra çalışır (KVKK uyumlu).
   * ID girilmeyen servis pasif kalır.
   *
   * ga4Id     : Google Analytics 4 ölçüm kimliği. analytics.google.com →
   *             yeni GA4 mülkü → Web veri akışı → "G-XXXXXXXXXX".
   * clarityId : Microsoft Clarity proje kimliği. clarity.microsoft.com →
   *             yeni proje → Setup → proje ID (kısa alfanümerik).
   */
  analytics: {
    ga4Id: "", // örn: "G-XXXXXXXXXX"
    clarityId: "", // örn: "abcdefghij"
  },

  /**
   * Şeffaflık — indirilebilir belge/raporlar.
   * PDF'leri public/belgeler/ klasörüne koy, buraya ekle.
   * Liste boşsa Şeffaflık sayfasında "yakında" durumu gösterilir.
   * Örn: { title: "2026 Faaliyet Raporu", date: "2026", file: "/belgeler/2026-faaliyet.pdf" }
   */
  documents: [] as { title: string; date: string; file: string }[],
} as const;

/** Placeholder telefon mu? (gerçek numara girilene kadar bazı yerlerde gizlenir) */
export const hasRealPhone = !siteConfig.contact.phone.includes("000 00 00");
