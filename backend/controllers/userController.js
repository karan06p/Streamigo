const UserModel = require("../models/User.schema");
const { hashPassword } = require("../utils/PasswordEditing");
const ApiResponse = require("../utils/ApiResponse");
const { comparePassword } = require("../utils/PasswordEditing")
 
async function checkIfUsernameExists(username){
    const exists = await UserModel.findOne({username})
    return exists !== null ;
}

async function signUp(req, res) {
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

async function signIn(req, res){
    const { email, password } = req.body
    try {
        const user = await UserModel.findOne({email});
        if(user ===  null){
            console.log("User doesn't exist")
            return ApiResponse(res, 404, "Email do not exists please signup")
        };
        const checkedPassword = await comparePassword(password, user.password)
        if(!checkedPassword){
            console.log("Password is Incorrect");
            return ApiResponse(res, 400, "Password is Incorrect")
        }
        console.log("user signed in")
        return ApiResponse(res,200,"User signed in successfully")
    } catch (error) {
        console.error("Error occurred while trying to sign in user");
        return ApiResponse(res,500, "Internal Server Error")
    }

}

module.exports = { signUp, signIn };