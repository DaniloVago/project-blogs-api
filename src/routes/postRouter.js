const { Router } = require('express');
const postController = require('../controllers/postController');
const { validateJWT } = require('../middlewares/validateJWT');
const { validatePost } = require('../middlewares/validatePost');

const postRouter = Router();

postRouter.post('/', validateJWT, validatePost, postController.addPost);
postRouter.get('/', validateJWT, postController.getPost);

module.exports = { postRouter };