// Education.js
import "./Education.css";
import { createEducationItem } from "./createEducationItem.js";

const Education = () => {
  const section = document.createElement("section");
  section.className = "education-section";
  section.id = "education"; // agregado para navegación

  const title = document.createElement("h2");
  title.textContent = "Education";

  const container = document.createElement("div");
  container.className = "education-container"; //cambiado para el css

  const studies = [
    // createEducationItem espera degree/school/year.
    {
      degree: "Full Stack Developer",
      school: "The Power MBA - Tech School",
      year: "2025",
    },
    {
      degree: "Humanities High School Diploma",
      school: "CIDEAD",
      year: "SEP 2011 - MAY 2013",
    },
  ];

  studies.forEach((study) => {
    const item = createEducationItem(study);
    container.appendChild(item);
  });

  section.appendChild(title);
  section.appendChild(container);

  return section;
};

export default Education;
