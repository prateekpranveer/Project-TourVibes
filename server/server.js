const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const User = require('./schemas/user').default
require('dotenv/config')
const app = express();
app.use(express.json())

// Import Routes
const usersRoute = require('./routes/userRoute')

app.use('/user', usersRoute);

app.use(bodyParser.json());

// connect to DB
mongoose.connect(process.env.MONGO_URL).catch(error => console.log(error))


app.listen(4000, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", 4000);
})