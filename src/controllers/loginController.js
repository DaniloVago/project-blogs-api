const loginService = require('../services/loginService');

const login = async (req, res) => {
    const { email, password } = req.body;
    const result = await loginService.login(email, password);
    // console.log(result);
    const { type, message, token } = result;
    return res.status(type).json({ message, token });
};

module.exports = { login };