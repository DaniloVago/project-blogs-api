const postService = require('../services/postService');

const addPost = async (req, res) => {
    const { title, content, categoryIds } = req.body;
    const token = req.header('Authorization');
    // console.log(token);
    const result = await postService.addPost(title, content, categoryIds, token);
    // console.log(result);
    const { type, message } = result;
    return res.status(type).json(message);
};

const getPost = async (req, res) => {
    const result = await postService.getPost();
    // console.log(result);
    const { type, message } = result;
    return res.status(type).json(message);
};

module.exports = { addPost, getPost };