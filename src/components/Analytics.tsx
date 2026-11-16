"use client";

import Script from "next/script";
import { useSyncExternalStore } from "react";
import { siteConfig } from "@/config/site";

const CONSENT_KEY = "onizler-cookie-consent";

// Consent given during this page view. Kept in memory so the scripts still
// load when localStorage is unavailable and the choice cannot be persisted.
let acceptedThisVisit = false;

function subscribe(onChange: () => void) {
  const onConsent = (e: Event) => {
    if ((e as CustomEvent).detail === "accepted") {
      acceptedThisVisit = true;
      onChange();
    }
  };
  window.addEventListener("cookie-consent", onConsent);
  return () => window.removeEventListener("cookie-consent", onConsent);
}

function getSnapshot() {
  if (acceptedThisVisit) return true;
  try {
    return localStorage.getItem(CONSENT_KEY) === "accepted";
  } catch {
    return false;
  }
}

const getServerSnapshot = () => false;

/**
 * Loads Google Analytics 4 and Microsoft Clarity — but only after the
 * visitor has accepted cookies (KVKK). Reacts instantly to the consent
 * event dispatched by CookieConsent, and also honours a prior choice
 * stored in localStorage on repeat visits.
 */
export default function Analytics() {
  const { ga4Id, clarityId } = siteConfig.analytics;
  const consented = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

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
