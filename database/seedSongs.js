const faker = require('faker');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const csvSongTableWriter = createCsvWriter({
  path: './songs.csv',
  header: [
    {id: 'song_id', title: 'Song_Id'},
  ]
});

//creates a csv file containing song_Id's and an array of their associated comments' foreign Keys
async function asyncSongCommentWriter() {

  var songs = [];

 for (var j = 0; j < 10; j++) {
    for (var i = 1000001 * j; i < 1000001 * j + 1000001; i++) {
    const song_id = i;
    
    const newSongID = {
      song_id,
    };

    songs.push(newSongID);
    }
  console.log('async test: ' + j)
  await csvSongTableWriter
  .writeRecords(songs)
  .then(() => console.log(`CSV file has added ${j}M records`))
  .then(() => {songs = []})
  }
}

asyncSongCommentWriter();