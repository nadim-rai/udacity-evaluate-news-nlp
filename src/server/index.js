const meaningCloud = "https://api.meaningcloud.com/sentiment-2.1";

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

app.post('/', async (req, res) => {

    const {input } = req.body;
    const URL = `${meaningCloud }?key=${API_KEY}&url=${input}&lang=en`
    try {
        const data = await axios(URL)
        console.log("api-data",data.data)
        res.json({
            score_tag: data.data.score_tag,
            agreement: data.data.agreement,
            subjectivity: data.data.subjectivity,
            confidence: data.data.confidence,
            irony: data.data.irony
        })
        return data
    }
  
    catch (error) {
        console.log(error.message)
        res.json({
            status: 'error',
            message: 'Error: failed to fetch data'
        })
    }
  });
  

// designates what port the app will listen to for incoming requests
app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})
