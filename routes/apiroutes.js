const fs = require("fs")
const {
      v4: uuidv4
} = require('uuid');

const rawData = fs.readFileSync(__dirname + "/../db/db.json")
const noteData = JSON.parse(rawData);
console.log(rawData)
console.log(noteData)

module.exports = function (app) {

      app.get("/api/notes", function (req, res) {
            res.json(noteData)
      });
      app.post("/api/notes", function (req, res) {
            req.body.id = uuidv4();
            noteData.push(req.body);
            let data = JSON.stringify(noteData, null, 2);
            fs.writeFileSync(__dirname + "/../db/db.json", data, function (err) {
                  if (err) console.log(err)
            })
            res.json(true);

      });
      app.delete("/api/notes/:id", function (req, res) {
            for (let i = 0; i < noteData.length; i++) {
                  if (noteData[i].id === req.params.id) {
                        noteData.splice(i, 1);
                  }
            }
            let data = JSON.stringify(noteData, null, 2);
            fs.writeFileSync(__dirname + "/../db/db.json", data, function (err) {
                  if (err) console.log(err)
            })
            res.json(true);
      })
}