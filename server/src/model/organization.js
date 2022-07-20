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
    Oname: {
        type: String,
        required: true,
        maxlenght: 10
    },
    Opassword: {
        type: String,
        required: true,
        maxlenght: 10
    },
    OLocation: {
        type: String,
        required: true
    },
    ODesc: {
        type: String,
        required: true
    },
    OMail: {
        type: String,
        required: true
    },
    OUrlImg: {
        type: String
    }

})

module.exports = mongoose.model('Organization', organizationSchema)