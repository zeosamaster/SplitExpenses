'use strict';

module.exports = function (mongoose) {
	var Schema = mongoose.Schema;
	mongoose.model('Payment', new Schema({
		id: Schema.Types.ObjectId
	}));
};
