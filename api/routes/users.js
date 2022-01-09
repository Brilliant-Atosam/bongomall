const router = require('express').Router();
const bcrypt = require('bcrypt');
const {
  verifyTokenAndAuthenticate,
  verifyTokenAndAdmin,
} = require('../middlewares/verify');
const User = require('../models/User');

// UPDATE USER
router.put('/:id', verifyTokenAndAuthenticate, async (req, res) => {
  req.body.password && (await bcrypt.hash(req.body.password, 10));
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});
// DELETE USER
router.delete('/:id', verifyTokenAndAuthenticate, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json('User has been deleted...');
  } catch (err) {
    res.status(500).json(err);
  }
});
// GET A USER
router.get('/find/:id', verifyTokenAndAdmin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    user && res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});
// GET ALL USERS
router.get('/', verifyTokenAndAdmin, async (req, res) => {
  const query = req.query.new;
  const users = query
    ? await User.find().sort({ _id: -1 }).limit(5)
    : await User.find();
  res.json(users);
});
// GET  USERS' STAT
router.get('/stat', verifyTokenAndAdmin, async (req, res) => {
  const date = new Date();
  const lastYear = new Date(date.getFullYear(date.getFullYear() - 1));
  try {
    const data = await User.aggregate([
      {
        $match: {
          createdAt: { $gte: lastYear },
        },
      },
      {
        $project: {
          month: { $month: '$createdAt' },
        },
      },
      {
        $group: {
          _id: '$month',
          total: { $sum: 1 },
        },
      },
    ]);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
    console.error(err);
  }
});
module.exports = router;
