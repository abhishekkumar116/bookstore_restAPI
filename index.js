
const express = require("express");
const BookRouter = require("./routes/bookstore");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
require("dotenv").config();

//const port = 8000;

// app.get("/", function (req, res){
//     res.send("<h1>Hello world</h1>")
// })
app.use(bodyParser.json());

app.use("/api/v1/bookstore", BookRouter)

mongoose.connect(process.env.PORT, () => {
    console.log("Connected to DB")
})

app.listen(process.env.DB_CONNECTION_URL, function (err) {
    if (err) {
        console.log("Error", err);
    }
    console.log("Server is running on port")
})
