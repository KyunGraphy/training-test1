const express = require('express');
const jwt = require('../service/jwtHandler');
const routes = express.Router();
const cloudinary = require('../service/cloudinaryConfig');
const User = require('../model/user');
const bcrypt = require('bcrypt');
const saltRounds = 12;

async function getUser(req, res, next) {
    try {
        const user = await User.findById(req.params.userName)
        if (user == null) {
            return res.status(404).json({ message: 'User not found' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
    res.user = User;
    next();
}

module.exports = {
    //create account
    register: async (req, res) => {
        try{
            let{
                userName,
                userPassword,
                userFullName,
                userFirstName, 
                userLastName,  
                userPhoneNumber, 
                userEmail,
            } = req.body;
            let urlImgUser = await cloudinary.uploader.upload(req.file.path);
            console.log(req.file);
            let exitedUserName = await User.findOne({
                userName: userName
            }).lean();
            if (exitedUserName){
                return res.status(400).json({
                    message: "User already exist !"
                })
            }
            if(!userName || typeof userName !== "string"){
                return res.status(400).json({ 
                    message: "Username not accepted !"
                });
            }
            if(!userFullName || typeof userFullName !== "string"){
                return res.status(400).json({
                    message: "Fullname not accepted !"
                });
            }
            if(!userFirstName || typeof userFirstName !== "string"){
                return res.status(400).json({ 
                    message: "Firstname not accepted !"
                });
            }
            if(!userLastName || typeof userLastName !== "string"){
                return res.status(400).json({ 
                    message: "Lastname not accepted !"
                });
            }
            if(!userPassword || typeof userPassword !== "string"){
                return res.status(400).json({ 
                    message: "Password not accepted !" 
                });
            }
            if(!userEmail || typeof userEmail !== "string"){
                return res.status(400).json({ 
                    message: "email invalid !"
                });
            }
            if(!userPhoneNumber || typeof userPhoneNumber !== "number"){
                return res.status(400).json({ 
                    message: "phone number not accepted !"
                });
            }

            let hashedPassword = bcrypt.hashSync(userPassword, saltRounds);

            let newuser = new User({
                username: userName,
                userPassword: hashedPassword,
                firstName: userFirstName,
                lastName: userLastName,
                fullName: userFullName,
                email: userEmail,
                phoneNumber: userPhoneNumber,
                UserImg: urlImgUser
            });
            await newuser.save();
            let tokens = await jwt.create(newuser._id);
            return res.json({
                message: "register success !",
                accessToken: tokens.accessToken,
                refreshToken: tokens.refreshToken
            })
        }catch(err){
            console.log(error);
            return res.status(500).json("Internal server error");
        }
    },

    //login
    login: async (req, res) => {
        try{
            let {
                userName, 
                userPassword
            } = req.body
            console.log(req.body);
            let user = await User.findOne({ 
                username: userName
            }).lean();
            if (!user){
                return res.status(400).json({ 
                    message: "User already exits!" 
                });
            }
            let tokens = await jwt.create(user._id)
            let password = user.userPassword
            let passwordcorrected = bcrypt.compareSync(userPassword, password);
            if (!passwordcorrected){
                return res.status(400).json({ 
                    message: "Password incorrect!",
                });
            } else {
                return res.status(200).json({ 
                    message: "login successful!",
                    accessToken: tokens.accessToken,
                    refreshToken: tokens.refreshToken
                });
            }
        }
        catch(err){
            console.log(error);
            return res.status(500).json("Internal server error");
        }
    },

    update: async (req, res) => {
        try{
            let{
                userName,
                userPassword,
                userFullName,
                userFirstName, 
                userLastName,  
                userPhoneNumber, 
                userEmail,
            }= req.body;
            if (userName !== null) {
                res.getUser.uname = userName
            }
            if (userFullName !== null) {
                res.getUser.uFullName = userFullName
            }
            if (userFirstName !== null) {
                res.getUser.uFirstName = userFirstName
            }
            if (userLastName !== null) {
                res.getUser.uLastName = userLastName
            }
            if (userPhoneNumber !== null) {
                res.getUser.uPhoneNo = userPhoneNumber
            }
            if (userEmail !== null) {
                res.getUser.uMail = userEmail
            }
            if (userPassword !== null) {
                res.getUser.uPassword = userPassword
            }
            try {
                const updatedUser = res.user.save()
                res.json(updatedUser)
                res.status(201).json({msg: 'Updated successfully'})
            } catch (err) {
                res.status(422).json("Unprocessable Entity");
            }
        } catch (err) {
            res.status(400).json("Internal server error");
        }
    },

    delete: async (req, res) => {
        try {
            let userName = req.body
            let user = await U.findOne({
                userName: userName
            }).lean()
            user.remove()
            return res.status(204).json({ 
                message: 'User deleted successfully' 
            });
        } catch (err) {
            return res.status(404).json("Internal server error");
    }
}
}
