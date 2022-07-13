const U = require('../model/user')
const bcrypt = require('bcrypt')
const salt = 12

async function getUser(req, res, next) {
    try {
        const user = await U.findById(req.params.userName)
        if (user == null) {
            return res.status(404).json({ message: 'User not found' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
    res.user = user
    next()
}

module.exports = {
    register: async (req, res) => {
        try {
            let {
                uname,
                uFullName,
                uFirstName,
                uLastName,
                uPhoneNo,
                uMail,
                uPassword
            } = req.body
            let existedUserName = await U.findOne({
                userName: uname
            }).lean()
            if (existedUserName) {
                return res.status(400).json({
                    msg: 'Username already existed'
                })
            }
            if (!uname || typeof uname !== 'string') {
                return res.status(400).json({
                    msg: 'Username required'
                })
            }
            if (!uname) {
                return res.status(400).json({
                    msg: 'Username already in use'
                })
            }
            if (!uFullName || typeof uFullName !== 'string') {
                return res.status(400).json({
                    msg: 'User name is required'
                })
            }
            if (!uFirstName || typeof uFirstName !== 'string') {
                return res.status(400).json({
                    msg: 'First name is required'
                })
            }
            if (!uLastName || typeof uLastName !== 'string') {
                return res.status(400).json({
                    msg: 'Last name is required'
                })
            }
            if (!uPhoneNo || typeof uPhoneNo !== 'string') {
                return res.status(400).json({
                    msg: 'Phone number is required'
                })
            }
            if (!uMail || typeof uMail !== 'string') {
                return res.status(400).json({
                    msg: 'Mail address is required'
                })
            }
            if (!uPassword || typeof uPassword !== 'string') {
                return res.status(400).json({
                    msg: 'Password is required'
                })
            }
            let hashPassword = bcrypt.hashSync(uPassword, salt)
            let newUser = new U({
                userName: uname,
                FullName: uFullName,
                firstName: uFirstName,
                lastName: uLastName,
                phoneNo: uPhoneNo,
                mail: uMail,
                userPassword: hashPassword
            })
            await newUser.save()
            let allUsers = await U.find()
            console.log(allUsers)
            return res.json({
                message: 'register success',
                user: newUser
            })
        } catch (err) {
            return res.status(500).json({ message: err.message })
        }
    },

    login: async (req, res) => {
        try {
            let {
                uname, uPassword
            } = req.body
            let user = await U.findOne({
                userName: uname
            }).lean()
            console.log(user)
            if (!user) {
                return res.status(400).json({
                    msg: 'Invalid username or password'
                })
            }
            let password = user.userPassword
            let checkPassword = bcrypt.compareSync(uPassword, password)
            if (checkPassword) {
                res.status(200).json({
                    msg: 'login success'
                })
            } else {
                res.status(400).json({ message: 'Invalid username or password' })
            }
        } catch (err) {
            console.log(err)
        }
    },

    update: async (req, res) => {
        try {
            let {
                uname,
                uFullName,
                uFirstName,
                uLastName,
                uPhoneNo,
                uMail,
                uPassword
            } = req.body
            if (uname !== null) {
                res.getUser.uname = uname
            }
            if (uFullName !== null) {
                res.getUser.uFullName = uFullName
            }
            if (uFirstName !== null) {
                res.getUser.uFirstName = uFirstName
            }
            if (uLastName !== null) {
                res.getUser.uLastName = uLastName
            }
            if (uPhoneNo !== null) {
                res.getUser.uPhoneNo = uPhoneNo
            }
            if (uEmail !== null) {
                res.getUser.uMail = uMail
            }
            if (uPassword !== null) {
                res.getUser.uPassword = uPassword
            }
            try {
                const updatedUser = res.user.save()
                res.json(updatedUser)
                res.status(201).json({msg: 'updated successfully'})
            } catch (err) {
                res.status(422).json({message: err.message})
            }
        } catch (err) {
            res.status(400).json({message: err.message})
        }
    },
    delete: async (req, res) => {
        try {
            let uname = req.body
            let user = await U.findOne({
                userName: uname
            }).lean()
            user.remove()
            return res.status(204).json({ message: 'User deleted successfully' })
        } catch (err) {
            return res.status(404).json({ message: err.message })
        }
    }
}