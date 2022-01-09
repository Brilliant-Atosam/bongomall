const jwt = require('jsonwebtoken');
const verifyToken = async (req, res, next) => {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(' ')[1];
    jwt.verify(token, process.env.VERIFICATION_TOKEN, (err, user) => {
      if (err) {
        res.status(403).json('Invalid verification token!');
      } else {
        req.user = user;
        next();
      }
    });
  } else {
    return res.status(401).json('No verification token found!');
  }
};
const verifyTokenAndAuthenticate = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.params.id === req.user.userId) {
      next();
    } else {
      res
        .status(403)
        .json("You don't have the credentials to update this info!");
    }
  });
};
const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res
        .status(403)
        .json("You don't have the credentials to update this info!");
    }
  });
};
module.exports = {
  verifyToken,
  verifyTokenAndAuthenticate,
  verifyTokenAndAdmin,
};
