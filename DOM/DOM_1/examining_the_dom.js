let val;
let test = [1, 2, 3, 4];

val = window;
val = window.document;
val = document.all.length;
val = test.length;

val = document.scripts[1];
val = document.forms[0];
val = document.links;
val = document.images[0];

document.images[0].classList.add('off');
// document.images[0].classList.add("on");
document.images[0].classList.remove("off");
val = document.URL;
val = document.contentType;
//val = document.getSelection();


console.log(val);