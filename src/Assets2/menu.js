const menuEngine = (function(){
    function geneRATE(){
        const content = document.getElementById("content");
        const firstArr = ['top', 'bottom', 'footer'];

        for(let i = 0; i < 3; i++){
            let div = document.createElement("div");
            div.setAttribute("class", firstArr[i]);

            content.appendChild(div);
        }


        // First div Engine (Top)
        const topArr = ['first', 'second'];

        for (let i = 0; i < 2; i++) {
          let div2 = document.createElement("div");
          div2.setAttribute("class", topArrArr[i]);
            if(i === 0){
                let h2 = document.createElement("h2");
                h2.textContent = "Discover Our Special Menu";
                div2.appendChild(h2);
            }else{
                let nav = document.createElement("nav");
                const navArr = ["Breakfast", "Lunch", "Dinner", "Specials"];

                for(let b = 0; b < 4; b++){
                    let btn = document.createElement("button");
                    btn.textContent = navArr[b];
                    nav.appendChild(btn);
                }

                div2.appendChild(nav);
            }
            content[0].appendChild(div2);
        }


        // Second Div Engine (bottom)
        const botArr = ["showcase one", "showcase two", "showcase three", "showcase four"];
        const imgArr = ["img-showcase one", "img-showcase two", "img-showcase three", "img-showcase four"];
        function liFactory(){
            let i = 0;
            const li = document.createElement("li");
            const spanli = document.createElement("span");
            li.setAttribute("class", "hidden");
            li.setAttribute("style", `--li: ${i + 1}`);
            spanli.setAttribute("class", "arrow");
            li.appendChild(spanli);
            li.textContent = "";

            i++;

            return li;
        }

        function imgFactory(){
            let i = 0;
            const img = document.createElement("img");
            img.src = "";
            i++;

            return img;
        }


        for(let i = 0; i < 4; i++){
            let div3 = document.createElement("div");
            div3.setAttribute("class", botArr[i]);

            // Create the two innermost parent elements (.items and .img-showcase);
            let div4 = document.createElement("div");
            let imgShow = document.createElement("div");

            div4.setAttribute("class", "items hidden");
            let ul = document.createElement("ul");
            for(let j = 0; j < 10; j++){
                ul.appendChild(liFactory());
                imgShow.appendChild(imgFactory());
            }

            if(i !== 0){
                div4.setAttribute("style", `--h: ${i + 1}`);
            }
            div4.appendChild(ul);
            div3.appendChild(div4);
            
            imgShow.setAttribute("class", imgArr[i]);
            imgShow.setAttribute("style", `--h: ${i + 1}`);
            div3.appendChild(imgShow);

            content[1].appendChild(div3);

        }


        // Third Div Engine (Footer)
        let footerh2 = document.createElement("h2");
        let footerp1 = document.createElement("p");
        let footerp2 = document.createElement("p");

        footerh2.textContent = "Sizzle";
        footerp1.textContent = "Making delicious memories since 2000.";
        footerp2.textContent = "Come Join Us!.";

        content[2].appendChild(footerh2);
        content[2].appendChild(footerp1);
        content[2].appendChild(footerp2);


    }
})