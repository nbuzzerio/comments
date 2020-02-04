/* eslint-disable no-undef */
const app = require('../server/server.js');
const supertest = require('supertest');
const request = supertest(app);

// requires server to be running


it ('Successfully communicates with the database', async done => {
  const res = await request.get('/comment');

  expect(response.status).toBe(200);
  expect(response.body.message).toNotBe(undefined);

  done();
});

it ('Successfully retrieves comments from a populated database', async done => {
  const res = await request.get('/comment/16');

  expect(response.status).toBe(200);
  expect(response.body.message).toNotBe(undefined);

  done();
});


// more tests to come as app is refined; integrating supertest for API testing