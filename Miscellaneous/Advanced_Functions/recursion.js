// looping with for loop
function pow(x, n) {
  let result = 1;
  // multiply result by x , n times
    for (i = 0; i < n; i++){
        result *= x;
    }

    return result;

}

// console.log(pow(10,10))


function power(x, n) {
    if (n == 1) { // breaking recursion 
        return x;
    } else {
        return x * power(x, n - 1);
    }

}

/**
 * power(2,3)
 *  retrun 2 * power(2,2)
 *                  retrun 2 * power(2,1)
 *                              retrun 2 
 */

// console.log(power(2, 3));



