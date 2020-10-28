// fetch is js keyword that is a method
// takes input url as parameter

let x = fetch("https://api.github.com/users/ruvvet") // make request to github api for user ruvvet --- this is the endpoitn it goes to

// .then gives back a response
// that is returned as a json file
.then(response => {
//equivalent to .then (function(response){.......})
    return response.json();
}) /////////// no semi colon since we are chaining all this data!!!

//response is returned as json which we then pass as github data
.then(data => {
    console.log(data);



    let github = document.createElement("div");
    github.setAttribute("id", "git");
    github.innerText = `Username: ${data.login}`;
    document.querySelector(".container").appendChild(github);


});

console.log(x);


