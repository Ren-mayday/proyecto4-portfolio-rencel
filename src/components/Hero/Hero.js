import "./Hero.css";

const Hero = () => {
  const section = document.createElement("section");
  section.id = "hero";
  section.className = "hero-section";

  section.innerHTML = `
  <div class="hero-content">
    <div class="welcome-text">
      <div class="title-container">
        <h1>I am a <span>web developer</span></h1>
        <div class="location-tag">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" stroke-width="2"/>
            <path d="M12 22C16 18 20 14.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 14.4183 8 18 12 22Z" stroke="currentColor" stroke-width="2"/>
          </svg>
          Based in Barcelona
        </div>
      </div>
      <a href="mailto:rencel.dayrit@gmail.com" class="btn-contact-me">Contact Me</a>
    </div>
    <div class="image-container hexagon-image">
      <img src="/assets/Rencelshades.jpg" class="hero-image" alt="Image of developer">
    </div>
  </div>`;

  return section;
};

export default Hero;
