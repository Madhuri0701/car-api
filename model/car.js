const mongoose = require('mongoose')

const carSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    model:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('car',carSchema)

