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
    body: `Analog, digital, power, mixed-signal, high-speed, IoT and industrial PCB design — from concept to board bring-up and repair. <br>
      Tools: Altium Designer, KiCAD, EasyEDA, LTspice.`,
  },
  {
    icon: 'ri:device-line',
    title: 'Automation',
    body: `PLC-based automation systems, fault diagnosis, and electrical schematic design — from concept to execution. <br>
      Tools: LOGO!Soft, CODESYS, Siemens TIA Portal, WSCAD.`,
  },
  {
    icon: 'ri:code-box-fill',
    title: 'Embedded firmware',
    body: `Custom firmware and real-time systems for a wide range of MCUs, with a clean, modular architecture. <br>
      Tools: STM32Cube, ESP-IDF, PlatformIO, Arduino, FreeRTOS; JTAG/ST-Link debugging; Git for version control.`,
  },
  {
    icon: 'ri:robot-2-line',
    title: 'Robotics',
    body: `Programming industrial and mobile robots — motion planning, path-finding, and autonomous navigation. <br>
      Tools: ROS 2, Gazebo, FANUC RoboGuide.`,
  },
  {
    icon: 'ri:function-line',
    title: 'Control & Simulation',
    body: `Modelling, control design, and simulation of dynamic systems — a range of control strategies (PID, fuzzy, and more), plant modelling, and analysis. <br>
      Tools: MATLAB and Python.`,
  },
];
