//example from instructor


const container = document.querySelector('.container');

fetch('https://pokeapi.co/api/v2/pokemon/mewtwo')
.then(response => {
    if (response.ok) {
        return response.json();
    }
})
.then(pokemon => {
    const mewTwo = {
        ability: pokemon.abilities[0].ability.name,
        height: pokemon.height,
        weight: pokemon.weight,
        name: pokemon.name,
        move: pokemon.moves[5].move.name,
        image: pokemon.sprites.other['official-artwork']['front_default'],
        purchaseLink: 'https://www.ebay.com/i/333115686977?chn=ps'
    }

    const mewTwoCard = makePokemonCard(mewTwo);
    container.appendChild(mewTwoCard);

})
.catch(error => {
    console.log(error);
})

function makePokemonCard(pokemon) {
    // Create a div element, add class, add style X
    const card = document.createElement('div');
    card.classList.add('card');
    card.style.width = '18rem';
        // Create an image tag, add class, add source, add alt
    const image = document.createElement('img');
    image.classList.add('card-img-top');
    image.setAttribute('src', pokemon.image)
    image.setAttribute('alt', `This is ${pokemon.name}`);
        // Append the image to the card div
    card.appendChild(image);

        // Create div, add class
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

            // Create h5 element, add class, add text
    const nameElement = document.createElement('h5');
    nameElement.classList.add('card-title');
    nameElement.textContent = pokemon.name;
            // Create p tag, add class, add text
    const heightWeight = document.createElement('p');
    heightWeight.classList.add('card-text');
    heightWeight.textContent = `Height: ${pokemon.height}, Weight: ${pokemon.weight}`

    const move = document.createElement('p');
    move.classList.add('card-text');
    move.textContent = `Move: ${pokemon.move}`;

    const ability = document.createElement('p');
    ability.classList.add('card-text');
    ability.textContent = `Ability: ${pokemon.ability}`;
            // Create a tag, add 2 class, add href, add text
    const purchaseLink = document.createElement('a');
    purchaseLink.classList.add('btn', 'btn-primary');
    purchaseLink.setAttribute('href', pokemon.purchaseLink);
    purchaseLink.textContent = `Buy ${pokemon.name} card`
            // Append to card-body div
    cardBody.appendChild(nameElement);
    cardBody.appendChild(heightWeight);
    cardBody.appendChild(move);
    cardBody.appendChild(ability);
    cardBody.appendChild(purchaseLink);

        // Append card-body div to card
    card.appendChild(cardBody);

    return card;
}

{/* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */}