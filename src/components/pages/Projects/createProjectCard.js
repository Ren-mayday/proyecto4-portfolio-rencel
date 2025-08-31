export function createProjectCard(project, index) {
  const listItem = document.createElement("li");
  listItem.className = "carousel-slide";

  // Asocio el índice como atributo personalizado (útil para la naegación)
  listItem.setAttribute("data-slide-index", index);
  if (index === 0) listItem.classList.add("active");

  // Creo el div que representará visualmente la tarjeta del proyecto
  const card = document.createElement("div");
  card.className = "project-card";

  // Creo un enlace <a> que envuelve toda la tarjeta
  const anchor = document.createElement("a");
  anchor.href = project.link;
  anchor.target = "_blank";
  anchor.rel = "noopener noreferrer";
  anchor.className = "project-link";

  //Creamos la imagen del proyecto
  const img = document.createElement("img");
  img.src = project.imgSrc || "https://via.placeholder.com/300x200?text=Project+Preview";
  //Si no hay imagen se muestra un placeholder

  img.alt = project.imgAlt || "Project preview"; // texto alternativo
  img.className = "project-image";

  //Creamos el título del proyecto (h3)
  const h3 = document.createElement("h3");
  h3.className = "project-title";
  h3.textContent = project.title;

  //Creo la descripción del proyecto
  const p = document.createElement("p");
  p.className = "project-description";
  p.textContent = project.description;

  //Creo un button visual para la view app
  const button = document.createElement("button");
  button.className = "view-btn";
  button.textContent = "View App";

  //Ensamblar los elementos de la tarjeta
  card.append(img, h3, p, button);
  anchor.appendChild(card);
  listItem.appendChild(anchor);

  // Devuelvo el slide completo
  return listItem;
}
