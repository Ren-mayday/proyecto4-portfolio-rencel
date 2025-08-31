export function createEducationItem(study) {
  const wrapper = document.createElement("div");
  wrapper.className = "education-item";

  const h3Title = document.createElement("h3");
  h3Title.className = "studies-title";
  h3Title.textContent = study.title;

  const h4School = document.createElement("h4");
  h4School.className = "institution-name";
  h4School.textContent = study.h4School;

  const pYear = document.createElement("p");
  pYear.className = "promo-year";
  pYear.textContent = study.pYear;

  wrapper.appendChild(h3Title);
  wrapper.appendChild(h4School);
  wrapper.appendChild(pYear);

  return wrapper;
}
