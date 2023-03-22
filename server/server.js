const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const User = require('./schemas/user')
const cors = require('cors')
require('dotenv/config')
const app = express();
app.use(express.json())

// Import Routes
const usersRoute = require('./routes/userRoute')

app.use('/user', usersRoute);

app.use(bodyParser.json());

app.use(cors({
    origin: 'http://localhost:3000',
}))


app.post('/usersave', async (req, res) => {
    const user = new User ({
        name: req.body.name,
        emailId: req.body.emailId,
        password: req.body.password,
        userName: req.body.userName,
        userLevel: req.body.userLevel,
        rating: req.body.rating,
        phone: req.body.phone
      })
      await user.save()
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.json({message: err})
      })
})
// connect to DB
mongoose.connect(process.env.MONGO_URL).catch(error => console.log(error))


app.listen(4000, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", 4000);
})