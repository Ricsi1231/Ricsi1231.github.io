import type { Localized } from '../i18n/types';

/**
 * A course is either published (with a `url` to enrol) or still being written.
 * Keeping the status explicit means the card renders the right call to action
 * rather than inferring it from whether a link happens to be set.
 */
export type CourseStatus = 'coming-soon' | 'available';

/**
 * Basics courses assume nothing and start from installation. Advanced ones
 * continue where the matching basics course ends, so the page groups them and
 * states the prerequisite once per group rather than on every card.
 */
export type CourseLevel = 'basics' | 'advanced';

export interface Course {
  /** Stable identifier, also used as the React-style key when rendering. */
  slug: string;
  status: CourseStatus;
  level: CourseLevel;
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
    level: 'basics',
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
    level: 'basics',
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
    level: 'basics',
    icon: 'ri:line-chart-line',
    title: {
      en: 'Control Systems and Simulation Basics in Python',
      hu: 'Szabályozástechnika és szimuláció alapjai Pythonban',
    },
    summary: {
      en: 'Model a real system, then control it — entirely in Python. Build the plant, close the loop, write a PID from scratch, and pick up the theory along the way — stability, frequency response, filtering — that explains why it behaves the way it does.',
      hu: 'Modellezz egy valódi rendszert, majd szabályozd — teljesen Pythonban. Felépítjük a szakaszt, bezárjuk a hurkot, megírjuk a PID-et a nulláról, és közben megtanuljuk azt az elméletet — stabilitás, frekvenciamenet, szűrés —, amely megmagyarázza, miért viselkedik úgy, ahogy.',
    },
    topics: {
      en: [
        'Installing Python and the scientific stack, and running your first simulation',
        'What a dynamic system is, and writing one down as equations',
        'Transfer functions and block diagrams: from a differential equation to G(s), and combining blocks into a loop',
        'Simulating a plant: time steps, integration, and why the step size matters',
        'Open loop versus closed loop, and what feedback actually buys you',
        'Poles, damping and stability — why a system oscillates, and what tuning actually changes',
        'The frequency domain: Bode plots, gain and phase margin, and what they predict',
        'System identification: fitting a model to a measured step response',
        'PID from scratch: proportional, integral and derivative — and anti-windup',
        'Steady-state error and system type: why P alone leaves an offset and I removes it',
        'Tuning, and reading a step response: rise time, overshoot and settling',
        'Feedforward: correcting a disturbance before the error appears',
        'Making a simulation honest: sensor noise, quantisation and actuator limits',
        'Filters: low-pass, high-pass, and taming a noisy measurement',
        'Discrete time: sample rate, PID as a difference equation, and what changes on real hardware',
        'Comparing P, PI and PID on the same plant, and plotting results that mean something',
      ],
      hu: [
        'A Python és a tudományos csomagok telepítése, és az első szimuláció futtatása',
        'Mi az a dinamikus rendszer, és hogyan írjuk fel egyenletekkel',
        'Átviteli függvények és blokkvázlatok: a differenciálegyenlettől a G(s)-ig, és a blokkok hurokká fűzése',
        'Szakasz szimulálása: időlépések, integrálás, és miért számít a lépésköz',
        'Nyílt és zárt hurok, és hogy valójában mit ad a visszacsatolás',
        'Pólusok, csillapítás és stabilitás — miért leng be egy rendszer, és mit változtat valójában a hangolás',
        'A frekvenciatartomány: Bode-diagramok, erősítési és fázistartalék, és mit jósolnak meg',
        'Rendszeridentifikáció: modell illesztése mért ugrásválaszra',
        'PID a nulláról: arányos, integráló és differenciáló tag — és az anti-windup',
        'Maradó hiba és rendszertípus: miért marad eltérés csak P-vel, és miért szünteti meg az I',
        'Hangolás és az ugrásválasz olvasása: felfutási idő, túllövés és beállási idő',
        'Előrecsatolás: a zavarás korrigálása még mielőtt hiba keletkezne',
        'A szimuláció őszintévé tétele: szenzorzaj, kvantálás és beavatkozói korlátok',
        'Szűrők: aluláteresztő, felüláteresztő, és a zajos mérés megszelídítése',
        'Diszkrét idő: mintavételi frekvencia, a PID differenciaegyenletként, és mi változik valódi hardveren',
        'P, PI és PID összehasonlítása ugyanazon a szakaszon, és értelmes ábrák készítése',
      ],
    },
  },
  {
    slug: 'fanuc-roboguide-basics',
    status: 'coming-soon',
    level: 'basics',
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
    level: 'basics',
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
  {
    slug: 'embedded-advanced-esp-idf',
    status: 'coming-soon',
    level: 'advanced',
    icon: 'ri:cpu-line',
    title: {
      en: 'Advanced Embedded Software Development with ESP-IDF and FreeRTOS',
      hu: 'Haladó beágyazott szoftverfejlesztés ESP-IDF-fel és FreeRTOS-szal',
    },
    summary: {
      en: 'Off Arduino and onto a real toolchain — modern C++ on ESP-IDF, FreeRTOS tasks, wired and wireless protocols, and the architecture and version control that keep a growing codebase under control.',
      hu: 'Túl az Arduinón, valódi eszközláncon — modern C++ ESP-IDF-en, FreeRTOS taszkok, vezetékes és vezeték nélküli protokollok, valamint az az architektúra és verziókövetés, ami kordában tartja a növekvő kódbázist.',
    },
    topics: {
      en: [
        'Setting up ESP-IDF, and what a real toolchain gives you over the Arduino IDE',
        'Modern C++ on a microcontroller: classes, RAII, and what to avoid',
        'Architecture: interfaces, dependency injection, and code you can actually test',
        'FreeRTOS: tasks, priorities, queues and semaphores',
        'Sharing data safely between tasks, and the bugs that appear when you do not',
        'Wired protocols: UART, I²C, SPI and RS485',
        'Networking: WiFi, Ethernet, TCP/IP and MQTT',
        'Git in practice: branches, history, and working with other people',
      ],
      hu: [
        'Az ESP-IDF beállítása, és hogy mit ad egy valódi eszközlánc az Arduino IDE-hez képest',
        'Modern C++ mikrovezérlőn: osztályok, RAII, és amit kerülni érdemes',
        'Architektúra: interfészek, függőséginjektálás, és valóban tesztelhető kód',
        'FreeRTOS: taszkok, prioritások, üzenetsorok és szemaforok',
        'Adatok biztonságos megosztása taszkok között, és a hibák, amelyek enélkül jelentkeznek',
        'Vezetékes protokollok: UART, I²C, SPI és RS485',
        'Hálózatkezelés: WiFi, Ethernet, TCP/IP és MQTT',
        'Git a gyakorlatban: branchek, előzmények, és közös munka másokkal',
      ],
    },
  },
  {
    slug: 'hardware-advanced-mixed-signal',
    status: 'coming-soon',
    level: 'advanced',
    icon: 'ri:stack-line',
    title: {
      en: 'Advanced Hardware Design: Mixed-Signal Boards',
      hu: 'Haladó hardvertervezés: vegyes jelű panelek',
    },
    summary: {
      en: 'A board where analog and digital have to share the same copper — power integrity, grounding, analog front-ends, and the layout decisions that determine whether the quiet signals stay quiet.',
      hu: 'Olyan panel, ahol az analóg és a digitális ugyanazon a rézen osztozik — tápintegritás, földelés, analóg bemeneti fokozatok, és azok a huzalozási döntések, amelyeken múlik, hogy a halk jelek halkak maradnak-e.',
    },
    topics: {
      en: [
        'Multilayer stackups, and choosing one for a mixed-signal board',
        'Power integrity: regulators, decoupling, and where the return current flows',
        'Grounding: planes, splits, and the myths worth unlearning',
        'Analog front-ends: op-amps, filters, and driving an ADC properly',
        'Noise, crosstalk and EMC — finding them before the lab does',
        'High-speed routing: impedance, length matching and differential pairs',
        'Design for manufacture: fine pitch, tolerances, and what your fab charges extra for',
        'Bring-up: testing a board you have never powered before',
      ],
      hu: [
        'Többrétegű rétegfelépítések, és a megfelelő kiválasztása vegyes jelű panelhez',
        'Tápintegritás: stabilizátorok, hidegítés, és hogy merre folyik a visszatérő áram',
        'Földelés: síkok, felosztások, és a tévhitek, amelyeket el kell felejteni',
        'Analóg bemeneti fokozatok: műveleti erősítők, szűrők, és az ADC helyes meghajtása',
        'Zaj, áthallás és EMC — megtalálni őket, mielőtt a labor teszi meg',
        'Nagy sebességű huzalozás: impedancia, hosszillesztés és differenciális párok',
        'Gyárthatóságra tervezés: finom raszter, tűrések, és amiért a gyártó felárat kér',
        'Beüzemelés: olyan panel tesztelése, amelyet még sosem kapcsoltál be',
      ],
    },
  },
  {
    slug: 'control-advanced-state-space-fuzzy',
    status: 'coming-soon',
    level: 'advanced',
    icon: 'ri:function-line',
    title: {
      en: 'Advanced Control Systems in Python: Classical, State Space and Fuzzy',
      hu: 'Haladó szabályozástechnika Pythonban: klasszikus, állapottér és fuzzy',
    },
    summary: {
      en: 'Beyond a single PID loop — first the classical analysis the basics course deliberately skipped, then state space with observers and optimal control, and finally fuzzy controllers for the cases where the rules are easier to write than the maths.',
      hu: 'Túl az egyetlen PID-hurkon — előbb az a klasszikus analízis, amelyet az alapkurzus szándékosan kihagyott, majd állapottér megfigyelőkkel és optimális szabályozással, végül fuzzy szabályozók azokra az esetekre, ahol a szabályokat könnyebb leírni, mint a matematikát.',
    },
    topics: {
      en: [
        'The Laplace transform by hand: where transfer functions actually come from',
        'Root locus: how the closed-loop poles move as you turn the gain up',
        'Nyquist: stability and margins read off the open-loop frequency response',
        'State space: describing a system with matrices instead of one transfer function',
        'Controllability and observability — what the state-space model tells you before you design',
        'State feedback and pole placement',
        'Observers: estimating the states you cannot measure',
        'LQR: letting a cost function do the tuning for you',
        'Fuzzy control: membership functions, rule bases and defuzzification',
        'Building a Mamdani controller, and tuning it by rewriting rules',
        'Comparing PID, state feedback and fuzzy honestly on the same plant',
      ],
      hu: [
        'A Laplace-transzformáció kézzel: honnan származnak valójában az átviteli függvények',
        'Gyökhelygörbe: hogyan mozognak a zárt hurkú pólusok a körerősítés növelésével',
        'Nyquist: stabilitás és tartalékok a felnyitott hurok frekvenciamenetéből',
        'Állapottér: rendszer leírása mátrixokkal egyetlen átviteli függvény helyett',
        'Irányíthatóság és megfigyelhetőség — mit árul el az állapottér-modell a tervezés előtt',
        'Állapot-visszacsatolás és pólusáthelyezés',
        'Megfigyelők: a nem mérhető állapotok becslése',
        'LQR: bízzuk a hangolást egy költségfüggvényre',
        'Fuzzy szabályozás: tagsági függvények, szabálybázis és defuzzifikáció',
        'Mamdani-szabályozó építése, és hangolása a szabályok átírásával',
        'PID, állapot-visszacsatolás és fuzzy őszinte összehasonlítása ugyanazon a szakaszon',
      ],
    },
  },
];
