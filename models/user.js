const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	files_created: {
		type: Array,
		default: []
	},
	date: {
		type: Date,
		default: Date.now
	}
});

const User = mongoose.model('user', UserSchema);

module.exports = User;