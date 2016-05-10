require('dotenv').config();

const Twitter = require('twitter');
const express = require('express');
const app = express();

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 5000;

const CONSUMERKEY = process.env.CONSUMERKEY;
const CONSUMERSECRET = process.env.CONSUMERSECRET;
const TOKENKEY = process.env.TOKENKEY;
const TOKENSECRET = process.env.TOKENSECRET;

const client = new Twitter({
  consumer_key: CONSUMERKEY,
  consumer_secret: CONSUMERSECRET,
  access_token_key: TOKENKEY,
  access_token_secret: TOKENSECRET,
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('*.json', (req, res) => {
  const { path, query } = req;
  client.get(path.replace('.json', ''), query, function(error, result){
    if (error) return res.send(error);
    res.send(result);
  });
});

app.use('/', express.static(__dirname + '/../dist'));

app.listen(PORT, function () {
  console.log(`Tweetstorm web service is listening on ${HOST}:${PORT}!`);
});
