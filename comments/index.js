const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');

const commentsByPostId = {};
const app = express();
app.use(bodyParser.json());
app.use(cors());
//define GET 
app.get('/posts/:id/comments',(req,res) => {
    res.send(commentsByPostId[req.params.id] || []);
});

//define POST
app.post('/posts/:id/comments',(req,res) => {
    const commentId = randomBytes(4).toString('hex');
    const { content } = req.body;
    const comments = commentsByPostId[req.params.id] || [];
    comments.push({ id: commentId, content });
    commentsByPostId[req.params.id] = comments;
    res.status(201).send(comments);
});

app.listen(9001,() => {
    console.log("listening on 9001 ...");
});

