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
		default: ['60351384ca231a46a1c70368']
	},
	date: {
		type: Date,
		default: Date.now
	}
});

const User = mongoose.model('user', UserSchema);

module.exports = User;