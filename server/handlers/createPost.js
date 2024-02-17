const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const { v4: uuidv4 } = require("uuid");

const createPost = async (req, res) => {
  const client = new MongoClient(MONGO_URI);
  try {
    //Connects to the database
    await client.connect();
    const db = client.db("final-project");
    const addPost = db.collection("posts");
    console.log('changing to be able to commit')
    //Creates a unique ID
    const postId = uuidv4();
    //Compiles all the information that is going to be pushed in the database
    const postData = { ...req.body, _id: postId };
    //add order to MongoDB
    const result = await addPost.insertOne(postData);

    return res.status(201).json({
      status: 201,
      data: postData,
      message: "post added successfully",
    });

    //Catches an error and logs it if something wrong happens
    } catch (err) {
    console.log("error: ", err);
    return res
      .status(500)
      .json({ status: 500, data: null, message: "something went wrong" })
  }
};

module.exports = { createPost };
