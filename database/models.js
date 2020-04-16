const {Sequelize, DataTypes} = require('sequelize');
const db = require('./index.js');

const comments = db.define('comments', {
  comment_id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  song_id: {
    type: DataTypes.INTEGER
  },
  user_id: {
    type: DataTypes.INTEGER
  },
  user_icon: {
    type: DataTypes.STRING
  },
  user_name: {
    type: DataTypes.STRING
  },
  message: {
    type: DataTypes.TEXT
  },
  audio_position: {
    type: DataTypes.INTEGER
  },
  posted_at: {
    type: DataTypes.STRING
  },
})

const songs = db.define('songs', {
  song_id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
})
songs.hasMany(comments, {foreignKey: 'song_id'});
comments.belongsTo(songs);


module.exports = {
  comments: comments,
  songs: songs
}