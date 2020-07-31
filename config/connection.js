const dotenv = require("dotenv");

//set password to mySQL DB
dotenv.config();
const sqlPass = process.env.secret

//Connection information for the sql database
const connection ={
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: sqlPass,
  database: "burgers_db"
};


module.exports = connection;
