// let promise = new Promise(
//     function (resolve, reject) {
        
//         setTimeout(() => { resolve("done") }, 3000);
//     }
// );

// promise.then(
//     result => console.log(result)
// );


// new Promise((resolve, reject) => {
//   throw new Error("error");
// })
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err))
//   .finally(() => console.log("Promise completed !!"));


// Example loadScript

function loadScript(src) {
    return new Promise(
        function (resolve, reject) {
            let script = document.createElement('script');
            script.src = src;

            script.onload = () => resolve(script);
            script.onerror = () => reject(new Error(`Script load error for ${src}`));

            document.head.append(script);
        }
    )
};

//Usage
let source = `
app.js
`;
let promise = loadScript(source);

promise
    .then(
    script => console.log(`${script.src} is loaded`)
)
    .catch(
    err => console.log(`Error: ${err.message}`)
)
    .finally(
    ()=>{console.log("Another Script can be loaded")}
)