const express = require("express");
//Models
const { User } = require("../db");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    const existingEmail = await User.findOne({ where: { email } }).catch(
      (err) => {
        console.log("Error: ", err);
      }
    );

    if (existingEmail) {
      return res
        .status(409)
        .json({ message: "User with email already exists!" });
    }

    const newUser = new User({ fullName, email, password });
    const savedUser = await newUser.save().catch((err) => {
      console.log("Error: ", err);
      res.status(500).json({ error: "Cannot register user at the moment!" });
    });

    if (savedUser) res.json({ message: "Thanks for registering" });
  } catch (error) {
    console.error(error);
  }
});

router.get("/", async (req, res) => {
  const allUser = await User.findAll();
  if (allUser.length === 0) {
    return res.send("no hay nati ");
  } else {
    return res.send(allUser);
  }
});

module.exports = router;
