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
  navCourses: { en: 'Courses', hu: 'Kurzusok' },
  navGithub: { en: 'GitHub', hu: 'GitHub' },

  metaDescription: {
    en: 'Mechatronics engineer working on robotics, embedded systems and industrial automation — custom PCBs, real-time firmware, PLC control and ROS 2.',
    hu: 'Mechatronikai mérnök, aki robotikával, beágyazott rendszerekkel és ipari automatizálással foglalkozik — egyedi NYÁK-ok, valós idejű firmware, PLC-vezérlés és ROS 2.',
  },
  projectsMetaDescription: {
    en: 'Hardware, robotics, industrial automation and control projects — custom PCBs, embedded firmware, PLC systems and ROS 2 navigation.',
    hu: 'Hardveres, robotikai, ipari automatizálási és szabályozási projektek — egyedi NYÁK-ok, beágyazott firmware, PLC-rendszerek és ROS 2 navigáció.',
  },
  coursesHeading: { en: 'Courses', hu: 'Kurzusok' },
  coursesIntro: {
    en: 'Courses I am putting together on the things I do every day, from absolute basics through to advanced — embedded software, hardware design, control systems, robotics and PLC automation, taught the way I wish they had been taught to me.',
    hu: 'Kurzusok, amelyeket azokról a területekről állítok össze, amelyekkel nap mint nap foglalkozom, a teljesen alapoktól a haladó szintig — beágyazott szoftverfejlesztés, hardvertervezés, irányítástechnika, robotika és PLC-automatizálás, úgy tanítva, ahogy annak idején én szerettem volna megtanulni.',
  },
  courseFormat: { en: 'Video course', hu: 'Videókurzus' },
  coursePerTopic: { en: 'About 2 hours per topic', hu: 'Témánként nagyjából 2 óra' },
  courseLanguages: { en: 'Hungarian and English', hu: 'Magyar és angol' },

  basicsHeading: { en: 'Basics', hu: 'Alapok' },
  basicsNote: {
    en: 'Each one starts from installing the software. No prior knowledge needed, except where a course says otherwise.',
    hu: 'Mindegyik a szoftver telepítésével kezdődik. Előzetes tudás nem szükséges, kivéve ahol a kurzus mást jelez.',
  },
  advancedHeading: { en: 'Advanced', hu: 'Haladó' },
  advancedNote: {
    en: 'Each one continues where the matching basics course ends.',
    hu: 'Mindegyik ott folytatja, ahol a hozzá tartozó alapkurzus véget ér.',
  },

  coursesTopicsNote: {
    en: 'Each card lists the main topics — the courses cover more ground than fits on one.',
    hu: 'A kártyákon a fő témák szerepelnek — a kurzusok ennél több területet érintenek.',
  },
  coursesMetaDescription: {
    en: 'Courses on embedded software with Arduino, hardware and PCB design, control systems and simulation in Python, autonomous robots with ROS 2 and Gazebo, industrial robotics in FANUC RoboGuide, and PLC programming with TIA Portal and Factory I/O.',
    hu: 'Kurzusok beágyazott szoftverfejlesztésről Arduinóval, hardver- és NYÁK-tervezésről, irányítástechnikáról és szimulációról Pythonban, autonóm robotokról ROS 2-vel és Gazebóval, ipari robotikáról FANUC RoboGuide-ban, valamint PLC-programozásról TIA Portallal és Factory I/O-val.',
  },
  comingSoon: { en: 'Coming soon', hu: 'Hamarosan' },
  courseNotifyIntro: {
    en: 'Want to hear when one of these opens?',
    hu: 'Szeretnél értesítést kapni, amikor elindul valamelyik?',
  },
  courseNotifyCta: { en: 'Email me', hu: 'Írj egy e-mailt' },

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
