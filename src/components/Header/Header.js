// Header.js
import "./Header.css";

const Header = () => {
  const header = document.createElement("header");
  header.className = "main-header";

  const h2 = document.createElement("h2");
  h2.textContent = "Rencel Dayrit Cube";

  const nav = document.createElement("nav");
  nav.className = "navBar";

  const ul = document.createElement("ul");
  ul.className = "menu-list";

  // Menu items
  const menuItems = [
    { text: "About Me", href: "#about" },
    { text: "Experience", href: "#experience" },
    { text: "Education", href: "#education" },
    { text: "Projects", href: "#projects" },
  ];

  menuItems.forEach((item) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = item.text;
    a.href = item.href;

    // Añadir click event listener para un smooth scrolling con offset
    a.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = item.href.substring(1); // quita el #

      // Caso especial: Experience / Education viven en tabs
      if (targetId === "experience" || targetId === "education") {
        const tabsSection = document.getElementById("experience-education");
        if (tabsSection) {
          // Scroll al contenedor de las tabs
          tabsSection.scrollIntoView({ behavior: "smooth", block: "start" });

          // Activar la pestaña correcta después del scroll
          setTimeout(() => {
            const tabButton = document.querySelector(`.tab-btn[data-tab="${targetId}"]`);
            if (tabButton) {
              window.isTabNavigationFromHeader = true;
              tabButton.click();

              // Ajuste final: scroll al contenido activo (experience/education)
              const targetPanel = document.getElementById(targetId);
              targetPanel?.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          }, 100);
          return; // salir aquí, no seguir al else
        }
      }

      // Manejar con normalidad otras navegaciones
      const target = document.querySelector(item.href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });

    li.appendChild(a);
    ul.appendChild(li);
  });

  header.appendChild(h2);
  nav.appendChild(ul);
  header.appendChild(nav);

  return header;
};

export default Header;
