const mysql = require('mysql2/promise');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'najwa',         // sesuaikan dengan DB kamu
  database: 'uas_pbm' // sesuaikan juga
});

module.exports = db;
