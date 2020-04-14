const faker = require('faker');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
  path: './comments.csv',
  header: [
    {id: 'comment_id', title: 'Comment_Id'},
    {id: 'song_id', title: 'Song_Id'},
    {id: 'user_id', title: 'User_Id'},
    {id: 'user_icon', title: 'User_Icon'},
    {id: 'user_name', title: 'User_Name'},
    {id: 'message', title: 'Message'},
    {id: 'audio_position', title: 'Audio_Position'},
    {id: 'posted_at', title: 'Posted_At'},
  ]
});

async function asyncCommentWriter() {

  var comments = [];
  const messages = [];
  
  for (var i = 0; i < 100000; i++) {
    const randomWordCount = Math.floor(Math.random() * 30);
    const message = faker.random.words(randomWordCount);
    messages.push(message);
  }


  for (var j = 0; j < 40; j++) {
    for (var i = 1000000 * j; i < 1000000 * j + 1000000; i++) { //scaled from 400 to 40M
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
      message = messages[Math.floor(Math.random() * 100000)];
      
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
    console.log('async test: ' + j)
    await csvWriter
    .writeRecords(comments)
    .then(() => console.log(`CSV file has added ${j+1}M records`))
    .then(() => {comments = []})
  }
}

asyncCommentWriter();

