var express = require('express');
var router = express.Router();
var expenses = require('../controllers/expenses');

/* GET users listing. */
router.get('/expenses', expenses.list);
router.get('/expense/:expenseId', expenses.get);
router.post('/expense/create', expenses.create);
router.post('/expense/edit/:expenseId', expenses.edit);

module.exports = router;
