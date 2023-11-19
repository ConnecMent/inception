function getRandomNumbersRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateHSLRandomColor(h) {
  const s = getRandomNumbersRange(0, 100);
  const l = getRandomNumbersRange(0, 100);
  return "hsl(" + h + ", " + s + "%, " + l + "%)";
}

function convertCollectionToArray(htmlCollection) {
  return Array.prototype.slice.call(htmlCollection);
}

function createTagNodeWithText(text, tag) {
  const textNode = document.createTextNode(text);
  const tagNode = document.createElement(tag);
  tagNode.appendChild(textNode);
  return tagNode;
}

function deleteAllBodyElements() {
  //! force delete all elmment in body
  document.body.innerHTML = "";

  //* Create Handle Button
  const buttonTag = document.createElement("button");
  buttonTag.textContent = "Click Me";
  buttonTag.setAttribute("onclick", "handleButtonClick()");

  document.body.appendChild(buttonTag);
}

const allDivs = {};

function generateBasicDivs() {
  /*
    a/
    ├─ b/
    │  ├─ c/
    │  │  ├─ d/
    │  ├─ e/
    │  ├─ g/
    f/
    ├─ h/
  */

  deleteAllBodyElements();
  delete allDivs;

  const divName = ["a", "b", "c", "d", "e", "g", "f", "h"];

  divName.forEach((name) => {
    allDivs[name] = document.createElement("div");
  });

  allDivs["c"].appendChild(allDivs["d"]);
  allDivs["b"].appendChild(allDivs["c"]);
  allDivs["b"].appendChild(allDivs["e"]);
  allDivs["b"].appendChild(allDivs["g"]);
  allDivs["a"].appendChild(allDivs["b"]);
  allDivs["f"].appendChild(allDivs["h"]);

  allDivs["a"].setAttribute("class", "box");
  allDivs["f"].setAttribute("class", "box");

  allDivs["b"].setAttribute("id", "b");
  allDivs["h"].setAttribute("id", "h");

  document.body.appendChild(allDivs["a"]);
  document.body.appendChild(allDivs["f"]);
}

function createNameDivsNodes() {
  for (const [x, div] of Object.entries(allDivs)) {
    let text = document.createTextNode(x);
    div.appendChild(text);
  }
}

function handleButtonClick() {
  createNameDivsNodes();

  const newWidth = allDivs["f"].offsetWidth * 1.5;
  allDivs["f"].style.width = newWidth + "px";
  allDivs["f"].style.height = newWidth + "px";

  const aSubTree = convertCollectionToArray(
    allDivs["a"].getElementsByTagName("div")
  );

  aSubTree.forEach((x) => {
    x.style.backgroundColor = generateHSLRandomColor(60);
  });

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
  deleteAllBodyElements();
  generateBasicDivs();
}
