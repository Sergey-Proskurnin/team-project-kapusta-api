const express = require('express');
const router = express.Router();
const guard = require('../../../helpers/guard');
const { upload } = require('../../../helpers');
const {
  validationPаramsUserSignup,
  validationPаramsUserLogin,
  validationVerificationEmail,
  validationBalanceUser,
} = require('./validation');

const { users: ctrl } = require('../../../controllers');

router.patch('/avatars', guard, upload.single('avatar'), ctrl.avatars);
router.post('/signup', validationPаramsUserSignup, ctrl.register);
router.post('/login', validationPаramsUserLogin, ctrl.login);
router.post('/logout', guard, ctrl.logout);
router.get('/current', guard, ctrl.current);
router.get('/verify/:verificationToken', ctrl.verify);
router.post('/verify', validationVerificationEmail, ctrl.repeatEmailVerify);
router.patch('/balance', guard, validationBalanceUser, ctrl.balance);

module.exports = router;
