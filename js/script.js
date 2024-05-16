import { currentYear } from "./modules/currentYear.js";
import { slider } from "./modules/slider.js";
import { smoothScroll } from "./modules/smoothScroll.js";
import { animateLeft, animateRight } from "./modules/animations.js";
import { hamburgerMenu } from "./modules/hamburgerMenu.js";

smoothScroll(".scroll-link");
slider(".slides");
currentYear("currentYear");
animateRight(".animate-right");
animateLeft(".animate-left");
hamburgerMenu(".toggle-menu", ".nav__links");
