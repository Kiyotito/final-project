const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const { v4: uuidv4 } = require("uuid");


const CreateOrGetAProfile = async (req, res) => {
  const client = new MongoClient(MONGO_URI);
  //Stores the post's _id from params into a variable
  const _id = req.params._id;
  console.log("test 2",req.body)
  const profileData = { ...req.body, _id: _id };
  console.log("testing: ", profileData);
  try {
    //Connects to the database
    await client.connect();
    const db = client.db("final-project");
    console.log("connected!");
    //Finds the cart using its _id
    const result = await db.collection("userProfile").findOne({ _id });
    //Checks that there is a post associated with this _id
    if (result) {
  //Returns a success response if everything went well      
   return res.status(200).json({
          status: 200,
          data: result,
          message: "User Found Successfully",
        })

    } else{
    //If there isn't a profile associated with that _id we create that entry
        await db.collection("userProfile").insertOne(profileData);
      
      return res.status(200).json({
      status: 200,
      data: profileData,
      message: "User Added Successfully",
    });
    }
     
    //Catches an error and logs it if something wrong happens
  } catch (err) {
    console.log(err.stack);
    //Closes the client
  } finally {
    client.close();
    console.log("Disconnected");
  }
};

module.exports = { CreateOrGetAProfile };
