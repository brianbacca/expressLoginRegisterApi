var express = require("express");
const router = express.Router();

const userRouter = require("./users");
const registerApi = require("./register");
const  loginApi = require("./login")
/* GET home page. */

router.use("/user", userRouter);
router.use("/register", registerApi);
router.use("/login", loginApi);

module.exports = router;
