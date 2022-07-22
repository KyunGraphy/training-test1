const express = require('express');
const route = express.Router();
const uploadImage = require('../service/multerConfig')
const userController = require('../controller/userHandler');
const routeUser = (app) => {
    route.post('/login', userController.login)
    route.post('/register', uploadImage.single('avatar'), userController.register)
    route.patch('/update', userController.update)
    route.delete('/delete', userController.delete)
    return app.use('/user', route);
}
module.exports = routeUser