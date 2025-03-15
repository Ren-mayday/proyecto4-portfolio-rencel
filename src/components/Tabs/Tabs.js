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

    // Sólo scroll si no se trata de una navegación de cabecera
    if (!window.isTabNavigationFromHeader) {
      // Scroll en la tab section
      const headerHeight = document.querySelector(".main-header").offsetHeight;
      const tabsPosition =
        section.getBoundingClientRect().top + window.scrollY - headerHeight;

      window.scrollTo({
        top: tabsPosition,
        behavior: "smooth",
      });
    }

    // Reset flag
    window.isTabNavigationFromHeader = false;
  };

  experienceBtn.addEventListener("click", handleTabClick);
  educationBtn.addEventListener("click", handleTabClick);

  // Navegación directa a las pestañas desde la cabecera
  window.addEventListener("DOMContentLoaded", () => {
    // Verificar si URL tiene hash que coincide con las tabs
    const hash = window.location.hash;
    if (hash === "#experience" || hash === "#education") {
      // Quitar #
      const tabId = hash.substring(1);

      // Buscar el botón con el atributo data-tab correspondiente
      const button = document.querySelector(`.tab-btn[data-tab="${tabId}"]`);

      // Si se encuentra, simular el click
      if (button) {
        // Set flag para evitar el desplazamiento adicional
        window.isTabNavigationFromHeader = true;
        setTimeout(() => {
          button.click();
        }, 100); // delay para asegurar que la página se ha cargado completamente
      }
    }
  });

  // Append todo los elementos
  tabButtons.appendChild(experienceBtn);
  tabButtons.appendChild(educationBtn);
  tabsContainer.appendChild(tabButtons);
  tabsContainer.appendChild(experienceContent);
  tabsContainer.appendChild(educationContent);
  section.appendChild(tabsContainer);

  return section;
};

export default Tabs;
