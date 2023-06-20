const express = require("express");
const { route } = require("express/lib/application");
const Book = require("../models/book");

const router = express.Router();

// creating the router


// get all the books
router.get("/", async (req, res) => {

    try {
        const books = await Book.find()
        res.json(books);
    } catch (error) {
        res.json(error);
    }
})

// get single book
router.get("/:bookId", async(req, res)=> {
    const bookId = req.params.bookId;

    try {
        const b = await Book.findById(bookId)
        res.json(b);
    } catch (error) {
        res.json(error);
    }
})
// create bookstore

router.post('/', async (req, res) => {
    try {
        const book = await Book.create(req.body);
        res.json(book);
    } catch (error) {
        res.json(error);
    }
    
})

// delete book

router.delete("/:bookId", async(req, res) => {
    try {
        await Book.remove({_id:reqparams.bookId})
        res.json({
            message:"deleted"
        })
    } catch (error) {
        res.json(error);
    }
})

// update book

router.put("/:bookId", async(req, res) => {
    const bookId = req.params.bookId;
    try {
        const book = await Book.updateOne(
            {
                "_id":bookId
            },
            req.body
        )
        
        res.json(book);
    } catch (error) {
        res.json(error);
    }
})

module.exports = router;