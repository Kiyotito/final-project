const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const { v4: uuidv4 } = require("uuid");

const createProfile = async (req, res) => {
  const client = new MongoClient(MONGO_URI);
  try {
    //Connects to the database
    await client.connect();

    const db = client.db("final-project");
    const addProfile = db.collection("userProfile");

    console.log("connected!");
    //Creates a unique ID
    const profileId = uuidv4();
    //Compiles all the information that is going to be pushed in the database
    const profileData = { ...req.body, _id: profileId };
    //Insert the compiled information into the database
    const result = await addProfile.insertOne(profileData);
    //Returns a success response if everything went well
    res.status(201).json({
      status: 201,
      data: profileData,
      message: "profile added successfully",
    });
    //Catches an error and logs it if something wrong happens
  } catch (err) {
    console.log("error: ", err);
    res
      .status(500)
      .json({ status: 500, data: null, message: "something went wrong" });
    //Closes the client
  } finally {
    client.close();
    console.log("disconnected!");
  }
};

module.exports = { createProfile };
