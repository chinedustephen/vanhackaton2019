const { check } = require('express-validator');

module.exports = [
    check('class_id', 'Invalid request').exists().bail().isInt().bail().not().isEmpty()
]