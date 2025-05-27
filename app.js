require("dotenv").config();
const express = require("express");
const expressLayout = require("express-ejs-layouts")
const methodOverride = require("method-override");
const connectDB = require("./server/config/db.js");
const {isActiveRoute} = require("./server/helpers/routeHelpers.js");
const app = express();
const port = process.env.PORT || 8080;
const cookieParser = require("cookie-parser");
const MongoStore = require("connect-mongo");
const session = require("express-session");

//conncet database
connectDB();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static("public"));
app.use(cookieParser());
app.use(methodOverride("_method"));

app.use(session({
    secret: "Keyboard cat",
    resave: false,
    saveUninitialized: true,
    store : MongoStore.create({
        mongoUrl:process.env.MONGODB_URI
    }),
    
}))
//template engine
app.use(expressLayout);
app.set('layout','./layouts/main');
app.set("view engine","ejs");

app.locals.isActiveRoute = isActiveRoute;
app.use((req, res, next) => {
    res.locals.curRoute = req.path;
    res.locals.isActiveRoute = isActiveRoute;
    next();
});

app.use('/',require("./server/routes/main"));
app.use('/',require("./server/routes/admin"));
app.listen(port,()=>{
    console.log(`App listening on port ${port}`);
});
