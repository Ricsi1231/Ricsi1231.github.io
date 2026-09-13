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
      en: 'Firmware from first principles, on hardware you can hold — reading sensors, driving servos and motors, timers, interrupts and serial communication, written so the code stays readable as the project grows.',
      hu: 'Firmware az alapoktól, kézzel fogható hardveren — szenzorok olvasása, szervók és motorok meghajtása, időzítők, megszakítások és soros kommunikáció, úgy megírva, hogy a kód a projekt növekedésével is olvasható maradjon.',
    },
    topics: {
      en: [
        'Digital and analog I/O, and what the microcontroller is actually doing',
        'Timers, interrupts, and non-blocking code instead of delay()',
        'Serial communication: UART, I²C and SPI',
        'Reading a datasheet and driving a sensor from it',
        'Driving actuators: hobby servos, DC motors, relays, and the drivers they need',
        'State machines, and splitting firmware into modules',
        'Debugging without a debugger — and with one',
      ],
      hu: [
        'Digitális és analóg I/O, és hogy valójában mit csinál a mikrovezérlő',
        'Időzítők, megszakítások és nem blokkoló kód a delay() helyett',
        'Soros kommunikáció: UART, I²C és SPI',
        'Adatlap olvasása és szenzor meghajtása belőle',
        'Beavatkozók meghajtása: hobbiszervók, DC-motorok, relék, és a hozzájuk tartozó meghajtók',
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
      en: 'From an idea to a board you can actually order. The course builds one development board from a blank sheet through to a manufacturing package you could send to a fab today.',
      hu: 'Az ötlettől a ténylegesen megrendelhető panelig. A kurzus során egy fejlesztőpanelt viszünk végig az üres laptól a gyártási csomagig, amelyet akár ma elküldhetnél a gyártónak.',
    },
    topics: {
      en: [
        'Schematic capture, and what a good schematic makes obvious',
        'Choosing components: datasheets, footprints and availability',
        'PCB layout basics — stackup, routing and ground',
        'Design rules that match what your fab can actually build',
        'Manufacturing outputs: gerbers, drill files, BOM and pick-and-place',
        'The project: one development board, carried from blank sheet to ordered',
      ],
      hu: [
        'Kapcsolási rajz készítése, és hogy mit tesz nyilvánvalóvá egy jó rajz',
        'Alkatrészválasztás: adatlapok, lábnyomok és beszerezhetőség',
        'NYÁK-tervezés alapjai — rétegfelépítés, huzalozás és földelés',
        'Tervezési szabályok, amelyek illeszkednek a gyártó tényleges képességeihez',
        'Gyártási fájlok: Gerber, fúrásfájlok, anyagjegyzék és beültetési pozíciók',
        'A projekt: egy fejlesztőpanel, az üres laptól a megrendelésig',
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
      en: 'PLC Programming with SCL in TIA Portal and Factory I/O',
      hu: 'PLC-programozás SCL-ben TIA Portallal és Factory I/O-val',
    },
    summary: {
      en: 'Structured Control Language on a Siemens S7-1500, driven against a 3D plant in Factory I/O. Start in the simulator, wire the two together, then spend most of the course building and debugging real processes — no hardware required.',
      hu: 'Structured Control Language (SCL) Siemens S7-1500-on, 3D-s üzemmodellel hajtva a Factory I/O-ban. A szimulátorban kezdünk, összekötjük a kettőt, majd a kurzus nagyobb részében valódi folyamatokat építünk és keresünk bennük hibát — hardver nélkül.',
    },
    topics: {
      en: [
        'Factory I/O basics: building a scene, and its sensors, actuators and tags',
        'TIA Portal basics: setting up a project, an S7-1500 CPU, and PLCSIM',
        'The scan cycle, and how it shapes the way you write logic',
        'Connecting TIA Portal to Factory I/O, and getting the I/O mapping right',
        'SCL from the ground up: variables, conditions, loops, functions and function blocks',
        'Structuring a process as a state machine — start, stop, reset and emergency stop',
        'Plenty of practice: complete processes built and debugged end to end in simulation',
      ],
      hu: [
        'Factory I/O alapok: jelenet felépítése, annak érzékelői, beavatkozói és jelei',
        'TIA Portal alapok: projekt létrehozása, S7-1500-as CPU és a PLCSIM',
        'A ciklusidő, és hogyan alakítja a logikaírás módját',
        'A TIA Portal és a Factory I/O összekötése, és a helyes I/O-hozzárendelés',
        'SCL az alapoktól: változók, feltételek, ciklusok, függvények és funkcióblokkok',
        'Folyamat felépítése állapotgépként — indítás, leállítás, alaphelyzet és vészleállítás',
        'Rengeteg gyakorlás: teljes folyamatok felépítése és hibakeresése végig szimulációban',
      ],
    },
  },
];
