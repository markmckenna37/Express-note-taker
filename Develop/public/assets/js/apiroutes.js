const noteData = require("../../../db/db.json")

module.exports = function(app) {
    app.get("/api/notes", function(req, res) {
        return res.json(noteData)
      });
      app.post("/api/notes", function(req, res) {
            noteData.push(req.body);
            res.json(true);
      });
}