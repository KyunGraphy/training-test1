const mongoose = require("mongoose");
const imageSchema = new mongoose.Schema({
    ownerID: [{ type: mongoose.Types.ObjectId, ref: ["User", "Organization"] }],
    avaULR: {
        type: String,
        required: true,
    },
    projectURL: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("Image", imageSchema);
