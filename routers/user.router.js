const express = require("express");
const router = express.Router();
const controller = require("../controllers/index");

router.post("/register", controller.userController.register);
router.post("/login", controller.userController.login);
router.post("/changepassword",controller.userController.changePassword);

module.exports = {
  user: router,
};
