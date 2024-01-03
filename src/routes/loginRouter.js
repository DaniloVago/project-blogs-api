const { Router } = require('express');
const loginController = require('../controllers/loginController');
const { validateLogin } = require('../middlewares/validateLogin');

const loginRouter = Router();

loginRouter.post('/', validateLogin, loginController.login);

module.exports = { loginRouter };