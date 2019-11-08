const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./router');

mongoose.connect('mongodb+srv://famTree:famTree@famtree-y6fg2.mongodb.net/famTree?retryWrites=true&w=majority', {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

var app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(3333);

// Update Readme
	// Installation
	// Dependencies
	// Usage
	// Limitations

// Send code via Github

// JSON API spec

// TODO Create UI
	// Account creation
	// Integer monitoring
	// Next Button
	// Change current Button
	// Save API_KEY in cookies

// TODO Allow sign up using OAuth
	// GitHub or Google

// Deploy API
	// Link in README
	// SCP? GCP? HERUGO?