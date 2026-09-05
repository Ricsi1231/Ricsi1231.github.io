import { CATEGORIES, type CategoryId } from './categories';
import type { Localized } from '../i18n/types';

export interface ProjectLink {
  label: Localized<string>;
  url: string;
  icon?: string; // optional Iconify name from the RemixIcon (ri) set
}

export interface Project {
  /** URL segment -> /projects/<slug>/ (shared by both languages). */
  slug: string;
  /** Tabs this project appears under. A project may legitimately span two. */
  categories: CategoryId[];
  title: Localized<string>;
  /** Short one-liner shown on the gallery card. */
  summary: Localized<string>;
  /** Full copy on the detail page; may contain <br>, rendered as trusted static HTML. */
  description: Localized<string>;
  /** Iconify (ri) name for the card badge (also used as the card cover when no image is set). */
  icon?: string;
  /** Card thumbnail image (served from public/). Falls back to the icon when omitted. */
  cover?: string;
  links: ProjectLink[];
  /** Gallery images on the detail page (served from public/). Optional. */
  images?: string[];
}

/** Link labels that recur across projects, so they are translated in one place. */
const GITHUB_LABEL: Localized<string> = { en: 'GitHub', hu: 'GitHub' };

export const projects: Project[] = [
  {
    slug: 'ros2-autonomous-navigation',
    categories: ['robotics'],
    title: {
      en: 'Autonomous Mobile Robot Navigation in ROS 2',
      hu: 'Autonóm mobilrobot-navigáció ROS 2-ben',
    },
    summary: {
      en: 'My completed final thesis: autonomous path planning for a mobile robot in ROS 2 and Gazebo.',
      hu: 'A lezárt szakdolgozatom: autonóm útvonaltervezés mobilrobothoz ROS 2-ben és Gazebóban.',
    },
    description: {
      en: `My completed final-year thesis project. It implements autonomous path planning for a mobile robot in a ROS 2 (Jazzy) and Gazebo simulation environment. <br>
      The robot plans across a 2D occupancy grid that is built dynamically from sensor data, where cells can flip between free and occupied at runtime. The design is split in two: a dependency-free, pure-Python Core library of classic search algorithms — A*, Dijkstra, BFS, and DFS behind one common interface — and a ROS 2 integration layer built around it. The weighted planners (A* and Dijkstra) honour a per-cell gradient costmap and disallow corner-cutting, so paths stay realistic for a robot with physical width. <br>
      A clean adapter layer converts between ROS nav_msgs (OccupancyGrid ↔ Path) and the Core data structures, keeping Core pure and unit-tested. Correctness is validated with unit tests, ROS-free line / C-obstacle / maze scenarios, and behavioural checks in Gazebo. <br>
      The GitHub repositories below hold the finished thesis version, public and complete; I am carrying the work further beyond the thesis scope on GitLab.`,
      hu: `A lezárt záróéves szakdolgozati projektem. Autonóm útvonaltervezést valósít meg egy mobilrobothoz ROS 2 (Jazzy) és Gazebo szimulációs környezetben. <br>
      A robot egy 2D-s foglaltsági rácson (occupancy grid) tervez, amely a szenzoradatokból dinamikusan épül fel, és amelyben a cellák futásidőben válthatnak szabad és foglalt állapot között. A felépítés két részre oszlik: egy függőségmentes, tiszta Python Core könyvtárra, amely a klasszikus keresőalgoritmusokat — A*, Dijkstra, BFS és DFS — egyetlen közös interfész mögött fogja össze, valamint az erre épülő ROS 2 integrációs rétegre. A súlyozott tervezők (A* és Dijkstra) figyelembe veszik a cellánkénti gradiens költségtérképet, és nem engedik a sarkok levágását, így az útvonalak valósághűek maradnak egy fizikai kiterjedéssel rendelkező robot számára. <br>
      Egy letisztult adapterréteg végzi az átalakítást a ROS nav_msgs üzenetek (OccupancyGrid ↔ Path) és a Core adatszerkezetei között, így a Core tiszta és egységtesztelt marad. A helyességet egységtesztek, ROS-mentes egyenes / C-akadály / labirintus forgatókönyvek, valamint Gazebóban végzett viselkedési ellenőrzések igazolják. <br>
      A lenti GitHub-tárolókban a szakdolgozat kész, lezárt változata érhető el bárki számára; a szakdolgozat keretein túli továbbfejlesztést GitLabon folytatom.`,
    },
    icon: 'ri:route-line',
    cover: '/images/ros2-search.png',
    links: [
      {
        label: { en: 'Core Library', hu: 'Core könyvtár' },
        url: 'https://github.com/Ricsi1231/Robot-Pathfinding-Core',
        icon: 'ri:github-fill',
      },
      {
        label: { en: 'ROS 2 Simulation', hu: 'ROS 2 szimuláció' },
        url: 'https://github.com/Ricsi1231/Robot-Pathfinding-ROS2-Simulation',
        icon: 'ri:github-fill',
      },
    ],
    images: ['/images/ros2-navigation-planing.png', '/images/ros2-search.png'],
  },
  {
    slug: 'wro-future-engineers-2026',
    categories: ['robotics', 'embedded-hardware'],
    title: {
      en: 'WRO Future Engineers 2026 — Autonomous Vehicle',
      hu: 'WRO Future Engineers 2026 — autonóm jármű',
    },
    summary: {
      en: 'Project lead for a self-driving robot built for the World Robot Olympiad Future Engineers 2026 competition.',
      hu: 'Projektvezetőként egy önvezető robot a World Robot Olympiad Future Engineers 2026 versenyre.',
    },
    description: {
      en: `An autonomous vehicle built with Team Traktoristak for the World Robot Olympiad (WRO) Future Engineers 2026 category. I led the project — developing the software and hardware, and leading the mechanical design. <br>
      The robot navigates the competition track and avoids obstacles fully autonomously using computer vision, distance sensing, and custom control software. It runs on a Raspberry Pi 3 with a regulated 5 V power system, ultrasonic distance sensors, IR reflectance sensors, a CSI camera, and an L298N motor driver for drivetrain and steering. <br>
      The Python control software combines camera-based color detection, distance sensing, race-state logic, PID utilities, and modular hardware drivers. The engineering is split into dedicated repositories — hardware (KiCad schematics and wiring), software (robot runtime, calibration, and deployment), and mechanical (3D-printable design files).`,
      hu: `Autonóm jármű, amelyet a Traktoristák csapattal építettünk a World Robot Olympiad (WRO) Future Engineers 2026 kategóriájára. Én vezettem a projektet — fejlesztettem a szoftvert és a hardvert, valamint irányítottam a mechanikai tervezést. <br>
      A robot teljesen autonóm módon navigál a versenypályán és kerüli ki az akadályokat számítógépes látás, távolságérzékelés és egyedi vezérlőszoftver segítségével. Raspberry Pi 3-on fut, stabilizált 5 V-os tápellátással, ultrahangos távolságérzékelőkkel, IR reflexiós szenzorokkal, CSI kamerával, valamint L298N motorvezérlővel a hajtáslánchoz és a kormányzáshoz. <br>
      A Python vezérlőszoftver kamerán alapuló színfelismerést, távolságérzékelést, versenyállapot-logikát, PID-segédmodulokat és moduláris hardverillesztőket egyesít. A mérnöki munka külön tárolókra oszlik — hardver (KiCad kapcsolási rajzok és huzalozás), szoftver (robot futtatókörnyezet, kalibráció és telepítés) és mechanika (3D-nyomtatható tervfájlok).`,
    },
    icon: 'ri:car-line',
    cover: '/images/wro-robot-prototype.jpg',
    links: [
      {
        label: { en: 'Main Repository', hu: 'Fő tároló' },
        url: 'https://github.com/Ricsi1231/WRO-Robot',
        icon: 'ri:github-fill',
      },
      {
        label: { en: 'Software', hu: 'Szoftver' },
        url: 'https://github.com/Ricsi1231/WRO-Robot-Software',
        icon: 'ri:github-fill',
      },
      {
        label: { en: 'Hardware', hu: 'Hardver' },
        url: 'https://github.com/Ricsi1231/WRO-Robot-Hardware',
        icon: 'ri:github-fill',
      },
      {
        label: { en: 'Mechanical', hu: 'Mechanika' },
        url: 'https://github.com/Ricsi1231/WRO-Robot-Mechanical',
        icon: 'ri:github-fill',
      },
    ],
    images: ['/images/wro-robot-prototype.jpg', '/images/wro-robot-3d.png'],
  },
  {
    slug: 'apple-juice-process-system',
    categories: ['industrial-automation'],
    title: {
      en: 'Industrial Apple Juice Processing System',
      hu: 'Ipari almalé-feldolgozó rendszer',
    },
    summary: {
      en: 'A fully automated three-tank apple-juice production line, controlled by a Siemens S7-1200 PLC.',
      hu: 'Teljesen automatizált, háromtartályos almalégyártó sor, Siemens S7-1200 PLC vezérlésével.',
    },
    description: {
      en: `Design and implementation of an automated industrial process that produces apple juice. <br>
      The system is built around three cooperating tanks: one stores water, one stores the apple concentrate, and the third is where the two are mixed into the finished juice. A full production cycle runs automatically — tank filling, recipe-based dosing, mixing (water first, then apple), and a bottling stage with a conveyor, a capacitive bottle sensor, and a bottle counter. <br>
      The control logic runs on a Siemens S7-1200 PLC programmed in TIA Portal, organised as a state machine with start/stop handling and an emergency-stop (E-stop) safety path. The solution was developed in two stages: first modelled and validated as a 3D Factory I/O simulation, then deployed on real Siemens + SMC pneumatic hardware driven from a SCADA operator interface.`,
      hu: `Egy almalevet előállító, automatizált ipari folyamat tervezése és megvalósítása. <br>
      A rendszer három együttműködő tartályra épül: az egyik a vizet, a másik az almasűrítményt tárolja, a harmadikban pedig a kettőt keverik össze a kész lévé. A teljes gyártási ciklus automatikusan fut le — tartályfeltöltés, recept alapú adagolás, keverés (először víz, majd alma), végül palackozási szakasz szállítószalaggal, kapacitív palackérzékelővel és palackszámlálóval. <br>
      A vezérlési logika egy TIA Portalban programozott Siemens S7-1200 PLC-n fut, állapotgépként felépítve, indítás/leállítás kezeléssel és vészleállító (E-stop) biztonsági ággal. A megoldás két lépésben készült: először 3D-s Factory I/O szimulációként modelleztük és validáltuk, majd valós Siemens + SMC pneumatikus hardveren üzemeltettük, SCADA kezelőfelületről vezérelve.`,
    },
    icon: 'ri:goblet-line',
    cover: '/images/IPC-200.png',
    links: [
      {
        label: { en: 'Real Hardware Code', hu: 'Valós hardver kódja' },
        url: 'https://github.com/Ricsi1231/Apple-Juice-Process-System',
        icon: 'ri:github-fill',
      },
      {
        label: { en: 'Simulation (Factory I/O)', hu: 'Szimuláció (Factory I/O)' },
        url: 'https://github.com/Ricsi1231/Apple-Juice-Process-System-Simulation',
        icon: 'ri:github-fill',
      },
    ],
    images: ['/images/IPC-200.png', '/images/factory-io.png'],
  },
  {
    slug: 'industrial-robotic-workcell-simulation',
    categories: ['robotics', 'industrial-automation'],
    title: {
      en: 'Industrial Robotic CNC Workcell Simulation',
      hu: 'Ipari robotcellás CNC-szimuláció',
    },
    summary: {
      en: 'A FANUC RoboGuide simulation of a dual-robot CNC tending and palletizing workcell.',
      hu: 'FANUC RoboGuide-szimuláció egy kétrobotos CNC-kiszolgáló és palettázó gyártócelláról.',
    },
    description: {
      en: `A FANUC RoboGuide simulation of a fully automated CNC machining workcell built from two coordinated industrial robots, conveyors, and a palletizing station. <br>
      Robot 1 tends the CNC machine — it picks raw parts from the input conveyor, loads the machine, waits for the machining cycle (with door open/close and handshake logic), then unloads the finished part onto the output conveyor. Robot 2 then picks the finished parts and places them into a 3×3 palletizing station. A full production run processes nine parts through the complete flow: input conveyor → Robot 1 → CNC machine → Robot 1 → output conveyor → Robot 2 → 3×3 pallet. <br>
      Acting as a digital twin of a real industrial workcell, the project validates coordinated dual-robot operation, collision-free motion paths, load/unload cycle timing, and structured palletizing logic within a safety-fenced layout.`,
      hu: `FANUC RoboGuide-szimuláció egy teljesen automatizált CNC-megmunkáló gyártócelláról, amely két összehangolt ipari robotból, szállítószalagokból és egy palettázó állomásból áll. <br>
      Az 1. robot szolgálja ki a CNC-gépet — felveszi a nyers munkadarabokat a bemeneti szállítószalagról, betölti a gépbe, megvárja a megmunkálási ciklust (ajtónyitás/-zárás és kézfogás-logika mellett), majd a kész darabot a kimeneti szalagra helyezi. Ezután a 2. robot felveszi a kész darabokat, és egy 3×3-as palettázó állomásra pakolja őket. Egy teljes gyártási futás kilenc darabot visz végig a teljes folyamaton: bemeneti szalag → 1. robot → CNC-gép → 1. robot → kimeneti szalag → 2. robot → 3×3-as paletta. <br>
      Egy valós ipari gyártócella digitális ikreként a projekt validálja az összehangolt kétrobotos működést, az ütközésmentes mozgáspályákat, a be- és kirakodási ciklusidőket, valamint a strukturált palettázási logikát egy biztonsági kerítéssel határolt elrendezésben.`,
    },
    icon: 'ri:robot-2-line',
    cover: '/images/robotic-workcell.png',
    links: [
      {
        label: GITHUB_LABEL,
        url: 'https://github.com/Ricsi1231/Industrial-Robotic-Workcell-Simulation',
        icon: 'ri:github-fill',
      },
    ],
    images: ['/images/robotic-workcell.png', '/images/robotic-workcell-state-machine.png'],
  },
  {
    slug: 'dc-motor-controller',
    categories: ['embedded-hardware', 'control-simulation'],
    title: {
      en: 'DC Motor Position Control System',
      hu: 'Egyenáramú motor pozíciószabályozó rendszer',
    },
    summary: {
      en: 'A real-time closed-loop DC motor position controller — custom ESP32-S3 PCB, PID firmware, LabVIEW HMI, and a Python fuzzy-vs-PID simulation.',
      hu: 'Valós idejű, zárt hurkú DC-motor pozíciószabályozó — egyedi ESP32-S3 NYÁK, PID-firmware, LabVIEW HMI és Python fuzzy–PID összehasonlító szimuláció.',
    },
    description: {
      en: `An end-to-end system for precise real-time DC motor position control, built across four layers: <br>
      <strong>Hardware</strong> — a custom ESP32-S3 based PCB designed in Altium Designer (16 schematic sheets): a DRV8876 H-bridge motor driver, buck + LDO power stage, quadrature encoder input, temperature and voltage sensing, micro-USB and RS485 interfaces, and an RGB status LED. Fabrication-ready manufacturing outputs are included. <br>
      <strong>Firmware</strong> — ESP32-S3 firmware in C++ (ESP-IDF, FreeRTOS) with a discrete-time PID position controller (anti-windup), motion profiling (trapezoid and S-curve), stall/settle detection and soft limits, quadrature encoder reading through the ESP32 PCNT peripheral, and USB CDC communication via TinyUSB — all on a modular, interface-based architecture. <br>
      <strong>LabVIEW HMI</strong> — a LabVIEW SCADA interface (VISA over USB/serial) for real-time position plotting, live PID tuning, 3D visualization, and status/fault monitoring. <br>
      <strong>Simulation</strong> — a Python model comparing Fuzzy Logic and PID position control, with realistic motor physics (electrical + mechanical dynamics and back-EMF), simulated encoder quantization and measurement noise, and visualization of membership functions and 3D control surfaces.`,
      hu: `Végponttól végpontig terjedő rendszer egyenáramú motor precíz, valós idejű pozíciószabályozására, négy rétegben felépítve: <br>
      <strong>Hardver</strong> — egyedi, ESP32-S3 alapú NYÁK Altium Designerben tervezve (16 kapcsolásirajz-lap): DRV8876 H-hidas motorvezérlő, buck + LDO tápfokozat, kvadratúra enkóder bemenet, hőmérséklet- és feszültségmérés, micro-USB és RS485 interfészek, valamint RGB állapotjelző LED. A gyártásra kész gyártási fájlok is mellékelve vannak. <br>
      <strong>Firmware</strong> — ESP32-S3 firmware C++ nyelven (ESP-IDF, FreeRTOS), diszkrét idejű PID pozíciószabályozóval (anti-windup), mozgásprofilozással (trapéz és S-görbe), megakadás- és beállásérzékeléssel, szoftveres végállásokkal, kvadratúra enkóder olvasásával az ESP32 PCNT perifériáján keresztül, valamint USB CDC kommunikációval TinyUSB-n át — mindezt moduláris, interfész alapú architektúrában. <br>
      <strong>LabVIEW HMI</strong> — LabVIEW SCADA felület (VISA USB/soros porton) valós idejű pozíciógrafikonhoz, élő PID-hangoláshoz, 3D-s megjelenítéshez, valamint állapot- és hibafelügyelethez. <br>
      <strong>Szimuláció</strong> — Python modell, amely a fuzzy logikás és a PID pozíciószabályozást hasonlítja össze, valósághű motorfizikával (elektromos és mechanikai dinamika, valamint back-EMF), szimulált enkóder-kvantálással és mérési zajjal, továbbá a tagsági függvények és a 3D-s szabályozófelületek megjelenítésével.`,
    },
    icon: 'ri:cpu-line',
    cover: '/images/dc-motor-controller-pcb.png',
    links: [
      {
        label: { en: 'Hardware (PCB)', hu: 'Hardver (NYÁK)' },
        url: 'https://github.com/Ricsi1231/DC-Motor-Controller-Hardware',
        icon: 'ri:github-fill',
      },
      {
        label: { en: 'Firmware', hu: 'Firmware' },
        url: 'https://github.com/Ricsi1231/DC-Motor-Controller-Firmware',
        icon: 'ri:github-fill',
      },
      {
        label: { en: 'LabVIEW HMI', hu: 'LabVIEW HMI' },
        url: 'https://github.com/Ricsi1231/DC-Motor-Controller-SCADA',
        icon: 'ri:github-fill',
      },
      {
        label: { en: 'Simulation', hu: 'Szimuláció' },
        url: 'https://github.com/Ricsi1231/DC-Motor-Postion-Control-Fuzzy-Simulation',
        icon: 'ri:github-fill',
      },
      {
        label: { en: 'All repositories', hu: 'Összes tároló' },
        url: 'https://github.com/Ricsi1231/DC-Motor-Controller',
        icon: 'ri:github-fill',
      },
    ],
    images: [
      '/images/dc-motor-controller-pcb.png',
      '/images/dc-motor-controller-pid-output.png',
      '/images/dc-motor-controller-fuzzy-output.png',
      '/images/dc-motor-controller-labview-interface.png',
    ],
  },
  {
    slug: 'bldc-motor-controller',
    categories: ['embedded-hardware'],
    title: {
      en: 'EmbedCore BLDC Motor Controller',
      hu: 'EmbedCore BLDC motorvezérlő',
    },
    summary: {
      en: 'A 100 A brushless motor controller on a 67 × 76.5 mm HDI board, built for autonomous mobile robot wheel actuators.',
      hu: '100 A-es kefe nélküli motorvezérlő 67 × 76,5 mm-es HDI panelen, autonóm mobilrobotok kerékhajtásaihoz.',
    },
    description: {
      en: `A high-power brushless (BLDC) motor controller designed around an STM32G474, intended to sit inside the wheel actuators of an autonomous mobile robot while staying general enough for other high-current drives. <br>
      The board takes a 12–44 V input and delivers up to 100 A peak phase current, switching at 15–60 kHz with a 15–30 kHz control loop. Two onboard 14-bit magnetic encoders provide closed-loop position feedback, and the controller talks over 5 Mbps CAN-FD as well as RS485, with a dedicated 12 V fan channel for cooling. The whole design fits in 67 × 76.5 mm. <br>
      The hardware is a KiCad HDI design carried through to production: a full PDF schematic and PCB documentation, gate-resistor and power-stage calculations, and a complete manufacturing package — Gerbers, drill files, bill of materials, and component positions for assembly. The firmware lives in its own repository, developed separately on GitLab. Released under Apache 2.0.`,
      hu: `Nagy teljesítményű, kefe nélküli (BLDC) motorvezérlő STM32G474 köré tervezve, amely egy autonóm mobilrobot kerékhajtásaiba épül be, de eléggé általános ahhoz, hogy más nagy áramú hajtásokban is használható legyen. <br>
      A panel 12–44 V bemenetről fázisonként akár 100 A csúcsáramot ad le, 15–60 kHz-es kapcsolási frekvenciával és 15–30 kHz-es szabályozási ciklussal. Két fedélzeti 14 bites mágneses enkóder biztosítja a zárt hurkú pozíció-visszacsatolást, a kommunikáció 5 Mbps CAN-FD-n és RS485-ön keresztül történik, a hűtést pedig külön 12 V-os ventilátorcsatorna segíti. A teljes kialakítás 67 × 76,5 mm-en elfér. <br>
      A hardver KiCadben készült HDI-terv, gyártásig víve: teljes PDF kapcsolási rajz és NYÁK-dokumentáció, gate-ellenállás- és teljesítményfokozat-számítások, valamint komplett gyártási csomag — Gerber- és fúrásfájlok, anyagjegyzék és alkatrész-pozíciók a beültetéshez. A firmware külön tárolóban, GitLabon készül. Apache 2.0 licenc alatt jelent meg.`,
    },
    icon: 'ri:dashboard-3-line',
    cover: '/images/bldc-controller-top.png',
    links: [
      {
        label: { en: 'Hardware (PCB)', hu: 'Hardver (NYÁK)' },
        url: 'https://github.com/Ricsi1231/BLDC-motor-controller-Hardware---HDI-Desing',
        icon: 'ri:github-fill',
      },
    ],
    images: ['/images/bldc-controller-top.png', '/images/bldc-controller-bottom.png'],
  },
  {
    slug: 'cartpole-fuzzy-control',
    categories: ['control-simulation'],
    title: {
      en: 'CartPole Fuzzy Control System',
      hu: 'CartPole fuzzy szabályozórendszer',
    },
    summary: {
      en: 'A Mamdani fuzzy-logic controller that balances the classic CartPole with continuous force control.',
      hu: 'Mamdani-típusú fuzzy szabályozó, amely folytonos erőszabályozással egyensúlyozza a klasszikus CartPole-t.',
    },
    description: {
      en: `A Mamdani-type fuzzy logic control system that balances the classic CartPole problem using continuous force control instead of the usual discrete left/right actions. <br>
      The controller reasons over four inputs — pole angle, angular velocity, cart position, and cart velocity — and applies a continuous force through 24 fuzzy rules, combining pole-angle stabilization with drift correction via an integral term. <br>
      It is built in Python on a custom continuous CartPole environment (Gymnasium classic-control) using scikit-fuzzy, with visualization of the membership functions and 3D control surfaces.`,
      hu: `Mamdani-típusú fuzzy logikai szabályozórendszer, amely a klasszikus CartPole-feladatot folytonos erőszabályozással oldja meg a szokásos diszkrét bal/jobb beavatkozások helyett. <br>
      A szabályozó négy bemenet alapján következtet — a rúd szöge, a rúd szögsebessége, a kocsi pozíciója és a kocsi sebessége —, és 24 fuzzy szabályon keresztül fejt ki folytonos erőt, egyesítve a rúd szögének stabilizálását az integráló taggal végzett elsodródás-korrekcióval. <br>
      Pythonban készült, egyedi folytonos CartPole környezetre (Gymnasium classic-control) építve, scikit-fuzzy használatával, a tagsági függvények és a 3D-s szabályozófelületek megjelenítésével.`,
    },
    icon: 'ri:scales-line',
    cover: '/images/cartpole-sim.png',
    links: [
      {
        label: GITHUB_LABEL,
        url: 'https://github.com/Ricsi1231/CartPole-Fuzzy-Control-System',
        icon: 'ri:github-fill',
      },
    ],
    images: ['/images/cartpole-sim.png'],
  },
  {
    slug: 'lcsc-bom-checker',
    categories: ['embedded-hardware'],
    title: {
      en: 'LCSC BOM Verification Tool',
      hu: 'LCSC BOM-ellenőrző eszköz',
    },
    summary: {
      en: 'A Python CLI that verifies Bill-of-Materials components against live LCSC data.',
      hu: 'Python parancssori eszköz, amely élő LCSC-adatok alapján ellenőrzi az anyagjegyzék alkatrészeit.',
    },
    description: {
      en: `A Python command-line utility that automatically verifies the components in a Bill of Materials (BOM) against live data pulled from the LCSC website. <br>
      For each part it cross-checks the critical parameters — capacitance, resistance, package/footprint, voltage rating, and dielectric type (X5R, X7R, NP0) — and reports any mismatches for manual or automated review. It understands KiCad-style footprint formats, reads both .xlsx and .csv BOMs, caches requests to avoid duplicate fetches, and rate-limits itself to stay friendly to the server. <br>
      Mismatched components can be exported to a .csv or .txt report, making it easy to catch wrong or inconsistent parts before a PCB order.`,
      hu: `Python parancssori segédprogram, amely automatikusan ellenőrzi az anyagjegyzékben (BOM) szereplő alkatrészeket az LCSC weboldaláról lekért élő adatokkal összevetve. <br>
      Minden alkatrésznél összeveti a kritikus paramétereket — kapacitás, ellenállás, tokozás/footprint, feszültséghatár és dielektrikum típusa (X5R, X7R, NP0) —, és jelzi az eltéréseket kézi vagy automatikus felülvizsgálatra. Ismeri a KiCad-stílusú footprint formátumokat, olvas .xlsx és .csv anyagjegyzéket is, gyorsítótárazza a kéréseket a felesleges lekérdezések elkerülésére, és korlátozza a kérési sebességet, hogy kímélje a szervert. <br>
      Az eltérő alkatrészek .csv vagy .txt jelentésbe exportálhatók, így a hibás vagy nem konzisztens alkatrészek még a NYÁK-rendelés előtt kiszűrhetők.`,
    },
    icon: 'ri:list-check-2',
    links: [
      {
        label: GITHUB_LABEL,
        url: 'https://github.com/Ricsi1231/LCSC-Bom-Checker',
        icon: 'ri:github-fill',
      },
    ],
  },
  {
    slug: 'stepper-motor-controller',
    categories: ['embedded-hardware'],
    title: {
      en: 'EmbedCore Stepper Motor Controller',
      hu: 'EmbedCore léptetőmotor-vezérlő',
    },
    summary: {
      en: 'A compact ESP32-S3 stepper driver that mounts on the back of a NEMA 17 motor (hardware design, not yet tested).',
      hu: 'Kompakt, ESP32-S3 alapú léptetőmotor-vezérlő, amely egy NEMA 17 motor hátuljára szerelhető (hardvertervezés, még teszteletlen).',
    },
    description: {
      en: `A compact, high-performance stepper motor driver designed to mount directly onto the back of a NEMA 17 motor. It is built around an ESP32-S3 (WROOM-1) on a 6-layer, 42.3 × 42.3 mm board that matches the NEMA 17 mounting pattern. <br>
      The board drives up to 2 A per phase from an 8–28 V input using an A4988 driver with up to 1/16 microstepping, and adds an onboard AS5600 14-bit magnetic encoder for closed-loop positioning. It exposes both an RS485 (Modbus) interface and USB-C — the latter also used to configure the board from a desktop app — while the ESP32-S3 brings WiFi and Bluetooth LE. Temperature and voltage sensing plus integrated buck + LDO power rails round out the design. <br>
      Note: this is a hardware design that has not been tested yet — board bring-up and validation are planned.`,
      hu: `Kompakt, nagy teljesítményű léptetőmotor-vezérlő, amelyet közvetlenül egy NEMA 17 motor hátuljára lehet szerelni. ESP32-S3 (WROOM-1) köré épül, egy 6 rétegű, 42,3 × 42,3 mm-es panelen, amely illeszkedik a NEMA 17 furatképéhez. <br>
      A panel fázisonként akár 2 A-t hajt meg 8–28 V-os bemenetről egy A4988 meghajtóval, akár 1/16-os mikrolépéssel, és egy fedélzeti AS5600 14 bites mágneses enkóderrel egészül ki a zárt hurkú pozicionáláshoz. RS485 (Modbus) interfészt és USB-C-t is kínál — utóbbin keresztül asztali alkalmazásból is konfigurálható a panel —, az ESP32-S3 pedig WiFi-t és Bluetooth LE-t hoz. A tervet hőmérséklet- és feszültségmérés, valamint integrált buck + LDO tápsínek teszik teljessé. <br>
      Megjegyzés: ez egy még nem tesztelt hardvertervezés — a panel beüzemelése és validálása tervben van.`,
    },
    icon: 'ri:settings-3-line',
    cover: '/images/stepper-motor-pcb-top.png',
    links: [
      {
        label: GITHUB_LABEL,
        url: 'https://github.com/Ricsi1231/Stepper-Motor-Controller',
        icon: 'ri:github-fill',
      },
    ],
    images: ['/images/stepper-motor-pcb-top.png', '/images/stepper-motor-pcb-bottom.png'],
  },
];

/**
 * Display order for the galleries: projects are grouped by their primary
 * (first-listed) category, following the tab order in CATEGORIES — Embedded &
 * Hardware, then Robotics, Industrial Automation, and Control & Simulation.
 *
 * Sorting rather than hand-ordering the array means a new project lands in the
 * right group from its tags alone. The sort is stable, so projects keep their
 * relative order within a group.
 */
const primaryRank = (project: Project): number =>
  CATEGORIES.findIndex((category) => category.slug === project.categories[0]);

export const orderedProjects: Project[] = [...projects].sort(
  (a, b) => primaryRank(a) - primaryRank(b)
);
