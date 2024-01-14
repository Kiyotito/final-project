const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const getPosts = async (req, res) => {
  const client = new MongoClient(MONGO_URI);
  console.log("I'm being accessed!");
  try {
    //Connects to the database
    await client.connect();
    const db = client.db("final-project");
    console.log("connected!");
    //Gets all the posts from MongoDb and stores them in an array
    const result = await db.collection("posts").find({}).toArray();
    //Checks that there are items within the collection
    console.log(result);
    result
      ? res
          .status(200)
          .json({
            status: 200,
            data: result,
            message: "Posts retrieved successfully",
          })
      : //If the collection is empty there is a message that says so
        res
          .status(404)
          .json({ status: 404, data: null, messaage: "Posts not found" });
    //Catches an error and logs it if something wrong happens
  } catch (err) {
    res
      .status(500)
      .json({ status: 500, data: null, message: "Something went wrong" });
    console.log("Error: ", err);
    //Closes the client
  } finally {
    client.close();
    console.log("disconnected!");
  }
};

module.exports = { getPosts };
