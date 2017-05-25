const request = require('request')
require('dotenv').load()
const BASE_URL = `https://translation.googleapis.com/language/translate/v2`


function getTranslations(req, res, next) {
  request({
    url: BASE_URL + process.env.GOOGLE_KEY,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({q: req.body.q, target:req.body.target})
  },
   function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body)
    }
  })
}

function getLanguages(req, res, next) {
  request({
    url: `${BASE_URL}/languages/${process.env.GOOGLE_KEY}`,
    // method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  },
   function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body)
    } else {
      console.log(error)
    }
  })
}

function getDefinitions(req, res, next) {
  console.log(req.body.data)
  request({
    url: `https://od-api.oxforddictionaries.com/api/v1/entries/es/${req.body.data}`,
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'app_id': `${process.env.OED_APP_ID}`,
      'app_key': `${process.env.OED_APP_KEY}`
    }
  },
   function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body)
    }
  })
}

module.exports = {
  getLanguages: getLanguages,
  getTranslations: getTranslations,
  getDefinitions: getDefinitions
};
