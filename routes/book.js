const router = require('express').Router();
const Book = require('../models/Book');

router
	.post('/add', (req, res) => {
		const { book } = req.body;
		const newBook = new Book({ book })
		newBook
			.save()
			.then(() => {
				res.redirect("/");
			})
			.catch(err => console.log(err));
	})
	.get("/delete/:_id", (req, res) => {
		const { _id } = req.params;
		Book
			.deleteOne({ _id })
			.then(() => {
				res.redirect("/")
			})
			.catch(err => console.log(err));
	})

module.exports = router;