// src/components/pages/Experience/Experience.js
import "./Experience.css";
import { createExperienceSection } from "./createExperienceSection.js";

export default () => {
  const section = createExperienceSection();
  section.id = "experience"; // 👈 agregado para navegación desde el menú
  return section;
};
