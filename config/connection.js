var mysql = require("mysql");

var connection = mysql.createConnection({
	port: 3306,
	host: "localhost",
	user: "root",
	password: "cent430Rim$",
	database: "burgers_db"
});

connection.connect(function(err) {
	if(err) {
		console.error("Error connecting:  " + err.stack);
		return;
	}

	console.log("connected as id " + connection.threadId);
});

//export connection for ORM to use
module.exports = connection;