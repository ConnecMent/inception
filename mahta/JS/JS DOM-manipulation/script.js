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

  const elm = {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
    f: 4,
    g: 5,
    h: 6,
    i: 7,
    j: 8,
  };

  const divElements = [];

  Object.keys(elm).forEach((element) => {
    const div = document.createElement("div");
    div.innerText = element;
    divElements.push(div);
  });

  divElements[4].style.width = "250px";
  divElements[4].style.height = "250px";



  const container = document.createElement("div");

  document.body.appendChild(divElements[0]);
  divElements[0].appendChild(divElements[1]);
  divElements[5].appendChild(divElements[2]);
  divElements[2].appendChild(divElements[3]);
  divElements[1].appendChild(divElements[5]);
  document.body.appendChild(divElements[4]);
  divElements[4].appendChild(divElements[6]);
  divElements[4].appendChild(divElements[7]);
  divElements[6].appendChild(divElements[8]);
  divElements[0].classList.add("container");
  divElements[1].classList.add("container");
  divElements[2].classList.add("container");
  divElements[3].classList.add("container");
  divElements[5].classList.add("container");
  divElements[4].classList.add("container");
  divElements[6].classList.add("container");
  divElements[7].classList.add("container");
  divElements[8].classList.add("container");

  const subTree = Object.values(elm).map((x) => divElements[x]);

  subTree.forEach((x) => {
    if ((Array.from(divElements[4].childNodes).includes(x))||(Array.from(divElements[6].childNodes).includes(x)) ){
      x.style.backgroundColor = generateRandomColor(0, 255);
    } else {
      x.style.backgroundColor = generateRandomColor(255, 0);
    }
  });
  divElements[4].style.backgroundColor=generateRandomColor(0, 255)
}

function firstPage() {
  document.body.innerHTML = "";
  const buttonTag = document.createElement("button");
  buttonTag.textContent = "Click Me!";
  buttonTag.addEventListener("click", onButtonClickSet);

  document.body.appendChild(buttonTag);
  const elm = {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
    e: 4,
    f: 5,
    g: 6,
    h: 7,
  };

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

const reset = document.querySelector("#reset");
reset.addEventListener("click", firstPage);

window.onload = firstPage;
