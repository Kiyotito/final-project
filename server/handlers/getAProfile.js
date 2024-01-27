const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const getAProfile = async (req, res) => {
  const client = new MongoClient(MONGO_URI);
  //Stores the post's _id from params into a variable
  const _id = req.params._id;
  try {
    //Connects to the database
    await client.connect();
    const db = client.db("final-project");
    console.log("connected!");
    //Finds the cart using its _id
    const result = await db.collection("userProfile").findOne({ _id });
    //Checks that there is a post associated with this _id
    result
      ? //Returns a success response if everything went well
        res.status(200).json({
          status: 200,
          data: result,
          message: "Profile Found Successfully",
        })
      : //If there isn't a cart associated with that _id then a message saying that no cart was found
        res.status(404).json({ status: 404, data: null, message: "Not Found" });
    //Catches an error and logs it if something wrong happens
  } catch (err) {
    console.log(err.stack);
    //Closes the client
  } finally {
    client.close();
    console.log("Disconnected");
  }
};

module.exports = { getAProfile };
