const spanText = document.getElementById('tooltip');

window.onmouseover = function(e){
   const x = e.clientX;
   const y = e.clientY;

   spanText.style.top = (y + 20) + 'px'
   spanText.style.left = (x + 20) + 'px'
}



