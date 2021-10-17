const User = require('../../model/user');
const {
  HttpCode: { OK, UNAUTHORIZED },
  createToken, createRefreshToken,
} = require('../../helpers');

const refresh = async (req, res, next) => {
    try {
      const headerAuth = req.get('Authorization');
      const refreshToken = headerAuth.split(' ')[1];
      console.log(refreshToken);
      const user = await User.findOne({ refreshToken });
      console.log(user);
      if (!user) {
        return res.status(UNAUTHORIZED).json({ error: "Unauthorized" });
      }
      const id = user.id;
      const newToken = createToken(id);
      const newRefreshToken = createRefreshToken(id);

      const updatedUser = await User.findOneAndUpdate(
        { _id: id },
        { refreshToken: newRefreshToken, token: newToken, }, {new: true}
      );
      res.status(OK).json({ user: updatedUser });
    } catch (error) {
      next(error);
    }
  };
  
  module.exports = refresh;