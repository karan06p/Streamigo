require("dotenv").config()
const express = require("express");
const app = express()
const port = process.env.PORT || 3000

const dbConnect = require("./DB/connectDb");


dbConnect()

app.listen(port, () => {
    console.log("App is running on PORT: ", port)
})

app.get("/" , (req, res) => {
    res.send("Hello World")
})
