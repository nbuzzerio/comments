const express = require('express');
const db = require('./database/index.js');
const comment = require('./database/comments.js/index.js');
const app = express();
const port = 8080;

app.use(express.static('client'));
app.use(express.urlencoded());

app.get('/comment', (req, res) => {

})

app.post('/comment', (req, res) => {
  var commentEntry = new comment(req.body)
  commentEntry.save()
  .then(item => {
    res.send("comment saved to database");
  })
  .catch(err => {
    res.status(400).send("unable to save to database");
  })
  console.log(req.body);
  // res.end('Successfully recieved data submission');
})

app.listen(port, () => {
  console.log(`Server running  on port ${port}...`);
});