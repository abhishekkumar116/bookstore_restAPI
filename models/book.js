const mongoose = require('mongoose');
// schema of the booksotre
const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true,
        unique: true,
        minlength: 2
    },
    author: {
        type: String,
        require: true,
        trim: true,
        minlength: 2
    },
    year: {
        type: Number,
        require: true
    },
    description: {
        type: String,
        require: true
    }
});


const Book = mongoose.model('Book', bookSchema);
module.exports = Book;