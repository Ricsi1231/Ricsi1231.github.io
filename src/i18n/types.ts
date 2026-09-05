/** The languages the site is published in. `en` is the default and lives at the site root. */
export const LANGS = ['en', 'hu'] as const;

export type Lang = (typeof LANGS)[number];

export const DEFAULT_LANG: Lang = 'en';

/**
 * A value that must exist in every language. Using a Record over `Lang` means the
 * compiler rejects content that is missing a translation, so the two languages
 * cannot silently drift apart.
 */
export type Localized<T> = Record<Lang, T>;

export function isLang(value: unknown): value is Lang {
  return typeof value === 'string' && (LANGS as readonly string[]).includes(value);
}
