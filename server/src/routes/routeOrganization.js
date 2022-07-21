const orgController = require('../controller/orgHandler')
const route = require('express').Router()
const projectController = require('../controller/projectHandler')
const uploadImage = require('../service/multerConfig')
const Org = require('../model/organization')
const authenUser =require('../middleware/authenUser')
const routeOrg = (app) => {
    route.post('/login', orgController.login)
    route.post('/register',uploadImage.single('image'), orgController.register)
    route.post('/createproject',uploadImage.single('image'),projectController.createProByOrg)
    route.post('/addUserToOrg',authenUser.org,orgController.addUser)
    route.get('/getOrg', async (req,res)=>{
        //let org = await Org.findById(req.body.id).lean()
        let allOrg = await Org.find().lean()
        console.log(req.body.id)
        res.status(200).json({ 
            data: allOrg
        })
    })
    return app.use('/org', route)
}
module.exports = routeOrg