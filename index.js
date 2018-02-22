const express = require('express');
const app = express();
const cors = require('cors');
const axios = require('axios');
const config = require('./config');
const bodyParser = require('body-parser');
const NodeGeocoder = require('node-geocoder');
const port = config.port;

app.use(express.json());
app.use(cors());
app.use(bodyParser());
app.use(express.static(__dirname + '/public'))


app.listen(port, () => {
  console.log(`listening on ${port}`);
})
