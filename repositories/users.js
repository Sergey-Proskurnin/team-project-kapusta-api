const User = require('../model/user');

const findById = async id => {
  return await User.findById(id);
};

const findByEmail = async email => {
  return await User.findOne({ email });
};

const findByVerifyToken = async verifyToken => {
  return await User.findOne({ verifyToken });
};

const create = async body => {
  const user = new User(body);
  return await user.save();
};

const updateToken = async (id, token, refreshToken) => {
  return await User.findOneAndUpdate(
    { _id: id },
    { token, refreshToken },
    { returnDocument: 'after' },
  );
};

const updateTokenVerify = async (id, verify, verifyToken) => {
  return await User.updateOne({ _id: id }, { verify, verifyToken });
};
const updateAvatar = async (id, avatar, idCloudAvatar = null) => {
  const result = await User.updateOne(
    { _id: id },
    { avatarURL: avatar, idCloudAvatar },
  );
  return result;
};

const createBalance = async (id, balance) => {
  const result = await User.findOneAndUpdate(
    { _id: id },
    { balance },
    { returnDocument: 'after' },
  );
  return result;
};

const updateGoogleUser = async (userId, body) => {
  const result = await User.findOneAndUpdate(
    { _id: userId },
    {
      avatarURL: body,
      verify: true,
      verifyToken: null,
    },
    { returnDocument: 'after', runValidators: true },
  );
  return result;
};

module.exports = {
  findById,
  findByEmail,
  create,
  updateToken,
  updateGoogleUser,
  updateAvatar,
  findByVerifyToken,
  updateTokenVerify,
  createBalance,
};
