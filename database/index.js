const mongoose = require('mongoose');

const mongoUri = 'mongodb://localhost:27017/comments';

const connection = mongoose.connect(mongoUri);

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
