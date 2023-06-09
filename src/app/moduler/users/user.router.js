const express = require("express");
const userController = require("./user.controller");
const router = express.Router();

router.route("/").get(userController.getUser).post(userController.postUser);
router.route("/:email").get(userController.getUserByEmail).patch(userController.updateUserByEmail);

module.exports = router;
