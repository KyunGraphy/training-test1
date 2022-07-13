const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    FullName: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true,
    },
    userPassword: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    phoneNo: {
        type: String,
        required: true,
    },
    mail: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("User", userSchema);
