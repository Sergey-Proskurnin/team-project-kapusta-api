const passport = require('passport');
require('../config/passport');
const {
  HttpCode: { UNAUTHORIZED },
} = require('./constants');

const guardRefresh = (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (error, user) => {
    const headerAuth = req.get('Authorization');
    let token = null;
    if (headerAuth) {
      token = headerAuth.split(' ')[1];
    }

    if (error) {
      return res.status(UNAUTHORIZED).json({
        status: 'error',
        code: UNAUTHORIZED,
        message: 'Not authorized',
      });
    }
    if (!user || token !== user?.refreshToken) {
      return res.status(UNAUTHORIZED).json({
        status: 'error',
        code: UNAUTHORIZED,
        message: 'Unvalid refresh token',
      });
    }

    req.user = user;
    return next();
  })(req, res, next);
};

module.exports = guardRefresh;
