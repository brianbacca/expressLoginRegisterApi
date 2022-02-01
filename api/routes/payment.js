const express = require("express");
const passport = require("passport");

const router = express.Router();

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    try {
      res.send("You have a total of: 2400$");
    } catch (error) {
      console.log(error);
    }
  }
);

module.exports = router;
