// src/components/Main/Main.js
import AboutMe from "../pages/AboutMe/AboutMe.js";
import Projects from "../pages/Projects/Projects.js";
import Tabs from "../Tabs/Tabs.js";

const Main = () => {
  const main = document.createElement("main");
  main.className = "main-content";

  const sections = [
    ["AboutMe", AboutMe],
    ["Tabs", Tabs],
    ["Projects", Projects],
  ];

  sections.forEach(([name, fn]) => {
    try {
      if (typeof fn !== "function") {
        const warn = document.createElement("pre");
        warn.textContent = `⚠ ${name} no exporta una función por defecto.`;
        warn.style.color = "orange";
        main.appendChild(warn);
        return;
      }
      const node = fn();
      main.appendChild(node);
    } catch (err) {
      const errBox = document.createElement("pre");
      errBox.textContent = `❌ Error en ${name}: ${err.message}`;
      errBox.style.color = "red";
      main.appendChild(errBox);
    }
  });

  return main;
};

export default Main;
