const mongoose = require("mongoose");

var goodsSchema = new mongoose.Schema({
    class:String,
    detail:String,
    price:String,
    img:String
})

module.exports = mongoose.model('goods',goodsSchema)

