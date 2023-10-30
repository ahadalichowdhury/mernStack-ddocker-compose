

const express = require("express");
const router = express.Router();
const {registration, userDetails} = require("../controllers/registerController")


router.post("/register", registration)
router.get("/user", userDetails)

module.exports = router;