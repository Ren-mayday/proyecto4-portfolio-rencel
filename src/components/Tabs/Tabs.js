import "./Tabs.css";
import Education from "../pages/Education/Education.js";
import Experience from "../pages/Experience/Experience.js";

const Tabs = () => {
  const section = document.createElement("section");
  section.id = "experience-education";
  section.className = "tabs-section";

  // Crear tabs container
  const tabsContainer = document.createElement("div");
  tabsContainer.className = "tabs-container";

  // Crear tab buttons
  const tabButtons = document.createElement("div");
  tabButtons.className = "tab-buttons";

  const experienceBtn = document.createElement("button");
  experienceBtn.textContent = "Experience";
  experienceBtn.className = "tab-btn active";
  experienceBtn.setAttribute("data-tab", "experience");

  const educationBtn = document.createElement("button");
  educationBtn.textContent = "Education";
  educationBtn.className = "tab-btn";
  educationBtn.setAttribute("data-tab", "education");

  // Crear content containers
  const experienceContent = document.createElement("div");
  experienceContent.className = "tab-content active";
  experienceContent.id = "experience";
  experienceContent.appendChild(Experience());

  const educationContent = document.createElement("div");
  educationContent.className = "tab-content";
  educationContent.id = "education";
  educationContent.appendChild(Education());

  // Añadir click event listeners a los buttons
  const handleTabClick = (e) => {
    const tabId = e.target.getAttribute("data-tab");

    // Actualizar button states
    document.querySelectorAll(".tab-btn").forEach((btn) => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");

    // Actualizar visibilidad del contenido
    document.querySelectorAll(".tab-content").forEach((content) => {
      content.classList.remove("active");
    });

    const targetContent = document.getElementById(tabId);
    targetContent.classList.add("active");

    // Scroll en la tab section
    const headerHeight = document.querySelector(".main-header").offsetHeight;
    const tabsPosition =
      section.getBoundingClientRect().top + window.scrollY - headerHeight;

    window.scrollTo({
      top: tabsPosition,
      behavior: "smooth",
    });
  };

  experienceBtn.addEventListener("click", handleTabClick);
  educationBtn.addEventListener("click", handleTabClick);

  // Handle direct navigation to tabs from header
  window.addEventListener("DOMContentLoaded", () => {
    // Check if URL has a hash that matches our tabs
    const hash = window.location.hash;
    if (hash === "#experience" || hash === "#education") {
      // Remove the # from the hash
      const tabId = hash.substring(1);

      // Find the button with the matching data-tab attribute
      const button = document.querySelector(`.tab-btn[data-tab="${tabId}"]`);

      // If found, simulate a click
      if (button) {
        setTimeout(() => {
          button.click();
        }, 100); // Short delay to ensure the page has fully loaded
      }
    }
  });

  // Append everything
  tabButtons.appendChild(experienceBtn);
  tabButtons.appendChild(educationBtn);
  tabsContainer.appendChild(tabButtons);
  tabsContainer.appendChild(experienceContent);
  tabsContainer.appendChild(educationContent);
  section.appendChild(tabsContainer);

  return section;
};

export default Tabs;
