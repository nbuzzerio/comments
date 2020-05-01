const path = require('path');
const express = require('express');
const db = require('../database/index.js');
const models = require('../database/models.js');
const cors = require('cors');
const sequelize = require('sequelize');
const dotenv = require('dotenv').config({
  path: path.join(__dirname, '../.env')
});

// const redis = require('./redis.js').redis;
// const redisClient = require('./redis.js').client;

require('newrelic');

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

//redis cache middleware
// function cache(req, res, next) {
//   const { song_id } = req.params;
//   redisClient.get(song_id, (err, comments) => {
//     if (err) throw err;

//     if (comments) {
//       comments = JSON.parse(comments);
//       console.log('Resonse coming from cache');
//       res.send(comments);
//     } else {
//       next();
//     }
//   })
// }

app.get('/comment/:song_id', /*cache,*/ (req, res) => {
  var song_id = req.params.song_id;
  if (song_id === undefined) {
    song_id = 1;
  }

  models.songs.findAll({
    attributes: ['song_id'],
    where: {song_id: song_id},
    include: [{
      model: models.comments,
      attributes: ['comment_id', 'song_id', 'user_id', 'user_icon', 'user_name', 'message', 'audio_position', 'posted_at'],
      required: true,
     }],
  })
  .then((comments) => {
      var strungComments = JSON.stringify(comments);
      // redisClient.setex(song_id, 3600, strungComments); /////////////////////////////
      res.send(comments);
  })
  .catch((err) => {
      res.status(404).send(err);
      console.log("Nope: ", err)
  });
});

app.get('/createComment/:song_id', (req, res) => { //select max(id) from table
  var max_comment_id;
  var song_id = req.params.song_id;
  ///////////////////////////////////////
  models.comments.findAll({
    attributes: [sequelize.fn('MAX', sequelize.col('comment_id'))],
    raw: true
  }).then((comments) => {
      max_comment_id = comments[0]['max'] + 1;
      console.log('Current max comment_id in database is: ', max_comment_id - 1);
      console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX max_comment_id: ', max_comment_id);
            
        /////////////////////////////////////////////////////////////////////////////
        console.log('types: ', typeof max_comment_id, typeof (Number(song_id)))
        models.comments.create({
          comment_id: max_comment_id,
          song_id: Number(song_id),
          user_id: 202,
          user_icon: 'test_icon_create',
          user_name: 'test_name_create',
          message: 'this is a test message for create',
          audio_position: 2,
          posted_at: 'test time placeholder' 
        })
          .then((comments) => {
            res.send(comments, '\n New max_comment_id is: ', JSON.stringify(max_comment_id));
            console.log('These are the added comments:', comments)
            console.log()
          })
          .catch(() => {
            res.status(404).send('Was not able to add a comment to song:' + song_id);
          });
        ////////////////////////////////////////////////////////////////////////////
    })
    .catch((err) => {
      res.status(404).send(err);
      console.log("Nope: ", err)
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

//loaderio verification
app.get('/loaderio-1689720865f5e724eaf91095012ed4f0/', (req, res) => {
  res.sendFile(path.join(__dirname, '../loaderio/loaderio-1689720865f5e724eaf91095012ed4f0.txt'))
})

//allow any other endpoints to bring us back to the homepage so you can ask for songs directly by number
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
})

app.listen(PORT, () => {
  console.log(`Server running  on port ${PORT}.`);
});