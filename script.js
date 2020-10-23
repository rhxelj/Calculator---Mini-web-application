const app = document.querySelector(".App");
const calcKeys = [
  ["1", "2", "3", "+"],
  ["4", "5", "6", "-"],
  ["7", "8", "9", "*"],
  ["C", "0", "=", "/"],
];
const oper = ["+", "-", "*", "/"];
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
  function btnHit(event) {
    let myValue = this.innerText;
    let myCal = outPut.innerText;
    if (myCal == "0") {
      myCal = "";
    }

    if (myValue == "=") {
      myCal = eval(myCal);
    } else {
      let lastChar = myCal.substring(myCal.length - 1);
      console.log(lastChar);

      if (oper.includes(myValue)) {
        if (oper.includes(lastChar)) {
          myCal = myCal.substring(0, myCal.length - 1);
        } else {
          myCal = eval(myCal);
        }
      }
      myCal = myCal + myValue;
    }
    if (myValue == "C") {
      myCal = 0;
    }
    outPut.innerText = myCal;

    // if (outPut.innerText == "0") {
    //   outPut.innerText = "";
    // }
    // if (this.innerText == "C") {
    //   outPut.innerText = "0";
    // }
    // if (this.innerText == "=") {
    //   outPut.innerText = eval(outPut.innerText);
    // } else {
    //   outPut.innerText += this.innerText;
    // }
  }
});
