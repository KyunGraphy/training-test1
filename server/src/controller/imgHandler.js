const Img = require('../model/image ')
const b64 = require('../service/imgtoB64')
const Org = require('../model/organization')
const U = require('../model/user')
module.exports = {
    upload: async (req, res) => {
        try {
            let {
                avaLink, projectLink
            } = req.body
            let {userID, orgID} = req.body
            let authorID = req.body
            
            let userAUthor = await U.findById(userID)
            let orgAUthor = await Org.findById(orgID)

            if (userAUthor){
                let UserImage = new Img({
                    ownerID: authorID,
                    avaULR: avaLink,
                    projectULR: projectLink
                })
                await UserImage.save()
                return res.status(200).json({msg: 'image saved for user'})
            }
            
            if (orgAUthor) {
                let OrgImage = new Img({
                    ownerID: orgID,
                    avaULR: avaLink,
                    projectULR: projectLink
                })
                await OrgImage.save()
                return res.status(200).json({msg: 'image saved for Organization'})
            }

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }

    }
}