const mongoose = require('mongoose')
const User = require('../model/user')
const projectSchema = new mongoose.Schema({
    projectTitle: {
        type: String,
        required: true,
    },
    projectAuthor: {
        type: mongoose.Types.ObjectId,
        ref: 'Organization'
    },
    projectAddress: {
        type: String,
        required: true,
    },
    projectDeadline: {
        type: Date,
        required: true,
    },
    projectAvatar: {
        type: String,
        required: true,
    },
    projectImage: {
        type: Date,
        required: true,
    },
   /* counter: {
        type: Integer,
        default: 0,
    }*/

})

module.exports = mongoose.model('Project', projectSchema)