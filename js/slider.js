const slideBtn1 = document.querySelector(".auto-btn1");
const slideBtn2 = document.querySelector(".auto-btn2");
const slideBtn3 = document.querySelector(".auto-btn3");
const slideBtn4 = document.querySelector(".auto-btn4");
const slideBtn5 = document.querySelector(".auto-btn5");
const slideBtn6 = document.querySelector(".auto-btn6");
const slider = document.querySelector(".slider");

const card1 = document.querySelector(".card1");
const card2 = document.querySelector(".card2");
const card3 = document.querySelector(".card3");
const card4 = document.querySelector(".card4");
const card5 = document.querySelector(".card5");
const card6 = document.querySelector(".card6");

let drag = false;

export default function () {
  slider.addEventListener("mousedown", () => (drag = false));
  slider.addEventListener("mousemove", () => (drag = true));

  slideBtn1.addEventListener("click", slide1);
  slideBtn2.addEventListener("click", slide2);
  slideBtn3.addEventListener("click", slide3);
  slideBtn4.addEventListener("click", slide4);
  slideBtn5.addEventListener("click", slide5);
  slideBtn6.addEventListener("click", slide6);

  card1.addEventListener("click", slide2);
  card2.addEventListener("click", slide3);
  card3.addEventListener("click", slide4);
  card4.addEventListener("click", slide5);
  card5.addEventListener("click", slide6);
  card6.addEventListener("click", slide1);

  function slide1() {
    slider.style.transition = "transform 0.5s";
    slider.style.transform = "translateX(55em)";
    slideBtn1.classList.add("background-btn");
    slideBtn2.classList.remove("background-btn");
    slideBtn3.classList.remove("background-btn");
    slideBtn4.classList.remove("background-btn");
    slideBtn5.classList.remove("background-btn");
    slideBtn6.classList.remove("background-btn");
  }

  function slide2() {
    slider.style.transition = "transform 0.5s";
    slider.style.transform = "translateX(33em)";
    slideBtn2.classList.add("background-btn");
    slideBtn1.classList.remove("background-btn");
    slideBtn3.classList.remove("background-btn");
    slideBtn4.classList.remove("background-btn");
    slideBtn5.classList.remove("background-btn");
    slideBtn6.classList.remove("background-btn");
  }

  function slide3() {
    slider.style.transition = "transform 0.5s";
    slider.style.transform = "translateX(11em)";
    slideBtn3.classList.add("background-btn");
    slideBtn1.classList.remove("background-btn");
    slideBtn2.classList.remove("background-btn");
    slideBtn4.classList.remove("background-btn");
    slideBtn5.classList.remove("background-btn");
    slideBtn6.classList.remove("background-btn");
  }

  function slide4() {
    slider.style.transition = "transform 0.5s";
    slider.style.transform = "translateX(-11em)";
    slideBtn4.classList.add("background-btn");
    slideBtn1.classList.remove("background-btn");
    slideBtn2.classList.remove("background-btn");
    slideBtn3.classList.remove("background-btn");
    slideBtn5.classList.remove("background-btn");
    slideBtn6.classList.remove("background-btn");
  }

  function slide5() {
    slider.style.transition = "transform 0.5s";
    slider.style.transform = "translateX(-33em)";
    slideBtn5.classList.add("background-btn");
    slideBtn1.classList.remove("background-btn");
    slideBtn2.classList.remove("background-btn");
    slideBtn3.classList.remove("background-btn");
    slideBtn4.classList.remove("background-btn");
    slideBtn6.classList.remove("background-btn");
  }

  function slide6() {
    slider.style.transition = "transform 0.5s";
    slider.style.transform = "translateX(-55em)";
    slideBtn6.classList.add("background-btn");
    slideBtn1.classList.remove("background-btn");
    slideBtn2.classList.remove("background-btn");
    slideBtn3.classList.remove("background-btn");
    slideBtn4.classList.remove("background-btn");
    slideBtn5.classList.remove("background-btn");
  }
}
