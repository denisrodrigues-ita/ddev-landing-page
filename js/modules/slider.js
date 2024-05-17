export const slider = (slide) => {
  let intervalId;
  const slides = document.querySelector(slide);
  const slideWidth = slides.children[0].offsetWidth;
  let currentSlideIndex = 0;

  function showSlide() {
    const totalSlides = slides.children.length;

    for (let i = 0; i < totalSlides; i++) {
      slides.children[i].style.display = "none";
    }

    slides.children[currentSlideIndex].style.display = "block";
    currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
  }

  function moveSlides() {
    slides.appendChild(slides.firstElementChild.cloneNode(true));

    const newOffset = -1 * slideWidth;

    slides.style.transition = "transform 0.5s linear";
    slides.style.transform = `translateX(${newOffset}px)`;

    setTimeout(() => {
      slides.style.transition = "none";
      slides.style.transform = "translateX(0)";
      slides.removeChild(slides.firstElementChild);
    }, 500);
  }

  function setupSlider() {
    const isMobile = window.matchMedia("(max-width: 480px)").matches;

    clearInterval(intervalId);

    if (isMobile) {
      const totalSlides = slides.children.length;

      for (let i = 0; i < totalSlides; i++) {
        slides.children[i].style.display = "none";
      }

      currentSlideIndex = 0;
      showSlide();
      intervalId = setInterval(showSlide, 3000);
    } else {
      const totalSlides = slides.children.length;

      for (let i = 0; i < totalSlides; i++) {
        slides.children[i].style.display = "block";
      }

      intervalId = setInterval(moveSlides, 3000);
    }
  }

  setupSlider();

  window.addEventListener('resize', () => {
    setupSlider();
  });
};
