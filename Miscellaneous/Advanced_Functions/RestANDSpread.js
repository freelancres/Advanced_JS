// '...'

//Rest parameters

function sum(a, b) {
    
    return a + b;
}

function sumAll(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
}

//console.log(sum(5, 3, 5, 5, 2, 4, 7)) // 8 
//console.log(sumAll(2, 2, 2, 2, 2, 2, 2)) // 14

// Spread

let arr = [3, 5, 1];

console.log(Math.max(...arr)); // 5


