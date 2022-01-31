var express = require('express');
var router = express.Router();

const {User} = require("../db")

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const allUser = await User
});

module.exports = router;
