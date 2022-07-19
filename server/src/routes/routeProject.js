const express = require('express')
const route = express.Router()
const Project = require('../model/project')
const prjHandler = require('../controller/projectHandler')

const routeProject = (app) => {
    route.post('/AddUsertoOrg', prjHandler.addUsertoOrg)
    route.post('/CreateProject', prjHandler.creatProByUser)
    route.get('/FindUserProject', prjHandler.findAllProjectOfUser)
    route.get('/FindOrgProject', prjHandler.findAllProjectOfOrg)
    route.get('/FindAllUserInOrgn', prjHandler.findAllUserOfOrg)
    route.get('/FindAllProject', prjHandler.findAll)
    //route.patch('/Update Project', prjHandler.updateProject)
    
    return app.use('/project', route)
    // router.delete()
}

module.exports = routeProject