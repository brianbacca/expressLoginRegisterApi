var express = require("express");
const router = express.Router();

const userRouter = require("./users");
const registerApi = require("./register");
const loginApi = require("./login");
const paymentApi = require("./payment");

router.use("/user", userRouter);
router.use("/register", registerApi);
router.use("/login", loginApi);
router.use("/payment", paymentApi);
module.exports = router;
