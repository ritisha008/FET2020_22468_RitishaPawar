var a = document.createElement("p");
var b= document.createTextNode("this is new");
a.appendChild(b);
var element =document.getElementById("div1");
element.appendChild(a);