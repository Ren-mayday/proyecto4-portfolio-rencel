import { createExperienceItem } from "./createExperienceItem.js";

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
      position: "Web Developer Studio/Marketing Services",
      company: "Page Consulting Tech Solutions",
      year: "DEC 2024 - JUN 2025",
      description: `In my previous role, I was responsible for building and updating landing pages across multiple regions 
      using Drupal CMS, applying strong skills in HTML, CSS, JavaScript, SEO, and web accessibility (WCAG 2.1). 
      I troubleshot and resolved web issues to ensure functionality, accessibility, and consistency across devices and browsers. 
      I also collaborated closely with CRM and Web teams to streamline request and translation processes, 
      contributing proactively to both regional and global projects.`,
    },
    {
      position: "Marketplace Content Specialist - SP",
      company: "Treatwell",
      year: "APR 2022 - JUL 2024",
      description: `Created and optimized salon profiles with SEO-friendly content, 
      managed requests through Salesforce CRM, and collaborated with support teams to resolve technical issues. 
      Provided product feedback and ensured smooth operations across internal processes.`,
    },
    {
      position: "Tech Support",
      company: "Photoslurp",
      year: "NOV 2021 - FEB 2022",
      description: `Supported clients integrating Photoslurp on e-commerce platforms (Shopify, Magento, PrestaShop, WooCommerce, JavaScript), 
      troubleshot technical issues, and maintained documentation to ensure seamless adoption.`,
    },
  ];

  experiences.forEach((exp) => {
    const item = createExperienceItem(exp);
    container.appendChild(item);
  });

  section.appendChild(container);
  return section;
}
