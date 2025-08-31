export function createSkillItem(skill) {
  //Contenedor para item de habilidad individual
  const skillItem = document.createElement("div");
  skillItem.className = "skill-item";

  //Creo la IMG que representa la habilidad
  const img = document.createElement("img");
  img.src = skill.image;
  img.alt = `${skill.name} icon`;
  img.className = `skill-icon-${skill.class}`; //Clase específica por tipo de skill (reutilizable)

  //Creo el texto (nombre de la habilidad)
  const skillName = document.createElement("p");
  skillName.textContent = skillName.name; //Nombre visible para la skill
  skillName.className = "skill-name";

  //Inserto la IMG y el nombre dentro del contenedor
  skillItem.appendChild(img);
  skillItem.appendChild(skillName);

  //Devolvemos el contenedor completo de la habilidad
  return skillItem;
}
