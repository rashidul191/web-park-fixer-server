const { MongoClient } = require("mongodb");
require("dotenv").config();
const url = process.env.DATABASE_URL; // mongodb://127.0.0.1:27017
const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
let dbConnection;

module.exports = {
  connectToServer: async function (callback) {
    await client.connect();
    dbConnection = client.db("park-fixer"); // database name here
    console.log("🛢 Successfully connected to MongoDB");
  },
  getDb: function () {
    return dbConnection;
  },
};
