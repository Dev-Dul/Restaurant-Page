
import ImgOne from "./Assets3/one.png";
import ImgTwo from "./Assets3/two.png";
import ImgThree from "./Assets3/three.png";

const aboutEngine = (function() {
  const aboutBtn = document.getElementById("about-btn");
  const content = document.getElementById("content");
    function geneRATE(){
        const divArr = [
          "head",
          "brief",
          "imgs",
          "lg-logo",
          "year",
          "contact",
          "footer",
        ];

        for (let i = 0; i < 7; i++) {
          let div = document.createElement("div");
          div.setAttribute("class", divArr[i]);
          div.setAttribute("id", divArr[i]);

          content.appendChild(div);
        }

        // First div (Head)
        let h2 = document.createElement("h2");
        h2.textContent = "Here's Our Story";

        content.children[0].appendChild(h2);

        // Second div (brief)
        let p = document.createElement("p");
        p.textContent = `Lorem ipsum dolor sit amet     consectetur adipisicing elit. Porro magna
          alias perspiciatis eligendi veniam provident, rem nulla voluptatibus,
          voluptas repudiandae officiis rerum quae voluptatum aliquid incidunt.
          Dolore, iusto? Veniam facilis, architecto dolores voluptas labore qui
          obcaecati possimus soluta aut, fugit voluptatem velit impedit
          provident nobis officia numquam minus. Dolor debitis optio magni
          repellendus reprehenderit voluptatibus ex architecto porro neque
          voluptate, totam commodi perspiciatis explicabo nisi recusandae
          expedita soluta corrupti cupiditate laboriosam ut rerum obcaecati.
          Consequatur explicabo dolore obcaecati odio veritatis quod libero
          magni aliquam sed enim. Totam iusto enim fugiat! Minus, laudantium,
          asperiores rem molestiae nobis placeat expedita, sint error voluptates
          assumenda ab. Ad autem quos fugiat enim impedit praesentium labore
          sint molestiae saepe id facilis expedita voluptatem amet repudiandae
          iusto ab facere beatae placeat possimus temporibus, officiis vel est
          unde consectetur. Officia odit mollitia quae, commodi voluptate,
          dignissimos quod accusamus reprehenderit similique nam ab sit ipsum
          magni vitae excepturi? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, vitae eveniet expedita velit beatae minima in cupiditate voluptate id dolores fugiat accusamus fugit? Consequatur a dolorum esse amet excepturi aperiam, officiis quibusdam. Ea veritatis, soluta molestiae repellat voluptates quidem placeat reiciendis delectus quibusdam adipisci veniam numquam tempora pariatur ad nemo ratione quis quod eligendi culpa repellendus, labore debitis odit similique voluptas? Atque minus ea veniam quidem facere quis! Corporis molestiae maiores tenetur omnis inventore odio! Voluptates incidunt quisquam error, pariatur fugiat fugit quae laborum. Sit minima dolore doloribus dignissimos, asperiores nostrum, consequuntur laboriosam odit quas ipsam vel, eum id? Est?`;

        content.children[1].appendChild(p);

        // Thid div (Imgs)
        const imgsArr = ["img-box", "text", "img-box"];
        for (let i = 0; i < 3; i++) {
          let div2 = document.createElement("div");
          div2.setAttribute("class", imgsArr[i]);

          if (i === 0) {
            let img = document.createElement("img");
            img.src = ImgOne;

            div2.appendChild(img);
          } else if (i === 1) {
            let th2 = document.createElement("h2");
            let p = document.createElement("p");
            let spanp = document.createElement("span");
            let spanh2 = document.createElement("span");
            spanp.setAttribute("class", "cover");
            spanh2.setAttribute("class", "cover");

            th2.append(spanh2);
            th2.append(document.createTextNode("The food you've always dreamt of"));

            p.appendChild(spanp);
            p.append(document.createTextNode(`Lorem ipsum dolor sit  amet consectetur adipisicing elit. Magni,
            alias totam accusamus saepe autem temporibus optio ut quisquam sit
            iusto quo necessitatibus neque atque corrupti explicabo quis sint
            nulla dolorum voluptate in et odio unde. Atque libero soluta
            reiciendis amet, dolor, in, minus doloribus reprehenderit velit
            repudiandae sit sed mollitia.`));

            div2.appendChild(th2);
            div2.appendChild(p);
          } else if (i === 2) {
            let img2 = document.createElement("img");
            img2.src = ImgTwo;

            div2.appendChild(img2);
          }

          content.children[2].appendChild(div2);
        }

        // Fourth div (lg-logo)
        const charArr = ["S", "i", "z", "z", "l", "e", "."];
        let lh2 = document.createElement("h2");
        for (let i = 0; i < 7; i++) {
          let span = document.createElement("span");
          span.setAttribute("style", `--s: ${i + 1}`);
          span.textContent = charArr[i];

          lh2.appendChild(span);
        }

        content.children[3].appendChild(lh2);

        // Fifth div (year)
        for (let i = 0; i < 2; i++) {
          let div = document.createElement("div");
          if (i === 0) {
            div.setAttribute("class", "text");
            let h2 = document.createElement("h2");
            h2.textContent = "Cooking magic since 2000";

            let p = document.createElement("p");
            p.textContent = `
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
            consequatur debitis id commodi totam deserunt, distinctio itaque in!
            Numquam non incidunt quaerat, sit magni officia odio, veniam libero
            placeat nam ducimus enim perspiciatis, cupiditate ratione.
            Praesentium laudantium corporis quibusdam fugit, modi fugiat hic
            iste voluptatem numquam. Nam corporis suscipit ullam quo? Eum
            excepturi odit esse autem. Ducimus inventore laudantium iure labore
            debitis iste hic, voluptatem, molestias, iusto sunt asperiores cum?
          `;

            div.appendChild(h2);
            div.appendChild(p);
          } else if (i === 1) {
            let img = document.createElement("img");
            img.src = ImgThree;

            div.appendChild(img);
          }

          content.children[4].appendChild(div);
        }

        // Sixth div (Contact)
        let form = document.createElement("form");
        let fh2 = document.createElement("h2");
        fh2.textContent = "Send Us a message!";

        let fbody = document.createElement("div");
        fbody.setAttribute("class", "form-body");

        for (let i = 0; i < 1; i++) {
          let div = document.createElement("div");
          let div2 = document.createElement("div");
          div.setAttribute("class", "inputbox");
          div2.setAttribute("class", "inputbox");

          for (let j = 0; j < 2; j++) {
            let input = document.createElement("input");
            let span = document.createElement("span");
            input.setAttribute("required", "");

            if (j === 0) {
              input.setAttribute("id", "name");
              input.setAttribute("type", "text");
              span.textContent = "Name";
              div.appendChild(input);
              div.appendChild(span);
            } else if (j === 1) {
              input.setAttribute("id", "email");
              input.setAttribute("type", "email");
              span.textContent = "Email";
              div2.appendChild(input);
              div2.appendChild(span);
            }

          }

          fbody.appendChild(div);
          fbody.appendChild(div2);
        }

        let button = document.createElement("button");
        button.textContent = "Send";
        fbody.appendChild(button);

        form.appendChild(fh2);
        form.appendChild(fbody);
        content.children[5].appendChild(form);

        // Seventh Div (Footer)
        let fth2 = document.createElement("h2");
        let fp = document.createElement("p");
        let fp2 = document.createElement("p");

        fth2.textContent = "Sizzle";
        fp.textContent = "Making delicious memories since 2000";
        fp2.textContent = "Come Join Us";

        content.children[6].appendChild(fth2);
        content.children[6].appendChild(fp);
        content.children[6].appendChild(fp2);

    }

    function decoRATE(){
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
        const yearImg = document.querySelector(".year div img");


        setTimeout(() => {
          hstory.classList.add("active");
          briefP.classList.add("active");
        }, 1000);
    
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                imgs.forEach((img) => {
                  img.classList.add("active");
                });

                covers.forEach((cover) => {
                  cover.classList.add("active");
                });

                
              } else {
                imgs.forEach((img) => {
                  img.classList.remove("active");
                });

                covers.forEach((cover) => {
                  cover.classList.remove("active");
                });

            
              }
            });
          },
          { threshold: 0.5 }
        );

        const observer2 = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                if (entry.target.classList.contains("lg-logo")) {
                  spans.forEach((span) => {
                    span.classList.add("active");
                  });

                  setTimeout(() => {
                    spans.forEach((span) => {
                      span.classList.add("bg");
                    });
                  }, 3000);
                } else if (entry.target.classList.contains("year")) {
                  yearh2.classList.add("active");
                  yearp.classList.add("active");
                  yearImg.classList.add("active");
                }
              } else {
                if (entry.target.classList.contains("lg-logo")) {
                  spans.forEach((span) => {
                    span.classList.remove("active");
                    span.classList.remove("bg");
                  });
                } else if (entry.target.classList.contains("year")) {
                  yearh2.classList.remove("active");
                  yearp.classList.remove("active");
                  yearImg.classList.remove("active");
                }
              }
            });
          },
          { threshold: 0.5 }
        );

        observer.observe(img);
        observer2.observe(logo);
        observer2.observe(year);
    }

    return {geneRATE, decoRATE};
})();

export default aboutEngine;