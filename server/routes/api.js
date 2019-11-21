const app = require("express");
const router = app.Router();
const auth = require('./../controllers/authentication');
const classes = require('./../controllers/class');

const authRequest = require('./../request/auth');
const loginRequest = require('./../request/login');
const createClassRequest = require('./../request/createClass');
const attendClassRequest = require('./../request/attendClass');



router.get("/", (req, res) => res.send("welcome to apis of vanhack premium class management"))
router.post("/login", loginRequest, auth.login);
router.get("/classes", authRequest, classes.classes)
router.post("/create-class", authRequest, createClassRequest, classes.createClass)
router.post("/attend-class", authRequest, attendClassRequest, classes.attendClass)


module.exports = router;