const mongoose = require('mongoose');

const mongoUri = 'mongodb://localhost:27017/comments';

const connection = mongoose.connect(mongoUri);

const commentSchema = mongoose.Schema({
  comment_id: Number,
  song_id: Number,
  user_id: Number,
  message: String,
  audio_position: Number,
  // also using built-in createdAt data

});

const comment = mongoose.model('Comments', commentSchema);

module.exports = comment;
