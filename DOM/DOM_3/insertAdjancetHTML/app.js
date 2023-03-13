const btnTry = document.getElementById("tryIt");

btnTry.addEventListener('click', myFunction);

function myFunction() {
    let h2 = document.getElementById('myH2');
    let position = document.getElementById("adjacentPosition").value;
    h2.insertAdjacentHTML(position,
        "I am the new text");

    console.log(h2);

}


const addLiBtn = document.getElementById("addLi");

addLiBtn.addEventListener('click', addLiFunc);

function addLiFunc() {
    const list = document.querySelector('.list');
    const li = document.createElement('li');
    li.classList.add('myItem');
    li.innerHTML = `I am the new added li ;)`;
    list.insertAdjacentElement('beforeend', li);
    list.insertAdjacentHTML('beforeend',
        `<li class='myItem'>I am added as HTML</li>`);
    const firstChildLi = document.querySelector('li'); 
    firstChildLi.insertAdjacentElement('beforebegin', li);
    firstChildLi.insertAdjacentText("afterbegin",`<h1>added Text</h1>`);
}