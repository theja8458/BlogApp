require("dotenv").config();
const express = require("express");
const expressLayout = require("express-ejs-layouts")
const connectDB = require("./server/config/db.js")
const app = express();
const port = 8080 || process.env.port;
const cookieParser = require("cookie-parser");
const MongoStore = require("connect-mongo");
const session = require("express-session");

//conncet database
connectDB();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static("public"));
app.use(cookieParser());

app.use(session({
    secret: "Keyboard cat",
    resave: false,
    saveUninitialized: true,
    store : MongoStore.create({
        mongoUrl:"mongodb://127.0.0.1:27017/blog"
    }),
    
}))
//template engine
app.use(expressLayout);
app.set('layout','./layouts/main');
app.set("view engine","ejs");


app.use('/',require("./server/routes/main"));
app.use('/',require("./server/routes/admin"));
app.listen(port,()=>{
    console.log(`App listening on port ${port}`);
});
