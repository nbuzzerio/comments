const path = require('path');
const express = require('express');
const Comments = require('../database/index.js');
const cors = require('cors');
// const comment = require('../database/comments.js');


const app = express();
const port = 8080;

app.use(express.static(path.join(__dirname, '../client/dist')))
app.use(express.urlencoded());
app.use(cors());

app.get('/comment/:song_id', (req, res) => {
  Comments.find({ song_id: req.params.song_id })
    .then((comments) => {
      res.header('Access-Control-Allow-Origin', 'http://localhost'); // update to match the domain you will make the request from
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      res.send(comments);
      console.log('These are the comments:', comments)
    })
    .catch(() => {
      res.status(404).send('no comments found');
    });
});

// app.post('/comment', (req, res) => {
//   const commentEntry = new comment(req.body);
//   commentEntry.save()
//     .then(() => {
//       res.send('comment saved to database');
//     })
//     .catch(() => {
//       res.status(400).send('unable to save to database');
//     })
//   console.log(req.body);
//   // res.end('Successfully recieved data submission');
// })

app.listen(port, () => {
  console.log(`Server running  on port ${port}...`);
});