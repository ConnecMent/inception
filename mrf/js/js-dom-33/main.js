function getRandomNumbersRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function ButtonClick() {
  const divs = document.getElementsByTagName("div");
  const divName = ["a", "b", "c", "d", "e", "g", "f", "h"];
  const allDivs = new Object();

  //! 1
  for (let i = 0; i < divs.length; i++) {
    let text = document.createTextNode(divName[i]);
    divs[i].appendChild(text);
    allDivs[divName[i]] = divs[i];
  }

  console.log(allDivs);

  //! 2
  // const divF = divs[6];
  // or
  // const divF = document.body.childNodes[3];
  // or
  allDivs["f"].style.width = 1000 + "px";
  allDivs["f"].style.height = 1000 + "px";

  //! 3
  // const aSubTree = document.body.childNodes[1].getElementsByTagName("div");
  // or
  const aSubTree = allDivs["a"].getElementsByTagName("div");
  let indexA = getRandomNumbersRange(0, aSubTree.length - 1);
  aSubTree[indexA].style.backgroundColor = "yellow";

  let blueColor = getRandomNumbersRange(50, 255);
  let AlphaColor = getRandomNumbersRange(50, 100) / 100;
  let fColor = `rgba(0, 0, ${blueColor}, ${AlphaColor})`;

  allDivs["f"].style.backgroundColor = fColor;

  //! 4
  allDivs["b"].removeChild(allDivs["e"]);

  //! 5
  allDivs["g"].appendChild(allDivs["c"]);

  //! 6
  let iText = document.createTextNode("i");
  const newIDiv = document.createElement("div");
  newIDiv.appendChild(iText);

  let jText = document.createTextNode("j");
  const newJDiv = document.createElement("div");
  newJDiv.appendChild(jText);

  allDivs["f"].appendChild(newIDiv);
  allDivs["h"].appendChild(newJDiv);
}
