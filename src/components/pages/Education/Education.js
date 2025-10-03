import "./Education.css";
import { createEducationItem } from "./createEducationItem.js";

const Education = () => {
  const section = document.createElement("section");
  section.className = "education-section";

  const title = document.createElement("h2");
  title.textContent = "Education Titles";

  const container = document.createElement("div");
  container.className = "education-container";

  const studies = [
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
