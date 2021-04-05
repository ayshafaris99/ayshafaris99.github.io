let goal = document.getElementById("thecause"); 
let box1 = document.getElementById("animate1"); 
let box2 = document.getElementById("animate2");
let theButton = document.getElementById("button");
theButton.addEventListener('click', myanimation());

let id = null;
function myanimation() {  
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++; 
      box1.style.top = pos + "px"; 
      box1.style.left = pos + "px"; 
    }
  }
}