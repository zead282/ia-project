const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "ia-project",
    port: "3306"

});
connection.connect((err)=> {
    if(err) throw err;
    console.log("DB Connected");
})
module.exports = connection;