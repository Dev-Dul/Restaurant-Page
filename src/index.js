import "./styles.css";
import { home } from "./home.js";
import menuEngine from "./menu.js";
import aboutEngine from "./about.js";
import reviewsEngine from "./reviews.js";

const homeBtn = document.getElementById("home-btn");
const menuBtn = document.getElementById("menu-btn");
const aboutBtn = document.getElementById("about-btn");
const reviewsBtn = document.getElementById("rev-btn");

document.addEventListener("DOMContentLoaded", () => {
  home.geneRATE();
  home.decoRATE();

  
});