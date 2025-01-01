const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type:String,
        required: true,
        minLength: [8, "Password must be at least 8 characters long."]
    },
    email:{
        type: String,
        required: true,
    }
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel
