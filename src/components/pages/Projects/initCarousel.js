export function initCarousel() {
  //Selecciono todos los slides (tarjetas del proyecto)
  const slides = document.querySelectorAll(".carousel-slide");

  //Selecciono todos los puntos de navegación (dots)
  const dots = document.querySelectorAll(".carousel-dot");

  //Botones de anterior y siguiente (corregido)
  const prev = document.querySelector(".carousel-button.prev");
  const next = document.querySelector(".carousel-button.next");

  //Contenedor que detecta el deslizamiento táctil
  const track = document.querySelector(".carousel-track");

  //Estado inicial que es el slide actual
  let currentSlide = 0;

  //Número total de slides
  const slideCount = slides.length;

  //Función para moverse a un slide específico
  function goToSlide(index) {
    // Handle edge cases (infinite loop)
    if (index < 0) index = slideCount - 1;
    if (index >= slideCount) index = 0;

    //Update actual index
    currentSlide = index;

    //Actualizar clases de los slides (solo uno activo)
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
  prev?.addEventListener("click", () => {
    goToSlide(currentSlide - 1);
  });

  next?.addEventListener("click", () => {
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

  track?.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });

  track?.addEventListener("touchend", (e) => {
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
