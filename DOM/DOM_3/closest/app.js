let val;
let chapter = document.querySelector('li.chapter:last-child');
val = chapter;


//get the closest ancestor with css selector .chapter

val = chapter.closest('.chapter')

//get the closest ancestor with css selector .book
val = chapter.closest(".book");

//get the closest ancestor with css selector h3
val = chapter.closest("h3"); // null: h3 is not an ancestor of li
val = document.querySelector("a").closest('h3');


//get the closest ancestor with css selector html
val = chapter.closest("html");


console.log(val);