const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;

const authMiddleware = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ error: 'Access denied. No token provided.' });
  }

  try {

    const decoded = jwt.verify(token, JWT_SECRET, {
      issuer: process.env.JWT_ISSUER, 
      expiresIn: process.env.JWT_EXPIRY, 
    });

    req.user = decoded;
    next();
  } catch (err) {
    let errorMessage = 'Invalid token.';

    if (err.name === 'JsonWebTokenError') {

      errorMessage = 'Malformed JWT token.';
    } else if (err.name === 'TokenExpiredError') {

      errorMessage = 'Token expired. Please log in again.';
    }

    res.status(401).json({ error: errorMessage });
  }
};

module.exports = authMiddleware;