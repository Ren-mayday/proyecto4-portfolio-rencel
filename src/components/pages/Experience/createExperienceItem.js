export function createExperienceItem(experience) {
  const wrapper = document.createElement("div");
  wrapper.className = "experience-item"; // Clase reutilizable por experiencia

  // Título del puesto
  const h3Position = document.createElement("h3");
  h3Position.className = "job-position-title";
  h3Position.textContent = experience.position;

  //Nombre de la empresa
  const h4CompanyName = document.createElement("h3");
  h4CompanyName.className = "company-name";
  h4CompanyName.textContent = experience.company;

  //Periodo de tiempo
  const h4Year = document.createElement("h3");
  h4Year.className = "period-time";
  h4Year.textContent = experience.year;

  //Descripción de las tareas
  const pJobDescription = document.createElement("p");
  pJobDescription.className = "job-description";
  pJobDescription.textContent = experience.description;

  // Agregamos todos los elementos al contenedor
  wrapper.appendChild(h3Position);
  wrapper.appendChild(h4CompanyName);
  wrapper.appendChild(h4Year);
  wrapper.appendChild(pJobDescription);

  return wrapper;
}
