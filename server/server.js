
const path = require('path');
const express = require('express');
const db = require('../database/index.js');
const models = require('../database/models.js');
const cors = require('cors');
const dotenv = require('dotenv').config({
  path: path.join(__dirname, '../.env')
});

const PORT = process.env.PORT || 3000;

db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database: ', error);
  })

const app = express();

app.use(express.static(path.join(__dirname, '../client/dist')))
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/comments/:song_id', (req, res) => {
  var song_id = req.params.song_id;
  if (song_id === undefined) {
    song_id = 1;
  }
  // models.songs.hasMany(models.comments, {foreignKey: 'song_id'});
  // models.comments.belongsTo(models.songs, {foreignKey: 'song_id'})

  models.songs.findAll({
    attributes: ['song_id'],
    where: {song_id: song_id},
    include: [{
      model: models.comments,
      attributes: ['comment_id', 'song_id', 'user_id', 'user_icon', 'user_name', 'message', 'audio_position', 'posted_at'],
      required: true,
     }],
  }).then((comments) => {
      res.send(comments);
      console.log('These are the comments:', comments)
    })
    .catch((err) => {
      res.status(404).send(err);
      console.log("Nope: ", err)
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
  console.log(`Server running  on port ${PORT}.`);
});