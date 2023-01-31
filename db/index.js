var fs = require('fs');
require('dotenv').config();
const mysql = require("mysql2");

const createDB = async () => {
   const stmt = fs.readFileSync('./db/schema.sql', 'utf8');
   console.log(stmt);

   const connection = await mysql.createConnection({
      host: 'localhost',
      user: process.env.DB_USER,
      password: process.env.DB_PW,
   });

   connection.query(stmt);
   connection.end();
   
}
createDB();