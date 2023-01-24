const mongoose = require('mongoose');

const UserScheme = mongoose.Schema({
    fullname: String,
    email: String,
    password: String,
    role:String,
})

const userModel = mongoose.model("user", UserScheme)

module.exports = {
    userModel
}