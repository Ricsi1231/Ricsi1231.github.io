import type { Localized } from '../i18n/types';

/**
 * A course is either published (with a `url` to enrol) or still being written.
 * Keeping the status explicit means the card renders the right call to action
 * rather than inferring it from whether a link happens to be set.
 */
export type CourseStatus = 'coming-soon' | 'available';

export interface Course {
  /** Stable identifier, also used as the React-style key when rendering. */
  slug: string;
  status: CourseStatus;
  icon: string; // Iconify name from the RemixIcon (ri) set
  title: Localized<string>;
  summary: Localized<string>;
  /** What the course covers, one line per topic. */
  topics: Localized<string[]>;
  /** Where to enrol. Only meaningful once `status` is 'available'. */
  url?: string;
}

export const courses: Course[] = [
  {
    slug: 'embedded-arduino-basics',
    status: 'coming-soon',
    icon: 'ri:terminal-box-line',
    title: {
      en: 'Embedded Systems Software Development Basics on the Arduino Platform',
      hu: 'Beágyazott rendszerek szoftverfejlesztésének alapjai Arduino platformon',
    },
    summary: {
      en: 'Firmware from first principles, on hardware you can hold — digital and analog I/O, timers, interrupts and serial communication, written so the code stays readable as the project grows.',
      hu: 'Firmware az alapoktól, kézzel fogható hardveren — digitális és analóg I/O, időzítők, megszakítások és soros kommunikáció, úgy megírva, hogy a kód a projekt növekedésével is olvasható maradjon.',
    },
    topics: {
      en: [
        'Digital and analog I/O, and what the microcontroller is actually doing',
        'Timers, interrupts, and non-blocking code instead of delay()',
        'Serial communication: UART, I²C and SPI',
        'Reading a datasheet and driving a sensor from it',
        'State machines, and splitting firmware into modules',
        'Debugging without a debugger — and with one',
      ],
      hu: [
        'Digitális és analóg I/O, és hogy valójában mit csinál a mikrovezérlő',
        'Időzítők, megszakítások és nem blokkoló kód a delay() helyett',
        'Soros kommunikáció: UART, I²C és SPI',
        'Adatlap olvasása és szenzor meghajtása belőle',
        'Állapotgépek és a firmware modulokra bontása',
        'Hibakeresés debugger nélkül — és debuggerrel',
      ],
    },
  },
  {
    slug: 'hardware-design-basics',
    status: 'coming-soon',
    icon: 'ri:draft-line',
    title: {
      en: 'Hardware Design Basics',
      hu: 'Hardvertervezés alapjai',
    },
    summary: {
      en: 'From an idea to a board you can actually order — schematic capture, choosing parts you can buy, PCB layout, and the manufacturing files a fab needs.',
      hu: 'Az ötlettől a ténylegesen megrendelhető panelig — kapcsolási rajz, beszerezhető alkatrészek kiválasztása, NYÁK-tervezés, és a gyártáshoz szükséges fájlok.',
    },
    topics: {
      en: [
        'Schematic capture, and what a good schematic makes obvious',
        'Choosing components: datasheets, footprints and availability',
        'Power: regulators, decoupling, and where the current actually flows',
        'PCB layout basics — stackup, routing and ground',
        'Design rules that match what your fab can actually build',
        'Manufacturing outputs: gerbers, drill files, BOM and pick-and-place',
      ],
      hu: [
        'Kapcsolási rajz készítése, és hogy mit tesz nyilvánvalóvá egy jó rajz',
        'Alkatrészválasztás: adatlapok, lábnyomok és beszerezhetőség',
        'Tápellátás: stabilizátorok, hidegítő kondenzátorok, és hogy merre folyik valójában az áram',
        'NYÁK-tervezés alapjai — rétegfelépítés, huzalozás és földelés',
        'Tervezési szabályok, amelyek illeszkednek a gyártó tényleges képességeihez',
        'Gyártási fájlok: Gerber, fúrásfájlok, anyagjegyzék és beültetési pozíciók',
      ],
    },
  },
];
