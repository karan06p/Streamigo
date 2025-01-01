const UserModel = require("../models/User.schema");
const { hashPassword } = require("../utils/PasswordEditing");
const ApiResponse = require("../utils/ApiResponse");

async function checkIfUsernameExists(username){
    const exists = await UserModel.findOne({username})
    return exists !== null ;
}

async function registerUser(req, res) {
    const { username, email, password } = req.body;
    try {
        if (!username || !email || !password) {
            return ApiResponse(res, 400, "All input fields are required");
        }
        const usernameExists = await checkIfUsernameExists(username);
        if(usernameExists){
            return ApiResponse(res, 409, "Username already exists")
        }
        const existingEmail = await UserModel.findOne({email})
        if(existingEmail !== null){
            return ApiResponse(res, 409, "Email already exists")
        }
        const hashedPassword = await hashPassword(password);
        const newUser = new UserModel({ username, email, password: hashedPassword });
        await newUser.save();
        return ApiResponse(res, 200, "User created successfully");
    } catch (error) {
        console.error("Error occurred while trying to register user", error);
        return ApiResponse(res, 500, "Internal Server Error");
    }
}

module.exports = { registerUser };