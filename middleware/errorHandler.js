const errorHandler = (error, req, res, next) => {
  res.status(400).json({
    status: "failed!!! global error",
    message: error.message,
  });
};

export default errorHandler;
