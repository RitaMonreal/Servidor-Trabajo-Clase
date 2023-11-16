const mongoose = require("mongoose");

const characterSchema = mongoose.Schema({
    id: Number,
    name: String,
    image: String
})

module.exports = mongoose.model("Character", characterSchema);
//como se va a llamar la colección y con quién la voy a ligar