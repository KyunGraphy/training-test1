const cloudinary = require('cloudinary').v2
require('dotenv').config()

cloudinary.config({
    cloud_name: process.env.Cloudinary_Name,
    api_key: process.env.Cloudinary_ApiKey,
    api_secret: process.env.Cloudinary_ApiSecret
})

module.exports =  cloudinary;