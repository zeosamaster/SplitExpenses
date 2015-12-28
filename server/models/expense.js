'use strict';

var mongoose = require('mongoose');

module.exports = mongoose.model('Expense', new mongoose.Schema({
	name: {
		type: String,
		unique: false
	},
}, {
	collection: 'expenses',
	timestamps: {
		createdAt: 'created_at'
	}
}));
