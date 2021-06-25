const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
	book: {
		type: String,
		required: true
	},
});

module.exports = new mongoose.model('Book', BookSchema);