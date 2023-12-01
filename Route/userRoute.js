const {register, login,} = require('../Controllers/userController')
const route = require('express').Router()
const jwt = require('jsonwebtoken')
route.post('/',register)

route.post('/login',login)
module.exports = route