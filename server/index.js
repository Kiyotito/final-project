const express = require('express');
const { createPost } = require('./handlers/createPost');
const app = express();
const port = 4000;
const morgan = require("morgan");
const { getPosts } = require('./handlers/getAllPosts');
app.use(express.json());
app.use(express.urlencoded({extended:true}))


app.get('/test', (req, res) => {
  res.status(200).json({status:200, data: "Hello World"})
})
app.post('/create-post',createPost)
app.get('/get-all-posts', getPosts)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
