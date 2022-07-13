const mongoose = require('mongoose')
const activeprojectSchema = new mongoose.Schema({
    userID: [{ type: mongoose.Types.ObjectId, ref: 'User' }],
    projectID: [{ type: mongoose.Types.ObjectId, ref: 'Project' }]
})

module.exports = mongoose.model('ActiveProject', activeprojectSchema)