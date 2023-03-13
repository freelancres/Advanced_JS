const buttonTryIt = document.getElementById("tryIt");

buttonTryIt.addEventListener("click", demoFun);

//click event handler
function demoFun(e) {
    // console.log(e.target)
    let span = document.querySelector('#mySpan');
    let myDiv = document.getElementById('myDiv');
    let exp = document.querySelector('.exp');
    let result = myDiv
        .contains(exp);
    
    document.getElementById("demo").innerHTML = `
        The ${myDiv.nodeName.toLowerCase()} element
        is including the ${exp.nodeName.toLowerCase()}
        inside the p.

        <span class="result">${result}</span>
        
        `;


}