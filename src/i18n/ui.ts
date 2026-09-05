import type { Lang, Localized } from './types';

/**
 * Short interface strings. Longer body copy lives with its content in `src/data/`
 * (see `hero.ts`, `services.ts`, `projects.ts`) so translations sit next to the
 * English original they belong to.
 */
const strings = {
  /** Brand name in the browser tab. Hungarian puts the family name first. */
  siteName: { en: 'Richard Nagy', hu: 'Nagy Richárd' },

  navHome: { en: 'Home', hu: 'Főoldal' },
  navServices: { en: 'Services', hu: 'Szolgáltatások' },
  navProjects: { en: 'Projects', hu: 'Projektek' },
  navGithub: { en: 'GitHub', hu: 'GitHub' },

  servicesHeading: { en: 'Services', hu: 'Szolgáltatások' },
  projectsHeading: { en: 'Projects', hu: 'Projektek' },
  backToProjects: { en: '← Back to projects', hu: '← Vissza a projektekhez' },

  /** Used to build gallery image alt text: "<project title> — image 2". */
  image: { en: 'image', hu: 'kép' },

  footer: {
    en: 'Copyright © 2026 Nagy Richárd. All Rights Reserved.',
    hu: 'Copyright © 2026 Nagy Richárd. Minden jog fenntartva.',
  },

  /** Accessible label on the switcher, describing the language it takes you to. */
  switchLanguage: { en: 'Switch to Hungarian', hu: 'Váltás angolra' },
} satisfies Record<string, Localized<string>>;

export type UiKey = keyof typeof strings;

/** Returns a lookup for one language: `const t = useTranslations(lang); t('navHome')`. */
export function useTranslations(lang: Lang) {
  return function t(key: UiKey): string {
    return strings[key][lang];
  };
}

export { strings as ui };
