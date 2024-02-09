const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const modifyPost = async (req, res) => {
  const client = new MongoClient(MONGO_URI);
  //Stores the posts's _id from params into a variable
  const _id = req.params._id;
  //Stores new values in a variable to push into the database
  const newValues = { $push: { ...req.body } };
  try {
    //Connects to the database
    await client.connect();
    const db = client.db("final-project");
    console.log("connected");
    //Finds the posts using its _id
    const findPost = await db.collection("posts").findOne({ _id });
    //Checks that there is post associated with this _id
    //If there is a posts, the items in the post are updated
    if (findPost) {
      await db.collection("posts").updateOne({ _id }, newValues);
      console.log("posts Updated!");
      res.status(200).json({ status: 200, message: "posts Updated!" });
    } else {
      //If there isn't a posts associated with that _id then a message saying that no post was found
      res.status(404).json({ status: 404, message: "posts Not Found" });
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

module.exports = { modifyPost };
