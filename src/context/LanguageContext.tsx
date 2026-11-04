"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "es";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  tr: <T>(en: T, es: T) => T;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  tr: (en) => en,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("en");

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const urlLang = params.get("lang")?.toLowerCase();
      if (urlLang === "es" || urlLang === "en") {
        setLangState(urlLang);
        localStorage.setItem("artb2b_lang", urlLang);
        document.documentElement.lang = urlLang;
        return;
      }

      const saved = localStorage.getItem("artb2b_lang") as Language | null;
      if (saved === "en" || saved === "es") {
        setLangState(saved);
        document.documentElement.lang = saved;
      }
    } catch {
      // ignore storage errors
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem("artb2b_lang", newLang);
      document.documentElement.lang = newLang;
    } catch {
      // ignore storage errors
    }
  };

  const tr = <T,>(en: T, es: T): T => (lang === "es" ? es : en);

  return (
    <LanguageContext.Provider value={{ lang, setLang, tr }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
