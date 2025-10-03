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
        // SOLO activar la pestaña - Tabs.js se encargará del scroll
        const tabButton = document.querySelector(`.tab-btn[data-tab="${targetId}"]`);
        if (tabButton) {
          window.isTabNavigationFromHeader = true;
          tabButton.click();
        }
      } else {
        // Manejar con normalidad otras navegaciones
        const target = document.querySelector(item.href);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }

      // Cerrar menú móvil si estaba abierto
      nav.classList.remove("active");
    });

    li.appendChild(a);
    ul.appendChild(li);
  });

  // Botón hamburguesa
  const menuToggle = document.createElement("button");
  menuToggle.className = "menu-toggle";
  menuToggle.innerHTML = "☰";
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });

  header.appendChild(h2); // título
  header.appendChild(nav); // nav con menu-list
  nav.appendChild(ul); // lista del menú
  header.appendChild(menuToggle); // botón hamburguesa

  return header;
};

export default Header;
