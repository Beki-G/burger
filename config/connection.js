const dotenv = require("dotenv");
const mysql = require("mysql")

//set password to mySQL DB
dotenv.config();
const sqlPass = process.env.secret

//Connection information for the sql database
const connection =mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: sqlPass,
  database: "burgers_db"
});

connection.connect(function(err){
  if(err) {
    console.error("Error connecting: "+ err.stack) 
    return;
  }
  console.log("connected as id " + connection.threadId)

})

module.exports = connection;
