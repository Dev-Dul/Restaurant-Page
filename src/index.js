import "./styles.css";
import { home } from "./home.js";
import menuEngine from "./menu.js";
import aboutEngine from "./about.js";
import reviewsEngine from "./reviews.js";
import { container } from "webpack";

const homeBtn = document.getElementById("home-btn");
const menuBtn = document.getElementById("menu-btn");
const aboutBtn = document.getElementById("about-btn");
const reviewsBtn = document.getElementById("rev-btn");
const content = document.getElementById("content");

function clear(){
  const allArr = document.querySelectorAll(".active");
  allArr.forEach(all => {
    all.classList.remove("active");
  });

  if(document.querySelectorAll(".items").length > 0){
    const mArr = document.querySelectorAll("#content *")
    mArr.forEach((marr) => {
      marr.classList.add("hidden");
    });
  }

  setTimeout(() => {
    content.replaceChildren();
  }, 3000)
}

document.addEventListener("DOMContentLoaded", () => {
  home.geneRATE();
  home.decoRATE();

  homeBtn.addEventListener("click", () => {
    clear();
    home.geneRATE();
    home.decoRATE();
  });

  menuBtn.addEventListener("click", () => {
    clear();
    menuBtn.geneRATE();
  });

  homeBtn.addEventListener("click", () => {
    clear();
    home.geneRATE();
    home.decoRATE();
  });
  homeBtn.addEventListener("click", () => {
    clear();
    home.geneRATE();
    home.decoRATE();
  });

});