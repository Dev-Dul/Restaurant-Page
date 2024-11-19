import imgBank from "./images.js";
const menuBtn = document.getElementById("menu-btn");
const content = document.getElementById("content");

const menuEngine = (function(){
    function geneRATE(){
        const classes = ["top", "bottom", "footer"];
        for (let i = 0; i < 3; i++) {
          let div = document.createElement("div");
          div.setAttribute("class", classes[i]);

          content.appendChild(div);
        }

        // First div engine (Top)
        const cls = ["first", "second"];
        const btn = ["Breakfast", "Lunch", "Dinner", "Specials"];
        for (let i = 0; i < 2; i++) {
          let div2 = document.createElement("div");
          div2.setAttribute("class", cls[i]);

          if (i === 0) {
            let h2 = document.createElement("h2");
            h2.textContent = "Taste the culinary art of Sizzle.";
            div2.appendChild(h2);
          } else {
            let nav = document.createElement("nav");
            for (let j = 0; j < 4; j++) {
              let bt = document.createElement("button");
              bt.textContent = btn[j];

              nav.appendChild(bt);
            }

            div2.appendChild(nav);
          }
          content.children[0].appendChild(div2);
        }

        // Second Div Engine (Bottom)
        const lic = [
          "Lorem ipsum dolor sit amet.",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          "Lorem ipsum dolor sit amet consectetur.",
          "Lorem ipsum dolor, sit amet consectetur adipisicing.",
          "Lorem ipsum dolor sit amet.",
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
          " consectetur adipisicing elit. Tenetur, velit.",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iure, nobis officiis expedita in et!",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, vero",
        ];

        let licounter  = 0;
        function liFactory(){
          let li = document.createElement("li");
          let spanli = document.createElement("span");
          spanli.setAttribute("class", "arrow");
          li.append(spanli);

          li.setAttribute("style", `--li: ${licounter + 1}`);
          li.setAttribute("class", "hidden");
          li.append(document.createTextNode(lic[licounter]));

          if(licounter < lic.length){
            licounter++;
          }else if(licounter >= lic.length){
            licounter = 0;
          }
          // console.log(spanli);
          return li;
        }

        let imgCounter = 0;
        function imgFactory(){
          let img = document.createElement("img");
          img.src = imgBank[imgCounter];

          if(imgCounter < imgBank.length){
            imgCounter++;
          }

          return img;
        }

        const show = [
          "showcase one",
          "showcase two",
          "showcase three",
          "showcase four",
        ];
        const imgs = [
          "img-showcase one",
          "img-showcase two",
          "img-showcase three",
          "img-showcase four",
        ];

        for (let i = 0; i < 4; i++) {
          let div3 = document.createElement("div");
          div3.setAttribute("class", show[i]);

          let it = document.createElement("div");
          let img = document.createElement("div");
          let ul = document.createElement("ul");
          img.setAttribute("class", imgs[i]);

          for (let l = 0; l < 10; l++) {
            ul.appendChild(liFactory());
            img.appendChild(imgFactory());
          }

          it.setAttribute("class", "items hidden");
          if (i !== 0) {
            it.setAttribute("style", `--h: ${i + 1}`);
            img.setAttribute("style", `--h: ${i + 1}`);
          } else if (i === 1) {
            img.setAttribute("style", "--h: 1");
          }

          it.appendChild(ul);
          div3.appendChild(it);
          div3.appendChild(img);
          content.children[1].appendChild(div3);
        }

        // Third Div Factory (Footer)

        let footerh2 = document.createElement("h2");
        let footerp1 = document.createElement("p");
        let footerp2 = document.createElement("p");

        footerh2.textContent = "Sizzle.";
        footerp1.textContent = "Making delicious memories since 2000";
        footerp2.textContent = "Come Join Us!";

        content.children[2].appendChild(footerh2);
        content.children[2].appendChild(footerp1);
        content.children[2].appendChild(footerp2);

        // DECORATE

        const items = document.querySelectorAll(".items");
        const imgShowcase = document.querySelectorAll(".img-showcase");
        let imgIndex = 0;

        // window.addEventListener("load", () => {
        //   const li = items[0].querySelectorAll("ul > li");

        //   items[0].classList.remove("hidden");
        //   imgShowcase[0].classList.add("active");

        //   li.forEach((eli) => {
        //     eli.classList.remove("hidden");
        //   });

        // });

        menuBtn.addEventListener("click", () => {
          const li = items[0].querySelectorAll("ul > li");
          console.log(li);

          items[0].classList.remove("hidden");
          imgShowcase[0].classList.add("active");
          console.log(items[0]);
          console.log(imgShowcase[0]);

          li.forEach((eli) => {
            eli.classList.remove("hidden");
          });

          items.forEach((item, index) => {
            const lis = item.querySelectorAll("ul > li");
            let currIMgs = imgShowcase[index].querySelectorAll("img");
            // Run a loop through all li elements and attach an event listener to each one
            lis.forEach((tli, index) => {
              tli.addEventListener("click", () => {
                // hide all other elements whose event hasn't been triggered
                lis.forEach((inner) => {
                  inner.classList.remove("selected");
                  inner.style.opacity = "0.5";
                  let span = inner.querySelector("span");
                  span.classList.remove("display");
                  currIMgs.forEach((cimg) => {
                    cimg.classList.remove("active");
                  });
                });
                // Body background effect
                console.log(currIMgs[index].src);
                document.body.style.backgroundImage = `url(${currIMgs[index].src})`;
                document.body.style.backgroundPosition = "-50px 150px";
                document.body.style.backgroundSize = "110vh";
                document.body.style.backgroundRepeat = "no-repeat";
                document.body.style.backdropFilter = "blur(10px)";

                // Show the element on focus
                tli.classList.add("selected");
                tli.style.opacity = "1";
                let sp = tli.querySelector("span");
                sp.classList.add("display");
                currIMgs[index].classList.add("active");
                imgIndex++;

                // console.log(tli);
              });
            });
          });
        });

        const buttons = document.querySelectorAll(".second nav button");
        buttons.forEach((btn, index) => {
          btn.addEventListener("click", () => {
            buttons.forEach((bt) => {
              bt.classList.remove("selected");
            });

            btn.classList.add("selected");
            items.forEach((it) => {
              let itk = it.querySelectorAll("ul > li");
              it.classList.add("hidden");
              it.classList.remove("active");

              itk.forEach((el) => {
                el.classList.add("hidden");
              });
            });

            imgShowcase.forEach((im) => {
              im.classList.remove("active");
            });

            items[index].classList.add("active");
            imgShowcase[index].classList.add("active");
            console.log(imgShowcase[index]);
            let itli = items[index].querySelectorAll("ul > li");
            itli.forEach((itl) => {
              itl.classList.remove("hidden");
            });
          });
        });
    }

    // function decoRATE(){
    //   const items = document.querySelectorAll(".items");
    //   const imgShowcase = document.querySelectorAll(".img-showcase");
    //   let imgIndex = 0;

    //   // window.addEventListener("load", () => {
    //   //   const li = items[0].querySelectorAll("ul > li");

    //   //   items[0].classList.remove("hidden");
    //   //   imgShowcase[0].classList.add("active");

    //   //   li.forEach((eli) => {
    //   //     eli.classList.remove("hidden");
    //   //   });
        
    //   // });

    //   menuBtn.addEventListener("click", () => {
    //     const li = items[0].querySelectorAll("ul > li");
    //     console.log(li);

    //     items[0].classList.remove("hidden");
    //     imgShowcase[0].classList.add("active");
    //     console.log(items[0]);
    //     console.log(imgShowcase[0]);


    //     li.forEach((eli) => {
    //       eli.classList.remove("hidden");
    //     });

    //     items.forEach((item, index) => {
    //       const lis = item.querySelectorAll("ul > li");
    //       let currIMgs = imgShowcase[index].querySelectorAll("img");
    //       // Run a loop through all li elements and attach an event listener to each one
    //       lis.forEach((tli, index) => {
    //         tli.addEventListener("click", () => {
    //           // hide all other elements whose event hasn't been triggered
    //           lis.forEach((inner) => {
    //             inner.classList.remove("selected");
    //             inner.style.opacity = "0.5";
    //             let span = inner.querySelector("span");
    //             span.classList.remove("display");
    //             currIMgs.forEach((cimg) => {
    //               cimg.classList.remove("active");
    //             });
    //           });
    //           // Body background effect
    //           console.log(currIMgs[index].src);
    //           document.body.style.backgroundImage = `url(${currIMgs[index].src})`;
    //           document.body.style.backgroundPosition = "-50px 150px";
    //           document.body.style.backgroundSize = "110vh";
    //           document.body.style.backgroundRepeat = "no-repeat";
    //           document.body.style.backdropFilter = "blur(10px)";

    //           // Show the element on focus
    //           tli.classList.add("selected");
    //           tli.style.opacity = "1";
    //           let sp = tli.querySelector("span");
    //           sp.classList.add("display");
    //           currIMgs[index].classList.add("active");
    //           imgIndex++;

    //           // console.log(tli);
    //         });
    //       });
    //     });
    //   });

    //   const buttons = document.querySelectorAll(".second nav button");
    //   buttons.forEach((btn, index) => {
    //     btn.addEventListener("click", () => {
    //       buttons.forEach((bt) => {
    //         bt.classList.remove("selected");
    //       });

    //       btn.classList.add("selected");
    //       items.forEach((it) => {
    //         let itk = it.querySelectorAll("ul > li");
    //         it.classList.add("hidden");
    //         it.classList.remove("active");

    //         itk.forEach((el) => {
    //           el.classList.add("hidden");
    //         });
    //       });

    //       imgShowcase.forEach((im) => {
    //         im.classList.remove("active");
    //       });

    //       items[index].classList.add("active");
    //       imgShowcase[index].classList.add("active");
    //       console.log(imgShowcase[index]);
    //       let itli = items[index].querySelectorAll("ul > li");
    //       itli.forEach((itl) => {
    //         itl.classList.remove("hidden");
    //       });
    //     });
    //   });
    // }

    return {geneRATE};

})();

export default menuEngine;