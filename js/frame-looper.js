const string = "oportunidades";
const array = string.split("");
let loopTimer;

export default function frameLooper() {
  if (array.length > 0) {
    document.querySelector("#opportunity-text").innerHTML += array.shift();
  } else {
    clearTimeout(loopTimer);
  }
  loopTimer = setTimeout(frameLooper, 110);
}