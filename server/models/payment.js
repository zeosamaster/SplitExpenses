'use strict';

var mongoose = require('mongoose');

module.exports = mongoose.model('Payment', new mongoose.Schema({
	name: {
		type: String,
		unique: false
	},
}, {
	collection: 'payments',
	timestamps: {
		createdAt: 'created_at'
	}
}));
