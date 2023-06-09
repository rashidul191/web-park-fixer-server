const {
  getRenterService,
  deleteRenterByIdService,
  getRenterByIdService,
  updateRenterByIdService
} = require("./renter.service");

module.exports.getRenter = async (req, res, next) => {
  try {
    const getRenter = await getRenterService();
    res.status(200).json({
      status: "success",
      message: "Successfully get a renter data",
      data: getRenter,
    });
  } catch (error) {
    next(error);
  }
};

module.exports.getRenterById = async (req, res, next) => {
  try {
    const getRenterById = await getRenterByIdService(req);
    res.status(200).json({
      status: "success",
      message: "Successfully get a renter by id data",
      data: getRenterById,
    });
  } catch (error) {
    next(error);
  }
};

module.exports.updateRenterById = async (req, res, next) => {
  try {
    const updateRenterById = await updateRenterByIdService(req);
    res.status(200).json({
      status: "success",
      message: "Successfully update renter by id",
      data: updateRenterById,
    });
  } catch (error) {
    next(error);
  }
};

module.exports.deleteRenterById = async (req, res, next) => {
  try {
    const deleteRenterById = await deleteRenterByIdService(req);
    res.status(200).json({
      status: "success",
      message: "Successfully delete a renter data by id",
      data: deleteRenterById,
    });
  } catch (error) {
    next(error);
  }
};
