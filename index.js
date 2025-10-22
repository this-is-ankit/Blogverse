const express = require('express');
const app = express();
const PORT = 8000;
const path = require('path');
const Blog = require("./models/blog")
const userRoute = require("./routes/user");
const blogRoute = require("./routes/blog");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const { checkforauthentication } = require('./middlewares/authentication');

mongoose
.connect("mongodb://localhost:27017/blogging")
.then(() => {
    console.log("MongoDb Connected");
    app.listen(PORT, () => console.log(`Server started at PORT ${PORT}`));
})
.catch(err => console.error("Failed to connect to MongoDB", err));


app.set("view engine" , "ejs");
app.set("views" , path.resolve("./views"));

app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(checkforauthentication("token"));
app.use(express.static(path.resolve("./public")));
app.use("/user" , userRoute);
app.use("/blog" , blogRoute);

app.get("/" ,async (req,res) => {
    const allBlogs = await Blog.find({})
    res.render("home" , {
        user : req.user,
        blogs : allBlogs,
    }
    );
});