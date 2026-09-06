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
  navArticles: { en: 'Articles', hu: 'Cikkek' },
  navProjects: { en: 'Projects', hu: 'Projektek' },
  navGithub: { en: 'GitHub', hu: 'GitHub' },

  metaDescription: {
    en: 'Mechatronics engineer working on robotics, embedded systems and industrial automation — custom PCBs, real-time firmware, PLC control and ROS 2.',
    hu: 'Mechatronikai mérnök, aki robotikával, beágyazott rendszerekkel és ipari automatizálással foglalkozik — egyedi NYÁK-ok, valós idejű firmware, PLC-vezérlés és ROS 2.',
  },
  projectsMetaDescription: {
    en: 'Hardware, robotics, industrial automation and control projects — custom PCBs, embedded firmware, PLC systems and ROS 2 navigation.',
    hu: 'Hardveres, robotikai, ipari automatizálási és szabályozási projektek — egyedi NYÁK-ok, beágyazott firmware, PLC-rendszerek és ROS 2 navigáció.',
  },
  notFoundTitle: { en: 'Page not found', hu: 'Az oldal nem található' },
  notFoundBody: {
    en: 'That page does not exist. It may have moved, or the link may be wrong.',
    hu: 'Ez az oldal nem létezik. Lehet, hogy áthelyezték, vagy hibás a hivatkozás.',
  },
  backHome: { en: 'Back to home', hu: 'Vissza a főoldalra' },

  articlesHeading: { en: 'Articles', hu: 'Cikkek' },
  articlesIntro: {
    en: 'I write up the engineering behind these projects — the decisions, the numbers, and the parts that did not work first time.',
    hu: 'Megírom a projektek mögötti mérnöki munkát is — a döntéseket, a számokat, és azt, ami elsőre nem sikerült.',
  },
  allArticles: { en: 'All articles on Medium', hu: 'Összes cikk a Mediumon' },

  servicesHeading: { en: 'Services', hu: 'Szolgáltatások' },
  projectsHeading: { en: 'Projects', hu: 'Projektek' },
  backToProjects: { en: '← Back to projects', hu: '← Vissza a projektekhez' },

  /** Used to build gallery image alt text: "<project title> — image 2". */
  image: { en: 'image', hu: 'kép' },

  contactLabel: { en: 'Get in touch', hu: 'Kapcsolat' },

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
