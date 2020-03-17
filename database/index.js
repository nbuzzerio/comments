const mongoose = require('mongoose');
const path = require('path');
const dotenv = require('dotenv').config({
  path: path.join(__dirname, '../.env')
});

const db = mongoose.connect('mongodb://localhost/comments', { useNewUrlParser: true }, (err) => {
  if (err) { throw err; };
  console.log('Comments Database connection was successful.')
});//

// const mongoUri = '';

// const connection = mongoose.connect(process.env.MONGOURI, {
//   useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false,
// });

async function connectDatabase() {

}

const commentSchema = mongoose.Schema({
  comment_id: Number,
  song_id: Number,
  user_id: Number,
  user_name: String,
  user_icon: String,
  message: String,
  audio_position: Number,
  posted_at: Number,

});

const comment = mongoose.model('Comments', commentSchema);

module.exports = comment;