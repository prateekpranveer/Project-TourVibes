const express = require('express')
const User = require('../schemas/user')

const router = express.Router();

// Gets all the users
router.post('/reg', async (req,res) => {
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
  console.log(req.body)
  res.send("hi name")
})

// specific user
router.get('/', async (req,res) => {
    const post = await User.find();
    res.send(post);
})

router.get('/docs', (req, res) => {
    res.send("we are on prateek");
})

router.get('/prateek/name', (re1, res) => {
    res.send("Prateek Pranveer");
})

module.exports = router;