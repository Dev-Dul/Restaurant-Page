// import imgBank from "./images";

const items = document.querySelectorAll(".items");
const imgShowcase = document.querySelectorAll(".img-showcase");
let imgIndex = 0;

window.addEventListener("load", () => {
    const li = items[0].querySelectorAll("ul > li");


    items[0].classList.remove("hidden");
    imgShowcase[0].classList.add("active");

    li.forEach((eli) => {
      eli.classList.remove("hidden");
    });

    items.forEach((item, index) => {
        const lis = item.querySelectorAll("ul > li");
        let currIMgs = imgShowcase[index].querySelectorAll("img");
        // Run a loop through all li elements and attach an event listener to each one
        lis.forEach((tli, index) => {
            tli.addEventListener("click", () => {
                // hide all other elements whose event has'nt been triggered
                lis.forEach((inner) => {
                    inner.classList.remove("selected");
                    inner.style.opacity = "0.5";
                    let span = inner.querySelector("span");
                    span.classList.remove("display");
                    currIMgs.forEach(cimg => {
                        cimg.classList.remove("active");
                    })
                });
                // Body background effect
                console.log(currIMgs[index].src);
                document.body.style.backgroundImage = `url(${currIMgs[index].src})`;
                
                // Show the element on focus
                tli.classList.add("selected");
                tli.style.opacity = "1";
                let sp = tli.querySelector("span");
                sp.classList.add("display");
                currIMgs[index].classList.add("active");
                imgIndex++;
                
                console.log(tli);
            });
        });
    })
})

const buttons = document.querySelectorAll(".second nav button");
buttons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        buttons.forEach(bt => {
            bt.classList.remove("selected");
        });

        btn.classList.add("selected");
        items.forEach((it) => {
            let itk = it.querySelectorAll("ul > li");
            it.classList.add("hidden");
            it.classList.remove("active");

            itk.forEach(el => {
                el.classList.add("hidden");
            })
        })

        imgShowcase.forEach((im) => {
            im.classList.remove("active");
        })


        items[index].classList.add("active");
        imgShowcase[index].classList.add("active");   
        console.log(imgShowcase[index]);
        let itli = items[index].querySelectorAll("ul > li");
        itli.forEach((itl) => {
            itl.classList.remove("hidden");
        })
    })
})

