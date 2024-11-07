const img = document.getElementById("imgs");
const logo = document.getElementById("lg-logo");
const covers = document.querySelectorAll(".cover");
const hstory = document.querySelector(".head h2");
const briefP = document.querySelector(".brief p");
const imgs = document.querySelectorAll(".img-box img");
const spans = document.querySelectorAll(".lg-logo h2 span");
const year = document.getElementById("year");
const yearh2 = document.querySelector(".year .text h2");
const yearp = document.querySelector(".year .text p");



// about.addEventListener("click", () => {

// })

window.addEventListener("load", () => {
    hstory.classList.add("active");
    briefP.classList.add("active");
});


const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                imgs.forEach(img => {
                    img.classList.add("active");  
                });

                covers.forEach(cover => {
                    cover.classList.add("active");
                });

                // spans.forEach(span => {
                //     span.classList.add("active");
                // });

            }else{

                imgs.forEach(img => {
                    img.classList.remove("active");
                });

                covers.forEach((cover) => {
                  cover.classList.remove("active");
                });

                // spans.forEach((span) => {
                //   span.classList.remove("active");
                // });
            }
        })
    }, {threshold: 0.5}
);

const observer2 = new IntersectionObserver(
    entries => {
        console.log(entries);
        entries.forEach(entry => {
            if(entry.isIntersecting){
                spans.forEach(span => {
                    span.classList.add("active");
                });

                setTimeout(() => {
                    spans.forEach((span) => {
                      span.classList.add("bg");
                    });
                }, 3000);

                year.style.border = "2px solid red";
                yearh2.classList.add("active");
                yearp.classList.add("active");

            }else{
                spans.forEach((span) => {
                  span.classList.remove("active");
                  span.classList.remove("bg");
                });

                year.style.border = "none";
                yearh2.classList.remove("active");
                yearp.classList.remove("active");
            }
        })
    }, {threshold: 0.5}
);

observer.observe(img);
observer2.observe(logo);
observer2.observe(year);