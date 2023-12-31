const express=require("express");
const mongoo=require("mongoose");
const route=require("./Router/Adminroutes");
const reg=require("./Router/Registration&login");
const userInteraction=require("./Router/UserInteractionRoutes");
const blogPost=require("./Router/BlogPostRoutes");
const search=require("./Router/SearchRoutes");

const app=express();
app.use(express.json());
app.use('/', route);
app.use('/', reg);
app.use('/', blogPost);
app.use("/", userInteraction);
app.use("/", search);

mongoo.connect("mongodb://127.0.0.1:27017/Blog");

const newDb=mongoo.connection;
newDb.on("error",console.error.bind(console,"connection error"));   
newDb.once("open",function(){
    console.log("Connection Established Successfully");
});

app.listen(3000, ()=>{console.log("Server is running on port 3000")})

