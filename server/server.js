
const path = require('path');
const express = require('express');
const Comments = require('../database/index.js');
const cors = require('cors');
const dotenv = require('dotenv').config({
  path: path.join(__dirname, '../.env')
});

const PORT = 3003;

const app = express();

app.use(express.static(path.join(__dirname, '../client/dist')))
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/comment/:song_id', (req, res) => {
  Comments.find({ song_id: req.params.song_id })
    .then((comments) => {
      res.send(comments);
      console.log('These are the comments:', comments)
    })
    .catch(() => {
      res.status(404).send('no comments found');
    });
});

app.get('/createComment/:song_id', (req, res) => {
  Comments.create({ song_id: req.params.song_id }, {
    comment_id: 402,
    song_id: req.params.song_id,
    user_id: 202,
    user_name: 'test_name_create',
    user_icon: 'test_create',
    message: 'this is a test message for create',
    audio_position: 2,
    posted_at: 2,
  })
    .then((comments) => {
      res.send(comments);
      console.log('These are the comments:', comments)
    })
    .catch(() => {
      res.status(404).send('no comments found');
    });
});

app.get('/updateComment/:song_id', (req, res) => {
  Comments.findOneAndUpdate({ song_id: req.params.song_id }, {
      comment_id: 401,
      song_id: req.params.song_id,
      user_id: 101,
      user_name: 'test_name',
      user_icon: 'test',
      message: 'this is a test message for put',
      audio_position: 1,
      posted_at: 1,
    }) //(condition, update, options, callback)
    .then((comments) => {
      res.send(comments);
      console.log('These are the comments:', comments)
    })
    .catch(() => {
      res.status(404).send('no comments found');
    });
});

app.get('/deleteComment/:song_id', (req, res) => {
  Comments.deleteOne({ song_id: req.params.song_id })
    .then((deleteCount) => {
      res.send(deleteCount);
      console.log('These are the comments:', comments)
    })
    .catch(() => {
      res.status(404).send('no comments found');
    });
});

app.listen(PORT, () => {
  console.log(`Server running  on port ${PORT}...`);
});