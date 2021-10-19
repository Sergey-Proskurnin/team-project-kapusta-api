const jwt = require('jsonwebtoken');
require('dotenv').config();

const createToken = id => {
  const payloload = { id, test: 'Hellow mamkin hacker' };
  const token = jwt.sign(payloload, process.env.SECRET_KEY, {
    expiresIn: '2h',
  });
  return token;
};

module.exports = createToken;
