var express = require('express');
var router = express.Router();
var payments = require('../controllers/payments');

/* GET users listing. */
router.get('/payments', payments.list);
router.get('/payment/:paymentId', payments.get);
router.post('/payment/create', payments.create);
router.post('/payment/edit/:paymentId', payments.edit);

module.exports = router;
