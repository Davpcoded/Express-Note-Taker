const express = require("express");
const path = require("path");

const app = express();
// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

// Serving static files, i.e. CSS and JS
app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);
// LISTENER
// The below code effectively "starts" our server
app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});
