//accessing path as a variable
const path = require("path");
//module export function for  sending html paths to server.js
module.exports = function (app) {
    //function for getting the index.html file
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
    //function for getting the notes.html file
    app.get("/notes", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });
    // app.get("*", function(req, res) {
    //     res.sendFile(path.join(__dirname, "../../index.html"));
    //   });
}