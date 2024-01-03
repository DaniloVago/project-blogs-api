const categoriesService = require('../services/categoriesService');

const addCategory = async (req, res) => {
    const { name } = req.body;
    const result = await categoriesService.addCategory(name);
    // console.log(result);
    const { type, message } = result;
    return res.status(type).json(message);
};

const allCategories = async (req, res) => {
    const result = await categoriesService.allCategories();
    // console.log(result);
    const { type, message } = result;
    return res.status(type).json(message);
};

module.exports = { addCategory, allCategories };