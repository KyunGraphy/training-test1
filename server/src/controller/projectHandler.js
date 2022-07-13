const Project = require('../model/project')
const Org = require('../model/organization')
const User = require('../model/user')
module.exports = {
         
    addUsertoOrg: async (req, res) => {
        try {
            let {userID,orgID} = req.body
            let org = await Org.findById (orgID)
            let userListOfOrg = org.userList
            userListOfOrg.some(element =>{
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
                message:'add user to Organization success'
            })
        } catch(err) {
            return res.status(200).json({
                error : err
            })
        }
    },
    creatProByUser: async (req, res) => {
        try {
            let {
                userID,
                projectName,
                projectAbout,
                projectProgress,
                projectBenefit,
                projectRequirement,
                day,
                month,
                year
            } = req.body
            let project = new Project({
                projectName: projectName,
                projectAbout: projectAbout,
                projectProgress: projectProgress,
                projectBenefit: projectBenefit,
                projectRequirement: projectRequirement,
                projectDeadline: `${day}/${month}/${year}`,
            })
            await project.save()
            let userCreatePro = await User.findById(userID).lean()
            userCreatePro.projectList.push(project._id)
            await userCreatePro.save()
            return res.status(200), json({
                message: 'Create project success'
            })
        } catch (err) {
            return res.status(400).json({
                error: err
            })
        }
    },
   
    findAllProjectOfUser: async (req,res)=>{},
    findAllUserOfOrg: async (req,res)=>{},
    findAllProjectOfOrg: async (req,res)=>{}

}