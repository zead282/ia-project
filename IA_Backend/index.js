const express = require ("express");
const app = express();

app.use (express.json());
app.use (express.urlencoded({extended: true})); 
app.use (express.static("upload"));

 const cors = require("cors");
 app.use(cors());


const admin = require("./routes/admin");
const user = require("./routes/user");
const book = require("./routes/book");


app.listen(4000,"localhost", () => {
    console.log("server is running");
});


app.use("/admin",admin);
app.use("/user",user);
app.use("/book",book);
