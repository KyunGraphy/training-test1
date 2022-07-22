const mongoose = require('mongoose');
const organizationSchema = new mongoose.Schema({
    projectList: [{
        type: mongoose.Types.ObjectId,
        ref: 'Project'
    }],
    userList: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }],
    OrganizationName: {
        type: String,
        required: true,
        maxlenght: 10
    },
    OrganizationPassword: {
        type: String,
        required: true,
        maxlenght: 10
    },
    OrganizationLocation: {
        type: String,
        required: true
    },
    OrganizationDesc: {
        type: String,
        required: true
    },
    OrganizationMail: {
        type: String,
        required: true
    },
    OrganizationUrlImg: {
        type: String
    }

})

module.exports = mongoose.model('Organization', organizationSchema)