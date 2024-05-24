const express = require("express");
const router = express.Router();
const Book = require("../models/book.js");

// INDEX:
router.get('/', (req, res) => {
    Book.find()
        .then((foundBooks) => {
            res.json(foundBooks);
        })
        .catch((error) => {
            res.status(500).json({ error: "Internal server error" });
        });
});

// SHOW:
router.get('/:id', (req, res) => {
    Book.findById(req.params.id).then((foundBook) => {
        res.json(foundBook);
    })
    .catch((error) => {
        res.status(404).json({ error: "Book not found" });
    });
});

module.exports = router;
