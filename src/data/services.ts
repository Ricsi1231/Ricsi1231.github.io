import type { Localized } from '../i18n/types';

export interface Service {
  icon: string; // Iconify name from the RemixIcon (ri) set
  title: Localized<string>;
  /** Body copy; may contain <br> line breaks, rendered as trusted static HTML. */
  body: Localized<string>;
}

export const services: Service[] = [
  {
    icon: 'ri:cpu-line',
    title: { en: 'Hardware', hu: 'Hardver' },
    body: {
      en: `Analog, digital, power, mixed-signal, high-speed, IoT and industrial PCB design — from concept to board bring-up and repair. <br>
      Tools: Altium Designer, KiCAD, EasyEDA, LTspice.`,
      hu: `Analóg és digitális (mixed-signal), teljesítmény-, nagy sebességű, IoT és ipari NYÁK-tervezés — a koncepciótól a panel beüzemeléséig és javításáig. <br>
      Eszközök: Altium Designer, KiCAD, EasyEDA, LTspice.`,
    },
  },
  {
    icon: 'ri:device-line',
    title: { en: 'Automation', hu: 'Automatizálás' },
    body: {
      en: `PLC-based automation systems, fault diagnosis, and electrical schematic design — from concept to execution. <br>
      Tools: LOGO!Soft, CODESYS, Siemens TIA Portal, WSCAD.`,
      hu: `PLC-alapú automatizálási rendszerek, hibadiagnosztika és villamos kapcsolási rajzok tervezése — a koncepciótól a megvalósításig. <br>
      Eszközök: LOGO!Soft, CODESYS, Siemens TIA Portal, WSCAD.`,
    },
  },
  {
    icon: 'ri:code-box-fill',
    title: { en: 'Embedded firmware', hu: 'Beágyazott firmware' },
    body: {
      en: `Custom firmware and real-time systems for a wide range of MCUs, with a clean, modular architecture. <br>
      Tools: STM32Cube, ESP-IDF, PlatformIO, Arduino, FreeRTOS; JTAG/ST-Link debugging; Git for version control.`,
      hu: `Egyedi firmware és valós idejű rendszerek széles MCU-választékhoz, letisztult, moduláris architektúrával. <br>
      Eszközök: STM32Cube, ESP-IDF, PlatformIO, Arduino, FreeRTOS; JTAG/ST-Link hibakeresés; Git verziókövetés.`,
    },
  },
  {
    icon: 'ri:robot-2-line',
    title: { en: 'Robotics', hu: 'Robotika' },
    body: {
      en: `Programming industrial and mobile robots — motion planning, path-finding, and autonomous navigation. <br>
      Tools: ROS 2, Gazebo, FANUC RoboGuide.`,
      hu: `Ipari és mobilrobotok programozása — mozgástervezés, útvonalkeresés és autonóm navigáció. <br>
      Eszközök: ROS 2, Gazebo, FANUC RoboGuide.`,
    },
  },
  {
    icon: 'ri:function-line',
    title: { en: 'Control & Simulation', hu: 'Szabályozás és szimuláció' },
    body: {
      en: `Modelling, control design, and simulation of dynamic systems — a range of control strategies (PID, fuzzy, and more), plant modelling, and analysis. <br>
      Tools: MATLAB and Python.`,
      hu: `Dinamikus rendszerek modellezése, szabályozótervezés és szimuláció — többféle szabályozási stratégia (PID, fuzzy és továbbiak), szakaszmodellezés és analízis. <br>
      Eszközök: MATLAB és Python.`,
    },
  },
];
