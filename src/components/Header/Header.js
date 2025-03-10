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

    // Add click event listener for smooth scrolling with offset
    a.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = item.href.substring(1); // Remove the # from the href
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        // Get header height for offset
        const headerHeight =
          document.querySelector(".main-header").offsetHeight;

        // Calculate the target position with offset
        const targetPosition =
          targetElement.getBoundingClientRect().top +
          window.scrollY -
          headerHeight;

        // Smooth scroll to the target position
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
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
