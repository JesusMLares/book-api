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

// CREATE:
router.post('/', (req, res) => {
    Book.create(req.body).then((newBook) => {
        res.json(newBook);
    })
})

// SHOW:
router.get('/:id', (req, res) => {
    Book.findById(req.params.id).then((foundBook) => {
        res.json(foundBook);
    })
    .catch((error) => {
        res.status(404).json({ error: "Book not found" });
    });
});

// UPDATE:
router.put('/:id', (req, res) => {
    Book.findByIdAndUpdate(req.params.id, req.body, {new: true}).then((updatedBook) => {
        res.json(updatedBook);
    });
});

// DELETE:
router.delete('/:id', (req, res) => {
    Book.findByIdAndRemove(req.params.id).then((deletedBook) => {
        res.json(deletedBook);
    });
});

module.exports = router;
