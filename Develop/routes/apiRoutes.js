// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
var dataBase = require("../db/db.json");
var fs = require("fs");
var { v4: uuidv4 } = require("uuid");

// ROUTING

module.exports = function (app) {
  app.get("/api/notes", function (req, res) {
    res.json(dataBase);
  });

  app.post("/api/notes", function (req, res) {
    var newNote = {
      ...req.body,
      id: uuidv4(),
    };

    database.push(newNote);
    fs.writeFile("./db/db.json", JSON.stringify(database, null, 2), function (
      err,
      response
    ) {
      if (err) {
        throw err;
      }
      res.json(newNote);
    });
  });

  app.delete("/api/notes/:id", function (req, res) {
    var trashNote = req.params.id;

    for (i = 0; i < database.length; i++) {
      if (trashNote == database[i].id) {
        database.splice(i, 1);
      }
    }

    fs.writeFile("./db/db.json", JSON.stringify(database, null, 2), function (
      err,
      response
    ) {
      if (err) {
        throw err;
      }
      res.json(trashNote);
    });
  });
};
