const bcrypt = require("bcrypt")

async function hashPassword(password){
    const newPassword = await bcrypt.hash(password, 10)
    return newPassword
};

async function comparePassword(password, hashedPassword){
    try {
        const result = await bcrypt.compare(password, hashedPassword)
        return result;
    } catch (error) {
        console.log("Error occured while comparing password");
        throw error;
    }
};

module.exports = { hashPassword, comparePassword }