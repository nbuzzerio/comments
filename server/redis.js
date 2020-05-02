const redis = require('redis');
const client = redis.createClient(6379, '54.211.73.68');

client.on('error', function(err) {
  console.error(err);
})

module.exports = {
  redis,
  client
}
