const express = require('express');
const router = express.Router();
const guard = require('../../../helpers/guard');
const guardRefresh = require('../../../helpers/guardRefresh');

const { upload } = require('../../../helpers');
const {
  validationPаramsUserSignup,
  validationPаramsUserLogin,
  validationVerificationEmail,
  validationBalanceUser,
  validationPаramsUserName,
} = require('./validation');

const { users: ctrl } = require('../../../controllers');

router.patch(
  '/avatars',
  guard,
  upload.single('avatar'),
  validationPаramsUserName,
  ctrl.avatars,
  
);
router.post('/signup', validationPаramsUserSignup, ctrl.register);
router.post('/login', validationPаramsUserLogin, ctrl.login);
router.post('/logout', guard, ctrl.logout);
router.get('/current', guard, ctrl.current);
router.get('/verify/:verificationToken', ctrl.verify);
router.post('/verify', validationVerificationEmail, ctrl.repeatEmailVerify);
router.patch('/balance', guard, validationBalanceUser, ctrl.balance);
router.get('/google', ctrl.googleAuth);
router.get('/google-redirect', ctrl.googleRedirect);
router.get('/refresh', guardRefresh, ctrl.refresh);

module.exports = router;
