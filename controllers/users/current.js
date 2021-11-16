const {
  HttpCode: { OK },
} = require('../../helpers');

const current = async (req, res, next) => {
  try {
    const { name, email, avatarURL, balance } = req.user;
    return res.status(OK).json({
      status: 'success',
      code: OK,
      user: {
        name,
        email,
        avatarURL,
        balance,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = current;
