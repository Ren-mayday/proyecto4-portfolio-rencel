// Recibe un índice que indica a qué slide está asociado
export function createDotButton(index) {
  const dot = document.createElement("button");
  dot.className = "carousel-dot";
  dot.setAttribute("data-slide-index", index);

  // Si es el primer dot -> lo marcamos como activo visualmente
  if (index === 0) dot.classList.add("active");

  //Atributo de accesibilidad: describe su función para lectores de pantalla
  dot.setAttribute("aria-label", `Go to slid ${index + 1}`);

  // Devuelvo el dot
  return dot;
}
