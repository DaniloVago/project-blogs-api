const userService = require('../services/userService');

const addUser = async (req, res) => {
    const { displayName, email, password, image } = req.body;
    const result = await userService.addUser(displayName, email, password, image);
    // console.log(result);
    const { type, message, token } = result;
    return res.status(type).json({ message, token });
};

const allUsers = async (req, res) => {
    const result = await userService.allUsers();
    // console.log(result);
    const { type, message } = result;
    return res.status(type).json(message);
};

const userById = async (req, res) => {
    const { id } = req.params;
    const result = await userService.userById(id);
    const { type, message } = result;
    return res.status(type).json(message);    
};

module.exports = { addUser, allUsers, userById };