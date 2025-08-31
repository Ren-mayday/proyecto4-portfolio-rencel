// src/components/pages/Education/createEducationItem.js
export function createEducationItem(data) {
  const item = document.createElement("div");
  item.className = "education-item";

  const degree = document.createElement("h3");
  degree.textContent = data.degree;

  const school = document.createElement("p");
  school.textContent = data.school;

  const year = document.createElement("span");
  year.textContent = data.year;

  item.appendChild(degree);
  item.appendChild(school);
  item.appendChild(year);

  return item;
}
