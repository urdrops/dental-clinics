export type Language = "ru" | "uz";

export type TranslationKey = keyof typeof import("./locales/ru").default;
