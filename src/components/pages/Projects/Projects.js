import projects from "../../../data/data.js";
import "./Projects.css";

const Projects = () => {
  const section = document.createElement("section");
  section.id = "projects";

  const divCardWrapper = document.createElement("div");
  divCardWrapper.className = "card-wrapper";

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
  prevButton.innerHTML =
    '<span class="material-symbols-outlined">arrow_back_ios</span>';
  prevButton.setAttribute("aria-label", "Previous slide");

  const nextButton = document.createElement("button");
  nextButton.className = "carousel-button next";
  nextButton.innerHTML =
    '<span class="material-symbols-outlined">arrow_forward_ios</span>';
  nextButton.setAttribute("aria-label", "Next slide");

  const dotsContainer = document.createElement("div");
  dotsContainer.className = "carousel-dots";

  // Crear los elementos de cada card como un slide
  projects.forEach((project, index) => {
    const listItem = document.createElement("li");
    listItem.className = `carousel-slide`;
    listItem.setAttribute("data-slide-index", index);
    if (index === 0) listItem.classList.add("active");

    const card = document.createElement("div");
    card.className = "project-card";

    const anchor = document.createElement("a");
    anchor.href = project.link;
    anchor.target = "_blank";
    anchor.rel = "noopener noreferrer";
    anchor.className = "project-link";

    const img = document.createElement("img");
    img.src =
      project.imgSrc ||
      "https://via.placeholder.com/300x200?text=Project+Preview";
    img.alt = project.imgAlt;
    img.className = "project-image";

    const h3 = document.createElement("h3");
    h3.className = "project-title";
    h3.textContent = project.title;

    const p = document.createElement("p");
    p.className = "project-description";
    p.textContent = project.description;

    const button = document.createElement("button");
    button.className = "view-btn";
    button.textContent = "View App";

    // Create dot indicator for this slide
    const dot = document.createElement("button");
    dot.className = "carousel-dot";
    dot.setAttribute("data-slide-index", index);
    if (index === 0) dot.classList.add("active");
    dot.setAttribute("aria-label", `Go to slide ${index + 1}`);
    dotsContainer.appendChild(dot);

    // Structure in the DOM
    card.append(img, h3, p, button);
    anchor.appendChild(card);
    listItem.appendChild(anchor);
    carouselTrack.appendChild(listItem);
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

  function initCarousel() {
    const slides = document.querySelectorAll(".carousel-slide");
    const dots = document.querySelectorAll(".carousel-dot");
    const prev = document.querySelector(".carousel-button.prev");
    const next = document.querySelector(".carousel-button.next");
    const track = document.querySelector(".carousel-track");

    let currentSlide = 0;
    const slideCount = slides.length;

    // Function to update active slide
    function goToSlide(index) {
      // Handle edge cases
      if (index < 0) index = slideCount - 1;
      if (index >= slideCount) index = 0;

      // Update current slide index
      currentSlide = index;

      // Update classes for slides
      slides.forEach((slide, i) => {
        slide.classList.remove("active", "prev", "next");

        if (i === currentSlide) {
          slide.classList.add("active");
        } else if (i === (currentSlide - 1 + slideCount) % slideCount) {
          slide.classList.add("prev");
        } else if (i === (currentSlide + 1) % slideCount) {
          slide.classList.add("next");
        }
      });

      // Update active dot
      dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === currentSlide);
      });
    }

    // Event listeners for navigation
    prev.addEventListener("click", () => {
      goToSlide(currentSlide - 1);
    });

    next.addEventListener("click", () => {
      goToSlide(currentSlide + 1);
    });

    // Event listeners for dots
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        goToSlide(index);
      });
    });

    // Set up swipe functionality for touch devices
    let touchStartX = 0;
    let touchEndX = 0;

    track.addEventListener("touchstart", (e) => {
      touchStartX = e.changedTouches[0].screenX;
    });

    track.addEventListener("touchend", (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    });

    function handleSwipe() {
      const threshold = 50; // Minimum swipe distance

      if (touchEndX < touchStartX - threshold) {
        // Swipe left - go to next slide
        goToSlide(currentSlide + 1);
      } else if (touchEndX > touchStartX + threshold) {
        // Swipe right - go to previous slide
        goToSlide(currentSlide - 1);
      }
    }

    // Start with first slide active
    goToSlide(0);
  }

  return section;
};

export default Projects;
