var express = require('express');
var router = express.Router();
var users = require('../controllers/users');

/* GET users listing. */
router.get('/users', users.list);
router.get('/user/:userId', users.get);
router.post('/user/create', users.create);
router.post('/user/edit/:userId', users.edit);

module.exports = router;
