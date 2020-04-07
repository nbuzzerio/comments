/* eslint-disable camelcase */
const faker = require('faker');
// const Comments = require('./index');

const comments = [];
const messages = [];

console.time('1000 msgs: ')
for (var i = 0; i < 1000; i++) {
  const randomWordCount = Math.floor(Math.random() * 30);
  const message = faker.random.words(randomWordCount);
  messages.push(message);
}
console.timeEnd('1000 msgs: ');

console.time('40M records: ')
for (var j = 0; j < 200; j++) {

  for (let i = 40000 * j; i < 40000 * j + 40000; i++) { //scaled from 400 to 10M

    const song_id = faker.random.number({
      min: 1,
      max: 10000000,
    });

    const user_id = faker.random.number({
      min: 1,
      max: 10000000,
    });

    const user_icon = faker.image.avatar();
    
    const user_name = faker.internet.userName();

    const posted_at = faker.date.recent();

    const audio_position = faker.random.number({
      min: 1,
      max: 80,
    });

    //picks a random message from the array
    message = messages[Math.floor(Math.random() * 1000)];
    
    const newComment = {
      comment_id: i,
      song_id,
      user_id,
      user_name,
      user_icon,
      message,
      audio_position,
      posted_at,
    };

    comments.push(newComment);

  }

}

console.timeEnd('40M records: ')
// console.log(comments);
// Comments.insertMany(comments);
