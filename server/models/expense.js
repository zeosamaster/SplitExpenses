'use strict';

module.exports = function (mongoose) {
	var Schema = mongoose.Schema;
	mongoose.model('Expense', new Schema({
		id: Schema.Types.ObjectId
	}));
};
