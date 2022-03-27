const express = require('express')
const bodyParser = require("body-parser");
const app = new express()
const users = require('./router/users')
const goods = require('./router/goods')

var url = 'mongodb://127.0.0.1:27017/test'
var mongoose = require('mongoose')

mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(() => {
    console.log("Success to connect MongoDB")
    app.use(users)
    app.use(goods)

})

app.all("/*", function (req,res,next) {
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Headers","X-Requested-With,Content-Type")
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS")
    next()
})

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())


app.listen(3000, () => {
    console.log('Success to open http://localhost:3000')
})