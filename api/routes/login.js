const express = require("express");
const { User } = require("../db");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.post("/", async (req, res) => {
  const { email, password } = req.body;
  try {
    const userWithEmail = await User.findOne({ where: { email: email } });

    if (!userWithEmail)
      return res
        .status(400)
        .json({ message: "Email or password does not match!" });

    if (userWithEmail.password !== password)
      return res
        .status(400)
        .json({ message: "Email or password does not match!" });

    const jwtToken = jwt.sign(
      { id: userWithEmail.id, email: userWithEmail.email },
      process.env.JWT_SECRET
    );

    res.json({ message: "Welcome Back!", token: jwtToken });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
