const { ObjectId } = require("mongodb");
const { getDb } = require("../../../../middleware/dbConnection");

module.exports.getParkingService = async () => {
  const db = getDb();
  const result = await db.collection("parking").find({}).toArray();
  return result;
};

module.exports.getParkingByIdService = async (req) => {
  const db = getDb();
  const { id } = req.params;
  const result = await db
    .collection("parking")
    .findOne({ _id: new ObjectId(id) });
  return result;
};

module.exports.patchParkingByIdService = async (req) => {
  const db = getDb();
  const { id } = req.params;
  const updateDoc = {
    $set: { request: "approved" },
  };
  const result = await db
    .collection("parking")
    .updateOne({ _id: new ObjectId(id) }, updateDoc);
  return result;
};

module.exports.deleteParkingByIdService = async (req) => {
  const db = getDb();
  const { id } = req.params;
  const result = await db
    .collection("parking")
    .deleteOne({ _id: new ObjectId(id) });

  return result;
};
