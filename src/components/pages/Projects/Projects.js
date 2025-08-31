import projects from "../../../data/data.js";
import "./Projects.css";
import { createProjectCard } from "./createProjectCard.js";
import { createDotButton } from "./createDotButton.js";
import { initCarousel } from "./initCarousel.js";

const Projects = () => {
  const section = document.createElement("section");
  section.id = "projects";

  const wrapper = document.createElement("div");
  wrapper.className = "card-wrapper";
  const divCardWrapper = wrapper; // ✅ alias para evitar error

  const h2MyProjects = document.createElement("h2");
  h2MyProjects.id = "projects-title";
  h2MyProjects.textContent = "My Projects";

  // Create carousel container
  const carouselContainer = document.createElement("div");
  carouselContainer.className = "carousel-container";

  // Create carousel track that will hold all slides
  const carouselTrack = document.createElement("ul");
  carouselTrack.className = "carousel-track";

  // Create carousel navigation
  const navContainer = document.createElement("div");
  navContainer.className = "carousel-nav";

  const prevButton = document.createElement("button");
  prevButton.className = "carousel-button prev";
  prevButton.innerHTML = '<span class="material-symbols-outlined">arrow_back_ios</span>';
  prevButton.setAttribute("aria-label", "Previous slide");

  const nextButton = document.createElement("button");
  nextButton.className = "carousel-button next";
  nextButton.innerHTML = '<span class="material-symbols-outlined">arrow_forward_ios</span>';
  nextButton.setAttribute("aria-label", "Next slide");

  const dotsContainer = document.createElement("div");
  dotsContainer.className = "carousel-dots";

  // Crear los elementos de cada card como un slide
  projects.forEach((project, index) => {
    const card = createProjectCard(project, index);
    const dot = createDotButton(index);

    carouselTrack.appendChild(card);
    dotsContainer.appendChild(dot);
  });

  // Add elements to navigation
  navContainer.append(prevButton, dotsContainer, nextButton);

  // Add elements to carousel container
  carouselContainer.append(carouselTrack, navContainer);

  // Add carousel to the card wrapper
  divCardWrapper.append(h2MyProjects, carouselContainer);
  section.appendChild(divCardWrapper);

  // Add carousel functionality after the section is mounted
  setTimeout(() => {
    initCarousel();
  }, 0);

  return section;
};

export default Projects;
