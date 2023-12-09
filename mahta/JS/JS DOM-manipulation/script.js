function onButtonClickSet() {
  document.body.innerHTML = "";
  const buttonTag = document.createElement("button");
  buttonTag.textContent = "Reset";
  buttonTag.addEventListener('click', firstPage);
  document.body.appendChild(buttonTag);
}

function firstPage() {
  document.body.innerHTML = "";
  const buttonTag = document.createElement("button");
  buttonTag.textContent = "Click Me!";
  buttonTag.addEventListener('click', onButtonClickSet);
  
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

  
  
  const reset = document.querySelector('#reset');
  reset.addEventListener('click', firstPage);
  
  window.onload = firstPage;