// Education.js
import "./Education.css";

const Education = () => {
  const container = document.createElement("div");
  container.className = "education-container";

  /*container.textContent = `💬`;*/

  const studies = [
    {
      title: "Full Stack Developer",
      school: "The Power MBA - Hackio",
      year: "2025",
    },
    {
      title: "Humanities High School Diploma",
      school: "CIDEAD",
      year: "SEP 2011 - MAY 2013",
    },
  ];

  for (const study of studies) {
    const h3Title = document.createElement("h3");
    h3Title.className = "studies-title";
    h3Title.textContent = study.title;

    const h4School = document.createElement("h4");
    h4School.className = "institution-name";
    h4School.textContent = study.school;
    const pYear = document.createElement("p");
    pYear.className = "promo-year";
    pYear.textContent = study.year;

    container.appendChild(h3Title);
    container.appendChild(h4School);
    container.appendChild(pYear);
  }

  return container;
};

export default Education;
