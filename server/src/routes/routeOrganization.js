const orgController = require('../controller/orgHandler')
const multer = require('../config/multerConfig')
const route = require('express').Router()
const routeOrg = (app) => {
    route.post('/login', orgController.login)
    route.post('/register',multer.single('img'),orgController.register)

    return app.use('/org', route)
}

module.exports = routeOrg