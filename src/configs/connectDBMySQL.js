const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "db4free.net",
  port: 3306,
  user: "notobo003",
  password: "Binh15122003",
  database: "storage1",
  multipleStatements: true,
  connectionLimit: 100,
});
module.exports = connection;
