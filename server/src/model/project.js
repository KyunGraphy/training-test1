const mongoose = require('mongoose')
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
        type: String,
        required: true,
    },
    projectImage: {
        type: String,
        required: true,
    },
})
module.exports = mongoose.model('Project', projectSchema)