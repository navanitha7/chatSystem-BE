const mysql = require("mysql2/promise");

// Database Connection
const dbConnection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Deepa1999@",
  database: "chatgpt",
});

module.exports = {dbConnection}