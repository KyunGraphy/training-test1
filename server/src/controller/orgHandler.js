const Org = require('../model/organization')
const jwt = require('../service/jwtHandler')
const bcrypt = require('bcrypt')
const cloudinary = require('../service/cloudinaryConfig')
const salt = 12
module.exports = {
    register: async (req, res) => {
        try {
            let {
                orgName,
                orgPassword,
                orgLocation,
                orgDesc,
                orgMail
            } = req.body
            console.log(req.body)
            let ulrImgOrg = await cloudinary.uploader.upload(req.file.path)
            
            let existedOrgName = await Org.findOne({
                Oname: orgName
            }).lean()
            if (existedOrgName) {
                return res.status(400).json({
                    msg: 'Organization has existed'
                })
            }
            if (!orgName || typeof orgName !== 'string') {
                return res.status(400).json({
                    msg: 'Organization is required'
                })
            }

            if (!orgName) {
                return res.status(400).json({
                    msg: 'Organization has existed'
                })
            }
            if (!orgPassword || orgPassword.lenght < 6) {
                return res.status(400).json({
                    msg: 'Password has at least 6 characters'
                })
            }
            let hashPassword = bcrypt.hashSync(orgPassword, salt)
            if (!orgLocation) {
                return res.status(400).json({
                    msg: 'Localtion is required'
                })
            }
            if (!orgMail) {
                return res.status(400).json({
                    msg: 'Email is required'
                })
            }
            if (!orgDesc) {
                return res.status(400).json({
                    msg: 'Decripstion is required'
                })
            }

            let newOrg = new Org({
                Oname: orgName,
                Opassword: hashPassword,
                OLocation: orgLocation,
                ODesc: orgDesc,
                OMail: orgMail,
                OUrlImg: ulrImgOrg.url,
                projectList: [],
                userList: []

            })
            await newOrg.save()

            return res.json({
                message: 'register success',
                org: newOrg
            })
        } catch (err) {
            console.log(err)
            return res.status(500).json({
                msg: JSON.stringify(err)
            })
        }


    },
    login: async (req, res) => {
        try {
            let {
                orgName,
                orgPassword
            } = req.body
            console.log(req.body)
            let org = await Org.findOne({
                Oname: orgName
            }).lean()
            console.log(org)
            if (!org) {
                return res.status(400).json({
                    msg: 'Incorrect password or OrganizationName'
                })
            }
            let password = org.Opassword
            let checkPassword = bcrypt.compareSync(orgPassword, password)
            console.log(org._id)
            let tokens = await jwt.create(org)
            res.cookie('refreshToken',tokens.refreshToken,{
                httpOnly:true,
                sameSite: 'None', secure: true, 
                maxAge: 24 * 60 * 60 * 1000 
            })
            if (checkPassword) {
                res.status(200).json({
                    msg: 'Login success',
                    accessToken: tokens.accessToken,
                    organaziation: org
                })
            } else {
                res.status(400).json({
                    msg: 'Password is wrong'
                })
            }

        } catch (err) {
            console.log(err)

        }


    }
}