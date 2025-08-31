import { createExperienceItem } from "./createExperienceItem";

export function createExperienceSection() {
  const section = document.createElement("section");
  section.className = "experience-section";

  const title = document.createElement("h2");
  title.textContent = "Experience";
  section.appendChild(title);

  const container = document.createElement("div");
  container.className = "experience-container";

  const experiences = [
    {
      position: "RPA Developer",
      company: "AMSTRO",
      year: "AUG 2025 - CURRENT",
      description: `I’m an RPA Developer specializing in process automation with UiPath, JPA, and SAP, 
      focused on improving efficiency and optimizing workflows. 
      With a background in Web Development and customer service, I combine technical skills with a user-centered approach. 
      I’m currently completing a Full-Stack bootcamp to expand my expertise in RPA, AI, and OCR. 
      Passionate and adaptable, I aim to create meaningful, future-ready digital solutions.`,
    },
    {
      position: "Web Developer Studio/Marketing Services",
      company: "Page Consulting Tech Solutions",
      year: "DEC 2024 - JUN 2025",
      description: `In my previous role, I was responsible for building and updating landing pages across multiple regions 
      using Drupal CMS, applying strong skills in HTML, CSS, JavaScript, SEO, and web accessibility (WCAG 2.1). 
      I troubleshot and resolved web issues to ensure functionality, accessibility, and consistency across devices and browsers. 
      I also collaborated closely with CRM and Web teams to streamline request and translation processes, 
      contributing proactively to both regional and global projects.`,
    },
  ];

  experiences.forEach((exp) => {
    const item = createExperienceItem(exp);
    container.appendChild(item);
  });

  section.appendChild(container);
  return section;
}
