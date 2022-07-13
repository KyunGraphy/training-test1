const mongoose = require('mongoose')
const projectSchema = new mongoose.Schema({
    projectName: {
        type: String,
        required: true,
    },
    projectAbout: {
        type: String,
        required: true,
    },
    projectProgress: {
        type: String,
        required: true,
    },
    projectBenefit: {
        type: String,
        required: true,
    },
    projectRequirement: {
        type: String,
        required: true,
    },
    projectDeadline: {
        type: Date,
        required: true,
    },
    counter: {
        type: Integer,
        default: 0,
    }

})

module.exports = mongoose.model('Project', projectSchema)