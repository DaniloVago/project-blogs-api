const { Router } = require('express');
const categoriesController = require('../controllers/categoriesController');
const { validateJWT } = require('../middlewares/validateJWT');
const { validateCategory } = require('../middlewares/validateCategory');

const categoriesRouter = Router();

categoriesRouter.post('/', validateJWT, validateCategory, categoriesController.addCategory);
categoriesRouter.get('/', validateJWT, categoriesController.allCategories);

module.exports = { categoriesRouter };