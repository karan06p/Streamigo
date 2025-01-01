const bcrypt = require("bcrypt")

async function hashPassword(password){
    const newPassword = await bcrypt.hash(password, 10)
    return newPassword
};

async function comparePassword(password, hashedPassword){
    await bcrypt.compare(password, hashedPassword, (err, result) => {
        try {
            return result
        } catch (error) {
            console.log("Error occured while comparing passwords", error)
            return err
        }
    })
};

module.exports = { hashPassword, comparePassword }