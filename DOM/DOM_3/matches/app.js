for (const element of document.body.children) {
    // if (element.matches(".nein")) {
    //     console.log("This Element is a match", element);
    // }

    // if (element.matches("[class$='nein']")) {
    //     console.log(element.classList);
    // }

    if (element.matches("a[href$='https://ja.nein']")) {
        console.log(element);
    }
}