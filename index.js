const express = require("express");
const connectDb = require("./model/db")
const cors = require("cors")
const userRouter = require("./router/router")
require('dotenv').config()


//INIT APP
const app = express();

//PORT
const port = process.env.PORT || 5050;

//DB CONNECT
connectDb();

//MIDDLEWAIR
app.use(express.json());
app.use(cors());

//ROUTE
app.use("/user",userRouter)

//SERVER
app.listen(port,()=>{
    console.log("server is raning on the port is 5050");
})