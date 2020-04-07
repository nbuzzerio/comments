/* eslint-disable camelcase */
const faker = require('faker');
// const Comments = require('./index');

const comments = [];
// const user_icons = [];
// const user_names = [];

// //generate 1000 images to pick from
// for (var i = 0; i < 1000; i++) {
//   user_icons.push(faker.image.avatar());
//   user_names.push(faker.internet.userName());
// }

for (var j = 0; j < 1000; j++) {
  //creates 40000 records in this loop
  for (let i = 40000 * j; i < 40000 * j + 40000; i++) { //scaled from 400 to 10M
    const song_id = faker.random.number({
      min: 1,
      max: 100,
    });
    const user_id = faker.random.number({
      min: 1,
      max: 100,
    });
    
    const randomUser = Math.floor(Math.random() * 1000);
    const user_icon = faker.image.avatar();
    const user_name = faker.internet.userName();

    const posted_at = faker.date.recent();

    const randomWordCount = Math.floor(Math.random() * 30);
    const message = faker.random.words(randomWordCount);

    const audio_position = faker.random.number({
      min: 1,
      max: 80,
    });
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
console.log('i: ', 40000 * j, 'j: ', j)
// console.log(comments);
}
// Comments.insertMany(comments);
