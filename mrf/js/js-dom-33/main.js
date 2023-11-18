function getRandomNumbersRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateHSLRandomColor(h) {
  const s = getRandomNumbersRange(0, 100);
  const l = getRandomNumbersRange(0, 100);
  return "hsl(" + h + ", " + s + "%, " + l + "%)";
}

function createTagNodeWithText(text, tag) {
  const textNode = document.createTextNode(text);
  const tagNode = document.createElement(tag);
  tagNode.appendChild(textNode);
  return tagNode;
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

  const newWidth = allDivs["f"].offsetWidth * 1.5;
  allDivs["f"].style.width = newWidth + "px";
  allDivs["f"].style.height = newWidth + "px";

  const aSubTree = allDivs["a"].getElementsByTagName("div");

  for (let i = 0; i < aSubTree.length - 1; i++) {
    aSubTree[i].style.backgroundColor = generateHSLRandomColor(60);
  }

  let fColor = generateHSLRandomColor(240);

  allDivs["f"].style.backgroundColor = fColor;

  allDivs["b"].removeChild(allDivs["e"]);

  allDivs["g"].appendChild(allDivs["c"]);

  allDivs["f"].appendChild(createTagNodeWithText("i", "div"));
  allDivs["h"].appendChild(createTagNodeWithText("j", "div"));

  const buttonTag = document.getElementsByTagName("button")[0];
  buttonTag.firstChild.textContent = "Reset";

  buttonTag.setAttribute("onclick", "handleResetClick()");
}

function handleResetClick() {
  location.reload(); // :))))))))))))))))))
}
