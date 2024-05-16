export const animateRight = (anima_right) => {
  const animateRight = document.querySelectorAll(anima_right);
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        const { target, isIntersecting, intersectionRatio } = entry;
        if (isIntersecting && intersectionRatio >= 0.2) {
          target.classList.add("show");
        } else {
          target.classList.remove("show");
        }
      });
    },
    { threshold: 0.2 }
  );
  animateRight.forEach((element) => {
    observer.observe(element);
  });
};

export const animateLeft = (anima_left) => {
  const animateLeft = document.querySelectorAll(anima_left);
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        const { target, isIntersecting, intersectionRatio } = entry;
        if (isIntersecting && intersectionRatio >= 0.2) {
          target.classList.add("show");
        } else {
          target.classList.remove("show");
        }
      });
    },
    { threshold: 0.2 }
  );
  animateLeft.forEach((element) => {
    observer.observe(element);
  });
};
