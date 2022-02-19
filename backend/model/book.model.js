const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    author: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    }, 
    year: {
        type: Number,
        required: true
    },
    available: {
        type: Boolean,
        required: true
    },
});

module.exports = mongoose.model("Book", bookSchema);
