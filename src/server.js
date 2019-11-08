const express = require('express')
const cors = require('cors');
const path = require('path');
const router = require('./router');

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(3333);