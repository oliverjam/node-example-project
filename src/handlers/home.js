const homeView = require("../views/home");

function handleHome(request, response) {
  const html = homeView();
  response.writeHead(200, { "content-type": "text/html" });
  response.end(html);
}

module.exports = handleHome;
