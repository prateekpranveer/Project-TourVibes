const express = require('express');

const app = express();

app.get('/api/users', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.send("Hello World")
})

app.get('/api', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.send({1:"hi express"})
})


app.listen(4000, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", 4000);
})