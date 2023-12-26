function generateRandomColor(y, b) {
  const yellow = Math.floor(Math.random() * (y - 155) + 155);
  const blue = Math.floor(Math.random() * (b - 100) + 100);
  return `rgb(${yellow}, ${yellow}, ${blue})`;
}



function onButtonClickSet() {
  document.body.innerHTML = "";
  const buttonTag = document.createElement("button");
  buttonTag.textContent = "Reset";
  buttonTag.addEventListener("click", firstPage);
  document.body.appendChild(buttonTag);

  const elm = { a: 0, b: 1, c: 2, d: 3, f: 4, g: 5, h: 6, i: 7, j: 8 };
  const divElements = [];
  Object.keys(elm).forEach((element) => {
    const div = document.createElement("div");
    div.innerText = element;
    divElements.push(div);
  });

  divElements["f"].style.width = "250px";
  divElements["f"].style.height = "250px";

  const container = document.createElement("div");

  document.body.appendChild(divElements["a"]);
  divElements["a"].appendChild(divElements["b"]);
  divElements["g"].appendChild(divElements["c"]);
  divElements["C"].appendChild(divElements["d"]);
  divElements["b"].appendChild(divElements["g"]);
  document.body.appendChild(divElements["f"]);
  divElements["f"].appendChild(divElements["h"]);
  divElements["f"].appendChild(divElements["i"]);
  divElements["h"].appendChild(divElements["j"]);
  divElements["a"].classList.add("container");
  divElements["b"].classList.add("container");
  divElements["C"].classList.add("container");
  divElements["d"].classList.add("container");
  divElements["g"].classList.add("container");
  divElements["f"].classList.add("container");
  divElements["h"].classList.add("container");
  divElements["i"].classList.add("container");
  divElements["j"].classList.add("container");

  const subTree = Object.values(elm).map((x) => divElements[x]);

  subTree.forEach((x) => {
    if (
      Array.from(divElements["f"].childNodes).includes(x) ||
      Array.from(divElements["f"].childNodes).includes(x)
    ) {
      x.style.backgroundColor = generateRandomColor(0, 255);
    } else {
      x.style.backgroundColor = generateRandomColor(255, 0);
    }
  });
  divElements["f"].style.backgroundColor = generateRandomColor(0, 255);
}

function firstState() {
  const buttonTag = document.createElement("button");
  buttonTag.textContent = "Click Me!";
  buttonTag.addEventListener("click", onButtonClickSet);

  document.body.appendChild(buttonTag);
  const elm = { a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7 };

  Object.keys(elm).forEach((element) => {
    elm[element] = document.createElement("div");
  });

  document.body.appendChild(elm["a"]);
  elm["a"].appendChild(elm["b"]);
  elm["b"].appendChild(elm["c"]);
  elm["c"].appendChild(elm["d"]);
  elm["b"].appendChild(elm["e"]);
  elm["b"].appendChild(elm["f"]);
  document.body.appendChild(elm["g"]);
  elm["g"].appendChild(elm["h"]);

  elm["a"].classList.add("container");
  elm["b"].classList.add("container");
  elm["c"].classList.add("container");
  elm["d"].classList.add("container");
  elm["e"].classList.add("container");
  elm["f"].classList.add("container");
  elm["g"].classList.add("container");
  elm["h"].classList.add("container");
}

function firstPage() {
  document.body.innerHTML = "";
  firstState();
}

const reset = document.querySelector("#reset");
reset.addEventListener("click", firstPage);

window.onload = firstPage;
