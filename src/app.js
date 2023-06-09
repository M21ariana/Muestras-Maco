const express = require("express");
const path = require("path");
const methodOverride = require("method-override");
const session = require('express-session');
const cookieParser = require('cookie-parser');
const app = express();
app.use(cookieParser());
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.static("public"));
app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'ejs');
app.use(session({
    secret : 'maco',
    resave :true,
    saveUninitialized: true
}));
 
const routeHome = require("./routes/routeHome")
const routeLogin = require("./routes/routeLogin");
const routeApi = require("./routes/routeApi");
app.listen(3000, ()=>{
    console.log("servidor activo en el puerto 3000");
});

app.use("/", routeHome);
app.use("/", routeLogin);
app.use("/api", routeApi);