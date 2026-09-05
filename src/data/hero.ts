import type { Localized } from '../i18n/types';

/** Shared link styling, so the inline anchors below match the rest of the site. */
const LINK = 'text-white underline decoration-accent underline-offset-4 transition-colors hover:text-accent';

/**
 * Hero heading and bio. Both are trusted static HTML rendered with `set:html`,
 * matching the convention already used by `services.ts` and `projects.ts`.
 * The heading keeps the `.stroke` span that outlines the name.
 *
 * The bio is written for an engineer deciding whether to hire a student: what he
 * can actually build, evidence that he has shipped it, and how to get in touch.
 * Every claim below maps to a real entry in `projects.ts`.
 */
export const hero: {
  heading: Localized<string>;
  body: Localized<string>;
  portraitAlt: string;
} = {
  heading: {
    en: `Hi, I'm <span class="stroke">Nagy Richárd</span> Mechatronics engineer`,
    hu: `Szia, <span class="stroke">Nagy Richárd</span> vagyok, mechatronikai mérnök`,
  },

  body: {
    en: `I build mechatronic systems end to end — custom PCBs and real-time firmware,
      PLC-controlled industrial automation, and autonomous robots in ROS 2.
      <br /><br />
      Real hardware, not coursework: a closed-loop motor controller taken from schematic
      to LabVIEW HMI, a three-tank process line running on a Siemens S7-1200, and an
      autonomous vehicle I led to 2nd place in
      <a href="https://wro.rs/" target="_blank" rel="noopener noreferrer" class="${LINK}">WRO Future Engineers</a>.
      <br /><br />
      Have a look at my <a href="/projects/" class="${LINK}">projects</a> or my
      <a href="https://github.com/Ricsi1231" target="_blank" rel="noopener noreferrer" class="${LINK}">GitHub</a>.`,

    hu: `Mechatronikai rendszereket építek a nulláról a kész eszközig — egyedi NYÁK-ok és
      valós idejű firmware, PLC-vezérelt ipari automatizálás, valamint autonóm robotok
      ROS 2-ben.
      <br /><br />
      Valódi hardver, nem iskolai feladat: egy zárt hurkú motorvezérlő a kapcsolási
      rajztól a LabVIEW HMI-ig, egy háromtartályos gyártósor Siemens S7-1200-on, és egy
      autonóm jármű, amellyel csapatvezetőként 2. helyet értünk el a
      <a href="https://wro.rs/" target="_blank" rel="noopener noreferrer" class="${LINK}">WRO Future Engineers</a>
      kategóriában.
      <br /><br />
      Nézd meg a <a href="/hu/projects/" class="${LINK}">projektjeimet</a> vagy a
      <a href="https://github.com/Ricsi1231" target="_blank" rel="noopener noreferrer" class="${LINK}">GitHubomat</a>.`,
  },

  portraitAlt: 'Nagy Richárd',
};
