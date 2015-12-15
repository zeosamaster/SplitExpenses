'use strict';

module.exports = function (mongoose) {
	var Schema = mongoose.Schema;
	mongoose.model('Group', new Schema({
		id: Schema.Types.ObjectId
	}));
};
