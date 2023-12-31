const express = require("express");
const router = express.Router();
const {
  signup,
  login,
  logout,
  forgotPassword,
  passwordReset,
  getLoggedInUserDetail,
  changePassword,
  updateUserDetails,
} = require("../controllers/userController");

const { isLoggedIn } = require("../middlewares/user");

router.route("/signup").post(signup);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/forgotPassword").post(forgotPassword);
router.route("/password/reset/:token").post(passwordReset);
router.route("/userDetails").get(isLoggedIn, getLoggedInUserDetail);
router.route("/changePassword").post(isLoggedIn, changePassword);
router.route("/userDashboard/update").post(isLoggedIn, updateUserDetails);
router.route("/app.");

module.exports = router;
