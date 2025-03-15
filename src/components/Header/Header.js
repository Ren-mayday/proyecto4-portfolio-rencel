import "./Header.css";

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
    { text: "About Me", href: "#about-me" },
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
      const targetId = item.href.substring(1); // Quita el #

      // Condicional para las tabs
      if (targetId === "experience" || targetId === "education") {
        // Selecciona las tabs
        const tabsSection = document.getElementById("experience-education");

        if (tabsSection) {
          // Obtener altura de cabecera para offset
          const headerHeight = header.offsetHeight;

          // Calcular el target position con offset
          const targetPosition =
            tabsSection.getBoundingClientRect().top +
            window.scrollY -
            headerHeight;

          // Smooth scroll para las tabs section
          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });

          // Encontrar y clickar la tab button correspondiente después del scrolling
          setTimeout(() => {
            const tabButton = document.querySelector(
              `.tab-btn[data-tab="${targetId}"]`
            );
            if (tabButton) {
              // Establece una flag en window para indicar que se trata de una navegación desde la cabecera
              window.isTabNavigationFromHeader = true;
              tabButton.click();
            }
          }, 500); // 500 milisegundos
        }
      } else {
        // Manejar con normalidad otras navegaciones
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          // Obtener altura de cabecera para offset
          const headerHeight = header.offsetHeight;

          // Calcular la posición del objetivo con desplazamiento
          const targetPosition =
            targetElement.getBoundingClientRect().top +
            window.scrollY -
            headerHeight;

          // Smooth scroll hasta la posición de destino
          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });
        }
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
