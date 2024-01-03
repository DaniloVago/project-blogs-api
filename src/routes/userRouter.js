const { Router } = require('express');
const userController = require('../controllers/userController');
const { validateUser } = require('../middlewares/validateUser');
const { validateJWT } = require('../middlewares/validateJWT');

const userRouter = Router();

userRouter.post('/', validateUser, userController.addUser);
userRouter.get('/', validateJWT, userController.allUsers);
userRouter.get('/:id', validateJWT, userController.userById);

module.exports = { userRouter };