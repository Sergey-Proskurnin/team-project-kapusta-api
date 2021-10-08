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
      frend,
      googleId,
      googleEmail,
      googleAvatar,
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
        frend,
        googleId,
        googleEmail,
        googleAvatar,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = current;
