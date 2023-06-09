const express = require("express");
const cors = require("cors");

const app = express();

// router
const userRouter = require("./src/app/moduler/users/user.router");
const renterRouter = require("./src/app/moduler/renter/renter.router");
const parkingRouter = require("./src/app/moduler/parking/parking.router");
const { default: errorHandler } = require("./middleware/errorHandler");

// middleware
app.use(cors());
app.use(express.json());

// root router

app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "🌍 park-fixer server project working",
  });
});

// router api
app.use("/api/v1/users", userRouter);
app.use("/api/v1/renter", renterRouter);
app.use("/api/v1/parking", parkingRouter);

// not found router
app.all("*", (req, res) => {
  res.status(400).json({
    status: "failed",
    message: "Not Found Router",
  });
});

// global error
app.use(errorHandler);

module.exports = app;
