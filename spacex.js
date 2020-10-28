fetch("https://api.spacexdata.com/v3/history")
.then(response => {
    return response.json();
})
.then(data=>{
    console.log(data);
    console.log(data.map(e =>{return e.title}));

    let spacex = document.createElement("div");
    spacex.setAttribute("id", "spacex");
    spacex.innerText = `SpaceX History Titles: ${data.map(e =>{return e.title})}`;
    document.querySelector(".container").appendChild(spacex);
    



})
.catch(error => {
    console.log(error);
})