const search = () => {
  /* Selecting elements */
  // single element by id : id must be unique
  let searchValue = document.getElementById("search").value;
  // // get elements by class name : HTMLCollection (array-like) object
  // let elements = Array.from(document.getElementsByClassName(searchValue));
  // // get elemnets by tag name
  // elements = document.getElementsByTagName(searchValue);
  // // select element by any selector: first matching element
  // let element = document.querySelector(searchValue);
  // //  select elements by any selector: NodeList array-like Object
  // elements = document.querySelectorAll(searchValue);
  // //console.log(element);
  //  console.log(elements[0]);

  /* Creating elements */
  document.querySelector('h1').innerHTML = "Creating Elments";
  let parentElement = document.querySelector(".creating");
  let createdElement = document.createElement(`${searchValue}`);
  createdElement.innerHTML = `This is an Example Error box`;
  createdElement.classList.add('error');

  parentElement.appendChild(createdElement);
  setTimeout(() => { 
    createdElement.remove();
  }, 3000);
console.log(parentElement.children);
};
