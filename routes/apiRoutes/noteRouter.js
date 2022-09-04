// Required
const fs = require("fs");
const router = require('express').Router();
const {
    data
} = require("../../Develop/db/db.json")

// router.get("/api/notes", function (req, res) {
//     fs.readFile(__dirname + "../../Develop/db/db.json", (err, data) => {
//         if (err) throw err;
//         res.json(JSON.parse(data));
//         console.log("hello");
//     });

// });

// router.post('/api/notes', (req, res) => {

//     req.body.id = note.length.toString();

//     if (!validateAnimal(req.body)) {
//         res.status(400).send('The animal is not properly formatted.');
//     } else {
//         const animal = addNote(req.body, animals);
//         res.json(animal);
//     }
// });

module.exports = router;