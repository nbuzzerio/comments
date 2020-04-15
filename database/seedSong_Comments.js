const faker = require('faker');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const csvSongTableWriter = createCsvWriter({
  path: './song_comments.csv',
  header: [
    {id: 'song_id', title: 'Song_Id'},
    {id: 'comments', title: 'Comments'},
  ]
});

//creates a csv file containing song_Id's and an array of their associated comments' foreign Keys
async function asyncSongCommentWriter() {

  var songs = [];
  const messages = [];
  
  for (var i = 0; i < 100000; i++) {
    const randomWordCount = Math.floor(Math.random() * 30);
    const message = faker.random.words(randomWordCount);
    messages.push(message);
  }

  /* TABLE CREATION
    CREATE TABLE song_comments (
    song_id int,
    comments text,
    PRIMARY KEY (song_id)
    )
  */

  for (var j = 0; j < 100; j++) {
    for (var i = 100000 * j; i < 100000 * j + 100000; i++) { //scaled from 400 to 40M

      //get a random number between 0 and 8 should average to 4.5
      var num = Math.floor(Math.random() * 8);

      var comments = [];
      for (var k = 0; k < num; k++) {
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
          user_id,
          user_name,
          user_icon,
          message,
          audio_position,
          posted_at,
        };
        comments.push(newComment);
      }

    var commentString = JSON.stringify(comments);
    var alterQuotes = commentString.replace(/"/g,"'");

    const newSong = {
      song_id: i,
      comments: alterQuotes
    };

    songs.push(newSong);
    }
  console.log('async test: ' + j)
  await csvSongTableWriter
  .writeRecords(songs)
  .then(() => console.log(`CSV file has added ${j + 1}M records`))
  .then(() => {songs = []})
  }
}

asyncSongCommentWriter();