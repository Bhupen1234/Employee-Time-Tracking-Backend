const jwt = require('jsonwebtoken');

const isAuthenticated = (req, res, next) => {
    const authHeader = req.headers["authorization"];

    const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).send({ message: 'Unauthorized' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).send({ message: 'Forbidden' });
    }

    req.user = decoded;
    next();
  });
};

module.exports = { isAuthenticated };