// Experience.js
import "./Experience.css";

const Experience = () => {
  const container = document.createElement("div");
  container.className = "experience-container";

  /*container.textContent = `⚙️`;*/
  const experiences = [
    {
      position: "Web Developer Studio/Marketing Services",
      company: "Page Consulting Tech Solutions",
      year: "DEC 2024 - Present",
      description: `I am a Web Developer Studio/Marketing Services professional 
        with experience in developing and maintaining websites optimazed for digital marketing goals. 
        I work closely with marketing teams to ensure online platforms are functional, engaging, and effective in converting users. 
        I specialize in implementing SEO strategies, web performance analysis and developing 
        technical solutions that drive the success of marketing campaings`,
    },
    {
      position: "Marketplace Content Specialist - SP",
      company: "Treatwell",
      year: "APR 2022 - JUN 2024",
      description: `Created and optimized salon profiles with data entry, service lists, and SEO descriptions, ensuring high-quality content.
      Managed partner requests and used Salesforce CRM, Treatwell Connect, and Treatwell Pro for efficient profile administration.
      Led the resolution of technical issues, collaborating with support and supply teams for prompt solutions.`,
    },
  ];

  for (const experience of experiences) {
    const h3Position = document.createElement("h3");
    h3Position.className = "job-position-title";
    h3Position.textContent = experience.position;
    const h4CompanyName = document.createElement("h4");
    h4CompanyName.className = "company-name";
    h4CompanyName.textContent = experience.company;
    const h4Year = document.createElement("h4");
    h4Year.className = "period-time";
    h4Year.textContent = experience.year;
    const pJobDescription = document.createElement("p");
    pJobDescription.className = "job-description";
    pJobDescription.textContent = experience.description;

    container.appendChild(h3Position);
    container.appendChild(h4CompanyName);
    container.appendChild(h4Year);
    container.appendChild(pJobDescription);
  }
  return container;
};

export default Experience;
