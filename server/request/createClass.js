const { check } = require('express-validator');

module.exports = [
    check('title', 'invalid title').exists().bail().isString().not().bail().isEmpty(),
    check('description', 'invalid description').exists().bail().isString().not().bail().isEmpty(),
    check('prepkit', 'invalid prep link').exists().bail().isURL().bail().not().isEmpty(),
    check('classDate', 'invalid duration').exists().bail().not().isEmpty()
]