const { check } = require('express-validator');

module.exports = [
    check('email', 'Email is invalid').exists().bail().isEmail().bail().not().isEmpty()
]