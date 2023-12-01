const {getCar,postCar,} = require('../Controllers/carController')
const auth = require('../middleware/auth')
const jwt = require('jsonwebtoken')

const route = require('express').Router()

route.get('/',getCar)

route.post('/',auth,postCar)


module.exports = route