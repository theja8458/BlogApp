require("dotenv").config();
const express = require("express");
const expressLayout = require("express-ejs-layouts")
const connectDB = require("./server/config/db.js")
const app = express();
const port = 8080 || process.env.port;


//conncet database
connectDB();

app.use(express.static("public"));
//template engine
app.use(expressLayout);
app.set('layout','./layouts/main');
app.set("view engine","ejs");


app.use('/',require("./server/routes/main"));
app.listen(port,()=>{
    console.log(`App listening on port ${port}`);
});
