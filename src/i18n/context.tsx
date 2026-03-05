"use client";

import { createContext, useState, useEffect, useCallback } from "react";
import type { Language } from "./types";
import ru from "./locales/ru";
import uz from "./locales/uz";

type Translations = typeof ru;

interface LanguageContextValue {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: keyof Translations) => string;
}

const dictionaries: Record<Language, Record<string, string>> = { ru, uz };

export const LanguageContext = createContext<LanguageContextValue>({
  lang: "ru",
  setLang: () => {},
  t: (key) => String(key),
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("ru");

  useEffect(() => {
    const stored = localStorage.getItem("restom_lang") as Language | null;
    if (stored === "ru" || stored === "uz") {
      setLangState(stored);
      document.documentElement.lang = stored;
    }
  }, []);

  const setLang = useCallback((l: Language) => {
    setLangState(l);
    localStorage.setItem("restom_lang", l);
    document.documentElement.lang = l;
  }, []);

  const t = useCallback(
    (key: keyof Translations): string => {
      return dictionaries[lang][key as string] ?? (key as string);
    },
    [lang],
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
