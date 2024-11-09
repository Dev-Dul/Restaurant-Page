import imageMid from "./Assets/ImageMid.png";
import sideDishImage from "./Assets/sideDishPhoto.jpg";
import leftAnim from "./Assets/left-anim.png";
import rightAnim from "./Assets/right-anim.png";
import theVid from "./Assets/theVid.mp4";
import leftTop from "./Assets/left-top.png";
import rightBottom from "./Assets/right-bottom.png";

const home = (function () {
  function geneRATE() {
    const content = document.getElementById("content");
    const classNames = ["hero-section", "mid", "award", "vid", "day", "footer"];
    const idNames = ["flow", "mid", "award", "vidpar", "par", "footer"];

    for (let i = 0; i < 5; i++) {
      let div = document.createElement("div");
      div.setAttribute("class", classNames[i]);
      div.setAttribute("id", idNames[i]);
      content.appendChild(div);
    }

    // First Div Engine(Intro-Txt)

    let firstDiv = document.createElement("div");
    firstDiv.setAttribute("class", "left");
    firstDiv.setAttribute("id", "intro-txt");
    let p = document.createElement("p");
    p.setAttribute("id", "sub");
    p.setAttribute("class", "sub");
    p.textContent = "Flavors that feel just like home.";

    const spanText = ["Food..,", "Just the way", "you love it!."];
    let h1 = document.createElement("h1");

    h1.setAttribute("id", "txt");
    for (let i = 0; i < 3; i++) {
      let span = document.createElement("span");
      span.setAttribute("style", `--j: ${i + 1}`);
      span.textContent = spanText[i];
      h1.appendChild(span);
      h1.appendChild(document.createElement("br"));
    }

    firstDiv.appendChild(h1);
    firstDiv.appendChild(p);
    content.children[0].appendChild(firstDiv);

    // Second Div Engine (mid)
    const secArr = ["left", "right"];
    for (let i = 0; i < 2; i++) {
      let div = document.createElement("div");
      div.setAttribute("class", secArr[i]);
      if (i === 0) {
        let img = document.createElement("img");
        img.setAttribute("class", "hlimg mids");
        img.src = imageMid;

        div.appendChild(img);
      } else {
        let h2 = document.createElement("h2");
        h2.setAttribute("style", `--i: ${i}`);
        h2.setAttribute("class", "ltxt mids");
        h2.textContent = "Authenic taste, crafted with care.";
        let p = document.createElement("p");
        p.setAttribute("style", `--i: ${i + 1}`);
        p.setAttribute("class", "ltxt mids");
        p.textContent = "Food for moments you won't forget.";
        let img2 = document.createElement("img");
        p.setAttribute("class", "ltxt mids");
        img2.setAttribute("class", "btm-img mids");
        img2.src = sideDishImage;

        div.appendChild(h2);
        div.appendChild(p);
        div.appendChild(img2);
      }

      content.children[1].appendChild(div);
    }

    // Third Div Engine (Award)
    const awImgs = [leftAnim, rightAnim];
    for (let i = 0; i < 3; i++) {
      let div = document.createElement("div");
      let img = document.createElement("img");
      img.src = awImgs[i];

      if (i === 1) {
        let h2 = document.createElement("h2");
        h2.textContent = "Your taste buds deserve the best.";
        let p = document.createElement("p");
        p.textContent =
          "Find out why Sizzle is a national treasure among foodies!. ";
        let p2 = document.createElement("p");
        p2.textContent =
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, aspernatur adipisci minima distinctio accusantium et quis at doloremque laudantium aperiam!";
        let elems = [h2, p, p2];

        for (let j = 0; j < 3; j++) {
          let span = document.createElement("span");
          span.setAttribute("style", `--i: ${i + 1}`);
          elems[i].appendChild(span);
        }

        div.appendChild(h2);
        div.appendChild(p);
        div.appendChild(p2);
      } else {
        div.appendChild(img);
      }

      content.children[2].appendChild(div);
    }

    // Fourth Div Engine (Vid)
    let video = document.createElement("video");
    video.setAttribute("muted", true);
    video.setAttribute("id", "video");

    let source = document.createElement("source");
    source.src = theVid;
    source.type = "video/mp4";
    video.appendChild(source);

    content.children[3].appendChild(video);

    // Fifth Div Engine (day)
    const dayArr = ["img-left himg", "bxs", "img-right himg"];
    const dayImgs = [leftTop, rightBottom];
    for (let i = 0; i < 3; i++) {
      let div = document.createElement("div");
      div.setAttribute("class", dayArr[i]);
      let img = document.createElement("img");
      img.src = dayImgs[i];

      if (i === 1) {
        let div2 = document.createElement("div");
        div2.setAttribute("class", "popular-recipes");
        let p = document.createElement("p");
        p.textContent = "Check Out What's Hot Today";
        div2.appendChild(p);

        let div3 = document.createElement("div");
        div3.setAttribute("class", "boxes");
        for (let j = 0; j < 9; j++) {
          let div4 = document.createElement("div");
          div4.setAttribute("style", `--i: ${i + 1}`);

          let p2 = document.createElement("p");
          p2.textContent = "Lorem ipsum dolor sit amet consectetur.";
          div4.appendChild(p2);

          div3.appendChild(div4);
        }

        div.appendChild(div2);
        div.appendChild(div3);
      } else {
        div.appendChild(img);
      }

      content.children[4].appendChild(div);
    }

    // Sixth Div Engine (footer)
    let h2f = document.createElement("h2");
    h2f.textContent = "Sizzle.";

    let pf = document.createElement("p");
    p.textContent = "Making delicious memories since 2000.";

    let pf2 = document.createElement("p");
    pf2.textContent = "Come Join Us!";

    content.children[5].appendChild(h2f);
    content.children[5].appendChild(pf);
    content.children[5].appendChild(pf2);
  }

  function decoRATE() {
    const flow = document.getElementById("flow");
    const mid = document.getElementById("mid");
    const txt = document.getElementById("intro-txt"),
      h1 = document.getElementsByTagName("h1"),
      sub = document.getElementById("sub"),
      award = document.getElementById("award"),
      awimgs = document.querySelectorAll(".award div img"),
      awtxt = document.querySelectorAll(".award div h2 span, .award div p span"),
      video = document.getElementById("video"),
      vidpar = video.parentElement;
      mids = document.getElementsByClassName("mids"),
      par = document.getElementById("par"),
      boxp = document.getElementById("boxp"),
      himgs = document.getElementsByClassName("himg"),
      boxes = document.querySelectorAll(".boxes div"),
      imgs = document.querySelectorAll(".img-left img"),
      imgs2 = document.querySelectorAll(".img-right img");

    flow.addEventListener("animationend", () => {
      Array.from(h1[0].querySelectorAll("span")).forEach((el) => {
        el.classList.add("active");
      });
      sub.classList.add("active");

      function checkActivation() {
        const spansActive = Array.from(h1[0].querySelectorAll("span")).every(
          (el) => el.classList.contains("active")
        );
        const subActive = sub.classList.contains("active");

        // Only proceed if all spans and sub are active
        if (spansActive && subActive) {
          Array.from(mids).forEach((mid) => {
            mid.classList.add("active");
          });
        }
      }

      // Check activation after the classes have been added
      setTimeout(checkActivation, 5000); // Small delay if needed to ensure order
    });

   const flowObserver = new IntersectionObserver((entries) => {
     entries.forEach((entry) => {
       if (entry.isIntersecting === false) {
         header.classList.add("active");
         btns.forEach((btn) => {
           btn.classList.add("active");
         });
       } else {
         header.classList.remove("active");
         btns.forEach((btn) => {
           btn.classList.remove("active");
         });
       }
     });
   });

   flowObserver.observe(flow);


    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            boxp.classList.add("show");

            boxes.forEach((box) => {
              box.classList.add("active");
            });

            awimgs.forEach((awimg) => {
              awimg.classList.add("active");
            });

            awtxt.forEach((awt) => {
              awt.classList.add("active");
            });

            if (boxp.querySelector("div.boxes div:nth-last-child(1)").classList.contains("active")) {
              setTimeout(() => {
                imgs.forEach((img) => {
                  img.classList.add("active");
                });
                imgs2.forEach((img2) => {
                  img2.classList.add("active");
                });
              }, 2000);
            }
          } else {
            awimgs.forEach((awimg) => {
              awimg.classList.remove("active");
            });

            awtxt.forEach((awt) => {
              awt.classList.remove("active");
            });

            // Remove the show class from boxp
            boxp.classList.remove("show");

            par.classList.remove("active");

            // remove classes on the check out what's new boxes
            boxes.forEach((box) => {
              box.classList.remove("active");
            });

            //  remove classes for day's side images
            imgs.forEach((img) => {
              img.classList.remove("active");
            });
            imgs2.forEach((img2) => {
              img2.classList.remove("active");
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(par);
    observer.observe(award);

    function playVid() {
      let oldScroll = window.scrollY;
      window.addEventListener("scroll", () => {
        if (oldScroll < window.scrollY) {
          if (video.currentTime < video.duration) {
            video.currentTime += (window.scrollY / 300) * 0.02;
          }
        } else {
          video.currentTime -= (window.scrollY / 300) * 0.02;
        }
        oldScroll = window.scrollY;
      });
    }

    const vidObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            playVid();
          }
        });
      },
      { threshold: 0.5}
    );

    vidObserver.observe(vidpar);
  }

  return { geneRATE, decoRATE };
})();

export { home };
