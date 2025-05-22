const express = require("express");

const {
  registerUser ,
  loginUser,
  getUserInfo
} = require("../controllers/authController");
const { get } = require("mongoose");

const router = express.Router();

router.post("/register",registerUser);

router.post("/login",loginUser);

// router.get("/getUser", protect, getUserInfo);

module.exports = router;