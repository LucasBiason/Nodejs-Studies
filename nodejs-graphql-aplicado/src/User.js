const mongoose = require('mongoose')

const UserShema = new mongoose.Schema({
    name: String,
    email: String
});

module.exports = mongoose.model("User", UserShema)