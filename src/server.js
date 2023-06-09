
const app = require("./app");
const { connectToServer } = require("../middleware/dbConnection");
require("dotenv").config();
const port = process.env.PORT || 5050;


// database connect to server
connectToServer() // import here connectToServer here
app.listen(port, () => {
  console.log(`listen port at : ${port}`);
});