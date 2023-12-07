
const button = document.getElementById('reset');
const button2 = document.getElementById('set');
function onButtonClickSet() {
    button2.style.display = 'none';
    button.style.display = 'block';
  }

  const box= [];  
 function firstPage() {

    button.style.display = 'none';
    button2.style.display = 'block';
 
    const elm = ["a", "b", "c", "d", "e", "g", "f", "h"];
    box.forEach((index) => {
      elm[index] = document.createElement("div");
    });
    

    document.body.appendChild(box[0]);
    box[0].appendChild(box[1]);
    box[1].appendChild(box[2]);
    box[2].appendChild(box[3]);
    box[1].appendChild(box[4]);
    box[1].appendChild(box[5]);
    document.body.appendChild(box[6]);
    box[6].appendChild(box[7]);

    
    box[0].setAttribute("class", "container");
    box[6].setAttribute("class", "container");
  
  }

  
  const set = document.querySelector('#set');
  set.addEventListener('click', onButtonClickSet);
  
  const reset = document.querySelector('#reset');
  reset.addEventListener('click', firstPage);
  
  window.onload = firstPage;