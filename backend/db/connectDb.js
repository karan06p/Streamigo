const mongoose = require("mongoose");
const uri = process.env.MONGODB_URI

const dbConnect = async () => {
    try {
        await mongoose.connect(uri)
        console.log("MongoDb connected")
    } catch (error) {
        console.log("Error occured while connecting to Database", error)
    }
}

module.exports = dbConnect