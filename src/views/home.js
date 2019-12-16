const html = require("../pageTemplate");

function homeView() {
  return html(`
  <h1>Find Pokémon</h1>
  <form action="/submit" method="GET">
    <label for="name">Pokémon name</label>
    <div class="row">
      <input id="name" name="name" type="search" placeholder="e.g. pikachu" required />
      <button type="search">Search</button>
    </div>
  </form>
  `);
}

module.exports = homeView;
