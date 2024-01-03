const { User } = require('../models');
const { createToken } = require('../utils/JWT');

const getByUserEmail = async (email) => {
    const findUser = await User.findOne({ where: { email } });
    return findUser;
};

const addUser = async (displayName, email, password, image) => {
    const findUser = await getByUserEmail(email);
    // console.log(user)
    if (findUser) {
        return { type: 409, message: 'User already registered' };
    }
    await User.create({ displayName, email, password, image });
    const token = createToken({ email });
    // console.log(token);
    return { type: 201, token };
};

const allUsers = async () => {
    const findAllUsers = await User.findAll({
        attributes: { exclude: ['password'] },
      });
    // console.log(findAllUsers);
    return { type: 200, message: findAllUsers };
};

const userById = async (id) => {
    const findById = await User.findOne({ 
        where: { id },
        attributes: { exclude: ['password'] },
    });
    if (!findById) {
        return { type: 404, message: { message: 'User does not exist' } }; 
    }
    return { type: 200, message: findById };
};

module.exports = { addUser, getByUserEmail, allUsers, userById };