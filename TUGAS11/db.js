const mysql = require('mysql2');
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'najwa', // sesuaikan dengan password MySQL kamu
  database: 'db_produk'
});

conn.connect(err => {
  if (err) throw err;
  console.log('MySQL Connected...');
});

module.exports = conn;
