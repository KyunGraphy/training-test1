const express = require('express');
const route = express.Router();
const uploadImage = require('../service/multerConfig')
const projectController = require('../controller/projectHandler')
const userController = require('../controller/userHandler');
const User = require('../model/user')
const routeUser = (app) => {
    route.post('/register', uploadImage.single('avatar'), userController.register)
    route.post('/login', userController.login)
    route.patch('/update', userController.update)
    route.post('/creatproject', uploadImage.single('image'), projectController.creatProByUser)
    route.delete('/delete', userController.delete)
    route.post('/findAllProjectOfUser', projectController.findAllProjectOfUser)
    route.get('/findAllProject', projectController.findAllProject)
    route.get('/getAllUser', async (req, res) => {
        let userList = await User.find()
        res.status(200).json({
            userList
        })
    })
    return app.use('/user', route);
}
module.exports = routeUser