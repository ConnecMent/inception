function onButtonClickSet() {
    alert('Set clicked!');
    const button1 = document.getElementById('set');
    button1.style.display = 'none';
    const button2 = document.getElementById('reset');
    button2.style.display = 'block';
  }
  
  function onButtonClickReset() {
    alert('Reset clicked!');
    const button1 = document.getElementById('reset');
    button1.style.display = 'none';
    const button2 = document.getElementById('set');
    button2.style.display = 'block';
  }
  
  function hideButton() {
    var button = document.getElementById('reset');
    button.style.display = 'none';
  }

  window.onload = hideButton;

  const set = document.querySelector('#set');
  set.addEventListener('click', onButtonClickSet);
  
  const reset = document.querySelector('#reset');
  reset.addEventListener('click', onButtonClickReset);
