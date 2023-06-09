const { postUserService, getUserService, getUserByEmailService, updateUserByEmailService } = require("./user.service");

module.exports.postUser = async (req, res, next) => {
  try {
    const postUser = await postUserService(req);
    res.status(200).json({
      status: "success",
      message: "Successfully get a user data",
      data: postUser,
    });
  } catch (error) {
    next(error);
  }
};



module.exports.getUser = async (req, res, next) => {
  try {
    const getUser = await getUserService();
    res.status(200).json({
      status: "success",
      message: "Successfully get a user data",
      data: getUser,
    });
  } catch (error) {
    next(error);
  }
};

module.exports.getUserByEmail = async (req, res, next) => {
  try {
    const getUserByEmail = await getUserByEmailService(req);
    res.status(200).json({
      status: "success",
      message: "Successfully get a user data by email",
      data: getUserByEmail,
    });
  } catch (error) {
    next(error);
  }
};

module.exports.updateUserByEmail = async (req, res, next) => {
  
  try {
    const updateUserByEmail = await updateUserByEmailService(req)
    res.status(200).json({
      status: "success",
      message: "Successfully update a user data by email",
      data: updateUserByEmail,
    });
  } catch (error) {
    next(error)
  }
}
