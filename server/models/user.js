'use strict';

module.exports = function (mongoose) {
	var Schema = mongoose.Schema;
	mongoose.model('User', new Schema({
		id: Schema.Types.ObjectId
	}));
};
