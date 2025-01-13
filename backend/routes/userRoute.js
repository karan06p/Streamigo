const express = require("express");
const { signUp } = require("../controllers/userController");
const { signIn } = require("../controllers/userController");
const router = express.Router();

router.post("/signUp", signUp);
router.post("/signIn", signIn)

module.exports = router;