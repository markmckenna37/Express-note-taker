const fs = require("fs")
const {
      v4: uuidv4
} = require('uuid');

const rawData = fs.readFileSync(__dirname + "/../db/db.json")
const noteData = JSON.parse(rawData);
console.log(noteData)

module.exports = function (app) {

            app.get("/api/notes", function (req, res) {
                  res.json(noteData)
            });
            app.post("/api/notes", function (req, res) {
                  console.log(req.body);
                  req.body.id = uuidv4();
                  console.log(req.body);
                  noteData.push(req.body);
                  res.json(true);

            });
            app.delete("/api/notes/:id", function (req, res) {
                              for (let i = 0; i < noteData.length; i++) {
                                    if (noteData[i].id === req.params.id) {
                                          noteData.splice(i, 1);
                                    }
                              }
                              res.json(true);
                        })
}
