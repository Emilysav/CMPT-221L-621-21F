
//var yourname = prompt ("What is your name?"); 

var getTitleNode = document.querySelector("h1");
var newH1 = "This title is much better";
getTitleNode.innerText = newH1;


var getunbossy = document.querySelector("#bossy");
var newboss = "Here are some of the things that I WOULD LIKE to do.";
getunbossy.innerText = newboss;

document.querySelector("#One").style.color = "blue";
document.querySelector("#Two").style.backgroundColor = "Cream";
document.body.style.backgroundColor = "Gray";
document.querySelector("#Four").style.textTransform = "Uppercase";

function classtitle() {
    var element = document.querySelector("#Five");
    element.classList.add("Title");
  }