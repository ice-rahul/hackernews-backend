var mysql = require('mysql')
const dotenv = require('dotenv');
dotenv.config();
var connection = mysql.createPool({
  connectionLimit : 25,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB
});

// Connection test start

// connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
//   if (err) throw err
//   console.log('The solution is: ', rows[0].solution)
// })

// Connection test end


export { connection }