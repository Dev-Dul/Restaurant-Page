import "./styles.css";
import { home } from "./home.js";
import menuEngine from "./menu.js";
import aboutEngine from "./about.js";
import revEngine from "./reviews.js";
import '@fortawesome/fontawesome-free/css/all.css';


const homeBtn = document.getElementById("home-btn");
const menuBtn = document.getElementById("menu-btn");
const aboutBtn = document.getElementById("about-btn");
const reviewsBtn = document.getElementById("rev-btn");
const navBtns = document.querySelectorAll("#header nav button");
const content = document.getElementById("content");

function clear(arg = 0){

  
  if(arg === 1){
    console.log("Nuke it!!");
    document.body.style.cssText = '';

    Object.assign(document.body.style, {
        margin: '0',
        padding: '0',
        minHeight: '100vh',
        width: '100%',
        overflowX: 'hidden',
        background: '#fff',
        fontFamily: "leg",
        fontWeight: 'bold',
        transition: 'all 0.5s ease'
        // backdropFilter: 'blur(0px)',
    });
  }

  content.innerHTML = '';


}

document.addEventListener("DOMContentLoaded", () => {
  

  navBtns.forEach((navBtn, index) => {
    navBtn.addEventListener("click", () => {
      navBtns.forEach(btn => {
        btn.classList.remove("selected");
      });

      if(index !== 3){
        navBtns.forEach((navbtn) => {
          navbtn.classList.remove("revs");
        });
      }

      navBtns[index].classList.add("selected");
    });
  })
  

  homeBtn.addEventListener("click", () => {
    clear(1);
    home.geneRATE();
    home.decoRATE();
  });


  menuBtn.addEventListener("click", () => {
    clear();
    menuEngine.geneRATE();
    menuEngine.decoRATE();
    console.log("menu button clicked!!");
  });



  aboutBtn.addEventListener("click", () => {
    clear(1);
    aboutEngine.geneRATE();
    aboutEngine.decoRATE();
  });


  reviewsBtn.addEventListener("click", () => {
    clear(1);
    revEngine.geneRATE();
    revEngine.decoRATE();
  });

  home.geneRATE();
  home.decoRATE();
  homeBtn.classList.add("selected");

});