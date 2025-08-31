import "./AboutMe.css";
import { createSkillSection } from "./createSkillSection.js"; // Importo el componente modular de habilidades

const AboutMe = () => {
  const section = document.createElement("section");
  section.id = "about-me";
  section.className = "about-me-section";

  // 👇 agregado: ancla extra para que el menú pueda usar href="#about" sin cambiar el id actual
  const anchorAbout = document.createElement("span");
  anchorAbout.id = "about";
  section.prepend(anchorAbout);

  const divSectionContent = document.createElement("div");
  divSectionContent.className = "section-content";

  const h2AboutMe = document.createElement("h2");
  h2AboutMe.textContent = "About Me";

  const pAboutMeText = document.createElement("p");
  pAboutMeText.className = "about-me-text";
  pAboutMeText.textContent = `I am a Web Developer with a background in Customer Service, Tech Support, and Content Management. 
  My experience in these roles has equipped me with strong communication skills, allowing me to effectively collaborate with clients, cross-functional teams, and different departments.
  Over the years, I have developed an analytical mindset, identifying opportunities to optimize processes while gaining extensive experience with various CRMs, including Salesforce, Zendesk, and HubSpot.
  Working across different industries and using a variety of tools sparked my interest in web development, leading me to transition into the tech sector. 
  The ability to do so much with websites and apps—whether it’s booking vacations, ordering food delivery, hailing a ride, checking peak hours at the gym, or engaging on social media—made me curious about how they are built. This curiosity led me to dive deeper into web design and development, where I continuously learn and grow.`;

  //Usamos el componente modular para insertar la sección de habilidades
  const skillSection = createSkillSection(); // Reutilizable y separado

  //Añadir los elementos al contenedor principal
  divSectionContent.appendChild(h2AboutMe);
  divSectionContent.appendChild(pAboutMeText);
  divSectionContent.appendChild(skillSection);

  //Añadir el contenedor a la sección
  section.appendChild(divSectionContent);

  //Retornamos la sección completa para poder renderizarla donde queramos
  return section;
};

//Exportamos el componente principal de "About Me"
export default AboutMe;
