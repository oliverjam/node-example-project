const pageTemplate = require("../pageTemplate");

function resultsView(pokemon) {
  let results = "";

  // only create list if we have matching results
  if (pokemon.length) {
    let pokeList = "";
    for (let poke of pokemon) {
      pokeList += `
        <li>
          <h2>
            <a href="https://bulbapedia.bulbagarden.net/wiki/${poke.name}">${poke.name}</a>
          </h2>
          <img src="${poke.sprite}" width="96" height="96" loading="lazy" alt="">
        </li>`;
    }
    results = `<ul class="results">${pokeList}</ul>`;
  } else {
    results = `<p>Sorry, no matching pokémon found</p>`;
  }

  return pageTemplate(`
    <h1>Matching Pokémon</h1>
    ${results}
  `);
}

module.exports = resultsView;
