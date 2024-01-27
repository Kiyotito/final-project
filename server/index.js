const express = require('express');
const { createPost } = require('./handlers/createPost');
const app = express();
const port = 4000;
const morgan = require("morgan");
const { getPosts } = require('./handlers/getAllPosts');
const { getAPost } = require('./handlers/getAPost');
const { createProfile } = require('./handlers/createProfile');
const {CreateOrGetAProfile} = require('./handlers/CreateOrGetAProfile');
const { getAProfile } = require('./handlers/getAProfile');
const { modifyProfile } = require('./handlers/updateProfile');

app.use(express.json());
app.use(express.urlencoded({extended:true}))


app.get('/test', (req, res) => {
  res.status(200).json({status:200, data: "Hello World"})
})
app.post('/create-post',createPost)
app.post('/create-profile', createProfile)
app.get('/get-all-posts', getPosts)
app.get('/get-a-post/:_id', getAPost)
app.post('/get-profile/:_id', CreateOrGetAProfile)
app.get('/get-a-profile/:_id', getAProfile)
app.patch("/modify-profile/:_id", modifyProfile)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
