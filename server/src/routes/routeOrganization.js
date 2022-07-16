const orgController = require('../controller/orgHandler')
const route = require('express').Router()
const projectController = require('../controller/projectHandler')
const uploadImage = require('../service/multerConfig')

const routeOrg = (app) => {
    route.post('/login', orgController.login)
    route.post('/register',uploadImage.single('image'), orgController.register)
    route.post('/creatproject',projectController.creatProByUser)
 
    return app.use('/org', route)
}

module.exports = routeOrg