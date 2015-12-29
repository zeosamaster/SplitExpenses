var UserHandler = require('./users'),
	GroupHandler = require('./groups'),
	ExpenseHandler = require('./expenses'),
	PaymentHandler = require('./payments'),
	ErrorHandler = require('./error').errorHandler;

module.exports = function(app, db) {
	app.all('*', function(req, res, next) {

		console.log("Received request for:", req.url);

		res.header("Access-Control-Allow-Origin", "*");
		res.header('Access-Control-Allow-Methods', 'OPTIONS,GET,POST,PUT,DELETE');
		res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
		res.header("Access-Control-Expose-Headers", "Success, Error");
		if ('OPTIONS' == req.method) {
			return res.sendStatus(200);
		}
		next();
	});

    UserHandler(app, db);
    GroupHandler(app, db);
    ExpenseHandler(app, db);
    PaymentHandler(app, db);
}
