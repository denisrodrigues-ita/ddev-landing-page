export const hamburgerMenu = (toggleMenu, navLink) => {
  const hamburger = document.querySelector(toggleMenu);
  const navLinks = document.querySelector(navLink);

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
  });
};
