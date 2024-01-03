const { Category } = require('../models');

const addCategory = async (name) => {
    const result = await Category.create({ name });
    return { type: 201, message: { id: result.id, name } };
};

const allCategories = async () => {
    const result = await Category.findAll();
    // console.log(result);
    return { type: 200, message: result };
};

module.exports = { addCategory, allCategories };