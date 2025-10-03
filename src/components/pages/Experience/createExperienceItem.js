export function createExperienceItem(experience) {
  const wrapper = document.createElement("div");
  wrapper.className = "experience-item";

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

  wrapper.appendChild(h3Position);
  wrapper.appendChild(h4CompanyName);
  wrapper.appendChild(h4Year);
  wrapper.appendChild(pJobDescription);

  return wrapper;
}
