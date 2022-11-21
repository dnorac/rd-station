const play = document.querySelector(".player");
const modal = document.querySelector(".modal-wrapper");
const close = document.querySelector(".modal-close");
const video = document.querySelector(".modal-content");

export default function () {
  play.addEventListener("click", () => {
    modal.classList.add("active-modal");
    video.setAttribute(
      "src",
      "https://www.youtube.com/embed/lGCesaaLi4s?autoplay=1"
    );
  });

  close.addEventListener("click", () => {
    modal.classList.remove("active-modal");
    video.setAttribute("src", "https://www.youtube.com/embed/lGCesaaLi4s");
  });

  modal.addEventListener("click", () => {
    modal.classList.remove("active-modal");
    video.setAttribute("src", "https://www.youtube.com/embed/lGCesaaLi4s");
  });
}