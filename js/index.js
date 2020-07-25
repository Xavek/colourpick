// selectors

const btn = document.querySelector(".bgcolor");

const btnClick = document.querySelector("button");

const rgbClick = document.querySelector(".rgb-link");

//setting the colors for simple
const colors = ["red", "black", "blue", "white", "green", "yellow", "#848ccf"];

// adding event listners
rgbClick.addEventListener("click", function () {
  alert("You are now in RGB Mode.");
});

btnClick.addEventListener("click", function () {
  document.body.style.backgroundColor = colors[randomSimpleColor()];
  bgColor = document.querySelector("body").style.backgroundColor;

  btn.textContent = "(" + bgColor + ")";
});

function randomSimpleColor() {
  return Math.floor(Math.random() * colors.length);
}
