const mongoose = require("mongoose");

var itemSchema = new mongoose.Schema({
    class:String,
    detail:String,
    price:String,
    img:String
})

module.exports = mongoose.model('listItem',itemSchema)

