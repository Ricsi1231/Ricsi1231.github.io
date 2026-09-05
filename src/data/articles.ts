import type { Localized } from '../i18n/types';

export interface Article {
  /** Title as published. Kept in English in both languages, because the articles are. */
  title: string;
  url: string;
  /** ISO date, formatted per locale at build time. */
  date: string;
  /** One line on what the piece is actually about. */
  blurb: Localized<string>;
}

export const MEDIUM_PROFILE = 'https://medium.com/@richardnagy551';

/** Newest first. */
export const articles: Article[] = [
  {
    title: 'Two Robots and a Handshake',
    url: 'https://medium.com/@richardnagy551/two-robots-and-a-handshake-6f5b0bb29635',
    date: '2026-08-16',
    blurb: {
      en: 'Two six-axis robots, a CNC machine and a 3×3 pallet — and why the hard part was not the motion, but making two controllers agree on who moves next.',
      hu: 'Két hattengelyes robot, egy CNC-gép és egy 3×3-as paletta — és hogy miért nem a mozgás volt a nehéz, hanem megegyeztetni két vezérlőt arról, ki mozoghat.',
    },
  },
  {
    title: 'One Motor, Three Disciplines',
    url: 'https://medium.com/@richardnagy551/one-motor-three-disciplines-3eac58f63610',
    date: '2026-08-16',
    blurb: {
      en: 'A credit-card-sized board where PCB layout, firmware timing and a serial protocol all have to agree exactly — three disciplines, three failure modes, one motor.',
      hu: 'Egy bankkártya méretű panel, ahol a NYÁK-tervezésnek, a firmware időzítésének és a soros protokollnak pontosan egyeznie kell — három szakterület, három hibamód, egy motor.',
    },
  },
  {
    title: 'Building a fuzzy position controller from scratch, and measuring it honestly against PID',
    url: 'https://medium.com/@richardnagy551/building-a-fuzzy-position-controller-from-scratch-and-measuring-it-honestly-against-pid-23acb687378e',
    date: '2026-08-15',
    blurb: {
      en: 'A PID is three numbers; a fuzzy controller is a table of sentences. I simulated both against the same noisy plant model to see whether the appeal survives contact with reality.',
      hu: 'A PID három szám, a fuzzy szabályozó mondatok táblázata. Ugyanazon a zajos szakaszmodellen szimuláltam mindkettőt, hogy kiderüljön, kiállja-e az elmélet a valóság próbáját.',
    },
  },
  {
    title: 'I Wrote the Algorithms First, Then Built the Robot',
    url: 'https://medium.com/@richardnagy551/i-wrote-the-algorithms-first-then-built-the-robot-ce19ae5fd5b7',
    date: '2026-08-11',
    blurb: {
      en: 'A*, Dijkstra, BFS and DFS written from scratch with zero runtime dependencies — then a robot built to run them, and the numbers showing what each one costs.',
      hu: 'A*, Dijkstra, BFS és DFS a nulláról, futásidejű függőségek nélkül — majd egy robot, amely futtatja őket, és a számok, amelyek megmutatják, mibe kerül mindegyik.',
    },
  },
];
