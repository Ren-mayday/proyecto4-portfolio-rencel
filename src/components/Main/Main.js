import "./Main.css";
import Hero from "../Hero/Hero.js";
import AboutMe from "../pages/AboutMe/AboutMe.js";
import Tabs from "../Tabs/Tabs.js";
import Projects from "../pages/Projects/Projects.js";

const Main = () => {
  const main = document.createElement("main");
  main.className = "main-content";

  // Append all sections in order
  main.appendChild(Hero());
  main.appendChild(AboutMe());
  main.appendChild(Tabs());
  main.appendChild(Projects());

  return main;
};

export default Main;
