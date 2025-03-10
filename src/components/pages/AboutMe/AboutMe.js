import "./AboutMe.css";

const AboutMe = () => {
  const section = document.createElement("section");
  section.id = "about-me";
  section.className = "about-me-section";

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

  const divSkills = document.createElement("div");
  divSkills.className = "my-skills-section";

  // Create skills heading
  const h3Skills = document.createElement("h3");
  h3Skills.textContent = "My Skills";
  divSkills.appendChild(h3Skills);

  // Create skills container
  const skillsContainer = document.createElement("div");
  skillsContainer.className = "skills-container";

  // Define skills with their image paths
  const skills = [
    { name: "HTML", image: "/assets/HTML5.png", class: "html" },
    { name: "CSS", image: "/assets/CSS3.png", class: "css" },
    {
      name: "JavaScript",
      image: "/assets/JavaScript.png",
      class: "js",
    },
    {
      name: "VS Code",
      image: "/assets/icons8-visual-studio-code-480.png",
      class: "vs-code",
    },
    {
      name: "GitHub",
      image: "/assets/github.png",
      class: "gitHub",
    },
    {
      name: "Vite",
      image: "/assets/Vite.js.png",
      class: "vite",
    },
    {
      name: "Figma",
      image: "/assets/figma.png",
      class: "figma",
    },
  ];

  // Create and append skill items
  skills.forEach((skill) => {
    const skillItem = document.createElement("div");
    skillItem.className = "skill-item";

    const img = document.createElement("img");
    img.src = skill.image;
    img.alt = `${skill.name} icon`;
    img.className = `skill-icon-${skill.class}`;

    const skillName = document.createElement("p");
    skillName.textContent = skill.name;
    skillName.className = "skill-name";

    skillItem.appendChild(img);
    skillItem.appendChild(skillName);
    skillsContainer.appendChild(skillItem);
  });

  divSkills.appendChild(skillsContainer);

  // Append everything in the correct order
  divSectionContent.appendChild(h2AboutMe);
  divSectionContent.appendChild(pAboutMeText);
  divSectionContent.appendChild(divSkills);
  section.appendChild(divSectionContent);

  return section;
};

export default AboutMe;
