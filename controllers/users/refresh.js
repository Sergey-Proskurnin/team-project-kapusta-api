const User = require('../../model/user');
const {
  HttpCode: { OK, UNAUTHORIZED },
  createToken,
  createRefreshToken,
} = require('../../helpers');

const refresh = async (req, res, next) => {
  try {
    const headerAuth = req.get('Authorization');
    const oldRefreshToken = headerAuth.split(' ')[1];
    const user = await User.findOne({ refreshToken: oldRefreshToken });

    if (!user) {
      return res.status(UNAUTHORIZED).json({ error: 'Unauthorized' });
    }

    const id = user.id;
    const newToken = createToken(id);
    const newRefreshToken = createRefreshToken(id);

    const updatedUser = await User.findOneAndUpdate(
      { _id: id },
      { refreshToken: newRefreshToken, token: newToken },
      { new: true },
    );
    res.status(OK).json({
      status: 'success',
      code: OK,
      data: {
        token: updatedUser.token,
        refreshToken: updatedUser.refreshToken,
        user: updatedUser,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = refresh;
