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
    // Hard navigation is more reliable for static export than client routing.
    window.location.replace(`/${locale}`);
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
