const mongoose = require('mongoose');
const projectListSchema = new mongoose.Schema({
    p_id: {
        type: String,
        required: true,
        unique: true
    },
    p_name: {
        type: String,
        required: true
    },
    p_desc: {
        type: String,
        required: true
    },
    p_benefit: {
        type: Password,
        required: true
    },
    p_req: {
        type: String,
        required: true
    },
    p_progress: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model('projectList', projectListSchema)