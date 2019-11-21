const app_secret = process.env.APP_SECRET;
const jwt = require('jsonwebtoken');
const models = require('./../models');

module.exports = async (req, res, next) => {

    let token = req.headers['x-access-token'] || req.headers['authorization'];

    if (token !== undefined) {
        if (token.startsWith('Bearer ')) {
            // Remove Bearer from string
            token = token.slice(7, token.length);
        }

        return jwt.verify(token, app_secret, (err, decoded) => {
            if (!err) {
                const user = models.loginToken.findOne({ where: { userId: decoded.id, token: decoded.token } })

                if (user) {
                    req.userData = decoded;
                    return next();
                } else {
                    return res.status(200).json({ status: 'auth', message: 'Authentication failed', body: [] });
                }
            } else {
                return res.status(200).json({ status: 'auth', message: 'Authentication failed', body: [] });
            }
        });
    }

    return res.status(200).json({ status: 'auth', message: 'Authentication failed', body: [] });


}
