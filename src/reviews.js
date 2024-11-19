const reviewsEngine = (function(){
    const revBtn = document.getElementById("rev-btn");
    const content = document.getElementById("content");
    function geneRATE(){
        const divCl = ["cust", "footer"];
        for (let i = 0; i < 2; i++) {
          let div = document.createElement("div");
          div.setAttribute("class", divCl[i]);

          content.appendChild(div);
        }

        // First Div (Cust)
        const hArr = ["heading", "reviews"];
        for (let i = 0; i < 2; i++) {
          let div = document.createElement("div");
          div.setAttribute("class", hArr[i]);

          if (i === 0) {
            let h2 = document.createElement("h2");
            let span = document.createElement("span");
            let br = document.createElement("br");
            span.appendChild(br);
            span.textContent = "love Us!";

            h2.textContent = "Here's Why Our Customers";
            h2.appendChild(span);
            div.appendChild(h2);
          } else if (i === 1) {
            const revArr = [
              "Rayhaan",
              "John Doe",
              "Jane Doe",
              "Abdul",
              "Aisha",
              "Muhammad",
              "Hauwa",
              "Al-amin",
              "Umm",
              "Lorem, Ipsum",
            ];
            for (let j = 0; j < 10; j++) {
              let div2 = document.createElement("div");
              let h3 = document.createElement("h3");
              let p = document.createElement("p");

              div2.setAttribute("class", "rev");
              div2.setAttribute("style", `--r: ${j + 1}`);
              h3.textContent = revArr[j];
              p.textContent =
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur aperiam blanditiis hic porro sit aspernatur, voluptatum est itaque? Iste ut enim hic consequatur aliquam. Doloribus quod quos cupiditate ipsam ea.";

              div2.appendChild(h3);
              div2.appendChild(p);

              div.appendChild(div2);
            }
          }

          content.children[0].appendChild(div);
        }

        // Second Div (Footer)
        let footerh2 = document.createElement("h2");
        let footerp = document.createElement("p");
        let footerp2 = document.createElement("p");

        footerh2.textContent = "Sizzle";
        footerp.textContent = "Making delicious memories since 2000";
        footerp2.textContent = "Come Join Us";

        content.children[1].appendChild(footerh2);
        content.children[1].appendChild(footerp);
        content.children[1].appendChild(footerp2);
    }

    function decoRATE(){
        const h2 = document.querySelector(".heading > h2");
        const revs = document.querySelectorAll(".rev");

        window.addEventListener("load", () => {
          h2.classList.add("active");
          revs.forEach((rev) => {
            rev.classList.add("active");
          });
        });

        revBtn.addEventListener("click", () => {
          h2.classList.add("active");
          revs.forEach((rev) => {
            rev.classList.add("active");
          });
        });

    }

    return {geneRATE, decoRATE};
})();

export default reviewsEngine;