// Required
const fs = require("fs");
const router = require('express').Router();
const { db } = require("../../db/db.json")

router.get("/api/notes", function (req, res) {
    fs.readFile(__dirname + "../../db/db.json", (err, data) => {
        if (err) throw err;
        res.json(JSON.parse(data));
        console.log(data);
    });

});

router.post("/api/notes", function (req, res) {
    let everyNotes = [];
    let generatedNotes = {
        title: req.body.title,
        text: req.body.text 
    }
    fs.readFile(__dirname + "../../db/db.json", (err, data) => {
        if (err) throw err;
        everyNotes = JSON.parse(data);
        everyNotes.push(generatedNotes);
        fs.writeFileSync(__dirname + "../../db/db.json", JSON.stringify({everyNotes}), (err) => {
            if (err) throw err;
            console.log("Note Succesfully Saved.")
            res.end();
        })
    })
});

module.exports = router;