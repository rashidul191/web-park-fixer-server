const { ObjectId } = require("mongodb");
const { getDb } = require("../../../../middleware/dbConnection");

module.exports.getRenterService = async () => {
  const db = getDb();
  const result = db.collection("renter").find({}).toArray();
  return result;
};

module.exports.getRenterByIdService = async (req) => {
  const db = getDb();
  const { id } = req.params;
  const result = await db
    .collection("renter")
    .findOne({ _id: new ObjectId(id) });
  return result;
};

module.exports.deleteRenterByIdService = async (req) => {
  const db = getDb();
  const { id } = req.params;
  const result = await db
    .collection("renter")
    .deleteOne({ _id: new ObjectId(id) });
  return result;
};

module.exports.updateRenterByIdService = async (req) => {
  const db = getDb();
  const { id } = req.params;
  const updateDoc = {
    $set: { request: "approved" },
  };

  const result = await db
    .collection("renter")
    .updateOne({ _id: new ObjectId(id) }, updateDoc);
  return result;
};
