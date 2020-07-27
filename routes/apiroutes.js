// variables for requiring filesystem and random id generator packages
const fs = require("fs")
const {
      v4: uuidv4
} = require('uuid');
// readfile function for reading our json data file.
const rawData = fs.readFileSync(__dirname + "/../db/db.json")
//parsing the data from json data file
const noteData = JSON.parse(rawData);
//export function for sending api routes
module.exports = function (app) {
      // sending json data to the url link /api/notes
      app.get("/api/notes", function (req, res) {
            res.json(noteData)
      });
      //posting new data to the api page
      app.post("/api/notes", function (req, res) {
            //setting a new parameter to req.body, as a randomly generated id
            req.body.id = uuidv4();
            //pushing our json file data to req.body, putting it within our api
            noteData.push(req.body);
            //formatting api data to be written to the db.json file
            let data = JSON.stringify(noteData, null, 2);
            fs.writeFileSync(__dirname + "/../db/db.json", data, function (err) {
                  if (err) console.log(err)
            })
            res.json(true);

      });
      // Function to delete notes from the api and json file
      app.delete("/api/notes/:id", function (req, res) {
            //for loop to find the correct index to be deleted
            for (let i = 0; i < noteData.length; i++) {
                  if (noteData[i].id === req.params.id) {
                        //splicing the desired note to be deleted
                        noteData.splice(i, 1);
                  }
            }
            let data = JSON.stringify(noteData, null, 2);
            //rewriting json file after deleting note
            fs.writeFileSync(__dirname + "/../db/db.json", data, function (err) {
                  if (err) console.log(err)
            })
            res.json(true);
      })
}