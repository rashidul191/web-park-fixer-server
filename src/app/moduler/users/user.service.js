const { getDb } = require("../../../../middleware/dbConnection");

module.exports.postUserService = async (req) => {
  const db = getDb();
  const result = await db.collection("user").insertOne(req.body);
  return result;
};

module.exports.getUserService = async () => {
  const db = getDb();
  const result = await db.collection("user").find({}).toArray();
  return result;
};

module.exports.getUserByEmailService = async (req) => {
  const db = getDb();
  const { email } = req.params;
  const result = await db.collection("user").findOne({ email });
  return result;
};

module.exports.updateUserByEmailService = async (req) => {
  const db = getDb();
  const { email } = req.params;
  const options = { upsert: true };
  const updateDoc = {
    $set: req.body,
  };
  const result = await db
    .collection("user")
    .updateOne({ email }, updateDoc, options);
  return result;
};
