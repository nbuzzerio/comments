const Sequelize = require('sequelize');
const path = require('path');
require('dotenv').config({
  path: path.join(__dirname, '../.env')
});

const db = new Sequelize(process.env.pgDATABASE, process.env.pgUSER, process.env.pgPASS, {
  host: process.env.DB_HOST,
  dialect: 'postgres',
  schema: process.env.SEARCH_PATH,
});

module.exports = db;