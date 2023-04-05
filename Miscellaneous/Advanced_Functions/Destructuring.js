// Destructuring assignment

// Array

let a, b, rest;

[a, b] = [10, 20];

// console.log(b);
let arr = [10, 20, 30, 40, 50];
[a, b, ...rest] = arr;

//  console.log(rest)

// Object 

let options = {
    title: "Menu",
    width: 100,
    height: 200
};

let { width, height } = options;

//console.log(width);

let style = {
    color: "red"
};

let { margin = 10, padding = 20, color } = style;
// console.log(color);

let colors = {
    r: "red",
    y: "yellow",
    g: "green"
};

let { r, ...Rest } = colors;

// console.log(Rest) //{y: 'yellow', g: 'green'}