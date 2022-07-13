const orgController = require('../controller/orgHandler')
const route = require('express').Router()
const routeOrg = (app) => {
    route.post('/login', orgController.login)
    route.post('/register', orgController.register)
    return app.use('/org', route)
}

module.exports = routeOrg