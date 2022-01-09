const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// REGISTER USER
router.post('/register', async (req, res) => {
  const { username, password, password2, email } = req.body;
  if (!username || !password || !password2 || !email) {
    res.status(405).json('Please fill all fields');
  } else if (password !== password2) {
    res.status(422).json('Passwords do not match');
  } else {
    const newUser = new User({
      username,
      password: await bcrypt.hash(password, 10),
      email,
    });
    try {
      await newUser.save();
      res.status(201).json(newUser);
    } catch (err) {
      console.log(err);
    }
  }
});
// LOGIN
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  console.log(req.body);
  try {
    const user = await User.findOne({ username });
    !user && res.status(401).json('Invalid username');
    if (!user || !(await bcrypt.compare(req.body.password, user.password))) {
      throw res.status(401).json('Invalid login credentials');
    } else {
      const { password, ...others } = user._doc;
      const accessToken = jwt.sign(
        {
          userId: user._id,
          isAdmin: user.isAdmin,
        },
        process.env.VERIFICATION_TOKEN,
        {
          expiresIn: '3d',
        }
      );
      res.status(200).json({ ...others, accessToken });
    }
  } catch (err) {
    res.status(500).json("Ooops! Something isn't right!");
    console.log('err:', err);
  }
});
module.exports = router;
