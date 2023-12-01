const Car = require('../model/car')
const jwt = require('jsonwebtoken')
// get
exports.getCar = async (req,res)=>{
    try {
        const data = await Car.find().populate('user')
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

// post
exports.postCar = async (req,res)=>{
    try {
        const data = await Car.create(req.body)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

// put
exports.postCar = async (req,res)=>{
    try {
        const data = await Car.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

// delete
exports.postCar = async (req,res)=>{
    try {
        const data = await Car.findByIdAndDelete(req.params.id)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}