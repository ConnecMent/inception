function onButtonClickSet() {
  document.body.innerHTML = "";
  const buttonTag = document.createElement("button");
  buttonTag.textContent = "Reset";
  buttonTag.addEventListener("click", firstPage);
  document.body.appendChild(buttonTag);

  const elm = ["a", "b", "c", "d", "g", "f", "h", "i", "j"];
  const divElements = [];

  elm.forEach((element) => {
    const div = document.createElement("div");
    div.innerText = element;
    divElements.push(div);
  });

  divElements[5].style.width = "250px";
  divElements[5].style.height = "250px";

  const container = document.createElement("div");

  document.body.appendChild(divElements[0]);
  divElements[0].appendChild(divElements[1]);
  divElements[4].appendChild(divElements[2]);
  divElements[2].appendChild(divElements[3]);
  divElements[1].appendChild(divElements[4]);
  document.body.appendChild(divElements[5]);
  divElements[5].appendChild(divElements[6]);
  divElements[5].appendChild(divElements[7]);
  divElements[6].appendChild(divElements[8]);

  divElements[0].classList.add("container"); 
  divElements[1].classList.add("container");
  divElements[2].classList.add("container");
  divElements[3].classList.add("container");
  divElements[4].classList.add("container");
  divElements[5].classList.add("container");
  divElements[6].classList.add("container");
  divElements[7].classList.add("container");
  divElements[8].classList.add("container");
}

function firstPage() {
  document.body.innerHTML = "";
  const buttonTag = document.createElement("button");
  buttonTag.textContent = "Click Me!";
  buttonTag.addEventListener("click", onButtonClickSet);

  document.body.appendChild(buttonTag);
  const elm = ["a", "b", "c", "d", "e", "g", "f", "h"];
  elm.forEach((element, index) => {
    elm[index] = document.createElement("div");
  });

  document.body.appendChild(elm[0]);
  elm[0].appendChild(elm[1]);
  elm[1].appendChild(elm[2]);
  elm[2].appendChild(elm[3]);
  elm[1].appendChild(elm[4]);
  elm[1].appendChild(elm[5]);
  document.body.appendChild(elm[6]);
  elm[6].appendChild(elm[7]);

  elm[0].classList.add("container");
  elm[1].classList.add("container");
  elm[2].classList.add("container");
  elm[3].classList.add("container");
  elm[4].classList.add("container");
  elm[5].classList.add("container");
  elm[6].classList.add("container");
  elm[7].classList.add("container");
}

const reset = document.querySelector("#reset");
reset.addEventListener("click", firstPage);

window.onload = firstPage;
