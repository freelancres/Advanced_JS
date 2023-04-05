// fetch simple example
async function getData() {
    let url = "https://jsonplaceholder.typicode.com/posts/";
    let response = await fetch(url);
    let posts = await response.json();
    console.log(posts[0].title);
}

getData(); 
// promise
//     .then(
//         response => response.json()
//     )
//     .then(
//         data => {
//             console.log(data[0]);

//         }

//     )
//     .catch(
//         err => console.log(err.messag) // Faild to fetch
// );

// async / await:

// async function example() {
//   let promise = new Promise((resolve, reject) => {
//     resolve({
//       data: ["Safwan", "Ahmad", "Nour", "Kamal", "Omar"],
//     });
//   });

//   result = await promise;
//   console.log(result.data);
// };

//  example();









