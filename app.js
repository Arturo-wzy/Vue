const express = require('express')
const bodyParser = require("body-parser");
const app = new express()
const router = require('./router/users')

var url = 'mongodb://127.0.0.1:27017/test'
var mongoose = require('mongoose')

mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(() => {
    console.log("Success to connect MongoDB")
    app.use(router)

})


// User.create({name:'yj',pwd:'yjyj'},(err,res)=>{
//     if(!err){
//         console.log('插入成功'+res)
//     }
// })

// var MongoClient = require('mongodb').MongoClient
// var url_test = 'mongodb://127.0.0.1:27017/'
//
// MongoClient.connect(url_test,(err,db) => {
//     if(err) throw err
//     var dbo = db.db("test")
//     var ID = global.ID
//     dbo.collection("user").findOne(ID,(err,res) => {
//         if(err) throw err
//         console.log(res)
//     })
//
// })



app.all("/*", function (req,res,next) {
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Headers","X-Requested-With,Content-Type")
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS")
    next()
})

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())



// app.get("/login",(req,res) =>{
//     res.send("helllo world")
// })

// app.post("/login",((req, res) => {
//     console.log(req.body)
//     res.send("Thanks for your submit successfully")
// }))






app.listen(3000, () => {
    console.log('Success to open http://localhost:3000')
})