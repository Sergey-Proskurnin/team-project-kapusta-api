import MessageView from '..//..//views/PageMessageView/PageMessageView'

const Users = require('../../repositories/users');
const {
  HttpCode: { OK, NOT_FOUND },
} = require('../../helpers');

const verify = async (req, res, next) => {
  try {
    const user = await Users.findByVerifyToken(req.params.verificationToken);
    if (user) {
      await Users.updateTokenVerify(user.id, true, null);
      return res
        .status(OK)
        .send(
            <MessageView/>
          // '<h1>Congratulations, your email has been successfully verified, go to the <a href="https://kapusta-fsd28.netlify.app">login</a> page in the phone book and enter your email and password.</h1>',
        );
    }
    return res
      .status(NOT_FOUND)
      .json({ status: 'error', code: NOT_FOUND, message: 'User not found' });
  } catch (error) {
    next(error);
  }
};

module.exports = verify;
