const resultsView = require("../views/results");
const errorView = require("../views/error");
const pokemon = require("../pokemon.json");

function handleSubmit(request, response) {
  if (!pokemon) {
    const html = errorView("Pokémon data not found");
    response.writeHead(500, { "content-type": "text/html" });
    response.end(html);
  }

  // parse URL string into an object
  const url = new URL(request.url, "http://localhost");

  // grab "name" from "/submit?name=userinput"
  const name = url.searchParams.get("name");

  // filter array for pokemon that match user input
  const matches = pokemon.filter(poke => poke.name.includes(name));

  // pass matching pokemon array into template to generate html
  const html = resultsView(matches);
  response.writeHead(200, { "content-type": "text/html" });
  response.end(html);
}

module.exports = handleSubmit;
