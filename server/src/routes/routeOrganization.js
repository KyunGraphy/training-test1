const orgController = require('../controller/orgHandler')
const route = require('express').Router()
const projectController = require('../controller/projectHandler')
const uploadImage = require('../service/multerConfig')
const Org = require('../model/organization')
const routeOrg = (app) => {
    route.post('/login', orgController.login)
    route.post('/register',uploadImage.single('image'), orgController.register)
    route.post('/addUserToOrg',orgController.addUser)
    return app.use('/org', route)
}
module.exports = routeOrg