# Önizler Vakfı — Web Sitesi

Önizler Vakfı'nın kurumsal web sitesi. Next.js (App Router), React, Tailwind CSS ve next-intl ile geliştirilmiştir; Türkçe ve İngilizce yayınlanır.

## Geliştirme

```bash
npm ci
```

```bash
npm run dev
```

Site [http://localhost:3000](http://localhost:3000) adresinde açılır.

```bash
npm run lint
```

```bash
npm run build
```

## İçerik nerede düzenlenir?

- `src/config/site.ts` — iletişim bilgileri, sosyal medya, WhatsApp, analitik kimlikleri, destekçiler ve indirilebilir belgeler.
- `src/i18n/messages/tr.json` ve `src/i18n/messages/en.json` — sitedeki tüm metinler.
- `src/app/[locale]/` — sayfalar.
- `public/` — logo ve görseller.

## Yayın

`main` dalına birleştirilen değişiklikler Vercel tarafından otomatik olarak yayına alınır.
