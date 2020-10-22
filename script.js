const app = document.querySelector(".App");
const calcKeys = [
  ["1", "2", "3", "+"],
  ["4", "5", "6", "-"],
  ["7", "8", "9", "*"],
  ["C", "0", "=", "/"],
];
const opertors = ["+", "-", "*", "/"];
let outPut;
let keys;
let btn;

document.addEventListener("DOMContentLoaded", function () {
  outPut = document.createElement("div");
  outPut.innerHTML = "0";
  outPut.classList.add("OutPut");
  app.appendChild(outPut);
  console.log(outPut);

  // Build the buttons or calcKeys..
  // keys = document.createElement("div");
  // keys.classList.add("Keys");
  // app.appendChild(keys);

  for (let i = 0; i < calcKeys.length; i++) {
    let div = document.createElement("div");
    div.classList.add("Row");
    calcKeys[i].map((item, index) => {
      btn = document.createElement("div");
      btn.innerHTML = item;
      btn.classList.add("Btn"); //this has to change
      btn.addEventListener("click", btnHit);
      div.appendChild(btn);
    });
    app.appendChild(div);
  }
  function btnHit() {
    console.log("You Clicked a button!!!");
  }
});
