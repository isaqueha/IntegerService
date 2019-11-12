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

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3333;
}
app.listen(port);

// TODO refactor UI Code

// TODO JSON API spec