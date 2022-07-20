const orgController = require('../controller/orgHandler')
const route = require('express').Router()
const projectController = require('../controller/projectHandler')
const uploadImage = require('../service/multerConfig')
const Org = require('../model/organization')
const User = require('../model/user')
const authenUser =require('../midleware/authenUser')
const routeOrg = (app) => {
    route.post('/login', orgController.login)
    route.post('/register',uploadImage.single('image'), orgController.register)
    route.post('/creatproject',projectController.creatProByUser)
    route.post('/addUserToOrg',authenUser.org,orgController.addUser)
    route.get('/getOrg', async (req,res)=>{
        let org = await Org.findById(req.body.id).lean()
         console.log(req.body.id)
        res.status(200).json({ 
            data: org
        })
    })
     
    return app.use('/org', route)
}

module.exports = routeOrg