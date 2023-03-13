let val;

const list = document.querySelector('ul.collection');

const firstListItem = document.querySelector('li.collection-item:first-child');

val = list;
val = firstListItem;

//get children
val = list.children;
val = list.children[0];
val = list.children[0].textContent;
//val = list.children[1].textContent += `Hello`;
val = list.children[1].innerHTML += `Hello`;
//console.log(list.children[1].innerHTML);
val = list.children[2].children[0].children[0];

list.children[0].children[0].id = 'test-link';
val = document.getElementById('test-link');


//get First Child
val = list.firstChild.nodeType;
val = list.firstElementChild.nodeType;

//get Last Child
val = list.lastChild.nodeType;
val = list.lastElementChild.nodeType;

//get Parent
val = firstListItem.parentNode;
val = firstListItem.parentElement;

val = firstListItem
    .parentElement
    .parentElement
    .parentElement
    .parentElement
    .parentElement
    .parentElement
    .parentElement
    .parentElement // html
    .parentNode // undefined
    ;

    //get next Sibling
val = firstListItem
    .nextSibling; // text

val = firstListItem
    .nextElementSibling
    .nextElementSibling
    .childElementCount // 1
    ;


    //get prev Sibling
val = firstListItem
    .previousSibling; // text

val = list.lastElementChild
    .previousElementSibling
   .previousElementSibling
    .childElementCount; // 1


    // log val in console :
console.log(val);


//myDiv test:
// let myDiv = document.getElementById('myDiv');

// val = myDiv.children[0].childNodes[0].textContent;

// console.log(val);