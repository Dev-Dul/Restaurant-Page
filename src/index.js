import "./styles.css";
import { home } from "./home.js";
import menuEngine from "./menu.js";
import aboutEngine from "./about.js";
import reviewsEngine from "./reviews.js";

const homeBtn = document.getElementById("home-btn");
const menuBtn = document.getElementById("menu-btn");
const aboutBtn = document.getElementById("about-btn");
const reviewsBtn = document.getElementById("rev-btn");
const content = document.getElementById("content");

function clear(){
  // const allArr = document.querySelectorAll(".active");
  // allArr.forEach(all => {
  //   all.classList.remove("active");
  // });

  // if(document.querySelectorAll(".items") !== null){
  //   const mArr = document.querySelectorAll("#content *")
  //   mArr.forEach((marr) => {
  //     marr.classList.add("hidden");
  //   });
  // }

  content.innerHTML = '';
  // setTimeout(() => {
  // }, 1000);
}

document.addEventListener("DOMContentLoaded", () => {
  
  
  menuBtn.addEventListener("click", () => {
    clear();
    menuEngine.geneRATE();
    setTimeout(() => {
      menuEngine.decoRATE();
    }, 10000);
    console.log("menu button clicked!!");
  });


  homeBtn.addEventListener("click", () => {
    clear();
    home.geneRATE();
    setTimeout(() => {
      home.decoRATE();
    }, 5000);
  });


  aboutBtn.addEventListener("click", () => {
    clear();
    aboutEngine.geneRATE();
    setTimeout(() => {
      aboutEngine.decoRATE();
    }, 5000);
  });

  reviewsBtn.addEventListener("click", () => {
    clear();
    reviewsEngine.geneRATE();
    reviewsEngine.decoRATE();
  });

  home.geneRATE();
  home.decoRATE();

});