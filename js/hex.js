// init a hex codes

const hexCodes = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];
function randomNum() {
  return Math.floor(Math.random() * hexCodes.length);
}

function generateUniqueHexCode() {
  let myHexCode = "";
  for (let i = 0; i < 6; i++) {
    myHexCode += hexCodes[randomNum()];
  }
  // console.log(myHexCode);
  return myHexCode;
}

//selectors

const btn = document.querySelector(".bgcolor");

const btnClick = document.querySelector("button");

btnClick.addEventListener("click", function (hexaCoding) {
  document.body.style.backgroundColor = "#" + generateUniqueHexCode();
  bgColor = document.querySelector("body").style.backgroundColor;
  btn.textContent = bgColor;
});
