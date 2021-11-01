const User = require('../../model/user');
const {
  HttpCode: { OK },
  createToken,
  createRefreshToken,
} = require('../../helpers');

const refresh = async (req, res, next) => {
  try {
    const user = req.user;
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
