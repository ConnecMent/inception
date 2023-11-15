function ButtonClick() {

  const divs = document.getElementsByTagName("div");
  const divName = ['a', 'b', 'c', 'd', 'e', 'g', 'f', 'h']
  
  //! 1
  for (let i = 0; i < divs.length; i++) {
    let text = document.createTextNode(divName[i]);
    divs[i].appendChild(text);
  }

  //! 2
  // const divF = divs[6];
  // or
  const divF = document.body.childNodes[3];
  divF.style.width = 1000 + "px";
  divF.style.height = 1000 + "px";

}
