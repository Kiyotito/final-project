const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const deletePost = async (req, res) => {
const client = new MongoClient(MONGO_URI);
  try {
    await client.connect();

    const db = client.db("final-project");
    const postCollection = db.collection("posts");
    console.log("connected!");

    const _id = req.params._id;

    const postData = await postCollection.findOne({_id});

    if (!postData) {
      return res
        .status(404)
        .json({ status: 404, data: null, message: "Post not found" });
    }

    const result = await postCollection.deleteOne({_id});


    res.status(200).json({
      status: 200,
      data: null,
      message: "Post successfully deleted",
    });
  } catch (err) {
    console.log("Error: ", err);
    res
      .status(500)
      .json({ status: 500, data: null, message: "something went wrong" });
    throw err;
  } finally {
    client.close();
    console.log("disconnected!");
  }
};

module.exports = {
  deletePost,
};
