/*import "./Tabs.css";
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

    // 🔥 FIX: quitar el # en getElementById
    const targetContent = document.getElementById(tabId);
    if (targetContent) targetContent.classList.add("active");

    // Scroll suave a la sección (si no viene desde header)
    if (!window.isTabNavigationFromHeader) {
      const headerHeight = document.querySelector(".main-header").offsetHeight;
      const tabsPosition = section.getBoundingClientRect().top + window.scrollY - headerHeight;

      window.scrollTo({
        top: tabsPosition,
        behavior: "smooth",
      });
    }

    window.isTabNavigationFromHeader = false;
  };

  experienceBtn.addEventListener("click", handleTabClick);
  educationBtn.addEventListener("click", handleTabClick);

  // Navegación directa a las pestañas desde la cabecera (por hash al cargar)
  window.addEventListener("DOMContentLoaded", () => {
    const hash = window.location.hash;
    if (hash === "#experience" || hash === "#education") {
      const tabId = hash.substring(1);
      const button = document.querySelector(`.tab-btn[data-tab="${tabId}"]`);
      if (button) {
        window.isTabNavigationFromHeader = true;
        setTimeout(() => {
          button.click();
        }, 100);
      }
    }
  });

  // Enlaces del header (#experience / #education)
  document.addEventListener("click", (evt) => {
    const link = evt.target.closest('a[href^="#"]');
    if (!link) return;
    const href = link.getAttribute("href");
    if (href === "#experience" || href === "#education") {
      const tabId = href.substring(1);
      const btn = section.querySelector(`.tab-btn[data-tab="${tabId}"]`);
      if (btn) {
        window.isTabNavigationFromHeader = true;
        btn.click();
      }
    }
  });

  // Si cambia el hash manualmente
  window.addEventListener("hashchange", () => {
    const h = window.location.hash;
    if (h === "#experience" || h === "#education") {
      const tabId = h.substring(1);
      const btn = section.querySelector(`.tab-btn[data-tab="${tabId}"]`);
      if (btn) {
        window.isTabNavigationFromHeader = true;
        btn.click();
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

export default Tabs;*/
