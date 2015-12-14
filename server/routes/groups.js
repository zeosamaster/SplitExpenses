var express = require('express');
var router = express.Router();
var groups = require('../controllers/groups');

/* GET users listing. */
router.get('/groups', groups.list);
router.get('/group/:groupId', groups.get);
router.post('/group/create', groups.create);
router.post('/group/edit/:groupId', groups.edit);

module.exports = router;
