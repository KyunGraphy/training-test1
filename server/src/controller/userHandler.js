const express = require('express');
const routes = express.Router();
const user = require('../model/user');
const bcrypt = require('bcrypt');
const saltRounds = 12;

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
            if(!password.length < 8){
                return res.status(400).json({ 
                    message: "password must have 8 characters or more !"
                });
            }
            if(!userEmail || typeof userEmail !== "string"){
                return res.status(400).json({ 
                    message: "email invalid !"
                });
            }
            if(!userPhoneNumber || typeof userPhoneNumber !== "number" || phoneNumber.length <= 10){
                return res.status(400).json({ 
                    message: "phone number wrong or least to 10 characters"
                });
            }
            let hashedPassword = await bcrypt.hashSync(assword, saltRounds);

            let newuser = new user({
                username: userName,
                password: hashedPassword,
                firstName: userFirstName,
                lastName: userLastName,
                fullName: userFullName,
                email: userEmail,
                phoneNumber: userPhoneNumber
            });
            await newuser.save();
            return res.status(200).json({ 
                message: "Succesfully registered",
                user: newuser
            });
        }
        catch(err){
            console.log(error);
            console.log(json.stringify(err));
            if(err.code === 11000){
                return res.status(400).json({ message: "user already exists"});
            }
            return res.status(500).json({message: err.message});
        }
    },

    //login
    login: async (req, res) => {
        try{
            let {
                userName, userPassword
            } = req.body
            let user = await user.findOne({ 
                username: userName
            }).lean();
            console.log(user);
            if (!user){
                return res.status(400).json({ 
                    message: "User already exits!" 
                });
            }
            let password = user.userPassword
            let passwordcorrected = bcrypt.compareSync(userPassword, password);
            if (!passwordcorrected){
                return res.status(400).json({ message: "Password incorrect!" });
            } else {
                return res.status(200).json({ message: "login successful!" });
            }
        }
        catch(err){
            console.log(error);
            return res.status(500).json({message: err.message});
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
                res.status(422).json({message: err.message})
            }
        } catch (err) {
            res.status(400).json({message: err.message})
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
            return res.status(404).json({ message: err.message });
        }
    }
} 
