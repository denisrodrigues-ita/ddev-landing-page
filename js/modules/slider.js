export const slider = (slide) => {
  const slides = document.querySelector(slide);
  const slideWidth = slides.children[0].offsetWidth;
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
  setInterval(moveSlides, 3000);
};
