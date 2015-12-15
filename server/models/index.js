var config = require('../config'),
	mongoose = require('mongoose');

var UserModel = require('./user'),
	GroupModel = require('./group'),
	ExpenseModel = require('./expense'),
	PaymentModel = require('./payment');

module.exports = function() {
	mongoose.connect(config.db_url);

    UserModel(mongoose);
    GroupModel(mongoose);
    ExpenseModel(mongoose);
    PaymentModel(mongoose);
}
