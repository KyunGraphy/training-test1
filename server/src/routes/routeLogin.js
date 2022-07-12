const router = require('express').Router()
const loginController = require('../controller/loginController')

let routeLogin = (app) => {

    router.get('/login', loginController.loginController)
    router.get('/register', loginController.registerController)

    return app.use('/', router)
}
module.exports = routeLogin