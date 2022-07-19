const Project = require('../model/project')
const Org = require('../model/organization')
const User = require('../model/user')

module.exports = {

    addUsertoOrg: async (req, res) => {
        try {
            let { userID, orgID } = req.body
            let org = await Org.findById(orgID)
            let userListOfOrg = org.userList
            userListOfOrg.some(element => {
                if (element === userID) {
                    return res.status(400).json({
                        message: 'User has existed '
                    })
                }
            })
            userListOfOrg.push(userID)
            await org.save()
            console.log(org)
            return res.status(200).json({
                message: 'add user to Organization success'
            })
        } catch (err) {
            return res.status(200).json({
                error: err
            })
        }
    },
    creatProByUser: async (req, res) => {
        console.log(req.body)
        try {
            let {
                userID,
                projectTitle,
                projectAddress,
                day,
                month,
                year
            } = req.body
             
            //let ulrImgOrg = await cloudinary.uploader.upload(req.file.path)
            let project = new Project({
                projectTitle: projectTitle,
                projectAuthor: userID,
                projectAddress: projectAddress,
                projectAuthor:userID,
                projectAvatar:'',
                projectImage:'',
                projectDeadline: `${day}/${month}/${year}`,
            })
            await project.save()
            let userCreatePro = await User.findById(userID).lean()
            userCreatePro.projectList.push(project._id)
            await userCreatePro.save()
            console.log(userCreatePro)
            return res.status(200), json({
                message: 'Create project success'
            })
        } catch (err) {
            return res.status(400).json({
                error: err
            })
        }
    },
   
    findAllProjectOfUser: async (req,res)=>{
        try {
            let {userID} = req.body
            let projectList = await User.findById(userID).lean().projectList
            res.status(200).json({
                allProject: projectList
            })
        } catch(err) {
            res.status(500).json({error: err})
        }
    },
    findAllUserOfOrg: async (req,res)=>{
        try {
            let {orgID} = req.body
            let userList = await Org.findById(orgID).lean().userList
            res.status(200).json({
                allUser: userList
            })
        } catch(err) {
            res.status(500).json({error: err})
        }
    },
    findAllProjectOfOrg: async (req,res)=>{
        try {
            let {orgID} = req.body
            let projectList = await Org.findById(orgID).lean().projectList
            res.status(200).json({
                allProject: projectList
            })
        }catch(err) {
            res.status(500).json({
                error: err
            })
        }
    },
    findAll : async (req, res)=>{
        try {
            let projectList = await Project.find().lean()
            
            res.status(200).json(projectList)
        } catch (err) {
            res.status(500).json({msg: err.message})
        }
    }

}