const express = require("express");
const renterController = require("./renter.controller");

const router = express.Router();

router
  .route("/:id")
  .get(renterController.getRenterById).patch(renterController.updateRenterById)
  .delete(renterController.deleteRenterById);
router.route("/").get(renterController.getRenter);

module.exports = router;
