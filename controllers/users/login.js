const Users = require('../../repositories/users');
const {
  HttpCode: { OK, UNAUTHORIZED },
  createToken, createRefreshToken,
} = require('../../helpers');

const login = async (req, res, next) => {
  try {
    const user = await Users.findByEmail(req.body.email);
    const isValidPassword = await user?.isValidPassword(req.body.password);

    if (!user || !isValidPassword) {
      return res.status(UNAUTHORIZED).json({
        status: 'error',
        code: UNAUTHORIZED,
        message: 'Email or password is wrong',
      });
    }
    if (!user.verify) {
      return res.status(UNAUTHORIZED).json({
        status: 'error',
        code: UNAUTHORIZED,
        message: 'User has not verified his email',
      });
    }
    const { name, email } = user;
    const id = user.id;
    const token = createToken(id);
    const refreshToken = createRefreshToken(id);
    await Users.updateToken(id, token, refreshToken);
    return res.status(OK).json({
      status: 'success',
      code: OK,
      data: { token, refreshToken, user: { name, email } },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = login;
