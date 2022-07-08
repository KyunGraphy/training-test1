const mongoose = require('mongoose')
const projectSchema = new mongoose.Schema({
    p_id:{
        type:Schema.Types.ObjectId, ref : 'projectList'
    },
    id:{
        type:Schema.Types.ObjectId, ref : 'user'
    },
    full_name:{
        type:Schema.Types.ObjectId, ref : 'user'
    }
})

module.exports = mongoose.model('project', projectSchema)