const express = require("express");
const parkingController = require("./parking.controller");

const router = express.Router();

router
  .route("/:id")
  .get(parkingController.getParkingById)
  .patch(parkingController.patchParkingById)
  .delete(parkingController.deleteParkingById);
router.route("/").get(parkingController.getParking);

module.exports = router;
