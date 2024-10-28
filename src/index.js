console.log("Hello World!");
const header = document.getElementById("header");
const flow = document.getElementById("flow");
const mid = document.getElementById("mid");
const txt = document.getElementById("intro-txt"),
      btns =  document.querySelectorAll("button"),
      h1 =  document.getElementsByTagName("h1"),
      sub =  document.getElementById("sub"),
      award =  document.getElementById("award"),
      awimgs =  document.querySelectorAll(".award div img"),
      awtxt =  document.querySelectorAll(".award div h2 span, .award div p span"),
      video = document.getElementById("video"),
      vidpar = video.parentElement;
      mids =  document.getElementsByClassName("mids"),
      par =  document.getElementById("par"),
      boxp =  document.getElementById("boxp"),
      himgs =  document.getElementsByClassName("himg"),
      boxes =  document.querySelectorAll(".boxes div"),
      imgs =  document.querySelectorAll(".img-left img"),
      imgs2 =  document.querySelectorAll(".img-right img");



      
flow.addEventListener("animationend", () => {
  Array.from(h1[0].querySelectorAll("span")).forEach((el) => {
    el.classList.add("active");
  });
  sub.classList.add("active");

  function checkActivation() {
    const spansActive = Array.from(h1[0].querySelectorAll("span")).every((el) =>
      el.classList.contains("active")
    );
    const subActive = sub.classList.contains("active");

    // Only proceed if all spans and sub are active
    if(spansActive && subActive) {
      Array.from(mids).forEach((mid) => {
        mid.classList.add("active");
      });
    }
  }

  // Check activation after the classes have been added
  setTimeout(checkActivation, 5000); // Small delay if needed to ensure order
});


const flowObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting === false){
        header.classList.add("active");
        btns.forEach((btn) => {
          btn.classList.add("active");
        });
      }else{
        header.classList.remove("active");
        btns.forEach((btn) => {
          btn.classList.remove("active");
        });
      }
    })
  }
);

flowObserver.observe(flow);


const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
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


       if(boxp.querySelector("div.boxes div:nth-last-child(1)").classList.contains("active")){
         setTimeout(() => {
           imgs.forEach((img) => {
             img.classList.add("active");
           })
           imgs2.forEach((img2) => {
             img2.classList.add("active");
           })
         }, 2000);
        }



      }else{
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
    })
  }, {threshold: 0.5}
);

observer.observe(par);
observer.observe(award);


function playVid(){
  let oldScroll = window.scrollY; 
  window.addEventListener("scroll", () => {
    if(oldScroll < window.scrollY){
      if(video.currentTime < video.duration){
          video.currentTime += (window.scrollY / 500) * 0.018;
        }   
    }else{
      video.currentTime -= (window.scrollY / 500) * 0.018;
       
    }
    oldScroll = window.scrollY;

  });
}

const vidObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        vidpar.classList.add("active");
        video.classList.add("active");
        playVid();
        // video.play();
      }
    });
  }, {threshold: 0.5}
);

vidObserver.observe(vidpar);


