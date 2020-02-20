const mongoose = require('mongoose');
const path = require('path');
const dotenv = require('dotenv').config({
  path: path.join(__dirname, '../.env')
});
const mongoUri = '';

const connection = mongoose.connect(process.env.MONGOURI, {
  useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false,
});
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
