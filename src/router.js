const handleHome = require("./handlers/home");
const handleSubmit = require("./handlers/submit");
const handleAssets = require("./handlers/assets");
const handleMissing = require("./handlers/missing");

function router(request, response) {
  const url = request.url;
  if (url === "/") {
    handleHome(request, response);
  } else if (url.includes("/submit")) {
    handleSubmit(request, response);
  } else if (url.includes("/assets")) {
    handleAssets(request, response);
  } else {
    handleMissing(request, response);
  }
}

module.exports = router;
