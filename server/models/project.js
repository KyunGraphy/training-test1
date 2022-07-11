const mongoose = require('mongoose')
const projectSchema = new mongoose.Schema({
    p_id:{
        type:String, ref : 'projectList'
    },
    id:{
        type:String, ref : 'user'
    },
    full_name:{
        type:String, ref : 'user'
    }
})

module.exports = mongoose.model('project', projectSchema)