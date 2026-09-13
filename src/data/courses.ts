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
  {
    slug: 'fanuc-roboguide-basics',
    status: 'coming-soon',
    icon: 'ri:robot-2-line',
    title: {
      en: 'Industrial Robotics Basics in FANUC RoboGuide',
      hu: 'Ipari robotika alapjai FANUC RoboGuide-ban',
    },
    summary: {
      en: 'Programming six-axis industrial robots in simulation, long before they touch real hardware — motion, frames, I/O handshakes, and a full workcell you build yourself.',
      hu: 'Hattengelyes ipari robotok programozása szimulációban, jóval azelőtt, hogy valódi hardverhez érnének — mozgás, koordinátarendszerek, I/O-kézfogások és egy teljes gyártócella, amelyet magad építesz fel.',
    },
    topics: {
      en: [
        'Building a workcell: robot, tooling, fixtures and part flow',
        'Joint, linear and circular motion — and when each is the right one',
        'Tool and user frames, and why a wrong frame breaks everything downstream',
        'Digital I/O and handshaking between the robot and a machine',
        'Pick and place, and palletizing with position registers',
        'Collision-free paths and checking the cycle time you actually get',
      ],
      hu: [
        'Gyártócella felépítése: robot, szerszámozás, készülékek és anyagáramlás',
        'Csuklós, lineáris és köríves mozgás — és hogy mikor melyik a helyes',
        'Szerszám- és felhasználói koordinátarendszerek, és miért borul fel tőlük minden',
        'Digitális I/O és kézfogás a robot és a gép között',
        'Felvétel-lerakás és palettázás pozícióregiszterekkel',
        'Ütközésmentes pályák és a ténylegesen elért ciklusidő ellenőrzése',
      ],
    },
  },
  {
    slug: 'plc-tia-portal-factory-io',
    status: 'coming-soon',
    icon: 'ri:device-line',
    title: {
      en: 'PLC Programming Basics with TIA Portal and Factory I/O',
      hu: 'PLC-programozás alapjai TIA Portallal és Factory I/O-val',
    },
    summary: {
      en: 'Ladder logic on a Siemens S7-1200, driven against a 3D plant in Factory I/O — so you can build, run and break a real process without owning the hardware.',
      hu: 'Létradiagram Siemens S7-1200-on, 3D-s üzemmodellel hajtva a Factory I/O-ban — így úgy építhetsz, futtathatsz és törhetsz el egy valódi folyamatot, hogy nincs meg hozzá a hardver.',
    },
    topics: {
      en: [
        'The PLC scan cycle, and how it changes the way you write logic',
        'Digital and analog I/O, and addressing that stays readable',
        'Ladder logic: contacts, coils, timers and counters',
        'Structuring a process as a state machine with start, stop and reset',
        'Emergency stop, and the difference between stopping and being safe',
        'Testing against a Factory I/O plant before touching real hardware',
      ],
      hu: [
        'A PLC ciklusideje, és hogyan változtatja meg a logikaírás módját',
        'Digitális és analóg I/O, és olvasható maradó címzés',
        'Létradiagram: érintkezők, tekercsek, időzítők és számlálók',
        'Folyamat felépítése állapotgépként indítással, leállítással és alaphelyzetbe állítással',
        'Vészleállítás, és a különbség a megállítás és a biztonságos állapot között',
        'Tesztelés Factory I/O üzemmodellen, mielőtt valódi hardverhez nyúlnál',
      ],
    },
  },
];
