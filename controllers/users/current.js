const {
  HttpCode: { OK },
} = require('../../helpers');

const current = async (req, res, next) => {
  try {
    const {
      name,
      email,
      avatarURL,
      token,
      idCloudAvatar,
      balance,
      friend
      } = req.user;
    return res.status(OK).json({
      status: 'success',
      code: OK,
      user: {
        name,
        email,
        avatarURL,
        token,
        idCloudAvatar,
        balance,
        friend
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = current;
