const router = require('express').Router()
const imgController = require('../controller/imgHandler')

let routeImage = (app) => {
    router.get('/upload', imgController.upload)
    return app.use('/', router)
}

module.exports = routeImage