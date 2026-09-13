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
      en: 'Embedded software from first principles, on hardware you can hold — reading sensors, driving servos and motors, timers, interrupts and serial communication, written so the code stays readable as the project grows.',
      hu: 'Beágyazott szoftver az alapoktól, kézzel fogható hardveren — szenzorok olvasása, szervók és motorok meghajtása, időzítők, megszakítások és soros kommunikáció, úgy megírva, hogy a kód a projekt növekedésével is olvasható maradjon.',
    },
    topics: {
      en: [
        'Installing the IDE and getting your first sketch onto a board',
        'Digital and analog I/O, and what the microcontroller is actually doing',
        'Timers, interrupts, and non-blocking code instead of delay()',
        'Serial communication: UART, I²C and SPI',
        'Reading a datasheet and driving a sensor from it',
        'Driving actuators: hobby servos, DC motors, relays, and the drivers they need',
        'Object-oriented basics: classes, objects, and turning a sensor or motor into a reusable class',
        'State machines, and splitting the code into modules',
      ],
      hu: [
        'Az IDE telepítése, és az első program feltöltése a panelre',
        'Digitális és analóg I/O, és hogy valójában mit csinál a mikrovezérlő',
        'Időzítők, megszakítások és nem blokkoló kód a delay() helyett',
        'Soros kommunikáció: UART, I²C és SPI',
        'Adatlap olvasása és szenzor meghajtása belőle',
        'Beavatkozók meghajtása: hobbiszervók, DC-motorok, relék, és a hozzájuk tartozó meghajtók',
        'Objektumorientált alapok: osztályok, objektumok, és egy szenzor vagy motor újrahasznosítható osztállyá alakítása',
        'Állapotgépek és a kód modulokra bontása',
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
      en: 'From an idea to a board you can actually order. Every topic starts with the theory, then we build it in KiCad — working up to one complete development board with its microcontroller, sensors, actuators and analog and digital I/O. It is the same board the embedded software course runs on.',
      hu: 'Az ötlettől a ténylegesen megrendelhető panelig. Minden téma az elmélettel kezdődik, majd megépítjük KiCadben — így áll össze egy teljes fejlesztőpanel a mikrovezérlőjével, szenzoraival, beavatkozóival, valamint analóg és digitális I/O-jával. Ugyanaz a panel, amelyen a beágyazott szoftverfejlesztési kurzus fut.',
    },
    topics: {
      en: [
        'Installing KiCad, and finding your way around the tools',
        'Schematic capture, and what a good schematic makes obvious',
        'Choosing components: datasheets, footprints and availability',
        'Connectors and headers: bringing sensors, actuators and analog/digital I/O off the board',
        'PCB layout basics — stackup, routing and ground',
        'Design rules that match what your fab can actually build',
        'Manufacturing outputs: gerbers, drill files, BOM and pick-and-place',
        'The project: one complete development board, carried from blank sheet to ordered',
      ],
      hu: [
        'A KiCad telepítése és az eszközök megismerése',
        'Kapcsolási rajz készítése, és hogy mit tesz nyilvánvalóvá egy jó rajz',
        'Alkatrészválasztás: adatlapok, lábnyomok és beszerezhetőség',
        'Csatlakozók és tüskesorok: szenzorok, beavatkozók és analóg/digitális I/O kivezetése a panelről',
        'NYÁK-tervezés alapjai — rétegfelépítés, huzalozás és földelés',
        'Tervezési szabályok, amelyek illeszkednek a gyártó tényleges képességeihez',
        'Gyártási fájlok: Gerber, fúrásfájlok, anyagjegyzék és beültetési pozíciók',
        'A projekt: egy teljes fejlesztőpanel, az üres laptól a megrendelésig',
      ],
    },
  },
  {
    slug: 'control-systems-simulation-python',
    status: 'coming-soon',
    icon: 'ri:line-chart-line',
    title: {
      en: 'Control Systems and Simulation Basics in Python',
      hu: 'Szabályozástechnika és szimuláció alapjai Pythonban',
    },
    summary: {
      en: 'Model a real system, then control it — entirely in Python. Build the plant, close the loop, write a PID from scratch, and measure honestly how well it really does.',
      hu: 'Modellezz egy valódi rendszert, majd szabályozd — teljesen Pythonban. Felépítjük a szakaszt, bezárjuk a hurkot, megírjuk a PID-et a nulláról, és őszintén megmérjük, mennyire jól működik.',
    },
    topics: {
      en: [
        'Installing Python and the scientific stack, and running your first simulation',
        'What a dynamic system is, and writing one down as equations',
        'Simulating a plant: time steps, integration, and why the step size matters',
        'Open loop versus closed loop, and what feedback actually buys you',
        'PID from scratch: proportional, integral and derivative — and anti-windup',
        'Tuning, and reading a step response: rise time, overshoot and settling',
        'Making a simulation honest: sensor noise, quantisation and actuator limits',
        'Comparing P, PI and PID on the same plant, and plotting results that mean something',
      ],
      hu: [
        'A Python és a tudományos csomagok telepítése, és az első szimuláció futtatása',
        'Mi az a dinamikus rendszer, és hogyan írjuk fel egyenletekkel',
        'Szakasz szimulálása: időlépések, integrálás, és miért számít a lépésköz',
        'Nyílt és zárt hurok, és hogy valójában mit ad a visszacsatolás',
        'PID a nulláról: arányos, integráló és differenciáló tag — és az anti-windup',
        'Hangolás és az ugrásválasz olvasása: felfutási idő, túllövés és beállási idő',
        'A szimuláció őszintévé tétele: szenzorzaj, kvantálás és beavatkozói korlátok',
        'P, PI és PID összehasonlítása ugyanazon a szakaszon, és értelmes ábrák készítése',
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
      en: 'Programming six-axis industrial robots in simulation, long before they touch real hardware — motion, frames, I/O handshakes, camera vision, and a full workcell you build yourself.',
      hu: 'Hattengelyes ipari robotok programozása szimulációban, jóval azelőtt, hogy valódi hardverhez érnének — mozgás, koordinátarendszerek, I/O-kézfogások, gépi látás és egy teljes gyártócella, amelyet magad építesz fel.',
    },
    topics: {
      en: [
        'Installing RoboGuide, and setting up your first cell',
        'Building a workcell: robot, tooling, fixtures and part flow',
        'Joint, linear and circular motion — and when each is the right one',
        'Tool and user frames, and why a wrong frame breaks everything downstream',
        'Digital I/O and handshaking between the robot and a machine',
        'Pick and place, and palletizing with position registers',
        'Camera basics: how machine vision works, and adding a simulated camera in RoboGuide',
        'Putting vision to work: obstacle detection, and counting what the camera finds',
        'Collision-free paths and checking the cycle time you actually get',
      ],
      hu: [
        'A RoboGuide telepítése és az első cella létrehozása',
        'Gyártócella felépítése: robot, szerszámozás, készülékek és anyagáramlás',
        'Csuklós, lineáris és köríves mozgás — és hogy mikor melyik a helyes',
        'Szerszám- és felhasználói koordinátarendszerek, és miért borul fel tőlük minden',
        'Digitális I/O és kézfogás a robot és a gép között',
        'Felvétel-lerakás és palettázás pozícióregiszterekkel',
        'Kameraalapok: hogyan működik a gépi látás, és szimulált kamera beállítása RoboGuide-ban',
        'A látás gyakorlatban: akadályérzékelés és a kamera által észlelt akadályok számlálása',
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
      en: 'Ladder logic on a Siemens S7-1500, driven against a 3D plant in Factory I/O. Start in the simulator, wire the two together, then spend most of the course building and debugging real processes — no hardware required.',
      hu: 'Létradiagram Siemens S7-1500-on, 3D-s üzemmodellel hajtva a Factory I/O-ban. A szimulátorban kezdünk, összekötjük a kettőt, majd a kurzus nagyobb részében valódi folyamatokat építünk és keresünk bennük hibát — hardver nélkül.',
    },
    topics: {
      en: [
        'Installing TIA Portal and Factory I/O, and getting both running',
        'Factory I/O basics: building a scene, and its sensors, actuators and tags',
        'TIA Portal basics: setting up a project, an S7-1500 CPU, and PLCSIM',
        'The scan cycle, and how it shapes the way you write logic',
        'Connecting TIA Portal to Factory I/O, and getting the I/O mapping right',
        'Ladder logic: contacts, coils, timers and counters',
        'Structuring a process as a state machine — start, stop, reset and emergency stop',
        'Plenty of practice: complete processes built and debugged end to end in simulation',
      ],
      hu: [
        'A TIA Portal és a Factory I/O telepítése, és mindkettő beüzemelése',
        'Factory I/O alapok: jelenet felépítése, annak érzékelői, beavatkozói és jelei',
        'TIA Portal alapok: projekt létrehozása, S7-1500-as CPU és a PLCSIM',
        'A ciklusidő, és hogyan alakítja a logikaírás módját',
        'A TIA Portal és a Factory I/O összekötése, és a helyes I/O-hozzárendelés',
        'Létradiagram: érintkezők, tekercsek, időzítők és számlálók',
        'Folyamat felépítése állapotgépként — indítás, leállítás, alaphelyzet és vészleállítás',
        'Rengeteg gyakorlás: teljes folyamatok felépítése és hibakeresése végig szimulációban',
      ],
    },
  },
];
