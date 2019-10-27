const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../constant')

module.exports = () => {
    const access_Token = jwt.sign({}, JWT_SECRET.ACCESS, {expiresIn: '24h'});
    const refresh_Token = jwt.sign({}, JWT_SECRET.REFRESH, {expiresIn: '96h'});

    return {
        access_Token,
        refresh_Token,
    }

};