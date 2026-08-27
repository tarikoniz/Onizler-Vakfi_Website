"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";

const CONSENT_KEY = "onizler-cookie-consent";

/**
 * Loads Google Analytics 4 and Microsoft Clarity — but only after the
 * visitor has accepted cookies (KVKK). Reacts instantly to the consent
 * event dispatched by CookieConsent, and also honours a prior choice
 * stored in localStorage on repeat visits.
 */
export default function Analytics() {
  const { ga4Id, clarityId } = siteConfig.analytics;
  const [consented, setConsented] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem(CONSENT_KEY) === "accepted") setConsented(true);
    } catch {
      /* ignore */
    }
    const onConsent = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (detail === "accepted") setConsented(true);
    };
    window.addEventListener("cookie-consent", onConsent);
    return () => window.removeEventListener("cookie-consent", onConsent);
  }, []);

  if (!consented) return null;

  return (
    <>
      {ga4Id && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${ga4Id}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${ga4Id}', { anonymize_ip: true });
            `}
          </Script>
        </>
      )}

      {clarityId && (
        <Script id="clarity-init" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${clarityId}");
          `}
        </Script>
      )}
    </>
  );
}
