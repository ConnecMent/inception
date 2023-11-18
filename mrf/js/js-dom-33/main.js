function getRandomNumbersRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function handleButtonClick() {
  const divs = document.getElementsByTagName("div");
  const divName = ["a", "b", "c", "d", "e", "g", "f", "h"];
  const allDivs = {};

  for (let i = 0; i < divs.length; i++) {
    let text = document.createTextNode(divName[i]);
    divs[i].appendChild(text);
    allDivs[divName[i]] = divs[i];
  }

  const newWH = allDivs["f"].offsetWidth * 1.5;
  allDivs["f"].style.width = newWH + "px";
  allDivs["f"].style.height = newWH + "px";

  const aSubTree = allDivs["a"].getElementsByTagName("div");
  let indexA = getRandomNumbersRange(0, aSubTree.length - 1);
  aSubTree[indexA].style.backgroundColor = "yellow";

  let blueColor = getRandomNumbersRange(50, 255);
  let AlphaColor = getRandomNumbersRange(50, 100) / 100;
  let fColor = `rgba(0, 0, ${blueColor}, ${AlphaColor})`;

  allDivs["f"].style.backgroundColor = fColor;

  allDivs["b"].removeChild(allDivs["e"]);

  allDivs["g"].appendChild(allDivs["c"]);

  let iText = document.createTextNode("i");
  const newIDiv = document.createElement("div");
  newIDiv.appendChild(iText);

  let jText = document.createTextNode("j");
  const newJDiv = document.createElement("div");
  newJDiv.appendChild(jText);

  allDivs["f"].appendChild(newIDiv);
  allDivs["h"].appendChild(newJDiv);

  const buttonTag = document.getElementsByTagName("button")[0];
  const resetText = document.createTextNode("Reset");
  buttonTag.removeChild(buttonTag.firstChild);
  buttonTag.appendChild(resetText);
  buttonTag.setAttribute("onclick", "handleResetClick()");
}

function handleResetClick() {
  location.reload(); // :))))))))))))))))))
}
