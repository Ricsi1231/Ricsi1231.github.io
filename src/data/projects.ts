export interface ProjectLink {
  label: string;
  url: string;
  icon?: string; // optional Iconify name from the RemixIcon (ri) set
}

export interface Project {
  /** URL segment -> /projects/<slug>/ */
  slug: string;
  title: string;
  /** Short one-liner shown on the gallery card. */
  summary: string;
  /** Full copy on the detail page; may contain <br>, rendered as trusted static HTML. */
  description: string;
  /** Iconify (ri) name for the card badge (also used as the card cover when no image is set). */
  icon?: string;
  /** Card thumbnail image (served from public/). Falls back to the icon when omitted. */
  cover?: string;
  links: ProjectLink[];
  /** Gallery images on the detail page (served from public/). Optional. */
  images?: string[];
}

// Placeholder scaffold — swap in real content and drop images into
// public/images/projects/, then point `cover`/`images` at them.
export const projects: Project[] = [
  {
    slug: 'ros2-autonomous-navigation',
    title: 'Autonomous Mobile Robot Navigation in ROS 2',
    summary:
      'My final thesis (in progress): autonomous path planning for a mobile robot in ROS 2 and Gazebo.',
    description: `My final-year thesis project, currently in progress. It implements autonomous path planning for a mobile robot in a ROS 2 (Jazzy) and Gazebo simulation environment. <br>
      The robot plans across a 2D occupancy grid that is built dynamically from sensor data, where cells can flip between free and occupied at runtime. The design is split in two: a dependency-free, pure-Python Core library of classic search algorithms — A*, Dijkstra, BFS, and DFS behind one common interface — and a ROS 2 integration layer built around it. The weighted planners (A* and Dijkstra) honour a per-cell gradient costmap and disallow corner-cutting, so paths stay realistic for a robot with physical width. <br>
      A clean adapter layer converts between ROS nav_msgs (OccupancyGrid ↔ Path) and the Core data structures, keeping Core pure and unit-tested. Correctness is validated with unit tests, ROS-free line / C-obstacle / maze scenarios, and behavioural checks in Gazebo. <br>
      The source is hosted privately on GitLab while the thesis is being finished, so it is not yet publicly linked.`,
    icon: 'ri:route-line',
    cover: '/images/ros2-search.png',
    links: [],
    images: ['/images/ros2-navigation-planing.png', '/images/ros2-search.png'],
  },
  {
    slug: 'wro-future-engineers-2026',
    title: 'WRO Future Engineers 2026 — Autonomous Vehicle',
    summary:
      'Project lead for a self-driving robot built for the World Robot Olympiad Future Engineers 2026 competition.',
    description: `An autonomous vehicle built with Team Traktoristak for the World Robot Olympiad (WRO) Future Engineers 2026 category. I led the project — developing the software and hardware, and leading the mechanical design. <br>
      The robot navigates the competition track and avoids obstacles fully autonomously using computer vision, distance sensing, and custom control software. It runs on a Raspberry Pi 3 with a regulated 5 V power system, ultrasonic distance sensors, IR reflectance sensors, a CSI camera, and an L298N motor driver for drivetrain and steering. <br>
      The Python control software combines camera-based color detection, distance sensing, race-state logic, PID utilities, and modular hardware drivers. The engineering is split into dedicated repositories — hardware (KiCad schematics and wiring), software (robot runtime, calibration, and deployment), and mechanical (3D-printable design files).`,
    icon: 'ri:car-line',
    cover: '/images/wro-robot-prototype.jpg',
    links: [
      {
        label: 'Main Repository',
        url: 'https://github.com/Ricsi1231/WRO-Robot',
        icon: 'ri:github-fill',
      },
      {
        label: 'Software',
        url: 'https://github.com/Ricsi1231/WRO-Robot-Software',
        icon: 'ri:github-fill',
      },
      {
        label: 'Hardware',
        url: 'https://github.com/Ricsi1231/WRO-Robot-Hardware',
        icon: 'ri:github-fill',
      },
      {
        label: 'Mechanical',
        url: 'https://github.com/Ricsi1231/WRO-Robot-Mechanical',
        icon: 'ri:github-fill',
      },
    ],
    images: ['/images/wro-robot-prototype.jpg', '/images/wro-robot-3d.png'],
  },
  {
    slug: 'apple-juice-process-system',
    title: 'Industrial Apple Juice Processing System',
    summary:
      'A fully automated three-tank apple-juice production line, controlled by a Siemens S7-1200 PLC.',
    description: `Design and implementation of an automated industrial process that produces apple juice. <br>
      The system is built around three cooperating tanks: one stores water, one stores the apple concentrate, and the third is where the two are mixed into the finished juice. A full production cycle runs automatically — tank filling, recipe-based dosing, mixing (water first, then apple), and a bottling stage with a conveyor, a capacitive bottle sensor, and a bottle counter. <br>
      The control logic runs on a Siemens S7-1200 PLC programmed in TIA Portal, organised as a state machine with start/stop handling and an emergency-stop (E-stop) safety path. The solution was developed in two stages: first modelled and validated as a 3D Factory I/O simulation, then deployed on real Siemens + SMC pneumatic hardware driven from a SCADA operator interface.`,
    icon: 'ri:goblet-line',
    cover: '/images/IPC-200.png',
    links: [
      {
        label: 'Real Hardware Code',
        url: 'https://github.com/Ricsi1231/Apple-Juice-Process-System',
        icon: 'ri:github-fill',
      },
      {
        label: 'Simulation (Factory I/O)',
        url: 'https://github.com/Ricsi1231/Apple-Juice-Process-System-Simulation',
        icon: 'ri:github-fill',
      },
    ],
    images: ['/images/IPC-200.png', '/images/factory-io.png'],
  },
  {
    slug: 'industrial-robotic-workcell-simulation',
    title: 'Industrial Robotic CNC Workcell Simulation',
    summary:
      'A FANUC RoboGuide simulation of a dual-robot CNC tending and palletizing workcell.',
    description: `A FANUC RoboGuide simulation of a fully automated CNC machining workcell built from two coordinated industrial robots, conveyors, and a palletizing station. <br>
      Robot 1 tends the CNC machine — it picks raw parts from the input conveyor, loads the machine, waits for the machining cycle (with door open/close and handshake logic), then unloads the finished part onto the output conveyor. Robot 2 then picks the finished parts and places them into a 3×3 palletizing station. A full production run processes nine parts through the complete flow: input conveyor → Robot 1 → CNC machine → Robot 1 → output conveyor → Robot 2 → 3×3 pallet. <br>
      Acting as a digital twin of a real industrial workcell, the project validates coordinated dual-robot operation, collision-free motion paths, load/unload cycle timing, and structured palletizing logic within a safety-fenced layout.`,
    icon: 'ri:robot-2-line',
    cover: '/images/robotic-workcell.png',
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/Ricsi1231/Industrial-Robotic-Workcell-Simulation',
        icon: 'ri:github-fill',
      },
    ],
    images: ['/images/robotic-workcell.png', '/images/robotic-workcell-state-machine.png'],
  },
  {
    slug: 'dc-motor-controller',
    title: 'DC Motor Position Control System',
    summary:
      'A real-time closed-loop DC motor position controller — custom ESP32-S3 PCB, PID firmware, LabVIEW HMI, and a Python fuzzy-vs-PID simulation.',
    description: `An end-to-end system for precise real-time DC motor position control, built across four layers: <br>
      <strong>Hardware</strong> — a custom ESP32-S3 based PCB designed in Altium Designer (16 schematic sheets): a DRV8876 H-bridge motor driver, buck + LDO power stage, quadrature encoder input, temperature and voltage sensing, micro-USB and RS485 interfaces, and an RGB status LED. Fabrication-ready manufacturing outputs are included. <br>
      <strong>Firmware</strong> — ESP32-S3 firmware in C++ (ESP-IDF, FreeRTOS) with a discrete-time PID position controller (anti-windup), motion profiling (trapezoid and S-curve), stall/settle detection and soft limits, quadrature encoder reading through the ESP32 PCNT peripheral, and USB CDC communication via TinyUSB — all on a modular, interface-based architecture. <br>
      <strong>LabVIEW HMI</strong> — a LabVIEW SCADA interface (VISA over USB/serial) for real-time position plotting, live PID tuning, 3D visualization, and status/fault monitoring. <br>
      <strong>Simulation</strong> — a Python model comparing Fuzzy Logic and PID position control, with realistic motor physics (electrical + mechanical dynamics and back-EMF), simulated encoder quantization and measurement noise, and visualization of membership functions and 3D control surfaces.`,
    icon: 'ri:cpu-line',
    cover: '/images/dc-motor-controller-pcb.png',
    links: [
      {
        label: 'Hardware (PCB)',
        url: 'https://github.com/Ricsi1231/DC-Motor-Controller-Hardware',
        icon: 'ri:github-fill',
      },
      {
        label: 'Firmware',
        url: 'https://github.com/Ricsi1231/DC-Motor-Controller-Firmware',
        icon: 'ri:github-fill',
      },
      {
        label: 'LabVIEW HMI',
        url: 'https://github.com/Ricsi1231/DC-Motor-Controller-SCADA',
        icon: 'ri:github-fill',
      },
      {
        label: 'Simulation',
        url: 'https://github.com/Ricsi1231/DC-Motor-Postion-Control-Fuzzy-Simulation',
        icon: 'ri:github-fill',
      },
      {
        label: 'All repositories',
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
    slug: 'cartpole-fuzzy-control',
    title: 'CartPole Fuzzy Control System',
    summary:
      'A Mamdani fuzzy-logic controller that balances the classic CartPole with continuous force control.',
    description: `A Mamdani-type fuzzy logic control system that balances the classic CartPole problem using continuous force control instead of the usual discrete left/right actions. <br>
      The controller reasons over four inputs — pole angle, angular velocity, cart position, and cart velocity — and applies a continuous force through 24 fuzzy rules, combining pole-angle stabilization with drift correction via an integral term. <br>
      It is built in Python on a custom continuous CartPole environment (Gymnasium classic-control) using scikit-fuzzy, with visualization of the membership functions and 3D control surfaces.`,
    icon: 'ri:scales-line',
    cover: '/images/cartpole-sim.png',
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/Ricsi1231/CartPole-Fuzzy-Control-System',
        icon: 'ri:github-fill',
      },
    ],
    images: ['/images/cartpole-sim.png'],
  },
  {
    slug: 'lcsc-bom-checker',
    title: 'LCSC BOM Verification Tool',
    summary:
      'A Python CLI that verifies Bill-of-Materials components against live LCSC data.',
    description: `A Python command-line utility that automatically verifies the components in a Bill of Materials (BOM) against live data pulled from the LCSC website. <br>
      For each part it cross-checks the critical parameters — capacitance, resistance, package/footprint, voltage rating, and dielectric type (X5R, X7R, NP0) — and reports any mismatches for manual or automated review. It understands KiCad-style footprint formats, reads both .xlsx and .csv BOMs, caches requests to avoid duplicate fetches, and rate-limits itself to stay friendly to the server. <br>
      Mismatched components can be exported to a .csv or .txt report, making it easy to catch wrong or inconsistent parts before a PCB order.`,
    icon: 'ri:list-check-2',
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/Ricsi1231/LCSC-Bom-Checker',
        icon: 'ri:github-fill',
      },
    ],
  },
  {
    slug: 'stepper-motor-controller',
    title: 'EmbedCore Stepper Motor Controller',
    summary:
      'A compact ESP32-S3 stepper driver that mounts on the back of a NEMA 17 motor (hardware design, not yet tested).',
    description: `A compact, high-performance stepper motor driver designed to mount directly onto the back of a NEMA 17 motor. It is built around an ESP32-S3 (WROOM-1) on a 6-layer, 42.3 × 42.3 mm board that matches the NEMA 17 mounting pattern. <br>
      The board drives up to 2 A per phase from an 8–28 V input using an A4988 driver with up to 1/16 microstepping, and adds an onboard AS5600 14-bit magnetic encoder for closed-loop positioning. It exposes both an RS485 (Modbus) interface and USB-C — the latter also used to configure the board from a desktop app — while the ESP32-S3 brings WiFi and Bluetooth LE. Temperature and voltage sensing plus integrated buck + LDO power rails round out the design. <br>
      Note: this is a hardware design that has not been tested yet — board bring-up and validation are planned.`,
    icon: 'ri:settings-3-line',
    cover: '/images/stepper-motor-pcb-top.png',
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/Ricsi1231/Stepper-Motor-Controller',
        icon: 'ri:github-fill',
      },
    ],
    images: ['/images/stepper-motor-pcb-top.png', '/images/stepper-motor-pcb-bottom.png'],
  },
];
