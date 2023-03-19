// outer , middle, inner1, inner2

let outer, middle, inner1, inner2;

outer = document.getElementsByClassName('outer')[0];
middle = document.querySelector('.middle');
inner1 = document.getElementsByClassName('inner1')[0];
inner2 = document.getElementsByClassName('inner2')[0];


// define options :
const capture = {
    capture: true
};

const noneCapture = {
    capture: false
};

const once = {
    once: true
};

const noneOnce = {
    once: false
};

const passive = {
    passive: true
};

const nonePassive = {
    passive: false
};


// adding listners
//outer.addEventListener("click", onceHandler, once);
//outer.addEventListener("click", noneOnceHandler, noneOnce);
// middle.addEventListener("click", captureHandler1);
// middle.addEventListener("click", captureHandler2, noneCapture);
// middle.addEventListener("click", captureHandler3, capture);
// middle.addEventListener("click", captureHandler4, capture);
inner1.addEventListener("click", passiveHandler, passive);
inner2.addEventListener("click", nonePassiveHandler);



// events hanlders
function onceHandler(event) {
    console.log('outer, once');
    
}

function noneOnceHandler(event) {
    console.log('outer, none-once, default');
    
}

function captureHandler1(event) {
    // event.stopImmediatePropagation();
    console.log('middle, 1');
}


function captureHandler2(event) {
  // event.stopImmediatePropagation();
  console.log("middle, 2");
}
function captureHandler3(event) {
  // event.stopImmediatePropagation();
  console.log("middle, 3");
}

function captureHandler4(event) {
  // event.stopImmediatePropagation();
  console.log("middle, 4");
}

function passiveHandler(event) {
  event.preventDefault(); // Unable to preventDefault with passive option
  console.log("inner1, passive, open new page");
}

function nonePassiveHandler(event) {
    event.preventDefault();
    console.log("inner2, none-passive, not-open new page");
}