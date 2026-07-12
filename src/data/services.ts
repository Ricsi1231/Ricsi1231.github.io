export interface Service {
  icon: string; // Iconify name from the RemixIcon (ri) set
  title: string;
  /** Body copy; may contain <br> line breaks, rendered as trusted static HTML. */
  body: string;
}

export const services: Service[] = [
  {
    icon: 'ri:cpu-line',
    title: 'Hardware',
    body: `Design Expertise: Specializing in analog, digital, power, mixed-signal, high-speed, IoT, and industrial designs. <br>
      From concept to realization, I bring your hardware ideas to life. <br>
      Tool Proficiency: Experienced with industry-standard tools including Altium Designer, KiCAD, EasyEDA, and LTspice. <br>
      Board Bring-up and Repair: Offering custom board bring-up services and expert troubleshooting for existing boards.`,
  },
  {
    icon: 'ri:device-line',
    title: 'Automation',
    body: `Automation Design Expertise: Specializing in the development of robust automation systems, focusing on PLC-based solutions,
      fault diagnosis, and electrical schematic design.
      From concept to execution, I create efficient and reliable automation systems tailored to your needs.
      Tool Proficiency: Experienced with industry-standard tools such as LOGO!Soft Comfort V8.3, CODESYS,
      Siemens TIA Portal, and progeCAD for electrical schematic design.
      Automation System Integration & Repair: Offering custom automation system integration, including fault diagnosis, repair,
      and troubleshooting for existing setups.`,
  },
  {
    icon: 'ri:code-box-fill',
    title: 'Embedded firmware',
    body: `Embedded Firmware Development: Custom embedded firmware development for various hardware platforms and MCUs,
      including the design of firmware architecture and real-time systems.
      Tool Proficiency: Skilled in STM32CubeIDE, STM32CubeMX, VS Code, Platform IO, ESP-IDF, Microchip Studio,
      Arduino IDE, and FreeRTOS for embedded systems.
      Firmware Debugging & Version Control: Expertise in debugging firmware using JTAG, ST-Link, and other debugging devices.
      Proficient in identifying and resolving issues at both the software and hardware levels. Additionally,
      I utilize Git for version control to ensure seamless development and collaboration.`,
  },
];
