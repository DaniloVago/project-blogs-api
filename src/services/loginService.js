const { User } = require('../models');
const { createToken } = require('../utils/JWT');

const login = async (email, password) => {
    const user = await User.findOne({ where: { email, password } });
    // console.log(user)
    if (user === null || user.password !== password) {
        return { type: 400, message: 'Invalid fields' };
    }
    const token = createToken({ email });
    // console.log(token);
    return { type: 200, token };
};

module.exports = { login };