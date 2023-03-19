// event delegation

const table = document.querySelector('#course-table');

table.onclick = function (event) {
    console.log(event.target);
    //event.target.classList.add('highlight');
    let Traget = event.target;
    if (Traget != this) {
        if (Traget.tagName == 'TD') {
            Traget.classList.add("highlight");
            
        }
        
    }
    
}