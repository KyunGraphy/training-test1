const orgController = require('../controller/orgHandler')
const multer = require('../config/multerConfig')
const route = require('express').Router()
const routeOrg = (app) => {
    route.post('/login', orgController.login)
<<<<<<< HEAD
    route.post('/register', orgController.register)
=======
    route.post('/register',multer.single('img'),orgController.register)
>>>>>>> 352f35c11e43f06a79df6d7d63a5edff4a2defcd

    return app.use('/org', route)
}

module.exports = routeOrg