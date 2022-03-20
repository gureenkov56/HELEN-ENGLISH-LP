document.addEventListener("DOMContentLoaded", () => {
  const roundedText = document.getElementById("roundedText");
  let strForRound =
    "ENGLISH BY HELEN ONLINE ENGLISH BY HELEN ONLINE ENGLISH BY HELEN ";

  for (let i = 0; i < strForRound.length; i++) {
    const letter = strForRound[i];
    console.log(letter);
    let newSpan = document.createElement("span");
    newSpan.innerHTML = letter;
    roundedText.appendChild(newSpan);
  }

  const letter = document.querySelectorAll(".rounded_text > span");
  let currentDeg = 0;
  let deg = 360 / letter.length;

  // for create
  setTransformRotateForLetter();

  // for first animation
  setTimeout(() => {
    setTransformRotateForLetter();
  }, 0);

  // for repeat animation
  setInterval(() => {
    setTransformRotateForLetter();
  }, 35000);

  // helen face animate
  document.querySelector(".HelenFace").style.filter = "none";

  // animate neon text
  let firstImg = document.querySelector(".firstSectionTitle");

  setTimeout(() => {
    OnOffNeon(firstImg, "./img/english-online-on.png", 500);
    OnOffNeon(firstImg, "./img/english-online-off.png", 550);
    OnOffNeon(firstImg, "./img/english-online-off.png", 700);
    OnOffNeon(firstImg, "./img/english-online-off.png", 750);
    OnOffNeon(firstImg, "./img/english-online-on.png", 1000);

    OnOffNeon(firstImg, "./img/english-online-off.png", 3000);
    OnOffNeon(firstImg, "./img/english-online-on.png", 3100);
  }, 0);

  // scroll

  const understandBtn = document.querySelector(".understandBtn"),
  scrollToWhyMe = document.getElementById('scrollToWhyMe'),
  scrollToPrice = document.getElementById('scrollToPrice'),
  scrollToLetsGo = document.getElementById('scrollToLetsGo'),
    secondSection = document.getElementById("second"),
	thirdSection = document.getElementById('third'),
	fourthSection = document.getElementById('fourth');

  understandBtn.addEventListener("click", () => {
	secondSection.scrollIntoView({behavior: 'smooth'})
  });

  scrollToWhyMe.addEventListener("click", () => {
	secondSection.scrollIntoView({behavior: 'smooth'})
  });

  scrollToPrice.addEventListener("click", () => {
	thirdSection.scrollIntoView({behavior: 'smooth'})
  });

  scrollToLetsGo.addEventListener("click", () => {
	fourthSection.scrollIntoView({behavior: 'smooth'})
  });

  function setTransformRotateForLetter() {
    letter.forEach((el) => {
      el.style.transform = `rotate(${currentDeg}deg)`;
      currentDeg += deg;
    });
  }

  function OnOffNeon(DOMimg, newsrc, timeout) {
    console.log("time", timeout);
    setTimeout(() => {
      DOMimg.setAttribute("src", newsrc);
    }, timeout);
  }
});
