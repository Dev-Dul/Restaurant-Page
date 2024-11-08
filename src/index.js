const h2 = document.querySelector(".heading > h2");
const revs = document.querySelectorAll(".rev");



window.addEventListener("load", () => {
    h2.classList.add("active");
    revs.forEach((rev) => {
      rev.classList.add("active");
    }); 
})
