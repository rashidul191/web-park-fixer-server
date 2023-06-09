const {
  getParkingService,
  deleteParkingByIdService,
  getParkingByIdService,
  patchParkingByIdService
} = require("./parking.service");

module.exports.getParking = async (req, res, next) => {
  try {
    const getParking = await getParkingService();
    res.status(200).json({
      status: "success",
      message: "Successfully get a parking data",
      data: getParking,
    });
  } catch (error) {
    next(error);
  }
};

module.exports.getParkingById = async (req, res, next) => {
  try {
    const getParkingById = await getParkingByIdService(req);
    res.status(200).json({
      status: "success",
      message: "Successfully get a parking by id data",
      data: getParkingById,
    });
  } catch (error) {
    next(error);
  }
}

module.exports.patchParkingById = async (req, res, next) => {

  try {
    const patchParkingById = await patchParkingByIdService(req);
    res.status(200).json({
      status: "success",
      message: "Successfully update parking by id",
      data: patchParkingById,
    });
  } catch (error) {
    next(error);
  }
}

module.exports.deleteParkingById = async (req, res, next) => {
  try {
    const deleteParkingById = await deleteParkingByIdService(req);
    res.status(200).json({
      status: "success",
      message: "Successfully delete a renter data by id",
      data: deleteParkingById,
    });
  } catch (error) {
    next(error);
  }
};
