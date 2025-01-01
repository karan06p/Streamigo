require("dotenv").config()
const port = process.env.PORT || 3000
const express = require("express");
const dbConnect = require("./db/connectDb");
const userRoutes = require("./routes/userRoute");

const app = express()
app.use(express.json()) // Middleware to parse JSON 

dbConnect() // Connect db as the server is started

app.use("/api/users", userRoutes)

app.listen(port, () => {
    console.log("App is running on PORT: ", port)
});

app.get("/", (req, res) => {
    res.send("Hey")
});



