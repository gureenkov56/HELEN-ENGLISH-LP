document.addEventListener("DOMContentLoaded", () => {
  /****************
   * ROUNDED TEXT *
   ****************/
  const roundedText = document.querySelector(".first_rounded_text_wrapper");
  let strForRound =
    "ENGLISH BY HELEN ONLINE ENGLISH BY HELEN ONLINE ENGLISH BY HELEN ";

  for (let i = 0; i < strForRound.length; i++) {
    const letter = strForRound[i];
    let newDiv = document.createElement("div");
    newDiv.innerHTML = letter;
    newDiv.classList.add("rounded_text_item");
    roundedText.appendChild(newDiv);
  }

  const letter = document.querySelectorAll(".rounded_text_item");
  let currentDeg = 0;
  let deg = 360 / letter.length;

  // for create
  letter.forEach((el) => {
    el.style.transform = `rotate(${currentDeg}deg)`;
    currentDeg += deg;
  });

  // brightness element filter none
  const brightnessElemts = document.querySelectorAll(".brightness");
  brightnessElemts.forEach((el) => {
    el.style.filter = "none";
  });

  // neon animate
  const neons = document.querySelectorAll(".neon_title");
  setTimeout(() => {
    onOffNeons(neons, "on");
  }, 1200);

  setTimeout(() => {
    onOffNeons(neons, "off");
  }, 1300);

  setTimeout(() => {
    onOffNeons(neons, "on");
  }, 1350);

  neons.forEach((el) => {
    setInterval(() => {
      el.classList.add("neon_off");
      setTimeout(() => {
        el.classList.remove("neon_off");
      }, 100);
    }, (Math.random() * 5 + 5) * 1000);
  });

  function onOffNeons(neons, switchStatus) {
    neons.forEach((el) => {
      if (switchStatus == "on") {
        el.classList.remove("neon_off");
      } else {
        el.classList.add("neon_off");
      }
    });
  }

  //  setInterval(() => {
  //    neons.forEach((el) => {
  //      el.classList.toggle("neon_off");
  //    });
  //  }, 50);

  // animate neon text
  //  let firstImg = document.querySelector(".firstSectionTitle");

  //  setTimeout(() => {
  //    OnOffNeon(firstImg, "./img/english-online-on.png", 500);
  //    OnOffNeon(firstImg, "./img/english-online-off.png", 550);
  //    OnOffNeon(firstImg, "./img/english-online-off.png", 700);
  //    OnOffNeon(firstImg, "./img/english-online-off.png", 750);
  //    OnOffNeon(firstImg, "./img/english-online-on.png", 1000);

  //    OnOffNeon(firstImg, "./img/english-online-off.png", 3000);
  //    OnOffNeon(firstImg, "./img/english-online-on.png", 3100);
  //  }, 0);

  // scroll

  const understandBtn = document.querySelector(".understandBtn"),
    scrollToWhyMe = document.getElementById("scrollToWhyMe"),
    scrollToPrice = document.getElementById("scrollToPrice"),
    scrollToLetsGo = document.getElementById("scrollToLetsGo"),
    secondSection = document.getElementById("second"),
    thirdSection = document.getElementById("third"),
    fourthSection = document.getElementById("fourth");

  //  understandBtn.addEventListener("click", () => {
  //	secondSection.scrollIntoView({behavior: 'smooth'})
  //  });

  //  scrollToWhyMe.addEventListener("click", () => {
  //	secondSection.scrollIntoView({behavior: 'smooth'})
  //  });

  //  scrollToPrice.addEventListener("click", () => {
  //	thirdSection.scrollIntoView({behavior: 'smooth'})
  //  });

  //  scrollToLetsGo.addEventListener("click", () => {
  //	fourthSection.scrollIntoView({behavior: 'smooth'})
  //  });

  function OnOffNeon(DOMimg, newsrc, timeout) {
    setTimeout(() => {
      DOMimg.setAttribute("src", newsrc);
    }, timeout);
  }
});
