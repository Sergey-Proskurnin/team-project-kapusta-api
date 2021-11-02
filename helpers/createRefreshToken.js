const jwt = require('jsonwebtoken');
require('dotenv').config();

const createRefreshToken = id => {
  const payloload = { id, test: 'Hellow mamkin hacker 2' };
  const token = jwt.sign(payloload, process.env.SECRET_KEY, {
    expiresIn: '120m',
  });
  return token;
};

module.exports = createRefreshToken;
