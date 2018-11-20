var mysql = require("mysql");
var connection;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "u28rhuskh0x5paau.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "hjysvfuheirkkde1",
    password: "wrmohcvy9hb0mau7",
    database: "c9tbk1oei4eajy1s"
  });
}

connection.connect();
module.exports = connection;
