// http://www.reddit.com/search.json?q=cats+nsfw:no



let searchTerm = "cats";
let fetchQuery = `http://www.reddit.com/search.json?q=${searchTerm}+nsfw:no`;


fetch(fetchQuery)
.then(response=>{
    return response.json();
})
.then(data=>{
    let x = data.data.children.map(child=>{return child.data.url});
    //console.log(data.data.children[0].data.url);
    console.log(x);
})
.catch(error => {
    console.log(error);
})
