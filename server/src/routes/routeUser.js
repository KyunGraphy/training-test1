const express = require('express')
const router = express.Router()
const User = require('../model/user')

//get all users
router.get('/', async (req, res) => {
    try {
        const user = await User.find({})
        res.json(user)
    } catch (err) {
        res.status(500).json({ error: err })
    }
})

//get one user
router.get('/_id', getUser, (req, res) => {
    res.json(res.user)
})

//create new user
router.post('/', async (req, res) => {
    const user = new User({
        FullName: req.body.FullName,
        userName: req.body.userName,
        userPassword: req.body.userPassword,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phoneNo: req.body.phoneNo,
        mail: req.body.mail
    })
    try {
        const newUser = await user.save()
        res.status(201).json(newUser)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

//update user
router.patch('/:_id', getUser, (req, res) => {
    if (req.body.firstName != null) {
        res.getUser.firstName = req.body.firstName
    }
    if (req.body.lastName != null) {
        res.getUser.lastName = req.body.lastName
    }
    if (req.body.FullName != null) {
        res.getUser.FullName = req.body.FullName
    }
    if (req.body.mail != null) {
        res.getUser.mail = req.body.mail
    }
    if (req.body.userName != null) {
        res.getUser.userName = req.body.userName
    }
    if (req.body.userPassword != null) {
        res.getUser.password = req.body.userPassword
    }
    if (req.body.phoneNo != null) {
        res.getUser.phoneNo = req.body.phoneNo
    }
    try {
        const udatedUser = res.user.save()
        res.json(udatedUser)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

//delete user
router.delete('/:_id', getUser, (req, res) => {
    try {
        await res.user.remove()
        res.json({ message: 'User deleted' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

async function getUser(req, res, next) {
    try {
        const user = await User.findById(req.params._id)
        if (user == null) {
            return res.status(404).json({ message: 'User not found' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
    res.user = user
    next()
}

module.exports = routeUser