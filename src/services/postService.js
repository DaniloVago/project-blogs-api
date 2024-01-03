const { Category, User, BlogPost, PostCategory } = require('../models');
const { decodeToken } = require('../utils/JWT');

const getUserByToken = async (token) => {
    const decoded = decodeToken(token);
    const { email } = decoded;
    const user = await User.findOne({ where: { email } });
    return user;
};

const addPostCategory = async (categoryIds, postCreated) => {
    await Promise.all(categoryIds.map((category) => 
        PostCategory.create({
            postId: postCreated.id,
            categoryId: category,
    })));
};

const addPost = async (title, content, categoryIds, token) => {
    const postIds = await Promise.all(categoryIds.map((id) => Category.findByPk(id)));
    // console.log(postIds);
    if (postIds.includes(null)) {
        return { type: 400, message: { message: 'one or more "categoryIds" not found' } };
    }
    const user = await getUserByToken(token);
    const userId = user.id;
    // console.log(userId);
    const date = new Date();
    const postCreated = await BlogPost.create(
        { title, content, userId, updated: date, published: date },
);
    addPostCategory(categoryIds, postCreated);
    return { type: 201, message: postCreated };
};

const getPost = async () => {
    const result = await BlogPost.findAll(
        { include: [{ 
            model: User, as: 'user', attributes: { exclude: 'password' } }, { 
            model: Category, as: 'categories' }] },
);
    // console.log(result);
    return { type: 200, message: result };
};

module.exports = { addPost, getPost };