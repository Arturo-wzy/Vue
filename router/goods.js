const express = require('express')
const router = express()

var Goods = require('../models/goods')
var ListItem = require('../models/listItem')

router.route('/goods').get((req,res) => {
    Goods.find((err,result)=>{
        if(err) throw err
        res.send(result)
    })
})

router.route('/list').get((req, res) => {
    ListItem.find((err,result)=>{
        if(err) throw err
        res.send(result)
    })
})

module.exports = router