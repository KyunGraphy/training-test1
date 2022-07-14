const express = require('express')
const route = express.Router()
const userController = require('../controller/userHandler')
const User = require('../model/user')
const routeUser = (app) => {
    route.post('/login', userController.login)
    route.post('register', userController.register)
    route.patch('/update', userController.update)
    route.delete('/delete', userController.delete)
}


module.exports = routeUser