/* eslint-disable camelcase */
const faker = require('faker');
const Comments = require('./index');

const comments = [];

for (let i = 0; i < 400; i += 1) {
  const song_id = faker.random.number({
    min: 10,
    max: 100,
  });
  const user_id = faker.random.number({
    min: 10,
    max: 100,
  });

  const user_icon = faker.image.avatar();

  const randomWordCount = Math.floor(Math.random() * 30);
  const message = faker.random.words(randomWordCount);

  const audio_position = faker.random.number({
    min: 1,
    max: 120,
  });
  const newComment = {
    comment_id: i,
    song_id,
    user_id,
    user_icon,
    message,
    audio_position,
  };
  comments.push(newComment);
}
Comments.insertMany(comments);
