//I need this for connecting to mysql data, d3 will be used later on for visualizing the data that comes out of this connection.
var mysql = require("mysql");
var d3 = require("d3");
var _ = require("lodash");
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
connection.query('SELECT * FROM sites', (error, sites, fields) => {
    if (error) {
        console.log('An erorr occurred while executing the query')
        throw error
    }
    data = (sites);
    console.log(JSON.stringify(data));
    var maxAssets = d3.max(data, function (d) { return d.totalassetscount });
    console.log('MAX ASSETS COMING IN!')
    console.log(maxAssets)
})



