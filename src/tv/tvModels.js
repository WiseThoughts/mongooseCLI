const mongoose = require("mongoose");

const tvSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true,
    },
    seasons: {
        type: String,
    },
    stillAiring: {
        type: Boolean,
    }
});

const TV = mongoose.model("TV", tvSchema)
module.exports = TV