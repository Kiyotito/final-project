const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const modifyProfile = async (req, res) => {
  const client = new MongoClient(MONGO_URI);
  //Stores the profile's _id from params into a variable
  const _id = req.params._id;
  //Stores new values in a variable to push into the database
  const newValues = { $set: { ...req.body } };
  
  try {
    //Connects to the database
    await client.connect();
    const db = client.db("final-project");
    console.log("connected");
    //Finds the profile using its _id
    const findProfile = await db.collection("userProfile").findOne({ _id });
    //Checks that there is a profile associated with this _id
    //If there is a profile, the items in the profile are updated
    if (findProfile) {
      await db.collection("userProfile").updateOne({ _id }, newValues);
      console.log("profile Updated!");
      res.status(200).json({ status: 200, message: "profile Updated!" });
    } else {
      //If there isn't a profile associated with that _id then a message saying that no profile was found
      res.status(404).json({ status: 404, message: "profile Not Found" });
    }
    //Catches an error and logs it if something wrong happens
  } catch (err) {
    console.log("error: ", err);
    res
      .status(500)
      .json({ status: 500, data: null, message: "Something Went Wrong" });
    //Closes the client
  } finally {
    client.close();
    console.log("disconnected!");
  }
};

module.exports = { modifyProfile };
