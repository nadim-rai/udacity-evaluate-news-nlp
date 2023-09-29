var path = require('path');
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const dotenv = require("dotenv");

const app = express();
app.use(cors());

app.use(express.static('dist'));
app.use(express.json());
dotenv.config();

const API_KEY = process.env.API_KEY;

console.log(__dirname);

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})
