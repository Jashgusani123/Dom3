let div = document.getElementById("youpress");
let press = document.getElementsByTagName("body");
let scree = document.getElementById("screen");
press[0].addEventListener("keypress",function (e){
   div.innerHTML=e.keyCode;
  div.style.display ="flex"
 
   display(e.key);
});
function display(a){
  scree.innerHTML= `You Press <span>${a}</span>`;
}

