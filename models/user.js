const mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
    name:String,
    pwd:String,
    email:String
})

module.exports = mongoose.model('user',userSchema)

