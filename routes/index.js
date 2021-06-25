const router = require("express").Router();
const Book = require("../models/Book")

router.get("/", async (req, res) => {
	const allBooks = await Book.find();
	res.render("index", { books: allBooks });
})

module.exports = router;