const express = require('express')
const router = express()

var User = require('../models/user')

router.route('/regist').post((req,res) => {
    console.log(req.body)
    User.findOne({name:req.body.ID},(err,result) => {
        if(!result){
            User.create({
                name:req.body.ID,
                pwd:req.body.PWD,
                email:req.body.Email
            },(err,resgist)=>{
                if(!err){
                    res.send(resgist)
                }
            })
        }else{
            res.send('已注册')
        }
    })

})

router.route('/post').post((req, res) => {
    // eslint-disable-next-line no-debugger

    User.findOne({name:req.body.ID},(err,User) => {
        if(err){
            console.log(err)
        }

        console.log(req.body.ID)
        console.log(User)
        res.send(User)

    })
})


// router.get("/rs",(req, res) => {
//     res.sendFile('D:\\我的创作\\vue\\vue-element\\views\\index.html')
// })


//router.post("/post",(req,res) => {
    // global.response = {
    //     ID:req.body.ID,
    //     PWD:req.body.PWD
    // }
    // global.ID=req.body.ID
    // console.log(global.response)
    // // res.end(JSON.stringify(global.response))
    // // var PWD="123456789"
    // res.send("wzy")
//})


module.exports = router