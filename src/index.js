import "./styles.css";
import { home } from "./home.js";
import menuEngine from "./menu.js";


const homeBtn = document.getElementById("home-btn");
const menuBtn = document.getElementById("menu-btn");
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
    // menuEngine.decoRATE();
    console.log("menu button clicked!!");
  });


  homeBtn.addEventListener("click", () => {
    clear();
    home.geneRATE();
    home.decoRATE();
  });


  home.geneRATE();
  home.decoRATE();

});