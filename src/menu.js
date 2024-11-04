import imgBank from "./images.js";
const menuEngine = (function(){
    function geneRAte(){
        const content = document.getElementById("content");

        const classes = ["top", "bottom", "footer"];
        for (let i = 0; i < 4; i++) {
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
            h2.textContent = "Discover Our Special Menu";
            div2.appendChild(h2);
          } else {
            let nav = document.createElement("nav");
            for (let j = 0; j < 4; j++) {
              let btn = document.createElement("button");
              btn.textContent = btn[j];

              nav.appendChild(btn);
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
        function liFactory() {
          let i = 0;
          let li = document.createElement("li");
          let spanli = document.createElement("span");
          spanli.setAttribute("class", "arrow");

          li.setAttribute("style", `--li: ${i + 1}`);
          li.setAttribute("class", "hidden");
          li.appendChild(spanli);
          li.textContent = lic[i];

          i++;
          return li;
        }

        function imgFactory() {
          let i = 0;
          let img = document.createElement("img");
          img.src = imgBank[i];

          i++;
          return li;
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
    }


})