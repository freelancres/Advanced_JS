// getElementById()
const paragraph = document.getElementById("paragraph");
// console.log(paragraph.innerHTML);
// console.log(paragraph.innerText);

paragraph.innerHTML = `
  <h2>
        Just changing the innerHTML
    </h2>
    <span>
        Hey we are writing a HTML code inside JS object
    </span>
`;

paragraph.classList.add('newClass');

paragraph.style.padding = '20px';
paragraph.style.marginBottom = "60px";

//console.log(document.getElementsByTagName('div')); // HTMLCollection
const divElements = document.getElementsByTagName("div");
const tokenList = divElements[0].classList;
//console.log(typeof tokenList); // DOMTokenList

// Transforming to array :

const divElementsArray = Array.from(divElements);
console.log(divElementsArray);

//const tokenListArray = Array.from(tokenList);
// const tokenListArray = [...tokenList];
const tokenListArray = new Array(...tokenList);
console.log(tokenListArray);







//Revision :

// primitive
let x = 10;
let y = x;
//console.log(x); // 10
//console.log(y);  // 10 

x = 50;
//console.log(y); // 10
//console.log(x);  // 50

let arrA = [1, 2, 3];
let arrB = arrA;
//console.log(arrA); //[1, 2, 3]
//console.log(arrB); //[1, 2, 3]

arrA[0] = 10;
//console.log(arrA); //[10, 2, 3]
//console.log(arrB); //[10, 2, 3]




