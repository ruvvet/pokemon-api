const prefix = 'https://pokeapi.co/api/v2/pokemon';

const pokemons = ['eevee', 'flareon', 'espeon', 'sylveon', 'umbreon', 'vaporeon'];

for (let i = 0; i < pokemons.length; i++) {
  const url = `${prefix}/${pokemons[i]}`;
  fetch(url)
    .then((response) => {
        console.log(response);
      if (response.ok) {

        ///response.statusText === "OK")
        return response.json();
      }
    })
    .then((pokemon) => {
      const poke = {
        image: pokemon.sprites.other['official-artwork']['front_default'],
        ability: pokemon.abilities[0].ability.name,
        height: pokemon.height,
        weight: pokemon.weight,
        name: pokemon.name,
        move: pokemon.moves[5].move.name,
        link: 'www.google.com',
      };
      console.log(poke);

      const newCard = createCard(poke);
    })
    .catch((error) => {
      return error;
    });
}

// fetch(postQuery)
//   .then((response) => {
//     if (response.ok) {
//       ///response.statusText === "OK")
//       return response.json();
//     }
//   })
//   .then((pokemon) => {
//     const eevee = {
//       image: pokemon.sprites.other['official-artwork']['front_default'],
//       ability: pokemon.abilities[0].ability.name,
//       height: pokemon.height,
//       weight: pokemon.weight,
//       name: pokemon.name,
//       move: pokemon.moves[5].move.name,
//       link: 'www.google.com',
//     };
//     console.log(eevee);

//     const newCard = createCard(eevee);
//   })
//   .catch((error) => {
//     return error;
//   });

const createCard = (poke) => {
  // Create a div element, add class, add style
  // Create an image tag, add class, add source, add alt
  // Append the image to the card div
  // Create div, add class
  // Create h5 element, add class, add text
  // Create p tag, add class, add text
  // Create a tag, add 2 class, add href, add text
  // Append to card-body div
  // Append card-body div to card
  // Append card div to container div

  let card = document.createElement('div');
  card.setAttribute('class', 'card');
  //card.setAttribute("id", poke.name);
  card.style = 'width: 18rem;';
  document.querySelector('.container').appendChild(card);

  let img = document.createElement('img');
  img.setAttribute('class', 'card-img-top');
  img.src = poke.image;
  img.style = 'object-fit: cover';
  card.appendChild(img);

  let body = document.createElement('div');
  body.setAttribute('class', 'card-body');
  card.appendChild(body);

  let title = document.createElement('div');
  title.setAttribute('class', 'card-title');
  title.innerText = poke.name;
  body.appendChild(title);

  let details = document.createElement('ul');
  details.setAttribute('class', 'list-group list-group-flush');
  card.append(details);

  let height = document.createElement('li');
  height.setAttribute('class', 'list-group-item');
  height.innerText = `Height: ${poke.height}`;
  details.appendChild(height);

  let weight = document.createElement('li');
  weight.setAttribute('class', 'list-group-item');
  weight.innerText = `Weight: ${poke.weight}`;
  details.appendChild(weight);

  let body2 = document.createElement('div');
  body2.setAttribute('class', 'card-body');
  card.appendChild(body2);

  let link = document.createElement('a');
  link.setAttribute('class', 'card-link');
  link.setAttribute('href', poke.link);
  link.textContent = 'LINK';
  body2.appendChild(link);

  return card;
};
