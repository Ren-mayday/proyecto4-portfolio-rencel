import "./Footer.css";

const Footer = () => {
  const footer = document.createElement("footer");
  footer.className = "footer-section";

  const divfooter = document.createElement("div");
  divfooter.className = "footer-content";

  const pfooter = document.createElement("p");
  pfooter.innerHTML =
    "Created by <a href='https://github.com/Ren-mayday?tab=repositories'>Rencel Dayrit Cube</a> ©️"; // Texto temporal

  divfooter.appendChild(pfooter); // Agrega el <p> dentro del div
  footer.appendChild(divfooter); // Agrega el div al footer

  return footer;
};

export default Footer;
