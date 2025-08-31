import { createSkillItem } from "./createSkillItem"; // Importando el componente individual

export function createSkillSection() {
  //Creamos el contenedor principal de la sección de habilidades
  const divSkills = document.createElement("div");
  divSkills.className = "my-skills-section";

  //Creamos y añadimos el título de la section
  const h3Skills = document.createElement("h3");
  h3Skills.textContent = "My Skills";
  divSkills.appendChild(h3Skills);

  //Crear el contenedor donde irán todas las habilidades
  const skillsContainer = document.createElement("div");
  skillsContainer.className = "skills-container";

  //Array de habilidades (cada una con nombre, imagen y clase)
  const skills = [
    { name: "HTML", image: "/assets/HTML5.png", class: "html" },
    { name: "CSS", image: "/assets/CSS3.png", class: "css" },
    { name: "JavaScript", image: "/assets/JavaScript.png", class: "js" },
    { name: "VS Code", image: "/assets/icons8-visual-studio-code-480.png", class: "vs-code" },
    { name: "GitHub", image: "/assets/github.png", class: "gitHub" },
    { name: "Vite", image: "/assets/Vite.js.png", class: "vite" },
    { name: "Figma", image: "/assets/figma.png", class: "figma" },
  ];

  //Recorremos todas las habilidades y usamos el componente reutilizable `createSkillItem`
  skills.forEach((skill) => {
    const skillItem = createSkillItem(skill);
    skillsContainer.appendChild(skillItem);
  });

  //Añadir el contenedor de skills a la sección general
  divSkills.appendChild(skillsContainer);

  //Devolvemos toda la sección de habilidades
  return divSkills;
}
