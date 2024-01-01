function generateRandomColor(y, b) {
  const yellow = Math.floor(Math.random() * (y - 155) + 155);
  const blue = Math.floor(Math.random() * (b - 100) + 100);
  return `rgb(${yellow}, ${yellow}, ${blue})`;
}

const elm = { a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7, i: 8, j: 9 };

function firstState() {
  document.body.appendChild(elm["a"]);
  elm["a"].appendChild(elm["b"]);
  elm["b"].appendChild(elm["c"]);
  elm["c"].appendChild(elm["d"]);
  elm["b"].appendChild(elm["e"]);
  elm["b"].appendChild(elm["g"]);
  document.body.appendChild(elm["f"]);
  elm["f"].appendChild(elm["h"]);

  elm["a"].classList.add("container");
  elm["b"].classList.add("container");
  elm["c"].classList.add("container");
  elm["d"].classList.add("container");
  elm["e"].classList.add("container");
  elm["f"].classList.add("container");
  elm["g"].classList.add("container");
  elm["h"].classList.add("container");
}

function dif() {
  elm["b"].removeChild(elm["e"]);
  elm["b"].removeChild(elm["c"]);
  elm["g"].appendChild(elm["c"]);
  elm["f"].appendChild(elm["i"]);
  elm["h"].appendChild(elm["j"]);
  elm["i"].classList.add("container");
  elm["j"].classList.add("container");
}
function onButtonClickSet() {
 const buttonTag = document.getElementsByTagName("button")[0];
 buttonTag.textContent = "Reset";
 buttonTag.addEventListener("click", firstPage);
 Object.keys(elm).forEach((element) => {
   const noode = document.createTextNode(element);
   elm[element].appendChild(noode);
 });
 dif();

  const newWidth = elm["f"].offsetWidth * 1.5;
  elm["f"].style.width = newWidth + "px";
  elm["f"].style.height = newWidth + "px";
  const elements = Array.from(elm["a"].querySelectorAll(".container > div"));
  elements.forEach((element) => {
    const randomColor = generateRandomColor(255, 0);
    element.style.backgroundColor = randomColor;
  });
  const f = generateRandomColor(0, 255);
  elm["f"].style.backgroundColor = f;
  const fElements = Array.from(elm["f"].querySelectorAll(".container > div"));
  fElements.forEach((element) => {
    const randomColor = generateRandomColor(0, 255);
    element.style.backgroundColor = randomColor;
  });
}

function firstPage() {
  document.body.innerHTML = "";
  const buttonTag = document.createElement("button");
  buttonTag.textContent = "Click Me!";
  buttonTag.addEventListener("click", onButtonClickSet);
  document.body.appendChild(buttonTag);
  Object.keys(elm).forEach((element) => {
    elm[element] = document.createElement("div");
  });

  firstState();
}

window.onload = firstPage;
