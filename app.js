const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');

const app = express();
const port = process.env.PORT || 3000;
const uri = process.env.ATLAS_URI;

// Connect to Database
mongoose
	.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
	.then(() => console.log('Connected to Database'))
	.catch(err => console.log(err));

// Middlewares 
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// Routes
app.use(require('./routes/index'));
app.use(require('./routes/book'));

// Server Configurations
app.listen(port, () => { console.log(`Server listening at http://localhost:${port}`) });