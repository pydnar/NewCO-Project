//12-13 Randy updated with latest JawsDB config

var mysql = require("mysql");
var connection;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "xefi550t7t6tjn36.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "svf8443gt0ucm5vu",
    password: "g1ghntji2joyksp3",
    database: "w5s7t3uky0jc219r"
  });
}

connection.connect();
module.exports = connection;
