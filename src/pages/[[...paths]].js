import { useEffect } from "react";
import { useRouter } from "next/router";

const LOCALES = ["en", "es", "ca"];
const DEFAULT_LOCALE = "en";
const STORAGE_KEY = "__I18N_SET_LOCALE";

function detectLocale() {
  if (typeof window === "undefined") return DEFAULT_LOCALE;

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored && LOCALES.includes(stored)) return stored;

  const language = window.navigator.language?.split("-")[0]?.toLowerCase();
  if (language && LOCALES.includes(language)) return language;

  return DEFAULT_LOCALE;
}

export default function RootRedirectPage() {
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    const locale = detectLocale();
    const { protocol, host } = window.location;
    const isLocal =
      host.startsWith("localhost") ||
      host.startsWith("127.0.0.1") ||
      host.endsWith(".local");
    // Production should always land on HTTPS even if the visitor opened http://
    const origin =
      !isLocal && protocol === "http:"
        ? `https://${host}`
        : `${protocol}//${host}`;
    window.location.replace(`${origin}/${locale}`);
  }, [router.isReady]);

  return <div>Redirecting...</div>;
}

export function getStaticPaths() {
  return {
    paths: [{ params: { paths: [] } }],
    fallback: false,
  };
}

export function getStaticProps() {
  return { props: {} };
}
