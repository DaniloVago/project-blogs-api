const { decodeToken } = require('../utils/JWT');

const validateJWT = async (req, res, next) => {
    const token = req.header('Authorization');
    // console.log(token);
    if (!token) {
        return res.status(401).json({ message: 'Token not found' });
    }
    try {
        await decodeToken(token);
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Expired or invalid token' });
    }
};

module.exports = { validateJWT };