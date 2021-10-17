const register = require('./register');
const login = require('./login');
const logout = require('./logout');
const current = require('./current');
const avatars = require('./avatars');
const verify = require('./verify');
const repeatEmailVerify = require('./repeatEmailVerify');
const balance = require('./balance');
const refresh = require('./refresh');
const { googleAuth, googleRedirect } = require('./auth-google');

module.exports = {
  register,
  login,
  logout,
  current,
  avatars,
  verify,
  refresh,
  repeatEmailVerify,
  balance,
  googleAuth,
  googleRedirect,
};
