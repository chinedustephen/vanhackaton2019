'use strict';

const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const { validationResult } = require('express-validator');
const models = require('./../models');

exports.login = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(200).json({ status: 'failed', message: 'Login failed', body: errors.array() });
    }

    const email = req.body.email;

    const user = await models.User.findOne({ where: { email: email } });
    if (user) {
        let login_token = crypto.randomBytes(10).toString('hex');
        const token = jwt.sign({ ...user.dataValues, token: login_token }, process.env.APP_SECRET);

        models.loginToken.create({ userId: user.id, token: login_token });

        return res.status(200).json({ status: 'success', message: 'User login successful', body: { token: token, userRole: user.dataValues.role } });
    }

    return res.status(200).json({ status: 'failed', message: 'User login failed', body: [] });

}