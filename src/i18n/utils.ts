import { DEFAULT_LANG, LANGS, type Lang } from './types';

/** Locales that carry a URL prefix. The default locale is served from the root. */
const PREFIXED_LANGS = LANGS.filter((lang) => lang !== DEFAULT_LANG);

/** Ensures a path starts with exactly one `/` and ends with exactly one `/`. */
function normalize(path: string): string {
  const trimmed = `/${path.replace(/^\/+/, '').replace(/\/+$/, '')}`;
  return trimmed === '/' ? '/' : `${trimmed}/`;
}

/**
 * Removes a locale prefix, yielding the canonical (default-language) path.
 * `/hu/projects/` -> `/projects/`, `/hu` -> `/`. Matching is on whole segments,
 * so a path like `/humor/` is left alone.
 */
export function stripLang(pathname: string): string {
  const path = normalize(pathname);
  const prefix = PREFIXED_LANGS.find((lang) => path.startsWith(`/${lang}/`));
  return prefix ? normalize(path.slice(prefix.length + 1)) : path;
}

/** Builds the URL for a canonical path in the given language. */
export function localizePath(lang: Lang, path: string): string {
  const canonical = normalize(path);
  return lang === DEFAULT_LANG ? canonical : normalize(`/${lang}${canonical}`);
}

/**
 * Maps the page currently being viewed to the same page in another language.
 * This is what the language switcher links to, so a project detail page stays
 * on that project instead of bouncing back to an index.
 */
export function getLocalizedPath(pathname: string, target: Lang): string {
  return localizePath(target, stripLang(pathname));
}

/**
 * The `[...lang]` route param for a locale. The default locale is served from the
 * site root, and a rest parameter of `undefined` is how Astro expresses that.
 */
export function langParam(lang: Lang): string | undefined {
  return lang === DEFAULT_LANG ? undefined : lang;
}
